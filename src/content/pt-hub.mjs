// Textos da página oculta da proposta comercial do hub de dados da Oika (versão futura).
// Sem preços: os planos levam para o WhatsApp, "consulte o nosso time".
// Os textos dentro das ilustrações (`visual`) são exemplos, só para desenhar a ideia.

export default {
  hub: {
    meta: {
      title: 'Hub de dados Oika: plataforma, BI, portal e time num único preço | Oika Data',
      description: 'Plataforma de dados, BI, portal analítico e um time de especialistas com IA, numa única contratação e num único preço.',
    },
    hero: {
      tag: 'Hub de dados Oika',
      title: 'Seus dados ponta a ponta, numa única contratação',
      subtitle: 'Plataforma de dados, BI, portal analítico e um time de especialistas com IA. Tudo num único preço, com novas entregas a cada 7 dias.',
      facts: [
        { value: '1', label: 'contratação para toda a solução' },
        { value: '7 dias', label: 'para cada nova entrega' },
        { value: '3 planos', label: 'para cada momento da empresa' },
      ],
      cta: 'Falar com a Oika no WhatsApp',
      secondary: 'Ver os planos',
      // As quatro camadas do símbolo da Oika, de cima para baixo.
      layers: [
        { name: 'Portal analítico', tool: 'Oika Intelligence Center' },
        { name: 'BI', tool: 'Power BI' },
        { name: 'Plataforma de dados', tool: 'Nekt' },
        { name: 'Time', tool: 'Pessoas + IA' },
      ],
      price: 'Um único preço',
    },
    flow: {
      label: 'Ponta a ponta',
      title: 'Da fonte à decisão, sem peça solta',
      subtitle: 'Os dados saem dos sistemas da empresa, passam pela plataforma, viram painéis, análises e respostas da IA, e chegam a quem decide. O time da Oika cuida de todo o caminho.',
      sources: { title: 'Fontes', items: ['ERP', 'CRM', 'E-commerce', 'Planilhas'] },
      platform: { title: 'Plataforma de dados', name: 'Nekt', text: 'Conecta, organiza e monitora' },
      outputs: { title: 'Entrega', items: [{ name: 'Power BI', text: 'Painéis' }, { name: 'Intelligence Center', text: 'Portal analítico' }, { name: 'IA da Oika', text: 'Respostas' }] },
      areas: { title: 'Decisão', items: ['Diretoria', 'Vendas', 'Financeiro', 'Operações'] },
      team: 'Time Oika, pessoas + IA, cuidando de ponta a ponta',
      price: '1 contratação · 1 preço',
    },
    stack: {
      label: 'O que vem no hub',
      title: 'Quatro peças que já chegam funcionando juntas',
      subtitle: 'Em vez de contratar plataforma, BI, portal e pessoas separadamente, você contrata a Oika e recebe a solução inteira.',
      items: [
        {
          tag: 'Plataforma de dados · Nekt',
          title: 'Os dados da empresa num só lugar, sempre em dia',
          text: 'Conectamos as fontes, organizamos as camadas com as regras do negócio e monitoramos cada carga. Quando algo foge do normal, a gente vê antes de você.',
          visual: {
            type: 'sync',
            title: 'Fontes conectadas',
            status: 'Monitorado agora',
            rows: [
              { name: 'ERP', note: 'Atualizado há 4 min' },
              { name: 'CRM', note: 'Atualizado há 6 min' },
              { name: 'E-commerce', note: 'Atualizado há 9 min' },
              { name: 'Planilhas financeiras', note: 'Atualizando…', loading: true },
            ],
            layers: ['Bruto', 'Organizado', 'Pronto para o negócio'],
          },
        },
        {
          tag: 'BI · Power BI',
          title: 'Painéis que o time abre todo dia',
          text: 'Indicadores de cada área, que se atualizam sozinhos, numa ferramenta de mercado que todo mundo conhece.',
          visual: {
            type: 'dashboard',
            title: 'Comercial',
            updated: 'Atualizado hoje, 7h',
            kpis: [
              { label: 'Receita', value: 'R$ 1,24 mi', delta: '+12%' },
              { label: 'Margem', value: '31,6%', delta: '+2,1 pp' },
              { label: 'Ticket médio', value: 'R$ 4.870', delta: '+6%' },
            ],
            bars: [38, 44, 41, 50, 47, 55, 52, 60, 58, 66, 72, 84],
          },
        },
        {
          tag: 'Portal analítico · Oika Intelligence Center',
          title: 'Um endereço para tudo o que a empresa sabe',
          text: 'Painéis, análises, modelos e a IA da Oika num único portal. O time encontra a resposta sem precisar saber onde ela mora.',
          visual: {
            type: 'portal',
            title: 'Oika Intelligence Center',
            menu: ['Painéis', 'Análises', 'Modelos', 'Pergunte à IA'],
            question: 'Qual região mais cresceu no trimestre?',
            answer: 'Sul, com +18% em receita. O crescimento veio de clientes novos no atacado.',
            tiles: [
              { name: 'Painel comercial', kind: 'Power BI' },
              { name: 'Margem por cliente', kind: 'Análise' },
            ],
          },
        },
        {
          tag: 'Time · Pessoas + IA',
          title: 'Especialistas em dados, com nova entrega a cada 7 dias',
          text: 'Engenharia, modelagem, BI e IA trabalhando juntos. A IA acelera o trabalho e o time sênior garante que cada número está certo.',
          visual: {
            type: 'team',
            roles: ['Engenharia', 'Modelagem', 'BI', 'IA'],
            title: 'Nova entrega',
            days: ['Pedido', '', '', '', '', '', 'Entrega'],
            note: 'Validada com o seu time antes de ir para o ar',
          },
        },
      ],
    },
    compare: {
      label: 'Por que um hub',
      title: 'Uma contratação em vez de quatro',
      before: {
        name: 'Montando por partes',
        pieces: ['Plataforma', 'BI', 'Portal', 'Pessoas'],
        each: 'contrato',
        result: '4 fornecedores, 4 contratos e ninguém responde pelo todo.',
      },
      after: {
        name: 'Com o hub da Oika',
        title: 'Hub de dados Oika',
        result: '1 contratação, 1 preço e um time responsável do começo ao fim.',
      },
      items: [
        { icon: 'one', title: '1 contratação, toda a solução', text: 'Dados ponta a ponta, da fonte à decisão, com um único responsável.' },
        { icon: 'team', title: 'Especialistas em dados', text: 'Um time sênior de engenharia, modelagem, BI e IA, em vez de uma pessoa sozinha.' },
        { icon: 'plug', title: 'Soluções de mercado', text: 'Nada fica preso à Oika: se um dia quiser, você desconecta e segue com as mesmas tecnologias.' },
        { icon: 'fast', title: 'Velocidade e qualidade', text: 'Novas entregas em 7 dias, com cada número validado antes de chegar ao seu time.' },
        { icon: 'flex', title: 'Flexibilidade', text: 'Diferentes planos para cada momento: comece por um e mude quando fizer sentido.' },
      ],
    },
    plans: {
      label: 'Planos',
      title: 'Um plano para cada momento',
      subtitle: 'Cada plano inclui tudo o que vem no anterior. O valor depende do tamanho da operação: fale com o nosso time para montar o seu.',
      featured: 'Mais escolhido',
      price: 'Consulte o nosso time',
      cta: 'Consultar no WhatsApp',
      items: [
        {
          name: 'Oika Platform',
          for: 'Para ter a base de dados funcionando, com as ferramentas certas.',
          includes: null,
          features: ['Plataforma de dados (Nekt)', 'BI (Power BI)', 'Portal Oika Intelligence Center', 'Monitoramento dos dados e da plataforma'],
        },
        {
          name: 'Oika Core',
          for: 'Para avançar todo mês, com um time e uma IA trabalhando para você.',
          includes: 'Tudo do Oika Platform, mais:',
          featured: true,
          features: ['1 novo caso de uso por mês', 'IA da Oika: um analista de dados que responde sobre o seu negócio'],
        },
        {
          name: 'Oika Omni',
          for: 'Para usar os dados como vantagem, com modelos feitos para a sua empresa.',
          includes: 'Tudo do Oika Core, mais:',
          features: ['Modelos personalizados dentro do Oika Intelligence Center', 'Modelos analíticos avançados, como predição de churn'],
        },
      ],
    },
    final: {
      title: 'Vamos montar o hub de dados da sua empresa?',
      subtitle: 'Chame a gente no WhatsApp para entender o seu momento e escolher o plano certo.',
      cta: 'Falar com a Oika no WhatsApp',
    },
    whatsappMessage: 'Olá! Vi a proposta do hub de dados da Oika e quero entender qual plano faz sentido para a minha empresa.',
  },
};
