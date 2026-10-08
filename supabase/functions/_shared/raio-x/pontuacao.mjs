// Raio-X de Dados: score de maturidade, degrau analítico, prontidão para IA e qualificação.
// Fonte: oika-data-assessment-online.md (v0.4), seções 5 e 6.
//
// Tudo aqui é determinístico e roda só no servidor. O LLM nunca calcula score, e a
// qualificação (categoria e prioridade) nunca vai para o navegador.

import { PONTOS } from './questionario.mjs';

const DEGRAUS = ['antes_descritivo', 'descritivo', 'diagnostico', 'preditivo'];

// ---------- 5.1 Dimensões e score geral (v3: quatro dimensões) ----------

export function dimensoes(r) {
  const q5 = PONTOS.q5_integracao[r.q5_integracao];
  const q6 = PONTOS.q6_consistencia[r.q6_consistencia];
  const q12 = PONTOS.q12_cultura[r.q12_cultura];
  const escada = [r.q7a_descritivo, r.q7b_diagnostico, r.q7c_preditivo].map((v) => PONTOS.q7_analitica[v]);
  const integracao = Math.round(q5 * 33.3);
  const confiabilidade = Math.round(q6 * 33.3);
  const cultura = Math.round(q12 * 33.3);
  const analitica = Math.round(((escada[0] + escada[1] + escada[2]) / 6) * 100);
  // v3: a cultura de dados (rotina de análise) entra como quarta dimensão, com o mesmo peso.
  const geral = Math.round((integracao + confiabilidade + cultura + analitica) / 4);
  return { integracao, confiabilidade, cultura, analitica, geral };
}

// ---------- 5.3 Nível ----------

export function nivel(geral) {
  if (geral <= 25) return 1;
  if (geral <= 50) return 2;
  if (geral <= 75) return 3;
  return 4;
}

// ---------- 5.2 Degrau analítico ----------
// O degrau é o mais alto respondido com "Sim", desde que todos os anteriores tenham pelo menos
// "Em parte". Se um degrau "Sim" tem um anterior "Não", a escada é inconsistente: exibe-se o
// degrau logo abaixo do primeiro que não é "Sim" (o mais baixo não resolvido).

export function degrau(r) {
  const v = [r.q7a_descritivo, r.q7b_diagnostico, r.q7c_preditivo];
  const inconsistencia = v.some((x, i) => x === 'sim' && v.slice(0, i).includes('nao'));
  if (inconsistencia) {
    const primeiroNaoSim = v.findIndex((x) => x !== 'sim');
    return { degrau: DEGRAUS[primeiroNaoSim], inconsistencia_escada: true };
  }
  let atual = 0;
  v.forEach((x, i) => {
    if (x === 'sim') atual = i + 1;
  });
  return { degrau: DEGRAUS[atual], inconsistencia_escada: false };
}

// ---------- 5.2b Prontidão para IA ----------

export function prontidaoIA(r) {
  const base = (PONTOS.q5_integracao[r.q5_integracao] + PONTOS.q6_consistencia[r.q6_consistencia]) / 2;
  const ia = PONTOS.q11_ia[r.q11_ia];
  const solida = base >= 1.5;
  const comContexto = ia >= 2;
  const quadrante_ia = comContexto
    ? solida ? 'ia_com_contexto' : 'ia_a_frente'
    : solida ? 'base_pronta' : 'primeiro_base';
  return { ia, quadrante_ia, ia_dados_manual: r.q11_ia === 'dados_manual' };
}

// Tudo o que o respondente pode ver.
export function calcular(r) {
  const d = dimensoes(r);
  return { ...d, nivel: nivel(d.geral), ...degrau(r), ...prontidaoIA(r) };
}

// ---------- 6. Qualificação (invisível para o respondente) ----------

const em = (v, lista) => lista.includes(v);

function categoriaBase(r) {
  const m = r.q1_modelo;
  const f = r.q2_faturamento;
  if (f === 'nao_informar') return 'revisao'; // 1
  if (m === 'outro') return em(f, ['50_100', '100_300', '300mais']) ? 'revisao' : 'nutricao'; // 2, 3
  if (m === 'distribuicao') {
    if (em(f, ['50_100', '100_300'])) return 'qualificado'; // 4
    if (em(f, ['20_50', '300mais'])) return 'revisao'; // 5
    return 'nutricao'; // 6
  }
  if (m === 'imobiliario') {
    if (f === '20_50') return 'qualificado'; // 7
    if (em(f, ['10_20', '50_100', '100_300', '300mais'])) return 'revisao'; // 8
    return 'nutricao'; // 9
  }
  if (em(m, ['industria', 'varejo']) && em(f, ['50_100', '100_300', '300mais'])) return 'revisao'; // 10
  if (em(m, ['servicos_b2b', 'saas']) && em(f, ['20_50', '50_100', '100_300', '300mais'])) return 'revisao'; // 11
  return 'nutricao'; // 12
}

export function categoria(r) {
  const base = categoriaBase(r);
  // Modificador "time de dados": empresa com time próprio não é o ICP.
  if (r.q10_time_dados === 'time' && base === 'qualificado') return 'revisao';
  return base;
}

// 6.3 Prioridade dentro de "qualificado" e "revisão" (calculada para todos).
export function prioridade(r, { email_generico = false } = {}) {
  const momento = { urgente: 3, '6_meses': 2, explorando: 0 }[r.q9_momento] ?? 0;
  const cargo = em(r.q4_cargo, ['socio_ceo', 'comercial']) ? 2 : r.q4_cargo === 'financeiro' ? 1 : 0;
  return momento + cargo + (r.q10_time_dados === 'uma_pessoa' ? 1 : 0) - (email_generico ? 1 : 0);
}

// O que a página de resultado mostra como próximo passo. Nunca expõe a categoria.
export const CTA_POR_CATEGORIA = { qualificado: 'agendar', revisao: 'contato', nutricao: 'explorar' };
