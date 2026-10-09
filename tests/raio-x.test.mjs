// Testes do Raio-X de Dados. Rodar: node --test tests/
// Cobre os casos obrigatórios da seção 10.1 da especificação e as regras do serviço.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calcular, categoria, prioridade } from '../supabase/functions/_shared/raio-x/pontuacao.mjs';
import { cnpjValido, criarServico, storeMemoria } from '../supabase/functions/_shared/raio-x/servico.mjs';

// Respostas completas de referência; cada caso sobrescreve o que importa.
const base = {
  q1_modelo: 'distribuicao',
  q2_faturamento: '100_300',
  q3_pessoas: '101_250',
  q4_cargo: 'socio_ceo',
  q10_time_dados: 'nao',
  q5_integracao: 'parcial',
  q6_consistencia: 'as_vezes',
  q12_cultura: 'mensal',
  q7a_descritivo: 'sim',
  q7b_diagnostico: 'em_parte',
  q7c_preditivo: 'nao',
  q11_ia: 'individual',
  q8_perguntas: ['cliente_lucro'],
  q9_momento: '6_meses',
};
const r = (o = {}) => ({ ...base, ...o });

// ---------- Categoria (10.1) ----------

const casosCategoria = [
  ['Distribuidora ideal', { q1_modelo: 'distribuicao', q2_faturamento: '100_300' }, 'qualificado'],
  ['Distribuidora pequena', { q1_modelo: 'distribuicao', q2_faturamento: '10_20' }, 'nutricao'],
  ['Distribuidora limítrofe', { q1_modelo: 'distribuicao', q2_faturamento: '20_50' }, 'revisao'],
  ['Distribuidora com time de dados', { q1_modelo: 'distribuicao', q2_faturamento: '100_300', q10_time_dados: 'time' }, 'revisao'],
  ['Distribuidora pequena com time', { q1_modelo: 'distribuicao', q2_faturamento: '10_20', q10_time_dados: 'time' }, 'nutricao'],
  ['Imobiliária com uma pessoa de dados', { q1_modelo: 'imobiliario', q2_faturamento: '20_50', q10_time_dados: 'uma_pessoa' }, 'qualificado'],
  ['Imobiliária ideal', { q1_modelo: 'imobiliario', q2_faturamento: '20_50' }, 'qualificado'],
  ['Imobiliária limítrofe', { q1_modelo: 'imobiliario', q2_faturamento: '10_20' }, 'revisao'],
  ['Imobiliária pequena', { q1_modelo: 'imobiliario', q2_faturamento: 'ate10' }, 'nutricao'],
  ['SaaS com porte', { q1_modelo: 'saas', q2_faturamento: '20_50' }, 'revisao'],
  ['Varejo pequeno', { q1_modelo: 'varejo', q2_faturamento: '20_50' }, 'nutricao'],
  ['Outro segmento grande', { q1_modelo: 'outro', q2_faturamento: '100_300' }, 'revisao'],
  ['Faturamento omitido', { q2_faturamento: 'nao_informar' }, 'revisao'],
];
for (const [nome, entrada, esperado] of casosCategoria) {
  test(`categoria: ${nome}`, () => assert.equal(categoria(r(entrada)), esperado));
}

test('prioridade: imobiliária com uma pessoa de dados soma 1', () => {
  const sem = prioridade(r({ q1_modelo: 'imobiliario', q2_faturamento: '20_50', q10_time_dados: 'nao' }));
  const com = prioridade(r({ q1_modelo: 'imobiliario', q2_faturamento: '20_50', q10_time_dados: 'uma_pessoa' }));
  assert.equal(com - sem, 1);
});

test('prioridade: momento + cargo + time − e-mail genérico', () => {
  assert.equal(prioridade(r({ q9_momento: 'urgente', q4_cargo: 'socio_ceo', q10_time_dados: 'uma_pessoa' })), 6);
  assert.equal(prioridade(r({ q9_momento: 'explorando', q4_cargo: 'financeiro', q10_time_dados: 'nao' }), { email_generico: true }), 0);
  assert.equal(prioridade(r({ q9_momento: '6_meses', q4_cargo: 'ti', q10_time_dados: 'time' })), 2);
});

// ---------- Escada analítica (10.1) ----------

const escada = (a, b, c) => ({ q7a_descritivo: a, q7b_diagnostico: b, q7c_preditivo: c });

