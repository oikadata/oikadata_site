// Conteúdo oficial do site (português). Fonte: Deck Comercial/site-conteudo.md.
// Para editar um texto, altere aqui e rode `node build.mjs`.

export default {
  lang: 'pt-BR',
  path: '/',
  ui: {
    skip: 'Pular para o conteúdo',
    navLabel: 'Navegação principal',
    menu: 'Menu',
    close: 'Fechar',
    langSwitch: 'EN',
    langSwitchLabel: 'Read in English',
    schedule: 'Agendar uma conversa',
    scheduleShort: 'Agendar',
    whatsappMessage: 'Olá! Vim pelo site da Oika Data e quero entender como vocês podem ajudar com os dados da minha empresa.',
  },
  nav: [
    { page: 'home', label: 'Soluções' },
  ],
  cta: {
    title: 'Vamos iniciar o seu primeiro caso de uso?',
    support: ['Sprint de Valor', '30 dias', 'sem fidelidade'],
    howTitle: 'Como funciona',
    how: [
      'Conversa para escolher o caso de uso',
      'Integração e modelagem dos dados',
      'Entrega do resultado e plano para o trimestre',
    ],
    button: 'Agendar uma conversa de 30 min',
    alt: 'Prefere mensagem? Fale com a gente pelo',
    whatsapp: 'WhatsApp',
    or: 'ou escreva para',
  },
  footer: {
    whatsapp: 'WhatsApp',
    slogan: 'onde os dados ganham sentido',
  },
  pages: {
    home: {
      meta: {
        ogTitle: 'O caminho mais curto entre seus dados e o resultado',
        title: 'Oika Data | O caminho mais curto entre seus dados e o resultado',
        description:
          'Hub de soluções em dados e IA para empresas que querem decidir melhor e crescer. Primeiro resultado em até 30 dias.',
      },
      hero: {
        title: 'O caminho mais curto entre seus dados e o resultado',
        subtitle: 'Hub de soluções em dados e IA para empresas que querem decidir melhor e crescer.',
        support: 'Primeiro resultado em até 30 dias.',
        ctaPrimary: 'Agendar uma conversa',
        ctaSecondary: 'Ver o que entregamos',
      },
      problem: {
        label: 'O problema',
        title: 'Sua empresa já tem os dados para decidir melhor. Eles só não estão organizados para gerar valor',
        symptoms: [
          'Cada área traz um número diferente para a mesma coisa.',
          'O relatório do mês leva dias de planilha e chega quando a decisão já passou.',
          'A regra de negócio que importa, só uma pessoa sabe.',
          'Uma pergunta simples, como “qual a nossa margem por cliente?”, não tem resposta rápida.',
          'A IA que vocês já usam não tem o contexto do negócio e responde no genérico.',
        ],
      },
      whyNow: {
        label: 'Por que agora',
        title: 'Fonte confiável sempre foi necessária. Com IA, virou inadiável',
        text: 'Para decidir, sua empresa sempre precisou de um número em que dá para confiar. A IA não mudou isso: só tornou mais caro não ter. Os modelos são os mesmos para todo mundo; o contexto é só seu.',
        quote: 'IA sem contexto é chute bem articulado.',
        mapTitle: 'O mapa da sua empresa',
        layers: [
          { title: 'Dado integrado', text: 'ERP, CRM, planilhas e portais' },
          { title: 'Regra de negócio', text: 'como a sua empresa calcula margem, meta e comissão' },
          { title: 'Conhecimento de quem opera', text: 'o que hoje só existe na cabeça das pessoas' },
        ],
        feedsLabel: 'Tudo isso alimenta',
        feeds: ['Painéis e relatórios', 'Análises', 'Agentes de IA'],
        stat: {
          from: '21%',
          to: '95%',
          text: 'é o salto de acerto das respostas de IA sobre dados quando o contexto é estruturado.',
          note: 'Números do time de dados da Anthropic, que hoje responde 95% das perguntas de negócio com IA.',
          linkLabel: 'Ler o estudo',
          href: 'https://claude.com/blog/how-anthropic-enables-self-service-data-analytics-with-claude',
        },
      },
      delivery: {
        label: 'O que entregamos',
        title: 'Casos de uso que viram receita, economia e tempo',
        subtitle: 'Cada entrega responde a uma pergunta do negócio e tem um resultado que dá para medir.',
        groups: [
          {
            title: 'Mais receita',
            cases: [
              { name: 'Clientes em risco', question: 'Quem parou de comprar e quanto isso representa?', result: 'Receita recuperada antes de virar perda' },
              { name: 'Conversão por canal e vendedor', question: 'De onde vêm os clientes que mais compram?', result: 'Investimento onde a conversão é maior' },
              { name: 'Segmentação de marketing', question: 'Para quem oferecer o quê, e quando?', result: 'Campanhas com o público e o mix certos' },
            ],
          },
          {
            title: 'Menos custo',
            cases: [
              { name: 'Margem real', question: 'Quanto sobra por produto e por cliente, depois de todos os custos?', result: 'Preço e desconto com base no que sobra de verdade' },
              { name: 'Estoque', question: 'O que está parado e o que vai faltar?', result: 'Menos capital parado e menos ruptura' },
              { name: 'Custo de aquisição', question: 'Quanto custa cada lead em cada canal?', result: 'Verba cortada do que não se paga' },
            ],
          },
          {
            title: 'Mais eficiência',
            cases: [
              { name: 'Relatórios automáticos', question: 'Quanto tempo o time gasta montando planilha?', result: 'Relatórios que se atualizam sozinhos' },
              { name: 'Fechamento do mês', question: 'Por que o fechamento leva dias?', result: 'Fechamento em horas, não em dias' },
              { name: 'Um número único', question: 'Por que cada área traz um número diferente?', result: 'Uma definição só, usada por todas as áreas' },
            ],
          },
        ],
      },
      how: {
        label: 'Como entregamos',
        title: 'Dado organizado que direciona o seu negócio',
        productsTitle: 'O que chega para você',
        products: [
          { title: 'IA com contexto', text: 'Pergunte à IA e receba respostas com os seus números e as suas regras de negócio, não no genérico.' },
          { title: 'Dados modelados', text: 'Suas fontes integradas e organizadas, com as regras de negócio escritas em código. Um número só para todas as áreas.' },
          { title: 'Dashboards', text: 'Painéis que se atualizam sozinhos, com os indicadores que cada área usa para decidir.' },
          { title: 'Análises', text: 'Respostas para as perguntas do negócio, com o que fazer a seguir.' },
          { title: 'Segmentações de marketing', text: 'Clientes agrupados por comportamento, valor e potencial, prontos para campanhas e para o CRM.' },
          { title: 'Modelos de IA', text: 'Modelos preditivos e de recomendação: quem vai parar de comprar, quanto vai vender e o que oferecer a cada cliente.' },
        ],
        teamTitle: 'Quem faz acontecer',
        team: [
          { title: 'Time sênior', text: 'Engenharia, modelagem, BI e estratégia, sem você precisar contratar.' },
          { title: 'Agentes de IA', text: 'Trabalham junto com o time e aceleram cada entrega.' },
          { title: 'Plataforma de dados', text: 'Integração, organização e IA num lugar só, em plataformas referência de mercado.' },
        ],
        numbers: [
          { value: '30 dias', text: 'para ter os dados integrados e o primeiro caso de uso no ar' },
          { value: '1 a 2', text: 'entregas de valor por mês, depois que a base está de pé' },
          { value: '1', text: 'contratação que resolve tudo: time, ferramentas, plataforma e BI' },
        ],
      },
      start: {
        label: 'Como começamos',
        title: 'Em 30 dias, dados integrados e o primeiro resultado na mesa',
        steps: [
          {
            when: 'Mês 1',
            name: 'Sprint de Valor',
            text: 'Escolhemos com você o caso de uso de maior valor, integramos os dados e entregamos o primeiro resultado. Sem fidelidade.',
          },
          {
            when: 'A cada trimestre',
            name: 'Expansão',
            text: 'Você prioriza as novas iniciativas: casos de uso, áreas, integrações e IA sobre a base pronta.',
          },
          {
            when: 'Com a base madura',
            name: 'Sustentação',
            text: 'Tudo funcionando, contexto atualizado e melhorias no que já existe, por um valor menor.',
          },
        ],
        needsTitle: 'O que precisamos de você',
        needs: [
          'Um ponto focal para priorizar as iniciativas com a gente',
          'Acesso aos sistemas',
          'As áreas envolvidas disponíveis para validar as regras de negócio',
        ],
        ctaText: 'Quer descobrir qual seria o primeiro caso de uso na sua empresa?',
      },
    },
  },
};
