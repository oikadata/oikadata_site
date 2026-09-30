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
    whatsappShort: 'WhatsApp',
    whatsappMessage: 'Olá! Vim pelo site da Oika Data e quero entender como vocês podem ajudar com os dados da minha empresa.',
  },
  nav: [
    { href: '#problema', label: 'O problema' },
    { href: '#entrega', label: 'O que entregamos' },
    { href: '#como-comecamos', label: 'Como começamos' },
    { href: '#faq', label: 'Perguntas' },
  ],
  hero: {
    title: 'O caminho mais curto entre seus dados e o resultado',
    subtitle: 'Hub para empresas que querem extrair valor dos dados e habilitar IA.',
    support: 'Time de dados, agentes e plataforma num contrato só. Primeiro resultado em até 30 dias.',
    ctaPrimary: 'Falar no WhatsApp',
    ctaSecondary: 'Agendar 30 min',
    proof: 'Experiência em fintech, mercado imobiliário e operações internacionais',
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
    costLabel: 'O custo',
    cost: 'Decisões incorretas, receita que escapa, custo que ninguém vê, IA que não sai do piloto e ineficiência operacional.',
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
      { title: 'Um hub de dados', text: 'Um lugar só, do dado bruto à decisão, com um responsável só pelo resultado.' },
    ],
    numbers: [
      { value: '30 dias', text: 'para ter os dados integrados e o primeiro caso de uso no ar' },
      { value: '1 a 2', text: 'entregas de valor por mês, depois que a base está de pé' },
      { value: '0', text: 'contratações: o time já chega pronto' },
    ],
    rolesTitle: 'Os papéis que sua empresa passa a ter',
    roles: [
      { title: 'Engenharia de dados', text: 'conecta as fontes e mantém tudo funcionando.' },
      { title: 'Modelagem', text: 'organiza os dados e transforma regras de negócio em código.' },
      { title: 'BI e análise', text: 'painéis e respostas para as perguntas do negócio.' },
      { title: 'Estratégia', text: 'alguém sênior que prioriza com você o que gera mais valor.' },
      { title: 'IA aplicada', text: 'casos de uso de IA sobre uma base confiável.' },
    ],
    closing:
      'Uma pessoa contratada cobre, na melhor das hipóteses, um ou dois desses papéis. E aprende sozinha, enquanto o nosso time aprende em vários clientes ao mesmo tempo.',
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
  },
  trust: {
    label: 'Confiança',
    title: 'Seus dados, suas regras',
    items: [
      { title: 'Os dados são seus.', text: 'Ficam na conta de nuvem da sua empresa, não na nossa.' },
      { title: 'Sem fidelidade para começar.', text: 'O Sprint de Valor não tem fidelidade. Depois, os planos são trimestrais.' },
      { title: 'Quer montar um time interno?', text: 'Você leva o código e a documentação, com 3 meses de transição acompanhada.' },
      { title: 'Segurança e LGPD.', text: 'Plataforma com certificação SOC 2 Type II e acesso por perfil. Contrato de tratamento de dados.' },
      { title: 'Antes de liberar, medimos.', text: 'Montamos perguntas-teste do seu negócio e medimos o acerto da IA antes de liberar para cada área.' },
    ],
  },
  faq: {
    label: 'Perguntas frequentes',
    title: 'O que costumam nos perguntar',
    items: [
      { q: 'Já temos Power BI. Precisamos trocar?', a: 'Não. Podemos usar e evoluir o que já existe, ou avaliar uma alternativa mais barata que entrega o mesmo valor.' },
      { q: 'Já tenho um analista. Faz sentido?', a: 'Sim. Cuidamos da base e o analista foca em análise.' },
      { q: 'Quanto tempo do meu time vocês precisam?', a: 'Depende do caso de uso. Em geral, um ponto focal que prioriza as iniciativas com a gente, e as áreas envolvidas para validar as regras de negócio.' },
      { q: 'De quem são os dados?', a: 'Da sua empresa. Eles ficam na conta de nuvem da sua empresa, não na nossa.' },
      { q: 'E se eu cancelar?', a: 'Você leva o código e a documentação e pode assinar as ferramentas direto, com 3 meses de transição acompanhada.' },
      { q: 'E a LGPD?', a: 'Os dados ficam na nuvem da sua empresa, em plataforma SOC 2 Type II, com criptografia e acesso por perfil. Sua empresa é a controladora; a Oika atua como operadora, com contrato de tratamento de dados.' },
    ],
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
    button: 'Falar no WhatsApp',
    whatsappMessage: 'Olá! Vim pelo site da Oika Data e quero conversar sobre o Sprint de Valor.',
    scheduleButton: 'Agendar uma conversa',
  },
  footer: {
    slogan: 'onde os dados ganham sentido',
  },
};
