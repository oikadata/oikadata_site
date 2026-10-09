// Data X-Ray texts in English (pages /en/data-x-ray/ and /en/data-x-ray/result/).
// Translation of src/content/pt-raio-x.mjs: when a text changes there, change it here too.
// Option codes: supabase/functions/_shared/raio-x/questionario.mjs.

// Business areas used in question 10 (Q8) and in the use cases of the result.
const AREAS = {
  comercial: 'Sales',
  marketing: 'Marketing and media',
  clientes: 'Customers and service',
  financeiro: 'Finance',
  produtos: 'Products and mix',
  operacoes: 'Operations',
  logistica: 'Logistics and inventory',
  digital: 'Digital',
};

export default {
  'raio-x': {
    areaLabels: AREAS,
    resultPath: '/en/data-x-ray/result/',
    meta: {
      title: 'Data X-Ray | Oika Data',
      description:
        'Find out in 3 minutes how much your company uses its own data to decide, and where the biggest room for gains is. Instant results, free of charge.',
    },
    intro: {
      title: 'Data X-Ray',
      promise:
        'Find out in 3 minutes how much your company uses its own data to decide, and where the biggest room for gains is. Instant results.',
      facts: ['12 questions', 'about 3 minutes', 'free'],
      start: 'Start the X-Ray',
      resume: 'Continue where I left off',
      restart: 'Start over',
      note: 'At the end, we ask for your name and email to identify your diagnosis.',
      getTitle: 'What you get',
      get: [
        'Your company’s data maturity level',
        'Which step of analysis you are on: what happened, why it happened, what will happen',
        'Whether your data foundation is ready for AI to answer with context',
        'Three observations about your case, with a first question to investigate',
        'Suggested use cases for the areas you most want to see, and a roadmap of where to start',
      ],
    },
    after: {
      title: 'After the X-Ray, the full assessment',
      subtitle: 'For companies that fit the profile we serve, the X-Ray is the first step of a deeper diagnosis, free of charge.',
      steps: [
        { when: '3 minutes', name: 'Data X-Ray', text: 'The questionnaire and the instant result.' },
        { when: '1 hour', name: 'Management conversation', text: 'Pains, decisions and goals, with an Oika partner.' },
        { when: '1 to 1.5 hours', name: 'Operations conversation', text: 'Systems, spreadsheets and routines: where the numbers come from.' },
        { when: '1 hour', name: 'Presentation', text: 'Prioritized opportunities and a 30, 60 and 90-day plan.' },
      ],
    },
    ui: {
      back: 'Back',
      next: 'Continue',
      progress: 'Question {n} of {total}',
      contactProgress: 'Last step',
      chooseUpTo: 'Choose up to {max}.',
      optional: 'optional',
      submit: 'See my result',
      sending: 'Calculating your result…',
      errorSend: 'We couldn’t send it right now. Check your connection and try again in a moment.',
      errorRequired: 'Please fill in this field.',
      errorEmail: 'Please check the email.',
      errorEmailGeneric: 'Please use your work email. We don’t accept personal emails such as Gmail or Hotmail.',
      errorCnpj: 'Please check the CNPJ or leave it blank.',
      errorConsent: 'We need your consent to generate the diagnosis.',
      unavailable: 'The X-Ray is under maintenance. Please try again later or get in touch.',
      keyboardHint: 'Tip: use the number keys to choose and Enter to continue.',
    },
    questions: {
      q1_modelo: {
        title: 'What best describes your company?',
        options: {
          industria: 'Manufacturing',
          distribuicao: 'Distribution / wholesale',
          varejo: 'Retail / consumer sales (B2C)',
          servicos_b2b: 'Business services (B2B)',
          saas: 'Software / SaaS',
          imobiliario: 'Real estate (sales, rentals or property management)',
          outro: 'Other',
        },
        open: { label: 'Which one?', placeholder: 'Optional' },
      },
      q2_faturamento: {
        title: 'What is your approximate annual revenue?',
        help: 'In Brazilian reais (R$). We only use it to calibrate the diagnosis to your company’s size. It stays between us.',
        options: {
          ate10: 'Up to R$ 10M',
          '10_20': 'R$ 10M to 20M',
          '20_50': 'R$ 20M to 50M',
          '50_100': 'R$ 50M to 100M',
          '100_300': 'R$ 100M to 300M',
          '300mais': 'Over R$ 300M',
          nao_informar: 'I’d rather not say',
        },
      },
      q3_pessoas: {
        title: 'How many people work at the company?',
        options: { ate20: 'Up to 20', '21_50': '21 to 50', '51_100': '51 to 100', '101_250': '101 to 250', '251_500': '251 to 500', '500mais': 'More than 500' },
      },
      q4_cargo: {
        title: 'What is your role at the company?',
        options: {
          socio_ceo: 'Partner / CEO',
          comercial: 'Sales director or manager',
          financeiro: 'Finance / controllership',
          operacoes: 'Operations / administration',
          ti: 'IT / technology',
          outro: 'Other',
        },
      },
      q10_time_dados: {
        title: 'Is there anyone dedicated to data or BI at the company?',
        options: { nao: 'No', uma_pessoa: 'Yes, one person', time: 'Yes, a team (2 or more people)' },
      },
      q5_integracao: {
        title: 'Today, is the data from the company’s different systems and departments integrated?',
        options: {
          nao: 'No, each system or department has its own',
          manual: 'We put it together manually, in spreadsheets',
          parcial: 'Part of it is integrated, part is not',
          sim: 'Yes, everything is integrated in a central foundation',
        },
      },
      q6_consistencia: {
        title: 'When two departments bring the same number (e.g., monthly revenue), do they match?',
        options: { quase_nunca: 'Almost never', as_vezes: 'Sometimes', quase_sempre: 'Almost always', sempre: 'Always, there is an official source' },
      },
      q12_cultura: {
        title: 'Does the company hold recurring meetings to analyze the numbers with the departments?',
        help: 'Think of routines such as results, sales or KPI meetings.',
        options: {
          nao: 'No, the numbers show up when someone asks',
          irregular: 'Sometimes, with no set routine',
          mensal: 'Yes, once a month',
          semanal: 'Yes, every week or more often',
        },
      },
      q7_analitica: {
        title: 'Reliably, and without building everything from scratch, can you answer…',
        rows: {
          q7a_descritivo: { label: 'What happened?', example: 'E.g., monthly sales by customer, product or salesperson' },
          q7b_diagnostico: { label: 'Why did it happen?', example: 'E.g., what explains a drop in sales or margin' },
          q7c_preditivo: { label: 'What will happen?', example: 'E.g., sales, demand or cash forecast' },
        },
        options: { nao: 'No', em_parte: 'Partly', sim: 'Yes' },
      },
      q11_ia: {
        title: 'How does the company use artificial intelligence today?',
        options: {
          nao: 'We don’t use it',
          individual: 'Some people use it on their own, for general tasks (writing, emails, research)',
          dados_manual: 'We use it with company data, pasting spreadsheets or reports into the tool',
          conectada: 'We have AI connected to our data and systems',
        },
      },
      q8_perguntas: {
        title: 'Which of these questions would you like to answer and can’t answer reliably today?',
        options: {
          desempenho: 'What is the real performance of each salesperson, team or region?',
          previsao: 'How much will we sell (or bill) in the coming months?',
          mkt_retorno: 'Which media channels and campaigns bring customers with the best return?',
          perda: 'Which customers are at risk of stopping buying, and why?',
          resultado_variou: 'Why did results or margin change from one period to another?',
          cliente_lucro: 'Which customers are really profitable?',
          produto_retorno: 'Which products or services bring the best return?',
          custos: 'Where are the operational costs and waste we could cut?',
          estoque_entrega: 'Where do we have idle stock, stockouts or late deliveries?',
          digital_funil: 'At what point on the website, app or e-commerce do customers give up buying?',
        },
        // Area of each question: shown as a tag on the option and used to pick the use cases in the result.
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
        open: { label: 'Another question that keeps you up at night?', placeholder: 'Optional' },
      },
      q9_momento: {
        title: 'How much of a priority is solving this?',
        options: { explorando: 'Just exploring for now', '6_meses': 'I want to solve it in the next 6 months', urgente: 'It’s urgent: next 3 months' },
      },
    },
    contact: {
      title: 'Almost there: who is this diagnosis for?',
      help: 'Your result shows up right after.',
      fields: {
        nome: { label: 'Name', autocomplete: 'name' },
        email: { label: 'Work email', autocomplete: 'email', type: 'email', help: 'Use your company email. We don’t accept personal emails.' },
        empresa: { label: 'Company', autocomplete: 'organization' },
        cnpj: { label: 'CNPJ', help: 'Optional, for companies registered in Brazil. Helps enrich your diagnosis.', inputmode: 'numeric' },
        whatsapp: { label: 'WhatsApp', autocomplete: 'tel', type: 'tel' },
      },
      consent:
        'I agree that Oika Data may use my answers to generate my diagnosis and contact me about it. I can ask for my data to be deleted at any time.',
      privacyLabel: 'Privacy Policy (in Portuguese)',
      privacyHref: '/privacidade/',
      newsletter: 'I want to receive content from Oika Data on using data in management.',
    },
  },

  'raio-x-resultado': {
    retakeHref: '/en/data-x-ray/',
    meta: {
      title: 'Your Data X-Ray | Oika Data',
      description: 'Data X-Ray result.',
    },
    ui: {
      loading: 'Loading your result…',
      notFound: 'We couldn’t find this result. Check the link or take the X-Ray again.',
      expired: 'This result has expired. Take the X-Ray again for an updated diagnosis.',
      error: 'We couldn’t load the result right now. Please try again in a moment.',
      retake: 'Take the X-Ray',
      eyebrow: 'Data X-Ray',
      levelLabel: 'Level {n} of 4',
      scoreLabel: 'Maturity score',
      ladderTitle: 'The analytics ladder',
      ladderYouAreHere: 'You are here',
      dimensionsTitle: 'The four dimensions',
      aiTitle: 'AI readiness',
      aiAxisBase: 'Data foundation',
      aiAxisUse: 'AI use',
      aiBaseWeak: 'Fragile',
      aiBaseSolid: 'Solid',
      aiNoContext: 'No context',
      aiContext: 'With context',
      observationsTitle: 'Observations about your case',
      observationsWhy: 'Why it matters',
      observationsQuestion: 'First question to investigate',
      useCasesTitle: 'Suggested use cases for you',
      useCasesSub: 'Based on the questions you want to answer.',
      useCasesSubDefault: 'Where companies like yours usually start.',
      roadmapTitle: 'Where to start',
      roadmapCycle: 'Then, new use cases every 2 to 4-week cycle.',
      helpTitle: 'How Oika helps in your case',
      startTitle: 'Where companies at your stage usually start',
      saveLink: 'Save the link to this page to see the result later.',
      copyLink: 'Copy link',
      copied: 'Link copied',
    },
    ladder: [
      { id: 'descritivo', question: 'What happened?', name: 'Descriptive' },
      { id: 'diagnostico', question: 'Why did it happen?', name: 'Diagnostic' },
      { id: 'preditivo', question: 'What will happen?', name: 'Predictive' },
    ],
    levels: {
      1: {
        name: 'Intuition',
        summary: 'Decisions depend on the experience of whoever decides. There is a lot of value sitting idle in the data you already have.',
        start:
          'Companies at this stage usually start by bringing the main sources (sales, finance and customers) into a single foundation and answering one question well: the one that weighs most on results. One reliable number changes the conversation more than ten dashboards.',
      },
      2: {
        name: 'Reactive',
        summary: 'The numbers exist, but they are costly to build and arrive late. The gain is in reliability and speed.',
        start:
          'The first step is usually to automate the report that takes the most time today and define an official source for the numbers that cause the most debate. With that, the team stops building spreadsheets and starts looking at causes.',
      },
      3: {
        name: 'Structured',
        summary: 'The foundation is in place. The next leap is understanding causes and anticipating what comes next.',
        start:
          'Here the gain usually comes from analyses that explain variations (margin, mix, customer loss) and from the first forecasting models. It is also the right time to put AI to work answering questions on the foundation you already have.',
      },
      4: {
        name: 'Data-driven',
        summary: 'Data is already part of management. The gain is in forecasting and advanced analytics.',
        start:
          'Companies at this stage move forward with predictive and recommendation models tied to operations, and with AI connected to the foundation so more people can ask questions without depending on the data team.',
      },
    },
    steps: {
      antes_descritivo: {
        name: 'Before descriptive',
        summary: 'It is still hard to see clearly what happened.',
        next: 'The next step is to have the numbers of what happened effortlessly: sales, margin and customers by period, from a single source.',
      },
      descritivo: {
        name: 'Descriptive',
        summary: 'You can see the past.',
        next: 'The next step is to understand why the numbers changed: cross sales, costs and customers to explain a drop or a rise.',
      },
      diagnostico: {
        name: 'Diagnostic',
        summary: 'You understand the causes.',
        next: 'The next step is to anticipate: forecast sales, demand or cash based on the history you already have.',
      },
      preditivo: {
        name: 'Predictive',
        summary: 'You anticipate the future.',
        next: 'The next step is to bring forecasts into the routine: recommendations for sales, purchasing and pricing, and AI answering on the foundation.',
      },
    },
    // One sentence per dimension and score band: 0–25, 26–50, 51–75, 76–100.
    dimensions: {
      integracao: {
        name: 'Integration',
        question: 'Is the departments’ data together?',
        bands: [
          'Each department has its own data. Putting it all together today takes manual effort, which limits any analysis.',
          'Data is put together by hand, in spreadsheets. It works, but it takes hours and leaves room for error.',
          'Part of the data is already integrated. The gain is in bringing what is missing into the same foundation.',
          'Data is in a central foundation. It is the base for more advanced analytics and for AI.',
        ],
      },
      confiabilidade: {
        name: 'Reliability',
        question: 'Do the numbers match?',
        bands: [
          'The numbers rarely match across departments. Before discussing the decision, people discuss the number.',
          'The numbers match sometimes. An official definition for the main KPIs would settle most of the debates.',
          'The numbers almost always match. What’s missing is formalizing the rules so it doesn’t depend on who builds the report.',
          'There is an official source. You can trust the number and discuss what to do with it.',
        ],
      },
      cultura: {
        name: 'Data culture',
        question: 'Is there a routine to analyze the numbers?',
        bands: [
          'The numbers show up when someone asks. Without a routine, decisions depend on who remembers to look.',
          'Analysis happens every now and then. A set meeting, with the same KPIs, changes the pace of decisions.',
          'There is a monthly routine. The next step is to have up-to-date numbers to follow the week, not just the month.',
          'The numbers are part of the departments’ routine. The gain is in bringing deeper analyses to those meetings.',
        ],
      },
      analitica: {
        name: 'Analytics maturity',
        question: 'How far do the analyses go?',
        bands: [
          'Answering what happened still requires building everything from scratch.',
          'You can answer what happened, but understanding the causes is still hard.',
          'You understand the causes most of the time. Anticipating the future is the next leap.',
          'You can answer what happened, why, and you already anticipate what comes next.',
        ],
      },
    },
    quadrants: {
      primeiro_base: {
        title: 'Foundation first',
        text: 'Before AI can create value, data needs to be together and reliable. With the foundation in place, AI starts answering about your company, not in generic terms.',
      },
      base_pronta: {
        title: 'Foundation ready, AI idle',
        text: 'Your data is already in good shape. There is a quick opportunity to put AI to work on it and answer business questions in minutes.',
      },
      ia_a_frente: {
        title: 'AI ahead of the foundation',
        text: 'AI answers fast, but on data that doesn’t always match. The risk is deciding confidently on a wrong number. Organizing the foundation is what makes AI reliable.',
      },
      ia_com_contexto: {
        title: 'AI with context',
        text: 'The foundation supports the AI. The gain is in expanding the use cases and bringing answers to more departments.',
      },
    },
    aiManualNote:
      'You already use AI with company data, pasting spreadsheets and reports. It’s worth agreeing on which data can go to external tools, and how, to use it safely.',
    // Pre-written observations (fallback in section 7.2). Choice: next step, first question
    // checked in Q8, AI (when AI is ahead of the foundation or idle) and the weakest dimension.
    observations: {
      steps: {
        antes_descritivo: {
          title: 'See what happened, effortlessly',
          text: 'Today, answering what happened in the month requires building numbers from scratch. That takes the time of those who should be deciding and pushes decisions back.',
          why: 'Without a clear view of the past, any cause analysis or forecast has no foundation.',
          question: 'Which three numbers would you like to see every Monday, without building anything?',
        },
        descritivo: {
          title: 'From what happened to why',
          text: 'You already see what happened. The next step is to explain the variations: why sales dropped in a region, why margin changed in a month.',
          why: 'Understanding the cause is what turns a report into a decision.',
          question: 'What was the last change in results that nobody could explain with confidence?',
        },
        diagnostico: {
          title: 'From causes to forecasts',
          text: 'You already explain why the numbers change. With that history organized, you can anticipate sales, demand or cash with a known margin of error.',
          why: 'Anticipating gives you time to act: buy better, adjust the team, protect cash.',
          question: 'Which decision would be easier if you knew next quarter’s results?',
        },
        preditivo: {
          title: 'Bring forecasts into the routine',
          text: 'You already anticipate what is coming. The gain now is turning forecasts into recommendations that reach the people who decide day to day.',
          why: 'A forecast that doesn’t change operations is just one more report.',
          question: 'In which day-to-day decision would an automatic recommendation make the biggest difference?',
        },
      },
      questions: {
        resultado_variou: {
          title: 'Understand why results changed',
          text: 'Explaining a change in results or margin requires crossing sales, prices, costs and mix in the same place. When that is scattered, the answer arrives late or not at all.',
          why: 'Knowing what drove the result separates what was one-off from what will repeat.',
          question: 'How much of the last margin change came from price, volume and mix?',
        },
        cliente_lucro: {
          title: 'Find out which customers are profitable',
          text: 'Revenue per customer is easy to see. Profit per customer requires adding up discounts, freight, payment terms and cost to serve, which are almost never in the same place.',
          why: 'Large customers are not always the most profitable, and that changes where it pays to invest.',
          question: 'Which customers are among the largest in revenue and the lowest in margin?',
        },
        produto_retorno: {
          title: 'See the real return of each product',
          text: 'The return of a product or service depends on margin, turnover and sales effort. Looking only at revenue hides what actually sustains the result.',
          why: 'Mix is one of the fastest margin levers.',
          question: 'Which products or services sell a lot and leave little?',
        },
        desempenho: {
          title: 'Measure the real performance of each front',
          text: 'Comparing salespeople, channels or units fairly requires the same criteria for everyone: same base, same rules, same period.',
          why: 'Without a common number, the performance conversation becomes opinion.',
          question: 'Which KPI would you use to compare every unit or salesperson the same way?',
        },
        previsao: {
          title: 'Forecast sales with the history you have',
          text: 'A useful forecast starts with an organized history of sales, seasonality and customer base. With that, you can estimate the coming months with a known margin of error.',
          why: 'A forecast guides purchasing, staffing and cash before the problem shows up.',
          question: 'How many months in advance would you need to know sales to decide better?',
        },
        perda: {
          title: 'Find where you lose customers',
          text: 'Customers rarely announce they will stop buying. The signal shows up earlier in the data: drops in frequency, volume or mix.',
          why: 'Winning back an at-risk customer costs far less than acquiring a new one.',
          question: 'Which customers bought every month and reduced their frequency in the last 90 days?',
        },
        mkt_retorno: {
          title: 'Know which media brings good customers',
          text: 'Cost per click and per lead show up in the media tool. What almost never shows up is how much each channel brought in sales and margin, because that lives in the CRM and in finance.',
          why: 'Without linking media to sales, the budget goes to the cheapest channel, not the most profitable one.',
          question: 'Which channel brings the customer who buys the most after the first purchase?',
        },
        estoque_entrega: {
          title: 'Balance inventory and delivery',
          text: 'Idle stock and stockouts often live in the same company: what doesn’t turn piles up and what sells runs out. Bringing sales, purchasing and inventory together shows where each one is.',
          why: 'Idle stock is idle cash; a stockout is a lost sale.',
          question: 'Which items ran out last month while others sat idle for over 90 days?',
        },
        digital_funil: {
          title: 'Understand where customers give up',
          text: 'The website and app record every customer step, but that data is rarely crossed with sales. Connecting both ends shows at which stage, and for which audience, the purchase stalls.',
          why: 'Small funnel improvements turn into revenue without increasing media spend.',
          question: 'At which stage of the website or app do you lose the most customers between visit and purchase?',
        },
        custos: {
          title: 'Find costs you can cut',
          text: 'Costs you can cut are usually scattered: freight, returns, off-policy discounts, idle stock. Put together, they show up.',
          why: 'Every cost avoided goes straight to the bottom line.',
          question: 'Which three cost lines grew faster than revenue in the last year?',
        },
      },
      ai: {
        ia_a_frente: {
          title: 'Give AI a reliable foundation',
          text: 'AI is already in use with company data, but the foundation doesn’t always match. The answer comes out fast and convincing, even when the source number is wrong.',
          why: 'AI on fragile data is confidently wrong, and that is worse than not answering.',
          question: 'Which questions do you already ask AI, and how do you check the answer is right?',
        },
        base_pronta: {
          title: 'Put AI to work on your data',
          text: 'Your data is already in good shape, but AI doesn’t use that context yet. Connecting the two lets you answer business questions in minutes.',
          why: 'It’s a quick win: the hard part, the foundation, is already done.',
          question: 'What would you ask AI if it knew the company’s numbers?',
        },
      },
      dimensions: {
        integracao: {
          title: 'Bring the departments’ data together',
          text: 'With data split by department, every analysis starts with a round of spreadsheets. A single foundation removes that rework and opens room for analyses that don’t happen today.',
          why: 'Integration is what lets you cross sales, finance and operations in the same question.',
          question: 'Which report today needs data from the most departments to be ready?',
        },
        confiabilidade: {
          title: 'Have an official number',
          text: 'When two departments bring different numbers, the meeting turns into a debate about which one is right. An official source for the main KPIs changes that.',
          why: 'A good decision depends on a number everyone trusts.',
          question: 'Which KPI causes the most debate between departments today?',
        },
        cultura: {
          title: 'Create a routine of looking at the numbers',
          text: 'Without a set meeting to analyze the numbers, each department decides at its own pace and problems show up late. A short routine, with few KPIs, already improves the quality of decisions.',
          why: 'Data nobody looks at in time doesn’t change any decision.',
          question: 'Which five KPIs should leadership look at every week?',
        },
        analitica: {
          title: 'Stop building reports by hand',
          text: 'A good part of the time still goes into building numbers, and little is left for analysis. Automating the basics frees the team to understand causes and anticipate results.',
          why: 'Analysis time creates decisions; building time doesn’t.',
          question: 'How many hours a month does the team spend building recurring reports?',
        },
      },
    },
    areaLabels: AREAS,
    // Use cases by area, suggested based on the questions checked in question 10 (Q8).
    // With no questions checked, the result suggests the areas in `defaultAreas`.
    useCases: {
      comercial: [
        'Sales performance dashboard, by salesperson, team and region',
        'Segmented views of the customer base: customers by profile, frequency and potential',
        'Sales forecast for the coming months',
        'Product recommendations for the sales team: what to offer each customer',
      ],
      marketing: [
        'Media return by channel and campaign, all the way to sales and margin',
        'Lead-to-customer funnel, connecting marketing and sales',
        'Audience segmentation for campaigns',
        'Acquisition cost compared to each customer’s value over time',
      ],
      clientes: [
        'Alert for customers at risk of stopping buying',
        'Analysis of loss and complaint reasons',
        'A single view of each customer: purchases, service and finance',
        'Win-back cadence for inactive customers',
      ],
      financeiro: [
        'Real margin by customer, product and channel',
        'Analysis of changes in results: price, volume and mix',
        'Automated management P&L and month-end close',
        'Cash forecast',
      ],
      produtos: [
        'Profitability and turnover by product or service',
        'ABC curve and mix review',
        'Pricing based on real margin',
        'Products that are often bought together',
      ],
      operacoes: [
        'Costs by process and cost center',
        'Operational KPIs: productivity, lead times and rework',
        'Alerts for cost deviations from target',
      ],
      logistica: [
        'Inventory turnover and coverage, with alerts for idle items',
        'Stockout alerts before products run out',
        'Delivery performance: lead time and cost per route',
        'Demand forecast to plan purchasing',
      ],
      digital: [
        'Website, app or e-commerce funnel: where customers give up',
        'Browsing behavior linked to sales',
        'Offer and page tests with measured results',
      ],
    },
    defaultAreas: ['comercial', 'financeiro'],
    // Visual roadmap of short cycles. {caso} becomes the first suggested use case.
    roadmap: [
      { when: 'Weeks 1 and 2', title: 'Integration', text: 'We connect the data sources (ERP, CRM, spreadsheets) into a single foundation, in your company’s cloud.' },
      { when: 'Weeks 2 and 3', title: 'Modeling', text: 'We organize the data and write the business rules with the departments: one number for everyone.' },
      { when: 'Week 4', title: 'First use case', text: '{caso}, live and in use.' },
      { when: 'Every cycle', title: 'Expansion', text: 'A new use case every 2 to 4 weeks, on the same foundation, including AI with context.' },
    ],
    // How Oika helps: one sentence per weak point in the diagnosis (the two weakest dimensions
    // and AI readiness when it calls for action), plus the closing line.
    help: {
      intro: 'Oika is the data team your company is missing: senior people, AI agents and platform, in a single contract. For your diagnosis, that means:',
      dimensions: {
        integracao: 'Bringing ERP, CRM and spreadsheet data into a single foundation that updates itself.',
        confiabilidade: 'Defining business rules with the departments and an official number for the main KPIs.',
        cultura: 'Setting up the analysis routine: the right dashboards for each department’s meeting, with weekly numbers.',
        analitica: 'Going from what happened to why and to what will happen, with cause analyses and forecasts.',
      },
      ai: {
        ia_a_frente: 'Giving the AI you already use a reliable foundation, so it answers with the right numbers.',
        base_pronta: 'Connecting AI to the foundation you already have, to answer business questions in minutes.',
      },
      closing: 'We start with the Value Sprint: 30 days, one use case, no lock-in.',
    },
    // Final call to action. Booking is the main action for everyone; the text changes with the
    // qualification (the respondent never sees the category).
    cta: {
      button: 'Book a 30-minute call',
      agendar: {
        title: 'Shall we go over this diagnosis together?',
        text: 'In 30 minutes, a specialist reviews your X-Ray with you and shows where to start. If it makes sense, we move on to the full assessment: two conversations and a presentation with prioritized opportunities and a 30, 60 and 90-day plan. Free of charge.',
      },
      contato: {
        title: 'Shall we go over this diagnosis together?',
        text: 'An Oika specialist will review your X-Ray and get in touch within 1 business day. If you prefer, pick a time now.',
      },
      explorar: {
        title: 'Want to talk about your diagnosis?',
        text: 'In 30 minutes, we show how companies at your stage usually start and what would make sense for you.',
        linksTitle: 'Or keep exploring:',
        links: [
          { label: 'What we deliver', href: '/en/#entrega' },
          { label: 'Plans', href: '/en/plans/' },
          { label: 'Why Oika', href: '/en/why-oika/' },
        ],
      },
    },
  },
};