test('escada completa: degrau preditivo, analítica 100', () => {
  const s = calcular(r(escada('sim', 'sim', 'sim')));
  assert.equal(s.degrau, 'preditivo');
  assert.equal(s.analitica, 100);
  assert.equal(s.inconsistencia_escada, false);
});

test('escada vazia: antes do descritivo, analítica 0', () => {
  const s = calcular(r(escada('nao', 'nao', 'nao')));
  assert.equal(s.degrau, 'antes_descritivo');
  assert.equal(s.analitica, 0);
  assert.equal(s.inconsistencia_escada, false);
});

test('escada inconsistente: não, em parte, sim', () => {
  const s = calcular(r(escada('nao', 'em_parte', 'sim')));
  assert.equal(s.degrau, 'antes_descritivo');
  assert.equal(s.inconsistencia_escada, true);
});

test('escada: descritivo e diagnóstico', () => {
  assert.equal(calcular(r(escada('sim', 'em_parte', 'nao'))).degrau, 'descritivo');
  assert.equal(calcular(r(escada('sim', 'sim', 'em_parte'))).degrau, 'diagnostico');
  assert.equal(calcular(r(escada('sim', 'em_parte', 'sim'))).degrau, 'preditivo');
});

test('escada: sim, não, sim é inconsistente e fica no descritivo', () => {
  const s = calcular(r(escada('sim', 'nao', 'sim')));
  assert.equal(s.degrau, 'descritivo');
  assert.equal(s.inconsistencia_escada, true);
});

// ---------- Score geral (10.1) ----------

// Caso da spec (Q5=2, Q6=1, Q7=(2,1,0)), agora com a cultura de dados (v3) como quarta dimensão.
test('score geral: Q5=2, Q6=1, Q12=2, Q7=(2,1,0)', () => {
  const s = calcular(r({ q5_integracao: 'parcial', q6_consistencia: 'as_vezes', q12_cultura: 'mensal', ...escada('sim', 'em_parte', 'nao') }));
  assert.deepEqual(
    { integracao: s.integracao, confiabilidade: s.confiabilidade, cultura: s.cultura, analitica: s.analitica, geral: s.geral, nivel: s.nivel },
    { integracao: 67, confiabilidade: 33, cultura: 67, analitica: 50, geral: 54, nivel: 3 }
  );
});

test('cultura de dados: pontos por frequência das reuniões', () => {
  const c = (v) => calcular(r({ q12_cultura: v })).cultura;
  assert.deepEqual([c('nao'), c('irregular'), c('mensal'), c('semanal')], [0, 33, 67, 100]);
});

test('níveis: limites das faixas', () => {
  const tudo = (q5, q6, q12, e) => calcular(r({ q5_integracao: q5, q6_consistencia: q6, q12_cultura: q12, ...e }));
  assert.equal(tudo('nao', 'quase_nunca', 'nao', escada('nao', 'nao', 'nao')).nivel, 1);
  assert.equal(tudo('sim', 'sempre', 'semanal', escada('sim', 'sim', 'sim')).nivel, 4);
  assert.equal(tudo('sim', 'sempre', 'semanal', escada('sim', 'sim', 'sim')).geral, 100);
});

// ---------- Prontidão para IA (10.1) ----------

test('IA à frente da base', () => {
  const sem = calcular(r({ q5_integracao: 'manual', q6_consistencia: 'as_vezes', q11_ia: 'nao' }));
  const s = calcular(r({ q5_integracao: 'manual', q6_consistencia: 'as_vezes', q11_ia: 'dados_manual' }));
  assert.equal(s.quadrante_ia, 'ia_a_frente');
  assert.equal(s.ia_dados_manual, true);
  assert.equal(s.geral, sem.geral, 'a IA não entra no score geral');
});

test('base pronta, IA parada', () => {
  assert.equal(calcular(r({ q5_integracao: 'sim', q6_consistencia: 'quase_sempre', q11_ia: 'individual' })).quadrante_ia, 'base_pronta');
});

test('IA com contexto', () => {
  assert.equal(calcular(r({ q5_integracao: 'parcial', q6_consistencia: 'quase_sempre', q11_ia: 'conectada' })).quadrante_ia, 'ia_com_contexto');
});

