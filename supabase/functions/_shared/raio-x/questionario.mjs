// Raio-X de Dados: definição do questionário (IDs, tipos, códigos das opções e pontos).
// Fonte: oika-data-assessment-online.md (v0.4), seção 4.
//
// Regra: IDs e códigos são estáveis. Nunca reutilizar nem renumerar; mudança de opção,
// código ou ponto gera nova VERSAO. Os textos ficam no site (src/content/pt.mjs).
// Este arquivo é usado pelo servidor (Edge Function), pelos testes e pelo build do site.

export const VERSAO = 'v2';

// Ordem de exibição (seção 3.1). O ID de Q10 e Q11 não segue a ordem de propósito.
export const QUESTOES = [
  { id: 'q1_modelo', tipo: 'unica', parte: 1, opcoes: ['industria', 'distribuicao', 'varejo', 'servicos_b2b', 'saas', 'imobiliario', 'outro'], aberta: { quando: 'outro', id: 'q1_outro' } },
  { id: 'q2_faturamento', tipo: 'unica', parte: 1, opcoes: ['ate10', '10_20', '20_50', '50_100', '100_300', '300mais', 'nao_informar'] },
  { id: 'q3_pessoas', tipo: 'unica', parte: 1, opcoes: ['ate20', '21_50', '51_100', '101_250', '251_500', '500mais'] },
  { id: 'q4_cargo', tipo: 'unica', parte: 1, opcoes: ['socio_ceo', 'comercial', 'financeiro', 'operacoes', 'ti', 'outro'] },
  { id: 'q10_time_dados', tipo: 'unica', parte: 1, opcoes: ['nao', 'uma_pessoa', 'time'] },
  { id: 'q5_integracao', tipo: 'unica', parte: 2, opcoes: ['nao', 'manual', 'parcial', 'sim'] },
  { id: 'q6_consistencia', tipo: 'unica', parte: 2, opcoes: ['quase_nunca', 'as_vezes', 'quase_sempre', 'sempre'] },
  { id: 'q7_analitica', tipo: 'escada', parte: 2, linhas: ['q7a_descritivo', 'q7b_diagnostico', 'q7c_preditivo'], opcoes: ['nao', 'em_parte', 'sim'] },
  { id: 'q11_ia', tipo: 'unica', parte: 2, opcoes: ['nao', 'individual', 'dados_manual', 'conectada'] },
  { id: 'q8_perguntas', tipo: 'multipla', parte: 2, max: 3, opcoes: ['resultado_variou', 'cliente_lucro', 'produto_retorno', 'desempenho', 'previsao', 'perda', 'custos'], aberta: { id: 'q8_outra' } },
  { id: 'q9_momento', tipo: 'unica', parte: 3, opcoes: ['explorando', '6_meses', 'urgente'] },
];

// Pontos por opção, só nas perguntas que pontuam.
export const PONTOS = {
  q5_integracao: { nao: 0, manual: 1, parcial: 2, sim: 3 },
  q6_consistencia: { quase_nunca: 0, as_vezes: 1, quase_sempre: 2, sempre: 3 },
  q7_analitica: { nao: 0, em_parte: 1, sim: 2 },
  q11_ia: { nao: 0, individual: 1, dados_manual: 2, conectada: 3 },
};

// Campos de contato (seção 4, "Contato e consentimento").
export const CONTATO = {
  obrigatorios: ['nome', 'email', 'empresa'],
  opcionais: ['cnpj', 'whatsapp'],
};

// Tamanho máximo dos campos de texto livre.
export const MAX_TEXTO = { q1_outro: 120, q8_outra: 400, nome: 120, email: 160, empresa: 160, cnpj: 20, whatsapp: 30 };

// Lista de chaves de resposta válidas, na ordem do questionário.
export const CHAVES_RESPOSTA = QUESTOES.flatMap((q) => [
  ...(q.tipo === 'escada' ? q.linhas : [q.id]),
  ...(q.aberta ? [q.aberta.id] : []),
]);
