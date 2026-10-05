// Raio-X de Dados: regras do servidor (validação, gravação, conclusão e consulta do resultado).
// Não depende de onde roda: o armazenamento é injetado (`store`). A Edge Function usa o Supabase;
// os testes e o servidor local usam um armazenamento em memória.
//
// Rotas (relativas à base da função):
//   POST salvar      grava respostas parciais (autosave a cada resposta)
//   POST enviar      conclui: valida, calcula, grava e devolve o token do resultado
//   GET  resultado   ?t=<token>: devolve o resultado (sem categoria nem prioridade)

import { CHAVES_RESPOSTA, CONTATO, MAX_TEXTO, QUESTOES, VERSAO } from './questionario.mjs';
import { CTA_POR_CATEGORIA, calcular, categoria, prioridade } from './pontuacao.mjs';

export const VALIDADE_TOKEN_DIAS = 180;
export const CONSENTIMENTO_VERSAO = 'v1-2026-10';

const EMAILS_GRATUITOS = new Set([
  'gmail.com', 'googlemail.com', 'hotmail.com', 'hotmail.com.br', 'outlook.com', 'outlook.com.br', 'live.com',
  'msn.com', 'yahoo.com', 'yahoo.com.br', 'icloud.com', 'me.com', 'uol.com.br', 'bol.com.br', 'terra.com.br',
  'ig.com.br', 'protonmail.com', 'proton.me', 'aol.com', 'gmx.com', 'zoho.com',
]);

const SESSION_RE = /^[A-Za-z0-9_-]{16,64}$/;
const TOKEN_RE = /^[A-Za-z0-9_-]{32,64}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export class ErroValidacao extends Error {}

// ---------- Validação ----------

const texto = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

// Mantém só chaves e códigos conhecidos. `completo` exige todas as respostas obrigatórias.
export function limparRespostas(entrada, { completo }) {
  const r = {};
  const e = entrada && typeof entrada === 'object' ? entrada : {};
  for (const q of QUESTOES) {
    if (q.tipo === 'escada') {
      for (const id of q.linhas) if (q.opcoes.includes(e[id])) r[id] = e[id];
    } else if (q.tipo === 'multipla') {
      if (Array.isArray(e[q.id])) {
        const v = [...new Set(e[q.id].filter((x) => q.opcoes.includes(x)))];
        if (v.length > q.max) throw new ErroValidacao(`${q.id}: no máximo ${q.max} opções`);
        r[q.id] = v;
      }
    } else if (q.opcoes.includes(e[q.id])) {
      r[q.id] = e[q.id];
    }
    if (q.aberta) {
      const t = texto(e[q.aberta.id], MAX_TEXTO[q.aberta.id]);
      if (t && (!q.aberta.quando || r[q.id] === q.aberta.quando)) r[q.aberta.id] = t;
    }
  }
  if (completo) {
    for (const q of QUESTOES) {
      if (q.tipo === 'escada') {
        for (const id of q.linhas) if (!(id in r)) throw new ErroValidacao(`falta ${id}`);
      } else if (q.tipo === 'multipla') {
        if (!(q.id in r)) r[q.id] = [];
      } else if (!(q.id in r)) {
        throw new ErroValidacao(`falta ${q.id}`);
      }
    }
  }
  return r;
}

export function cnpjValido(v) {
  const d = String(v).replace(/\D/g, '');
  if (d.length !== 14 || /^(\d)\1+$/.test(d)) return false;
  const dv = (base) => {
    let soma = 0;
    let peso = base.length - 7;
    for (const n of base) {
      soma += Number(n) * peso--;
      if (peso < 2) peso = 9;
    }
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };
  const d1 = dv(d.slice(0, 12));
  const d2 = dv(d.slice(0, 12) + d1);
  return d.endsWith(`${d1}${d2}`);
}