test('primeiro a base', () => {
  assert.equal(calcular(r({ q5_integracao: 'nao', q6_consistencia: 'as_vezes', q11_ia: 'nao' })).quadrante_ia, 'primeiro_base');
});

// ---------- CNPJ ----------

test('CNPJ: dígitos verificadores', () => {
  assert.equal(cnpjValido('11.222.333/0001-81'), true);
  assert.equal(cnpjValido('11222333000181'), true);
  assert.equal(cnpjValido('11.222.333/0001-82'), false);
  assert.equal(cnpjValido('00000000000000'), false);
  assert.equal(cnpjValido('123'), false);
});

// ---------- Serviço ----------

const SESSAO = 'sessao_de_teste_0001';
const contato = { nome: 'Ana', email: 'ana@distribuidora.com.br', empresa: 'Distribuidora X' };
const envio = (o = {}) => ({
  session_id: SESSAO,
  respostas: base,
  contato,
  consentimento: { diagnostico: true, newsletter: false },
  ...o,
});
const novo = (o = {}) => {
  const store = storeMemoria();
  return { store, tratar: criarServico({ store, ...o }) };
};

test('serviço: envio completo devolve token e resultado sem categoria', async () => {
  const { store, tratar } = novo();
  const res = await tratar({ method: 'POST', rota: 'enviar', body: envio(), ip: '1.1.1.1' });
  assert.equal(res.status, 200);
  assert.match(res.body.token, /^[A-Za-z0-9_-]{43}$/);
  assert.equal(res.body.resultado.cta, 'agendar');
  const texto = JSON.stringify(res.body);
  for (const proibido of ['qualificado', 'revisao', 'nutricao', 'prioridade', 'categoria']) {
    assert.ok(!texto.includes(proibido), `resposta não pode conter "${proibido}"`);
  }
  const row = store.linhas.get(SESSAO);
  assert.equal(row.categoria, 'qualificado');
  assert.equal(row.status, 'completo');
  assert.equal(row.consent_json.diagnostico, true);
  assert.equal(row.email_generico, false);

  const lido = await tratar({ method: 'GET', rota: 'resultado', query: { t: res.body.token } });
  assert.equal(lido.status, 200);
  assert.deepEqual(lido.body.resultado, res.body.resultado);
});

test('serviço: e-mail gratuito é recusado; corporativo é aceito', async () => {
  const { store, tratar } = novo();
  for (const email of ['Ana@Gmail.com', 'ana@hotmail.com', 'ana@outlook.com.br', 'ana@yahoo.com.br']) {
    const res = await tratar({ method: 'POST', rota: 'enviar', body: envio({ contato: { ...contato, email } }) });
    assert.equal(res.status, 400, email);
    assert.equal(res.body.erro, 'use um e-mail corporativo');
  }
  assert.equal(store.linhas.size, 0);
  const ok = await tratar({ method: 'POST', rota: 'enviar', body: envio({ contato: { ...contato, email: 'Ana@Distribuidora.com.br' } }) });
  assert.equal(ok.status, 200);
  assert.equal(store.linhas.get(SESSAO).email, 'ana@distribuidora.com.br');
  assert.equal(store.linhas.get(SESSAO).email_generico, false);
});

test('serviço: Q8 aceita as novas perguntas por área e falta de q12 dá 400', async () => {
  const { store, tratar } = novo();
  const { q12_cultura, ...semCultura } = base;
  assert.equal((await tratar({ method: 'POST', rota: 'enviar', body: envio({ respostas: semCultura }) })).status, 400);
  const res = await tratar({ method: 'POST', rota: 'enviar', body: envio({ respostas: { ...base, q8_perguntas: ['mkt_retorno', 'estoque_entrega', 'digital_funil'] } }) });
  assert.equal(res.status, 200);
  assert.deepEqual(res.body.resultado.perguntas, ['mkt_retorno', 'estoque_entrega', 'digital_funil']);
  assert.equal(typeof res.body.resultado.scores.cultura, 'number');
  assert.equal(store.linhas.get(SESSAO).questionnaire_version, 'v3');
});

