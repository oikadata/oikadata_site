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
    { page: 'planos', label: 'Planos' },
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
    planos: {
      meta: {
        title: 'Planos | Oika Data',
        description:
          'Comece com o Sprint de Valor: 30 dias, um caso de uso e sem fidelidade. Depois, planos trimestrais com time de dados, agentes e plataforma inclusos.',
      },
      hero: {
        title: 'Comece pequeno. Cresça quando fizer sentido.',
        subtitle: 'Um Sprint de Valor para começar, sem fidelidade. Depois, planos trimestrais com time, agentes e plataforma inclusos.',
      },
      sprint: {
        tag: 'Para começar',
        name: 'Sprint de Valor',
        facts: ['30 dias', '1 caso de uso', 'sem fidelidade'],
        text: 'Escolhemos com você o caso de uso de maior valor, integramos os dados e entregamos o primeiro resultado. Se fizer sentido, seguimos juntos num plano trimestral.',
        cta: 'Agendar uma conversa',
        stepsTitle: 'Como são os 30 dias',
        steps: [
          { when: 'Semana 1', text: 'Conversa para escolher o caso de uso' },
          { when: 'Semanas 2 e 3', text: 'Integração e modelagem dos dados' },
          { when: 'Semana 4', text: 'Entrega do resultado e plano para o trimestre' },
        ],
      },
      plans: {
        title: 'Depois do Sprint, dois planos trimestrais',
        subtitle: 'Você escolhe conforme o time que já tem. Os dois incluem a plataforma de dados.',
        items: [
          {
            tag: 'Plano trimestral',
            name: 'Contexto',
            scope: 'Engenharia analítica',
            for: 'Para quem já tem um analista de BI, ou quer consultar os dados direto com IA.',
            includes: [
              'Integração das fontes de dados',
              'Modelagem e regras de negócio em código',
              'Documentação e contexto para a IA',
            ],
            pace: 'Cerca de 1 entrega de valor por mês',
          },
          {
            tag: 'Plano trimestral',
            name: 'Decisão',
            scope: 'Engenharia analítica + BI',
            for: 'Para quem não tem ninguém olhando dados: o time de dados inteiro, ponta a ponta.',
            includes: [
              'Tudo do plano Contexto',
              'Dashboards para cada área',
              'Análises para as perguntas do negócio',
            ],
            pace: '1 a 2 entregas de valor por mês',
            featured: true,
          },
        ],
        allTitle: 'Em todos os planos:',
        all: 'plataforma de dados referência de mercado, novas integrações, monitoramento e qualidade de dados.',
        special: 'Condições especiais para os primeiros clientes e para imobiliárias, distribuidoras e escolas.',
      },
      compare: {
        title: 'Contratar leva meses. Com a gente, o primeiro resultado sai em 30 dias',
        subtitle: 'O plano Decisão faz o papel de um time de dados inteiro, com a plataforma inclusa.',
        columns: ['Contratar uma pessoa', 'Consultoria por projeto', 'Oika Data'],
        rows: [
          { label: 'Primeiro resultado', values: ['Cerca de 6 meses entre contratar, montar a plataforma e entregar', 'Em semanas, mas acaba junto com o projeto', 'Em até 30 dias'] },
          { label: 'Conhecimento', values: ['Uma especialidade', 'Amplo, mas temporário', 'Engenharia, modelagem, BI e IA, com experiência de vários setores'] },
          { label: 'Continuidade', values: ['Se a pessoa sai, o conhecimento vai junto', 'Entrega e vai embora', 'Time e documentação: o conhecimento fica na empresa'] },
          { label: 'Ferramentas', values: ['Plataforma, licenças e IA pagas à parte', 'Normalmente à parte', 'Plataforma inclusa no plano'] },
          { label: 'Compromisso', values: ['Custo fixo, difícil de ajustar', 'Escopo fechado', 'Plano trimestral, depois de um Sprint sem fidelidade'] },
        ],
        note: 'Tempo para contratar: Ford/Datafolha 2026 (metade das empresas leva de 1 a 2 meses para preencher uma vaga de tecnologia). Os prazos de plataforma e do primeiro caso de uso são estimativas nossas.',
      },
      sustain: {
        title: 'Sustentação',
        subtitle: 'Base no ar não é base viva. Quando a regra muda e ninguém atualiza, o painel e a IA continuam respondendo, só que errado.',
        items: [
          { title: 'Tudo funcionando', text: 'Rotinas, integrações e correções quando algo muda nas fontes.' },
          { title: 'Contexto atualizado', text: 'Regras novas documentadas e refletidas nos modelos e nos agentes.' },
          { title: 'Acurácia medida', text: 'As perguntas-teste continuam rodando, para o acerto não cair sem ninguém ver.' },
          { title: 'Melhorias incrementais', text: 'Ajustes no que já existe: novos cortes, performance e custo da plataforma.' },
        ],
        when: 'Para quando a base já está madura, quando o seu time interno assume, ou nos 3 meses de transição se você decidir seguir sozinho. Por um valor menor que o dos planos.',
      },
      addons: {
        title: 'Para ir além',
        subtitle: 'Add-ons que entram em qualquer plano. Valores sob consulta.',
        items: [
          { title: 'Gestão Estratégica', text: 'Alguém sênior que prioriza com você o que gera mais valor, acompanha os resultados e leva os dados para as decisões da diretoria.' },
          { title: 'Cultura de Dados', text: 'Treinamento e acompanhamento para o seu time usar dados e IA no dia a dia, com um formato desenhado para a sua empresa.' },
        ],
      },
    },
  },
};
