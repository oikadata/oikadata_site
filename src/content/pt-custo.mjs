// Textos da página de custo: contratar um profissional de dados CLT x Oika.
// Valores de mercado são estimativas; ajuste aqui quando o material comercial mudar.

export default {
  custo: {
    meta: {
      title: 'Quanto custa um time de dados? CLT x Oika | Oika Data',
      description: 'Compare o custo mensal e o tempo até o primeiro resultado entre contratar um profissional de dados CLT e trabalhar com o time da Oika.',
    },
    hero: {
      label: 'CLT x Oika',
      title: 'Quanto custa ter um time de dados?',
      subtitle: 'Compare o custo mensal e o tempo até o primeiro resultado entre contratar um profissional de dados CLT e trabalhar com o time sênior da Oika.',
    },
    totals: [
      { name: 'Contratar CLT', prefix: '≈ ', value: 'R$ 30.600', per: '/mês', what: 'Uma pessoa sênior, com uma especialidade, e a plataforma ainda à parte.' },
      { name: 'Oika', prefix: 'a partir de ', value: 'R$ 6.000', per: '/mês', what: 'Time sênior de dados, com engenharia, modelagem, BI e IA, e primeiro resultado em até 30 dias.' },
    ],
    table: {
      columns: ['Contratar CLT', 'Oika'],
      rows: [
        { label: 'Salário', values: ['≈ R$ 18.000 para um profissional de dados sênior', 'Não se aplica: você paga só o plano'] },
        { label: 'Encargos e benefícios', values: ['≈ R$ 12.600 (cerca de 70% sobre o salário: INSS, FGTS, férias, 13º e benefícios)', 'Sem encargos trabalhistas'] },
        { label: 'Total por mês', values: ['≈ R$ 30.600', 'A partir de R$ 6.000'] },
        { label: 'Quem você tem', values: ['Uma pessoa, uma especialidade. Sozinha, numa empresa sem cultura de dados, acaba virando fábrica de relatório', 'Time sênior: engenharia, modelagem, BI e IA'] },
        { label: 'Tempo para começar', values: ['1 a 2 meses para contratar, mais os meses de adaptação até entregar', 'Começa na conversa de início'] },
        { label: 'Primeiro resultado', values: ['Cerca de 6 meses entre contratar, montar a plataforma e entregar', 'Em até 30 dias'] },
        { label: 'Se a pessoa sai', values: ['O conhecimento vai junto e o processo recomeça', 'Time e documentação: o conhecimento fica na empresa'] },
        { label: 'Compromisso', values: ['Custo fixo, difícil de ajustar', 'Plano mensal, ajustado à complexidade'] },
      ],
      note: 'Valores de CLT são estimativas de mercado para um profissional de dados sênior; encargos e benefícios variam conforme o regime tributário e o pacote da empresa, e ferramentas e plataforma não estão incluídas na conta. Tempo para contratar: Ford/Datafolha 2026. O valor da Oika depende de quantas áreas são atendidas, da ferramenta de visualização e dos casos de uso.',
    },
    back: { label: 'Voltar para a parceria Oika + Nekt', href: '/parceria-nekt/' },
  },
};