export function limparContato(entrada) {
  const e = entrada && typeof entrada === 'object' ? entrada : {};
  const c = {};
  for (const k of [...CONTATO.obrigatorios, ...CONTATO.opcionais]) {
    const t = texto(e[k], MAX_TEXTO[k]);
    if (t) c[k] = t;
  }
  for (const k of CONTATO.obrigatorios) if (!c[k]) throw new ErroValidacao(`falta ${k}`);
  c.email = c.email.toLowerCase();
  if (!EMAIL_RE.test(c.email)) throw new ErroValidacao('e-mail inválido');
  if (c.cnpj) {
    if (!cnpjValido(c.cnpj)) throw new ErroValidacao('CNPJ inválido');
    c.cnpj = c.cnpj.replace(/\D/g, '');
  }
  return c;
}

export const emailGenerico = (email) => EMAILS_GRATUITOS.has(email.split('@')[1]);

const objetoSimples = (v, max = 12) =>
  v && typeof v === 'object' && !Array.isArray(v)
    ? Object.fromEntries(
        Object.entries(v)
          .slice(0, max)
          .filter(([, x]) => typeof x === 'string')
          .map(([k, x]) => [String(k).slice(0, 40), x.slice(0, 200)])
      )
    : {};

// ---------- O que a página de resultado recebe ----------

export function resultadoPublico(row) {
  const s = row.scores_json;
  const r = row.respostas_json;
  return {
    empresa: row.empresa,
    nome: row.nome,
    modelo: r.q1_modelo,
    scores: {
      integracao: s.integracao,
      confiabilidade: s.confiabilidade,
      analitica: s.analitica,
      geral: s.geral,
      nivel: s.nivel,
      degrau: s.degrau,
      quadrante_ia: s.quadrante_ia,
    },
    ia_dados_manual: row.ia_dados_manual,
    perguntas: r.q8_perguntas || [],
    cta: CTA_POR_CATEGORIA[row.categoria],
  };
}

// ---------- Serviço ----------

/**
 * @param {object} o
 * @param {object} o.store            { buscarSessao, salvarParcial, concluir, buscarToken, contarConcluidos }
 * @param {() => Date} [o.agora]
 * @param {() => string} [o.gerarToken]
 * @param {number} [o.limitePorHora]  envios concluídos por IP por hora
 * @param {(row) => Promise<void>} [o.notificar]  aviso interno quando alguém conclui (opcional)
 */
