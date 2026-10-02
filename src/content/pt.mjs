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
    { page: 'porque', label: 'Por que a Oika' },
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
          'Comece com o Sprint de Valor: 30 dias, um caso de uso e sem fidelidade. Depois, acelere com os planos Core ou Omni e passe para a Sustentação quando a base estiver madura.',
      },
      hero: {
        title: 'Acelere conforme a necessidade. O preço se ajusta',
        subtitle: 'Comece com um Sprint de Valor, sem fidelidade. Depois, alterne entre ciclos de expansão e de sustentação, conforme o momento da sua empresa.',
        cta: 'Agendar uma conversa',
      },
      cycle: {
        sprint: {
          when: 'Mês 1',
          name: 'Sprint de Valor',
          text: 'Escolhemos com você o caso de uso de maior valor, integramos os dados e entregamos o primeiro resultado.',
          price: 'Sem fidelidade',
        },
        expand: {
          when: 'Ciclo trimestral',
          name: 'Expansão',
          text: 'Novos casos de uso, áreas, integrações e IA sobre a base pronta.',
          price: 'Plano Core ou Omni',
        },
        sustain: {
          when: 'Quando a base amadurece',
          name: 'Sustentação',
          text: 'Tudo funcionando, contexto atualizado e melhorias no que já existe.',
          price: 'Valor menor',
        },
        toSustain: 'Base madura',
        toExpand: 'Novas prioridades',
        center: 'Você escolhe o ritmo a cada trimestre',
      },
      plans: {
        title: 'Compare os planos',
        subtitle: 'Core e Omni são os planos de expansão: escolha conforme o time que você já tem. A Sustentação mantém viva a base que construímos, venha ela de um ou de outro.',
        featureLabel: 'O que está incluso',
        yes: 'Incluso',
        no: 'Não incluso',
        columns: [
          {
            name: 'Core',
            scope: 'Engenharia analítica',
            for: 'Para quem já tem um analista de BI, ou quer consultar os dados direto com IA.',
          },
          {
            name: 'Omni',
            scope: 'Engenharia analítica + BI',
            for: 'Para quem não tem ninguém olhando dados: o time de dados inteiro, ponta a ponta.',
            featured: true,
          },
          {
            name: 'Sustentação',
            scope: 'Manutenção',
            for: 'Para quando a base está madura, o seu time interno assume, ou nos 3 meses de transição.',
          },
        ],
        groups: [
          {
            title: 'Base de dados',
            rows: [
              { label: 'Ambiente único com os dados de todas as áreas', values: [true, true, true] },
              { label: 'Integração de novas fontes de dados', values: [true, true, 'Mantém as existentes'] },
              { label: 'Regras de negócio em código: um número só para todas as áreas', values: [true, true, 'Atualiza as que mudam'] },
              { label: 'Controle de acesso: cada pessoa vê só o que pode', values: [true, true, true] },
              { label: 'Monitoramento e qualidade dos dados', values: [true, true, true] },
            ],
          },
          {
            title: 'IA com contexto',
            rows: [
              { label: 'Pergunte à IA e receba respostas com os seus números e as suas regras', values: [true, true, 'Contexto atualizado'] },
              { label: 'Acurácia medida com perguntas-teste', values: [true, true, true] },
            ],
          },
          {
            title: 'Decisão no dia a dia',
            rows: [
              { label: 'Dashboards para cada área', values: [false, true, 'Mantém os existentes'] },
              { label: 'Análises para as perguntas do negócio', values: [false, true, false] },
              { label: 'Modelos de IA: quem vai parar de comprar, quanto vai vender, o que oferecer', values: [false, true, 'Mantém os existentes'] },
              { label: 'Segmentações de marketing prontas para campanhas e CRM', values: [false, true, 'Mantém as existentes'] },
            ],
          },
          {
            title: 'Ritmo',
            rows: [
              { label: 'Novas entregas de valor', values: ['Cerca de 1 por mês', '1 a 2 por mês', 'Melhorias incrementais'] },
              { label: 'Time sênior, agentes de IA e plataforma de dados', values: [true, true, true] },
            ],
          },
        ],
        special: 'Condições especiais para os primeiros clientes e para imobiliárias, distribuidoras e escolas.',
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
    porque: {
      meta: {
        title: 'Por que a Oika | Oika Data',
        description:
          'Contratar leva meses e consultoria acaba junto com o projeto. Com a Oika Data, o primeiro resultado sai em 30 dias e o conhecimento fica na empresa.',
      },
      hero: {
        title: 'Contratar leva meses. Com a gente, o primeiro resultado sai em 30 dias',
        subtitle: 'O plano Omni faz o papel de um time de dados inteiro, com a plataforma inclusa e sem você precisar contratar.',
      },
      compare: {
        columns: ['Contratar uma pessoa', 'Consultoria por projeto', 'Oika Data'],
        rows: [
          { label: 'Primeiro resultado', values: ['Cerca de 6 meses entre contratar, montar a plataforma e entregar', 'Em semanas, mas acaba junto com o projeto', 'Em até 30 dias'] },
          { label: 'Conhecimento', values: ['Uma especialidade', 'Amplo, mas temporário', 'Engenharia, modelagem, BI e IA, com experiência de vários setores'] },
          { label: 'Continuidade', values: ['Se a pessoa sai, o conhecimento vai junto', 'Entrega e vai embora', 'Time e documentação: o conhecimento fica na empresa'] },
          { label: 'Ferramentas', values: ['Plataforma, licenças e IA pagas à parte', 'Normalmente à parte', 'Plataforma inclusa no plano'] },
          { label: 'Compromisso', values: ['Custo fixo, difícil de ajustar', 'Escopo fechado', 'Plano trimestral, depois de um Sprint sem fidelidade'] },
        ],
        note: 'Tempo para contratar: Ford/Datafolha 2026 (metade das empresas leva de 1 a 2 meses para preencher uma vaga de tecnologia). Os prazos de plataforma e do primeiro caso de uso são estimativas nossas.',
        plansLink: 'Ver os planos',
        plansHref: '/planos/',
      },
    },
  },
};