test('serviço: sem consentimento, sem resposta obrigatória ou com CNPJ inválido dá 400', async () => {
  const { tratar } = novo();
  const sem = await tratar({ method: 'POST', rota: 'enviar', body: envio({ consentimento: { diagnostico: false } }) });
  assert.equal(sem.status, 400);
  const { q9_momento, ...incompleto } = base;
  const falta = await tratar({ method: 'POST', rota: 'enviar', body: envio({ respostas: incompleto }) });
  assert.equal(falta.status, 400);
  const cnpj = await tratar({ method: 'POST', rota: 'enviar', body: envio({ contato: { ...contato, cnpj: '11.222.333/0001-82' } }) });
  assert.equal(cnpj.status, 400);
  const muitas = await tratar({ method: 'POST', rota: 'enviar', body: envio({ respostas: { ...base, q8_perguntas: ['perda', 'custos', 'previsao', 'desempenho'] } }) });
  assert.equal(muitas.status, 400);
});

test('serviço: códigos desconhecidos são descartados', async () => {
  const { store, tratar } = novo();
  await tratar({ method: 'POST', rota: 'salvar', body: { session_id: SESSAO, respostas: { q1_modelo: 'hack', q2_faturamento: '20_50', extra: 'x' } } });
  assert.deepEqual(store.linhas.get(SESSAO).respostas_json, { q2_faturamento: '20_50' });
});

test('serviço: honeypot responde 200 e não grava', async () => {
  const { store, tratar } = novo();
  const res = await tratar({ method: 'POST', rota: 'enviar', body: envio({ website: 'spam' }) });
  assert.equal(res.status, 200);
  assert.equal(store.linhas.size, 0);
});

test('serviço: autosave não sobrescreve resposta concluída', async () => {
  const { store, tratar } = novo();
  await tratar({ method: 'POST', rota: 'salvar', body: { session_id: SESSAO, ultima_pergunta: 'q1_modelo', respostas: { q1_modelo: 'saas' } } });
  assert.equal(store.linhas.get(SESSAO).status, 'parcial');
  await tratar({ method: 'POST', rota: 'enviar', body: envio() });
  await tratar({ method: 'POST', rota: 'salvar', body: { session_id: SESSAO, respostas: { q1_modelo: 'saas' } } });
  assert.equal(store.linhas.get(SESSAO).status, 'completo');
  assert.equal(store.linhas.get(SESSAO).respostas_json.q1_modelo, 'distribuicao');
});

test('serviço: reenviar a mesma sessão devolve o mesmo token', async () => {
  const { tratar } = novo();
  const a = await tratar({ method: 'POST', rota: 'enviar', body: envio() });
  const b = await tratar({ method: 'POST', rota: 'enviar', body: envio() });
  assert.equal(a.body.token, b.body.token);
});

test('serviço: limite de envios por IP', async () => {
  const { tratar } = novo({ limitePorHora: 2 });
  for (let i = 0; i < 2; i++) {
    const ok = await tratar({ method: 'POST', rota: 'enviar', body: envio({ session_id: `sessao_de_teste_000${i}` }), ip: '2.2.2.2' });
    assert.equal(ok.status, 200);
  }
  const bloqueado = await tratar({ method: 'POST', rota: 'enviar', body: envio({ session_id: 'sessao_de_teste_0099' }), ip: '2.2.2.2' });
  assert.equal(bloqueado.status, 429);
});

test('serviço: token inválido, inexistente ou expirado', async () => {
  let agora = new Date('2026-10-05T12:00:00Z');
  const { tratar } = novo({ agora: () => agora });
  assert.equal((await tratar({ method: 'GET', rota: 'resultado', query: { t: 'curto' } })).status, 404);
  assert.equal((await tratar({ method: 'GET', rota: 'resultado', query: { t: 'x'.repeat(43) } })).status, 404);
  const { body } = await tratar({ method: 'POST', rota: 'enviar', body: envio() });
  agora = new Date('2027-04-04T12:00:00Z'); // 181 dias depois
  assert.equal((await tratar({ method: 'GET', rota: 'resultado', query: { t: body.token } })).status, 410);
});

test('serviço: grava o idioma da resposta (pt por padrão)', async () => {
  const a = novo();
  await a.tratar({ method: 'POST', rota: 'enviar', body: envio({ idioma: 'en' }) });
  assert.equal(a.store.linhas.get(SESSAO).idioma, 'en');
  const b = novo();
  await b.tratar({ method: 'POST', rota: 'enviar', body: envio({ idioma: 'xx' }) });
  assert.equal(b.store.linhas.get(SESSAO).idioma, 'pt');
});