export function criarServico({ store, agora = () => new Date(), gerarToken, limitePorHora = 10, notificar }) {
  const novoToken =
    gerarToken ||
    (() => {
      const b = crypto.getRandomValues(new Uint8Array(32));
      return btoa(String.fromCharCode(...b)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    });

  async function salvar(body, ip) {
    if (!SESSION_RE.test(body.session_id || '')) throw new ErroValidacao('session_id inválido');
    const atual = await store.buscarSessao(body.session_id);
    if (atual?.status === 'completo') return { status: 200, body: { ok: true } };
    const respostas = limparRespostas(body.respostas, { completo: false });
    const ultima = CHAVES_RESPOSTA.includes(body.ultima_pergunta) || body.ultima_pergunta === 'contato' ? body.ultima_pergunta : null;
    await store.salvarParcial({
      session_id: body.session_id,
      questionnaire_version: VERSAO,
      status: 'parcial',
      ultima_pergunta: ultima,
      respostas_json: respostas,
      utm_json: objetoSimples(body.utm),
      referrer: texto(body.referrer, 500) || null,
      ip,
      atualizado_em: agora().toISOString(),
    });
    return { status: 200, body: { ok: true } };
  }

  async function enviar(body, ip) {
    // Honeypot: robôs preenchem o campo escondido. Responde como se desse certo, sem gravar.
    if (body.website) return { status: 200, body: { token: null } };
    if (!SESSION_RE.test(body.session_id || '')) throw new ErroValidacao('session_id inválido');
    if (body.consentimento?.diagnostico !== true) throw new ErroValidacao('consentimento obrigatório');

    const atual = await store.buscarSessao(body.session_id);
    if (atual?.status === 'completo') {
      return { status: 200, body: { token: atual.result_token, resultado: resultadoPublico(atual) } };
    }

    const desde = new Date(agora().getTime() - 3600_000).toISOString();
    if (ip && (await store.contarConcluidos(ip, desde)) >= limitePorHora) {
      return { status: 429, body: { erro: 'muitos envios; tente mais tarde' } };
    }

    const respostas = limparRespostas(body.respostas, { completo: true });
    const contato = limparContato(body.contato);
    const generico = emailGenerico(contato.email);
    const scores = calcular(respostas);
    const agoraIso = agora().toISOString();
    const expira = new Date(agora().getTime() + VALIDADE_TOKEN_DIAS * 86400_000).toISOString();

    const row = {
      session_id: body.session_id,
      questionnaire_version: VERSAO,
      status: 'completo',
      ultima_pergunta: 'contato',
      respostas_json: respostas,
      scores_json: {
        integracao: scores.integracao,
        confiabilidade: scores.confiabilidade,
        analitica: scores.analitica,
        geral: scores.geral,
        nivel: scores.nivel,
        degrau: scores.degrau,
        ia: scores.ia,
        quadrante_ia: scores.quadrante_ia,
      },
      ia_dados_manual: scores.ia_dados_manual,
      inconsistencia_escada: scores.inconsistencia_escada,
      categoria: categoria(respostas),
      prioridade: prioridade(respostas, { email_generico: generico }),
      ...contato,
      email_generico: generico,
      consent_json: {
        diagnostico: true,
        newsletter: body.consentimento?.newsletter === true,
        texto_versao: CONSENTIMENTO_VERSAO,
        aceito_em: agoraIso,
        ip,
      },
      utm_json: objetoSimples(body.utm),
      referrer: texto(body.referrer, 500) || null,
      ip,
      result_token: novoToken(),
      result_token_expira_em: expira,
      concluido_em: agoraIso,
      atualizado_em: agoraIso,
    };
    await store.concluir(row);
    if (notificar) await notificar(row).catch(() => {});
    return { status: 200, body: { token: row.result_token, resultado: resultadoPublico(row) } };
  }

  async function resultado(token) {
    if (!TOKEN_RE.test(token || '')) return { status: 404, body: { erro: 'não encontrado' } };
    const row = await store.buscarToken(token);
    if (!row || row.status !== 'completo') return { status: 404, body: { erro: 'não encontrado' } };
    if (new Date(row.result_token_expira_em) < agora()) return { status: 410, body: { erro: 'resultado expirado' } };
    return { status: 200, body: { resultado: resultadoPublico(row) } };
  }

  /** Recebe { method, rota, query, body, ip } e devolve { status, body }. */
  return async function tratar({ method, rota, query = {}, body = {}, ip = null }) {
    try {
      if (method === 'POST' && rota === 'salvar') return await salvar(body, ip);
      if (method === 'POST' && rota === 'enviar') return await enviar(body, ip);
      if (method === 'GET' && rota === 'resultado') return await resultado(query.t);
      return { status: 404, body: { erro: 'rota não encontrada' } };
    } catch (e) {
      if (e instanceof ErroValidacao) return { status: 400, body: { erro: e.message } };
      throw e;
    }
  };
}

// Armazenamento em memória, para testes e para o servidor local.
export function storeMemoria() {
  const porSessao = new Map();
  return {
    linhas: porSessao,
    async buscarSessao(id) {
      return porSessao.get(id) || null;
    },
    async salvarParcial(row) {
      porSessao.set(row.session_id, { ...(porSessao.get(row.session_id) || {}), ...row });
    },
    async concluir(row) {
      porSessao.set(row.session_id, { ...(porSessao.get(row.session_id) || {}), ...row });
    },
    async buscarToken(token) {
      return [...porSessao.values()].find((r) => r.result_token === token) || null;
    },
    async contarConcluidos(ip, desde) {
      return [...porSessao.values()].filter((r) => r.ip === ip && r.status === 'completo' && r.concluido_em >= desde).length;
    },
  };
}
