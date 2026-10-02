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
        title: 'Sua empresa já tem os dados para decidir melhor. Eles só não estão organizados para gerar valor',
        symptoms: [
          'Cada área traz um número diferente para a mesma coisa.',
          'Uma pergunta simples, como “qual a nossa margem por cliente?”, leva dias de planilha e a resposta chega depois da decisão.',
          'A regra de negócio que importa, só uma pessoa sabe.',
          'A IA que vocês já usam não conhece o seu negócio e responde no genérico.',
        ],
        stat: {
          from: '21%',
          to: '95%',
          text: 'é o salto de acerto da IA sobre dados quando ela tem o contexto do negócio.',
          note: 'Números do time de dados da Anthropic, que hoje responde 95% das perguntas de negócio com IA.',
          linkLabel: 'Ler o estudo',
          href: 'https://claude.com/blog/how-anthropic-enables-self-service-data-analytics-with-claude',
        },
      },
      value: {
        title: 'Seus dados trabalhando para o seu negócio',
        subtitle: 'Integramos e organizamos os dados da sua empresa e entregamos o que cada área precisa para decidir.',
        pillars: [
          {
            tag: 'Ambiente único',
            title: 'Toda a empresa num lugar só',
            text: 'Vendas, financeiro, marketing e operação integrados numa base só, com as regras do seu negócio. Acaba a discussão sobre qual número está certo.',
            visual: {
              type: 'hub',
              sources: ['Vendas', 'Financeiro', 'Marketing', 'Operação'],
              label: 'Receita de setembro',
              value: 'R$ 1,24 mi',
              note: 'O mesmo número para todas as áreas',
            },
          },
          {
            tag: 'IA com contexto',
            title: 'Um analista sênior, a qualquer hora',
            text: 'Pergunte em português e receba a resposta com os seus números e as suas regras, não no genérico. E com o que fazer a seguir.',
            visual: {
              type: 'chat',
              question: 'Quais clientes mais perderam margem neste trimestre?',
              answer: 'Três clientes explicam 70% da queda. O motivo principal foi desconto acima da política comercial.',
              rows: [
                { label: 'Distribuidora Sul', value: '−8,2 pp', size: 100 },
                { label: 'Rede Centro', value: '−5,1 pp', size: 62 },
                { label: 'Mercado Vila', value: '−3,4 pp', size: 41 },
              ],
              next: 'Próximo passo: revisar os descontos dessas três contas.',
            },
          },
          {
            tag: 'Dashboards',
            title: 'Os indicadores de cada área, sempre em dia',
            text: 'Painéis que se atualizam sozinhos, com os números que cada área usa para decidir. Ninguém mais monta planilha no fim do mês.',
            visual: {
              type: 'dashboard',
              title: 'Comercial',
              updated: 'Atualizado hoje, 7h',
              kpis: [
                { label: 'Receita', value: 'R$ 1,24 mi', delta: '+12%' },
                { label: 'Margem', value: '31,4%', delta: '+2,1 pp' },
                { label: 'Ticket médio', value: 'R$ 4.870', delta: '+5%' },
              ],
              bars: [42, 48, 45, 53, 50, 58, 61, 57, 66, 70, 68, 78],
            },
          },
          {
            tag: 'Modelos de IA e segmentação',
            title: 'Saber antes quem vai comprar, e quem vai parar',
            text: 'Modelos que preveem quem vai parar de comprar, quanto você vai vender e o que oferecer a cada cliente. Segmentações prontas para as campanhas e para o CRM.',
            visual: {
              type: 'model',
              title: 'Clientes em risco',
              columns: ['Cliente', 'Segmento', 'Risco de parar'],
              rows: [
                { name: 'Rede Centro', segment: 'Alto valor', risk: 82, action: 'Ligar esta semana' },
                { name: 'Farmácia Norte', segment: 'Recorrente', risk: 64, action: 'Oferta de recompra' },
                { name: 'Loja Jardim', segment: 'Novo', risk: 23, action: 'Manter régua' },
              ],
            },
          },
        ],
      },
      cases: {
        title: 'Casos de uso que viram receita, economia e tempo',
        subtitle: 'Cada entrega responde a uma pergunta do negócio e tem um resultado que dá para medir.',
        groups: [
          {
            title: 'Mais receita',
            cases: [
              { name: 'Clientes em risco', result: 'Receita recuperada antes de virar perda' },
              { name: 'Conversão por canal e vendedor', result: 'Investimento onde a conversão é maior' },
              { name: 'Segmentação de marketing', result: 'Campanhas com o público e o mix certos' },
            ],
          },
          {
            title: 'Menos custo',
            cases: [
              { name: 'Margem real', result: 'Preço e desconto com base no que sobra de verdade' },
              { name: 'Estoque', result: 'Menos capital parado e menos ruptura' },
              { name: 'Custo de aquisição', result: 'Verba cortada do que não se paga' },
            ],
          },
          {
            title: 'Mais eficiência',
            cases: [
              { name: 'Relatórios automáticos', result: 'Relatórios que se atualizam sozinhos' },
              { name: 'Fechamento do mês', result: 'Fechamento em horas, não em dias' },
              { name: 'Um número único', result: 'Uma definição só, usada por todas as áreas' },
            ],
          },
        ],
      },
      work: {
        title: 'Em 30 dias, dados integrados e o primeiro resultado na mesa',
        subtitle: 'Uma contratação só resolve tudo: time, agentes de IA e plataforma.',
        steps: [
          {
            when: 'Mês 1',
            name: 'Sprint de Valor',
            text: 'Escolhemos com você o caso de uso de maior valor, integramos os dados e entregamos o primeiro resultado. Sem fidelidade.',
          },
          {
            when: 'A cada trimestre',
            name: 'Expansão',
            text: 'Você prioriza as novas iniciativas sobre a base pronta: casos de uso, áreas, integrações e IA. De 1 a 2 entregas de valor por mês.',
          },
          {
            when: 'Com a base madura',
            name: 'Sustentação',
            text: 'Tudo funcionando, contexto atualizado e melhorias no que já existe, por um valor menor.',
          },
        ],
        teamTitle: 'Quem faz acontecer',
        team: [
          { title: 'Time sênior', text: 'Engenharia, modelagem, BI e estratégia, sem você precisar contratar.' },
          { title: 'Agentes de IA', text: 'Trabalham junto com o time e aceleram cada entrega.' },
          { title: 'Plataforma de dados', text: 'Integração, organização e IA num lugar só, em plataformas referência de mercado.' },
        ],
        needsTitle: 'O que precisamos de você',
        needs: [
          'Um ponto focal para priorizar as iniciativas com a gente',
          'Acesso aos sistemas',
          'As áreas envolvidas disponíveis para validar as regras de negócio',
        ],
        plansLink: 'Conhecer os planos',
        plansHref: '/planos/',
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
