// Textos do Raio-X de Dados (páginas /raio-x/ e /raio-x/resultado/).
// Fonte: oika-data-assessment-online.md (v0.4). Códigos das opções: supabase/functions/_shared/raio-x/questionario.mjs.
// A biblioteca de textos do resultado (seção 7.4) precisa da aprovação do fundador (P-A3).

// Áreas do negócio usadas na pergunta 10 (Q8) e nos casos de uso do resultado.
const AREAS = {
  comercial: 'Comercial',
  marketing: 'Marketing e mídia',
  clientes: 'Clientes e atendimento',
  financeiro: 'Financeiro',
  produtos: 'Produtos e mix',
  operacoes: 'Operações',
  logistica: 'Logística e estoque',
  digital: 'Digital',
};

export default {
  'raio-x': {
    areaLabels: AREAS,
    resultPath: '/raio-x/resultado/',
    meta: {
      title: 'Raio-X de Dados | Oika Data',
      description:
        'Descubra em 3 minutos quanto sua empresa usa os próprios dados para decidir, e onde está o maior espaço de ganho. Resultado na hora, sem custo.',
    },
    intro: {
      title: 'Raio-X de Dados',
      promise:
        'Descubra em 3 minutos quanto sua empresa usa os próprios dados para decidir, e onde está o maior espaço de ganho. Resultado na hora.',
      facts: ['12 perguntas', 'cerca de 3 minutos', 'sem custo'],
      start: 'Começar o Raio-X',
      resume: 'Continuar de onde parei',
      restart: 'Começar de novo',
      note: 'No final, pedimos seu nome e e-mail para identificar o seu diagnóstico.',
      getTitle: 'O que você recebe',
      get: [
        'O nível de maturidade de dados da sua empresa',
        'Em que degrau das análises vocês estão: o que aconteceu, por que aconteceu, o que vai acontecer',
        'Se a sua base está pronta para a IA responder com contexto',
        'Três observações sobre o seu caso, com uma primeira pergunta para investigar',
        'Casos de uso sugeridos para as áreas que vocês mais querem enxergar, e um roteiro de por onde começar',
      ],
    },
    after: {
      title: 'Depois do Raio-X, o assessment completo',
      subtitle: 'Para empresas com o perfil que atendemos, o Raio-X é a primeira etapa de um diagnóstico mais profundo, sem custo.',
      steps: [
        { when: '3 minutos', name: 'Raio-X de Dados', text: 'O questionário e o resultado na hora.' },
        { when: '1 hora', name: 'Conversa sobre gestão', text: 'Dores, decisões e metas, com um sócio da Oika.' },
        { when: '1 hora a 1h30', name: 'Conversa sobre operação', text: 'Sistemas, planilhas e rotinas: de onde vêm os números.' },
        { when: '1 hora', name: 'Apresentação', text: 'Oportunidades priorizadas e um plano para 30, 60 e 90 dias.' },
      ],
    },
    ui: {
      back: 'Voltar',
      next: 'Continuar',
      progress: 'Pergunta {n} de {total}',
      contactProgress: 'Último passo',
      chooseUpTo: 'Escolha até {max}.',
      optional: 'opcional',
      submit: 'Ver meu resultado',
      sending: 'Calculando seu resultado…',
      errorSend: 'Não conseguimos enviar agora. Confira sua conexão e tente de novo em instantes.',
      errorRequired: 'Preencha este campo.',
      errorEmail: 'Confira o e-mail.',
      errorEmailGeneric: 'Use o seu e-mail corporativo. Não aceitamos e-mails pessoais, como Gmail ou Hotmail.',
      errorCnpj: 'Confira o CNPJ ou deixe em branco.',
      errorConsent: 'Para gerar o diagnóstico, precisamos do seu consentimento.',
      unavailable: 'O Raio-X está em manutenção. Tente de novo mais tarde ou fale com a gente.',
      keyboardHint: 'Dica: use as teclas numéricas para escolher e Enter para continuar.',
    },
    questions: {
      q1_modelo: {
        title: 'O que melhor descreve sua empresa?',
        options: {
          industria: 'Indústria',
          distribuicao: 'Distribuição / atacado',
          varejo: 'Varejo / vendas ao consumidor (B2C)',
          servicos_b2b: 'Serviços para empresas (B2B)',
          saas: 'Software / SaaS',
          imobiliario: 'Imobiliário (venda, locação ou administração)',
          outro: 'Outro',
        },
        open: { label: 'Qual?', placeholder: 'Opcional' },
      },
      q2_faturamento: {
        title: 'Qual o faturamento anual aproximado?',
        help: 'Usamos só para calibrar o diagnóstico ao porte da sua empresa. Fica entre nós.',
        options: {
          ate10: 'Até R$ 10 mi',
          '10_20': 'R$ 10 a 20 mi',
          '20_50': 'R$ 20 a 50 mi',
          '50_100': 'R$ 50 a 100 mi',
          '100_300': 'R$ 100 a 300 mi',
          '300mais': 'Acima de R$ 300 mi',
          nao_informar: 'Prefiro não informar',
        },
      },
      q3_pessoas: {
        title: 'Quantas pessoas trabalham na empresa?',
        options: { ate20: 'Até 20', '21_50': '21 a 50', '51_100': '51 a 100', '101_250': '101 a 250', '251_500': '251 a 500', '500mais': 'Mais de 500' },
      },
      q4_cargo: {
        title: 'Qual é o seu papel na empresa?',
        options: {
          socio_ceo: 'Sócio(a) / CEO',
          comercial: 'Diretoria ou gerência comercial',
          financeiro: 'Financeiro / controladoria',
          operacoes: 'Operações / administrativo',
          ti: 'TI / tecnologia',
          outro: 'Outro',
        },
      },
      q10_time_dados: {
        title: 'Existe alguém dedicado a dados ou BI na empresa?',
        options: { nao: 'Não', uma_pessoa: 'Sim, uma pessoa', time: 'Sim, um time (2 pessoas ou mais)' },
      },
      q5_integracao: {
        title: 'Hoje, os dados dos diferentes sistemas e áreas da empresa estão integrados?',
        options: {
          nao: 'Não, cada sistema ou área tem os seus',
          manual: 'Juntamos manualmente, em planilhas',
          parcial: 'Parte está integrada, parte não',
          sim: 'Sim, está tudo integrado numa base central',
        },
      },
      q6_consistencia: {
        title: 'Quando duas áreas trazem o mesmo número (ex.: faturamento do mês), eles batem?',
        options: { quase_nunca: 'Quase nunca', as_vezes: 'Às vezes', quase_sempre: 'Quase sempre', sempre: 'Sempre, existe uma fonte oficial' },
      },
      q12_cultura: {
        title: 'A empresa tem reuniões recorrentes para analisar os números com as áreas?',
        help: 'Pense em rotinas como reunião de resultados, de vendas ou de indicadores.',
        options: {
          nao: 'Não, os números aparecem quando alguém pede',
          irregular: 'Às vezes, sem rotina definida',
          mensal: 'Sim, uma vez por mês',
          semanal: 'Sim, toda semana ou com mais frequência',
        },
      },
      q7_analitica: {
        title: 'Com segurança e sem montar tudo do zero, vocês conseguem responder…',
        rows: {
          q7a_descritivo: { label: 'O que aconteceu?', example: 'Ex.: vendas do mês por cliente, produto ou vendedor' },
          q7b_diagnostico: { label: 'Por que aconteceu?', example: 'Ex.: o que explica uma queda de vendas ou de margem' },
          q7c_preditivo: { label: 'O que vai acontecer?', example: 'Ex.: previsão de vendas, demanda ou caixa' },
        },
        options: { nao: 'Não', em_parte: 'Em parte', sim: 'Sim' },
      },
      q11_ia: {
        title: 'Como a empresa usa inteligência artificial hoje?',
        options: {
          nao: 'Não usamos',
          individual: 'Algumas pessoas usam por conta própria, para tarefas gerais (textos, e-mails, pesquisas)',
          dados_manual: 'Usamos com dados da empresa, colando planilhas ou relatórios na ferramenta',
          conectada: 'Temos IA conectada aos nossos dados e sistemas',
        },
      },
      q8_perguntas: {
        title: 'Quais destas perguntas vocês gostariam de responder e hoje não conseguem com segurança?',
        options: {
          desempenho: 'Qual o desempenho real de cada vendedor, equipe ou região?',
          previsao: 'Quanto vamos vender (ou faturar) nos próximos meses?',
          mkt_retorno: 'Quais canais e campanhas de mídia trazem clientes com melhor retorno?',
          perda: 'Quais clientes estão em risco de parar de comprar, e por quê?',
          resultado_variou: 'Por que o resultado ou a margem variou de um período para outro?',
          cliente_lucro: 'Quais clientes realmente dão lucro?',
          produto_retorno: 'Quais produtos ou serviços dão mais retorno?',
          custos: 'Onde estão os custos e desperdícios da operação que dá para reduzir?',
          estoque_entrega: 'Onde temos estoque parado, ruptura ou atraso nas entregas?',
          digital_funil: 'Em que ponto do site, app ou e-commerce os clientes desistem de comprar?',
        },
        // Área de cada pergunta: aparece como etiqueta na opção e escolhe os casos de uso do resultado.
        areas: {
          desempenho: 'comercial',
          previsao: 'comercial',
          mkt_retorno: 'marketing',
          perda: 'clientes',
          resultado_variou: 'financeiro',
          cliente_lucro: 'financeiro',
          produto_retorno: 'produtos',
          custos: 'operacoes',
          estoque_entrega: 'logistica',
          digital_funil: 'digital',
        },
        open: { label: 'Outra pergunta que tira seu sono?', placeholder: 'Opcional' },
      },
      q9_momento: {
        title: 'Qual a prioridade de resolver isso?',
        options: { explorando: 'Só explorando por enquanto', '6_meses': 'Quero resolver nos próximos 6 meses', urgente: 'É urgente: próximos 3 meses' },
      },
    },
    contact: {
      title: 'Quase lá: para quem é este diagnóstico?',
      help: 'Seu resultado aparece logo depois.',
      fields: {
        nome: { label: 'Nome', autocomplete: 'name' },
        email: { label: 'E-mail corporativo', autocomplete: 'email', type: 'email', help: 'Use o e-mail da empresa. Não aceitamos e-mails pessoais.' },
        empresa: { label: 'Empresa', autocomplete: 'organization' },
        cnpj: { label: 'CNPJ', help: 'Opcional. Ajuda a enriquecer seu diagnóstico.', inputmode: 'numeric' },
        whatsapp: { label: 'WhatsApp', autocomplete: 'tel', type: 'tel' },
      },
      consent:
        'Concordo que a Oika Data use minhas respostas para gerar meu diagnóstico e entre em contato comigo sobre ele. Posso pedir a exclusão dos meus dados a qualquer momento.',
      privacyLabel: 'Política de Privacidade',
      privacyHref: '/privacidade/',
      newsletter: 'Quero receber conteúdos da Oika Data sobre uso de dados na gestão.',
    },
  },

  'raio-x-resultado': {
    retakeHref: '/raio-x/',
    meta: {
      title: 'Seu Raio-X de Dados | Oika Data',
      description: 'Resultado do Raio-X de Dados.',
    },
    ui: {
      loading: 'Carregando seu resultado…',
      notFound: 'Não encontramos este resultado. Confira o link ou faça o Raio-X de novo.',
      expired: 'Este resultado expirou. Faça o Raio-X de novo para ver um diagnóstico atualizado.',
      error: 'Não conseguimos carregar o resultado agora. Tente de novo em instantes.',
      retake: 'Fazer o Raio-X',
      eyebrow: 'Raio-X de Dados',
      levelLabel: 'Nível {n} de 4',
      scoreLabel: 'Score de maturidade',
      ladderTitle: 'A escada das análises',
      ladderYouAreHere: 'Vocês estão aqui',
      dimensionsTitle: 'As quatro dimensões',
      aiTitle: 'Prontidão para IA',
      aiAxisBase: 'Base de dados',
      aiAxisUse: 'Uso de IA',
      aiBaseWeak: 'Frágil',
      aiBaseSolid: 'Sólida',
      aiNoContext: 'Sem contexto',
      aiContext: 'Com contexto',
      observationsTitle: 'Observações sobre o seu caso',
      observationsWhy: 'Por que importa',
      observationsQuestion: 'Primeira pergunta para investigar',
      useCasesTitle: 'Casos de uso sugeridos para vocês',
      useCasesSub: 'A partir das perguntas que vocês querem responder.',
      useCasesSubDefault: 'Por onde empresas como a sua costumam começar.',
      roadmapTitle: 'Por onde começar',
      roadmapCycle: 'Depois, novos casos de uso a cada ciclo de 2 a 4 semanas.',
      helpTitle: 'Como a Oika ajuda no seu caso',
      startTitle: 'Por onde empresas no seu estágio costumam começar',
      saveLink: 'Guarde o link desta página para ver o resultado depois.',
      copyLink: 'Copiar link',
      copied: 'Link copiado',
    },
    ladder: [
      { id: 'descritivo', question: 'O que aconteceu?', name: 'Descritivo' },
      { id: 'diagnostico', question: 'Por que aconteceu?', name: 'Diagnóstico' },
      { id: 'preditivo', question: 'O que vai acontecer?', name: 'Preditivo' },
    ],
    levels: {
      1: {
        name: 'Intuição',
        summary: 'As decisões dependem da experiência de quem decide. Há muito valor parado nos dados que vocês já têm.',
        start:
          'Empresas neste estágio costumam começar juntando as fontes principais (vendas, financeiro e clientes) numa base única e respondendo bem uma pergunta só: a que mais pesa no resultado. Um número confiável muda a conversa mais do que dez painéis.',
      },
      2: {
        name: 'Reativo',
        summary: 'Os números existem, mas custam caro para montar e chegam tarde. O ganho está em confiabilidade e velocidade.',
        start:
          'O primeiro passo costuma ser automatizar o relatório que mais consome tempo hoje e definir uma fonte oficial para os números que mais geram discussão. Com isso, o time para de montar planilha e passa a olhar para as causas.',
      },
      3: {
        name: 'Estruturado',
        summary: 'A base está montada. O próximo salto é entender causas e antecipar o que vem.',
        start:
          'Aqui o ganho costuma vir de análises que explicam variações (margem, mix, perda de clientes) e dos primeiros modelos de previsão. É também o momento certo para colocar IA para responder perguntas sobre a base que vocês já têm.',
      },
      4: {
        name: 'Orientado a dados',
        summary: 'Os dados já fazem parte da gestão. O ganho está em previsão e análises avançadas.',
        start:
          'Empresas neste estágio avançam com modelos preditivos e de recomendação ligados à operação, e com IA conectada à base para que mais pessoas façam perguntas sem depender do time de dados.',
      },
    },
    steps: {
      antes_descritivo: {
        name: 'Antes do descritivo',
        summary: 'Ainda é difícil enxergar com clareza o que aconteceu.',
        next: 'O próximo degrau é ter, sem esforço, os números do que aconteceu: vendas, margem e clientes por período, com uma fonte só.',
      },
      descritivo: {
        name: 'Descritivo',
        summary: 'Vocês enxergam o passado.',
        next: 'O próximo degrau é entender por que os números mudaram: cruzar vendas, custos e clientes para explicar uma queda ou uma alta.',
      },
      diagnostico: {
        name: 'Diagnóstico',
        summary: 'Vocês entendem as causas.',
        next: 'O próximo degrau é antecipar: prever vendas, demanda ou caixa com base no histórico que vocês já têm.',
      },
      preditivo: {
        name: 'Preditivo',
        summary: 'Vocês antecipam o futuro.',
        next: 'O próximo passo é levar as previsões para a rotina: recomendações para vendas, compras e preço, e IA respondendo sobre a base.',
      },
    },
    // Uma frase por dimensão e faixa de score: 0–25, 26–50, 51–75, 76–100.
    dimensions: {
      integracao: {
        name: 'Integração',
        question: 'Os dados das áreas estão juntos?',
        bands: [
          'Cada área tem os seus dados. Juntar tudo hoje depende de esforço manual, e isso limita qualquer análise.',
          'Os dados se juntam à mão, em planilhas. Funciona, mas custa horas e abre espaço para erro.',
          'Parte dos dados já está integrada. O ganho está em trazer o que falta para a mesma base.',
          'Os dados estão numa base central. É a fundação para análises mais avançadas e para IA.',
        ],
      },
      confiabilidade: {
        name: 'Confiabilidade',
        question: 'Os números batem?',
        bands: [
          'Os números raramente batem entre as áreas. Antes de discutir a decisão, discute-se o número.',
          'Os números batem às vezes. Uma definição oficial para os principais indicadores resolveria boa parte das discussões.',
          'Os números quase sempre batem. Falta formalizar as regras para que isso não dependa de quem monta o relatório.',
          'Existe uma fonte oficial. Vocês podem confiar no número e discutir o que fazer com ele.',
        ],
      },
      cultura: {
        name: 'Cultura de dados',
        question: 'Existe rotina para analisar os números?',
        bands: [
          'Os números aparecem quando alguém pede. Sem uma rotina, as decisões dependem de quem lembra de olhar.',
          'A análise acontece de vez em quando. Uma reunião fixa, com os mesmos indicadores, muda o ritmo das decisões.',
          'Existe uma rotina mensal. O próximo passo é ter números atualizados para acompanhar a semana, não só o mês.',
          'Os números fazem parte da rotina das áreas. O ganho está em levar análises mais profundas para essas reuniões.',
        ],
      },
      analitica: {
        name: 'Maturidade analítica',
        question: 'Até onde as análises chegam?',
        bands: [
          'Responder o que aconteceu ainda exige montar tudo do zero.',
          'Vocês respondem o que aconteceu, mas entender as causas ainda é difícil.',
          'Vocês entendem as causas na maior parte das vezes. Antecipar o futuro é o próximo salto.',
          'Vocês respondem o que aconteceu, por quê, e já antecipam o que vem.',
        ],
      },
    },
    quadrants: {
      primeiro_base: {
        title: 'Primeiro a base',
        text: 'Antes da IA gerar valor, os dados precisam estar juntos e confiáveis. Com a base pronta, a IA passa a responder sobre a sua empresa, e não no genérico.',
      },
      base_pronta: {
        title: 'Base pronta, IA parada',
        text: 'Os dados de vocês já estão em bom estado. Há uma oportunidade rápida de colocar IA para trabalhar sobre eles e responder perguntas do negócio em minutos.',
      },
      ia_a_frente: {
        title: 'IA à frente da base',
        text: 'A IA responde rápido, mas sobre dados que nem sempre batem. O risco é decidir com confiança em cima de um número errado. Organizar a base é o que torna a IA confiável.',
      },
      ia_com_contexto: {
        title: 'IA com contexto',
        text: 'A base sustenta a IA. O ganho está em ampliar os casos de uso e levar as respostas para mais áreas.',
      },
    },
    aiManualNote:
      'Vocês já usam IA com dados da empresa, colando planilhas e relatórios. Vale combinar quais dados podem ir para ferramentas externas, e como, para usar com segurança.',
    // Observações pré-escritas (fallback da seção 7.2). Escolha: próximo degrau, primeira pergunta
    // marcada em Q8, IA (quando a IA está à frente da base ou parada) e a dimensão mais fraca.
    observations: {
      steps: {
        antes_descritivo: {
          title: 'Enxergar o que aconteceu, sem esforço',
          text: 'Hoje, responder o que aconteceu no mês exige montar números do zero. Isso consome o tempo de quem deveria estar decidindo e empurra as decisões para depois.',
          why: 'Sem uma visão clara do passado, qualquer análise de causa ou previsão fica sem base.',
          question: 'Quais três números vocês gostariam de ver toda segunda-feira, sem montar nada?',
        },
        descritivo: {
          title: 'Do que aconteceu para o porquê',
          text: 'Vocês já enxergam o que aconteceu. O próximo passo é explicar as variações: por que a venda caiu numa região, por que a margem mudou num mês.',
          why: 'Entender a causa é o que transforma um relatório em decisão.',
          question: 'Qual foi a última variação de resultado que ninguém conseguiu explicar com segurança?',
        },
        diagnostico: {
          title: 'Das causas para a previsão',
          text: 'Vocês já explicam por que os números mudam. Com esse histórico organizado, dá para antecipar vendas, demanda ou caixa com uma margem de erro conhecida.',
          why: 'Antecipar dá tempo para agir: comprar melhor, ajustar a equipe, proteger o caixa.',
          question: 'Que decisão ficaria mais fácil se vocês soubessem o resultado do próximo trimestre?',
        },
        preditivo: {
          title: 'Levar a previsão para a rotina',
          text: 'Vocês já antecipam o que vem. O ganho agora está em transformar previsões em recomendações que chegam a quem decide no dia a dia.',
          why: 'Previsão que não muda a operação vira só mais um relatório.',
          question: 'Em que decisão do dia a dia uma recomendação automática faria mais diferença?',
        },
      },
      questions: {
        resultado_variou: {
          title: 'Entender por que o resultado variou',
          text: 'Explicar a variação de resultado ou margem exige cruzar vendas, preços, custos e mix no mesmo lugar. Quando isso está espalhado, a resposta chega tarde ou não chega.',
          why: 'Saber o que puxou o resultado separa o que foi pontual do que vai se repetir.',
          question: 'Quanto da última variação de margem veio de preço, de volume e de mix?',
        },
        cliente_lucro: {
          title: 'Descobrir quais clientes dão lucro',
          text: 'Faturamento por cliente é fácil de ver. Lucro por cliente exige somar descontos, frete, prazo e custo de atender, o que quase nunca está no mesmo lugar.',
          why: 'Clientes grandes nem sempre são os mais rentáveis, e isso muda onde vale investir.',
          question: 'Quais clientes estão entre os maiores em faturamento e os menores em margem?',
        },
        produto_retorno: {
          title: 'Ver o retorno real de cada produto',
          text: 'O retorno de um produto ou serviço depende de margem, giro e esforço de venda. Olhar só para a receita esconde o que de fato sustenta o resultado.',
          why: 'O mix é uma das alavancas mais rápidas de margem.',
          question: 'Quais produtos ou serviços vendem muito e deixam pouco?',
        },
        desempenho: {
          title: 'Medir o desempenho real de cada frente',
          text: 'Comparar vendedores, canais ou unidades com justiça exige o mesmo critério para todos: mesma base, mesmas regras, mesmo período.',
          why: 'Sem um número comum, a conversa sobre desempenho vira opinião.',
          question: 'Que indicador vocês usariam para comparar todas as unidades ou vendedores da mesma forma?',
        },
        previsao: {
          title: 'Prever vendas com o histórico que existe',
          text: 'Uma previsão útil começa pelo histórico organizado de vendas, sazonalidade e carteira. Com isso, dá para estimar os próximos meses com uma margem de erro conhecida.',
          why: 'A previsão orienta compras, equipe e caixa antes que o problema apareça.',
          question: 'Com quantos meses de antecedência vocês precisariam saber a venda para decidir melhor?',
        },
        perda: {
          title: 'Achar onde vocês perdem clientes',
          text: 'Clientes raramente avisam que vão parar de comprar. O sinal aparece antes nos dados: queda de frequência, de volume ou de mix.',
          why: 'Recuperar um cliente em risco custa bem menos do que conquistar um novo.',
          question: 'Quais clientes compravam todo mês e reduziram a frequência nos últimos 90 dias?',
        },
        mkt_retorno: {
          title: 'Saber qual mídia traz cliente bom',
          text: 'Custo por clique e por lead aparecem na ferramenta de mídia. O que quase nunca aparece é quanto cada canal trouxe em vendas e margem, porque isso está no CRM e no financeiro.',
          why: 'Sem ligar mídia a venda, o orçamento vai para o canal mais barato, não para o mais rentável.',
          question: 'Qual canal traz o cliente que mais compra depois da primeira venda?',
        },
        estoque_entrega: {
          title: 'Equilibrar estoque e entrega',
          text: 'Estoque parado e ruptura costumam conviver na mesma empresa: sobra o que não gira e falta o que vende. Juntar vendas, compras e estoque mostra onde está cada um.',
          why: 'Estoque parado é caixa parado; ruptura é venda perdida.',
          question: 'Quais itens ficaram sem estoque no último mês enquanto outros passaram de 90 dias parados?',
        },
        digital_funil: {
          title: 'Entender onde o cliente desiste',
          text: 'O site e o app registram cada passo do cliente, mas esses dados raramente se cruzam com as vendas. Ligar as duas pontas mostra em que etapa e para qual público a compra trava.',
          why: 'Pequenas melhorias no funil viram receita sem aumentar o investimento em mídia.',
          question: 'Em que etapa do site ou app vocês perdem mais clientes entre a visita e a compra?',
        },
        custos: {
          title: 'Encontrar custos que dá para reduzir',
          text: 'Custos que dá para reduzir costumam estar espalhados: frete, devoluções, descontos fora da política, estoque parado. Juntos, eles aparecem.',
          why: 'Cada real de custo evitado vai direto para o resultado.',
          question: 'Quais três linhas de custo cresceram mais rápido que a receita no último ano?',
        },
      },
      ai: {
        ia_a_frente: {
          title: 'Dar à IA uma base confiável',
          text: 'A IA já está em uso com dados da empresa, mas a base nem sempre bate. A resposta sai rápida e convincente, mesmo quando o número de origem está errado.',
          why: 'IA sobre dado frágil erra com confiança, e isso é pior do que não responder.',
          question: 'Quais perguntas vocês já fazem para a IA, e como conferem se a resposta está certa?',
        },
        base_pronta: {
          title: 'Colocar a IA para trabalhar nos dados',
          text: 'Os dados de vocês já estão em bom estado, mas a IA ainda não usa esse contexto. Conectar as duas coisas permite responder perguntas do negócio em minutos.',
          why: 'É um ganho rápido: a parte difícil, a base, já está feita.',
          question: 'Que pergunta vocês fariam para a IA se ela conhecesse os números da empresa?',
        },
      },
      dimensions: {
        integracao: {
          title: 'Juntar os dados das áreas',
          text: 'Com os dados separados por área, cada análise começa com uma rodada de planilhas. Uma base única elimina esse retrabalho e abre espaço para análises que hoje não acontecem.',
          why: 'A integração é o que permite cruzar vendas, financeiro e operação na mesma pergunta.',
          question: 'Qual relatório hoje exige juntar dados de mais áreas para ficar pronto?',
        },
        confiabilidade: {
          title: 'Ter um número oficial',
          text: 'Quando duas áreas trazem números diferentes, a reunião vira uma discussão sobre qual está certo. Uma fonte oficial para os principais indicadores muda isso.',
          why: 'Uma boa decisão depende de um número em que todos confiam.',
          question: 'Qual indicador mais gera discussão entre as áreas hoje?',
        },
        cultura: {
          title: 'Criar a rotina de olhar os números',
          text: 'Sem uma reunião fixa para analisar os números, cada área decide no seu ritmo e os problemas aparecem tarde. Uma rotina curta, com poucos indicadores, já muda a qualidade das decisões.',
          why: 'Dado que ninguém olha na hora certa não muda nenhuma decisão.',
          question: 'Quais cinco indicadores a diretoria deveria olhar toda semana?',
        },
        analitica: {
          title: 'Sair da montagem de relatórios',
          text: 'Boa parte do tempo ainda vai para montar números, e pouco sobra para analisar. Automatizar o básico libera o time para entender causas e antecipar resultados.',
          why: 'Tempo de análise gera decisão; tempo de montagem, não.',
          question: 'Quantas horas por mês o time gasta montando relatórios que se repetem?',
        },
      },
    },
    areaLabels: AREAS,
    // Casos de uso por área, sugeridos conforme as perguntas marcadas na pergunta 10 (Q8).
    // Sem perguntas marcadas, o resultado sugere as áreas de `defaultAreas`.
    useCases: {
      comercial: [
        'Dashboard de performance comercial, por vendedor, equipe e região',
        'Visões segmentadas da carteira: clientes por perfil, frequência e potencial',
        'Projeção de vendas para os próximos meses',
        'Recomendação de produtos para a equipe comercial: o que oferecer a cada cliente',
      ],
      marketing: [
        'Retorno de mídia por canal e campanha, até a venda e a margem',
        'Funil do lead ao cliente, ligando marketing e comercial',
        'Segmentação de público para campanhas',
        'Custo de aquisição comparado ao valor de cada cliente ao longo do tempo',
      ],
      clientes: [
        'Alerta de clientes em risco de parar de comprar',
        'Análise dos motivos de perda e de reclamação',
        'Visão única de cada cliente: compras, atendimento e financeiro',
        'Régua de reativação para clientes inativos',
      ],
      financeiro: [
        'Margem real por cliente, produto e canal',
        'Análise da variação do resultado: preço, volume e mix',
        'DRE gerencial e fechamento do mês automatizados',
        'Projeção de caixa',
      ],
      produtos: [
        'Rentabilidade e giro por produto ou serviço',
        'Curva ABC e revisão de mix',
        'Preço com base na margem real',
        'Produtos que costumam ser comprados juntos',
      ],
      operacoes: [
        'Custos por processo e centro de custo',
        'Indicadores operacionais: produtividade, prazos e retrabalho',
        'Alertas de desvio de custo em relação à meta',
      ],
      logistica: [
        'Giro e cobertura de estoque, com alerta de itens parados',
        'Alerta de ruptura antes de faltar produto',
        'Desempenho das entregas: prazo e custo por rota',
        'Previsão de demanda para planejar as compras',
      ],
      digital: [
        'Funil do site, app ou e-commerce: onde o cliente desiste',
        'Comportamento de navegação ligado às vendas',
        'Testes de oferta e de página com resultado medido',
      ],
    },
    defaultAreas: ['comercial', 'financeiro'],
    // Roteiro visual de ciclos curtos. {caso} vira o primeiro caso de uso sugerido.
    roadmap: [
      { when: 'Semanas 1 e 2', title: 'Integração', text: 'Conectamos as fontes de dados (ERP, CRM, planilhas) numa base única, na nuvem da sua empresa.' },
      { when: 'Semanas 2 e 3', title: 'Modelagem', text: 'Organizamos os dados e escrevemos as regras de negócio com as áreas: um número só para todos.' },
      { when: 'Semana 4', title: 'Primeiro caso de uso', text: '{caso}, no ar e em uso.' },
      { when: 'A cada ciclo', title: 'Expansão', text: 'Um novo caso de uso a cada 2 a 4 semanas, sobre a mesma base, incluindo IA com contexto.' },
    ],
    // Como a Oika ajuda: uma frase por ponto fraco do diagnóstico (as duas dimensões mais fracas
    // e a prontidão para IA quando ela pede ação), mais o fecho.
    help: {
      intro: 'A Oika é o time de dados que falta na sua empresa: gente sênior, agentes de IA e plataforma, num contrato só. Para o seu diagnóstico, isso quer dizer:',
      dimensions: {
        integracao: 'Juntar os dados de ERP, CRM e planilhas numa base única, atualizada sozinha.',
        confiabilidade: 'Definir com as áreas as regras de negócio e um número oficial para os principais indicadores.',
        cultura: 'Montar a rotina de análise: os painéis certos para a reunião de cada área, com números da semana.',
        analitica: 'Ir do que aconteceu para o porquê e para o que vai acontecer, com análises de causa e previsões.',
      },
      ai: {
        ia_a_frente: 'Dar à IA que vocês já usam uma base confiável, para que ela responda com os números certos.',
        base_pronta: 'Conectar a IA à base que vocês já têm, para responder perguntas do negócio em minutos.',
      },
      closing: 'Começamos pelo Sprint de Valor: 30 dias, um caso de uso, sem fidelidade.',
    },
    // Chamada final. Agendar é a ação principal para todos; o texto muda conforme a qualificação
    // (o respondente nunca vê a categoria).
    cta: {
      button: 'Agendar conversa de 30 min',
      agendar: {
        title: 'Vamos olhar este diagnóstico juntos?',
        text: 'Em 30 minutos, um especialista revisa o seu Raio-X com você e mostra por onde começar. Se fizer sentido, seguimos para o assessment completo: duas conversas e uma apresentação com oportunidades priorizadas e um plano para 30, 60 e 90 dias. Sem custo.',
      },
      contato: {
        title: 'Vamos olhar este diagnóstico juntos?',
        text: 'Um especialista da Oika vai analisar o seu Raio-X e entrar em contato em até 1 dia útil. Se preferir, já escolha um horário.',
      },
      explorar: {
        title: 'Quer conversar sobre o seu diagnóstico?',
        text: 'Em 30 minutos, mostramos como empresas no seu estágio costumam começar e o que faria sentido para vocês.',
        linksTitle: 'Ou continue explorando:',
        links: [
          { label: 'O que entregamos', href: '/#entrega' },
          { label: 'Planos', href: '/planos/' },
          { label: 'Por que a Oika', href: '/por-que-a-oika/' },
        ],
      },
    },
  },
};
