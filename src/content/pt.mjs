// Conteúdo oficial do site (português). Fonte: Deck Comercial/site-conteudo.md.
// Para editar um texto, altere aqui e rode `node build.mjs`.

export default {
  lang: 'pt-BR',
  path: '/',
  meta: {
    title: 'Oika Data | O caminho mais curto entre seus dados e o resultado',
    description:
      'Hub para empresas que querem extrair valor dos dados e habilitar IA. Time de dados, agentes e plataforma num contrato só. Primeiro resultado em até 30 dias.',
  },
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
    { href: '#problema', label: 'O problema' },
    { href: '#entrega', label: 'O que entregamos' },
    { href: '#como-comecamos', label: 'Como começamos' },
  ],
  hero: {
    title: 'O caminho mais curto entre seus dados e o resultado',
    subtitle: 'Hub para empresas que querem extrair valor dos dados e habilitar IA.',
    support: 'Time de dados, agentes e plataforma num contrato só. Primeiro resultado em até 30 dias.',
    ctaPrimary: 'Agendar uma conversa',
    ctaSecondary: 'Ver o que entregamos',
  },
  problem: {
    label: 'O problema',
    title: 'Sua empresa já tem os dados para decidir melhor. Eles só não conversam entre si',
    sources: ['ERP', 'CRM', 'Planilhas', 'E-mail e WhatsApp', 'A cabeça das pessoas', 'Ferramentas de IA'],
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
    title: 'Somos o hub de dados que falta na sua empresa',
    subtitle: 'Do zero ou ao lado do analista que você já tem, sem juntar ferramenta, consultor e freelancer.',
    pillars: [
      { title: 'Time + agentes', text: 'Gente sênior e agentes de IA trabalhando juntos, sem você precisar contratar.' },
      { title: 'Plataforma de dados', text: 'Integração, organização e IA num lugar só, em plataformas referência de mercado.' },
      { title: 'Casos de uso', text: 'Dashboards, análises e segmentações de marketing, entregues sobre dados em que dá para confiar.' },
    ],
    numbers: [
      { value: '30 dias', text: 'para ter os dados integrados e o primeiro caso de uso no ar' },
      { value: '1 a 2', text: 'entregas de valor por mês, depois que a base está de pé' },
      { value: '0', text: 'contratações: o time já chega pronto' },
    ],
  },
  value: {
    label: 'O valor',
    title: 'Dado só importa quando vira receita, economia ou tempo',
    groups: [
      {
        title: 'Mais receita',
        items: [
          'Clientes que pararam de comprar, antes de virarem perda',
          'Conversão de leads por canal e por vendedor',
          'Mix e oportunidades por cliente',
          'Preço com base na margem real',
        ],
      },
      {
        title: 'Menos custo',
        items: [
          'Estoque parado e ruptura',
          'Margem real por produto e por cliente',
          'Custo por lead em cada canal',
          'Ferramentas e licenças que não se pagam',
        ],
      },
      {
        title: 'Mais eficiência',
        items: [
          'Relatórios que se atualizam sozinhos',
          'Fechamento do mês em horas, não em dias',
          'Um número único para todas as áreas',
          'Time decidindo, não montando planilha',
        ],
      },
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
  cta: {
    title: 'Vamos escolher o seu primeiro caso de uso?',
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
};
