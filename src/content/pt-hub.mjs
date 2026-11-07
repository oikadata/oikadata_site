// Textos da página oculta da proposta comercial do hub de dados da Oika (versão futura).
// Sem preços: os planos levam para o WhatsApp, "consulte o nosso time".

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
    },
    stack: {
      label: 'Tudo num único preço',
      title: 'O que vem no hub de dados',
      subtitle: 'Em vez de contratar plataforma, BI, portal e pessoas separadamente, você contrata a Oika e recebe a solução inteira, funcionando junta.',
      price: 'Um único preço',
      items: [
        { kind: 'Plataforma de dados', name: 'Nekt', text: 'Onde os dados vivem: conexão com as fontes, camadas organizadas e regras do negócio.' },
        { kind: 'BI', name: 'Power BI', text: 'Painéis claros, que se atualizam sozinhos, com os números que cada área usa para decidir.' },
        { kind: 'Portal analítico', name: 'Oika Intelligence Center', text: 'Um só lugar para o seu time encontrar painéis, análises e a IA da Oika.' },
        { kind: 'Time', name: 'Pessoas + IA', text: 'Especialistas em dados da Oika, apoiados por IA, cuidando de tudo de ponta a ponta.' },
      ],
    },
    gains: {
      label: 'Por que um hub',
      title: 'Uma contratação, nenhuma peça solta',
      items: [
        { title: '1 contratação, toda a solução', text: 'Dados ponta a ponta, da fonte à decisão, com um único responsável e um único contrato.' },
        { title: 'Especialistas em dados', text: 'Um time sênior de engenharia, modelagem, BI e IA, em vez de uma pessoa sozinha.' },
        { title: 'Soluções de mercado', text: 'Nada fica preso à Oika: se um dia quiser, você despluga e segue com as mesmas tecnologias.' },
        { title: 'Velocidade e qualidade', text: 'Novas entregas em 7 dias, com cada número validado antes de chegar ao seu time.' },
        { title: 'Flexibilidade', text: 'Diferentes planos para cada momento da empresa: comece por um e mude quando fizer sentido.' },
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
