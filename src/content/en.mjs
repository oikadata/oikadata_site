// English content. Draft translation of pt.mjs: review before publishing.
// To publish, add 'en' to LANGS in build.mjs.

export default {
  lang: 'en',
  path: '/en/',
  meta: {
    title: 'Oika Data | The shortest path from your data to results',
    description:
      'A hub for companies that want to get value from their data and enable AI. Data team, agents and platform in a single contract. First results within 30 days.',
  },
  ui: {
    skip: 'Skip to content',
    navLabel: 'Main navigation',
    menu: 'Menu',
    close: 'Close',
    langSwitch: 'PT',
    langSwitchLabel: 'Ler em português',
    schedule: 'Book a call',
    scheduleShort: 'Book a call',
    whatsappMessage: 'Hi! I found Oika Data on your website and would like to understand how you can help with my company’s data.',
  },
  nav: [
    { href: '#problema', label: 'The problem' },
    { href: '#entrega', label: 'What we deliver' },
    { href: '#como-comecamos', label: 'How we start' },
    { href: '#faq', label: 'FAQ' },
  ],
  hero: {
    title: 'The shortest path from your data to results',
    subtitle: 'A hub for companies that want to get value from their data and enable AI.',
    support: 'Data team, agents and platform in a single contract. First results within 30 days.',
    ctaPrimary: 'Book a call',
    ctaSecondary: 'See what we deliver',
    ctaNote: '30 minutes, no commitment. You pick the time.',
    proof: 'Experience in fintech, real estate and international operations',
  },
  problem: {
    label: 'The problem',
    title: 'Your company already has the data to make better decisions. It just doesn’t talk to itself',
    sources: ['ERP', 'CRM', 'Spreadsheets', 'Email and WhatsApp', 'People’s heads', 'AI tools'],
    symptoms: [
      'Every department brings a different number for the same thing.',
      'The monthly report takes days of spreadsheets and arrives after the decision was made.',
      'The business rule that matters is known by only one person.',
      'A simple question, like “what is our margin per customer?”, has no quick answer.',
      'The AI you already use lacks business context and gives generic answers.',
    ],
    costLabel: 'The cost',
    cost: 'Wrong decisions, revenue slipping away, costs no one sees, AI stuck in pilot and operational inefficiency.',
  },
  whyNow: {
    label: 'Why now',
    title: 'A reliable source was always necessary. With AI, it can’t wait',
    text: 'To make decisions, your company has always needed a number it can trust. AI didn’t change that: it just made not having one more expensive. The models are the same for everyone; the context is yours alone.',
    quote: 'AI without context is a well-articulated guess.',
    mapTitle: 'Your company’s map',
    layers: [
      { title: 'Integrated data', text: 'ERP, CRM, spreadsheets and portals' },
      { title: 'Business rules', text: 'how your company calculates margin, targets and commissions' },
      { title: 'Operator knowledge', text: 'what today exists only in people’s heads' },
    ],
    feedsLabel: 'All of it feeds',
    feeds: ['Dashboards and reports', 'Analyses', 'AI agents'],
    stat: {
      from: '21%',
      to: '95%',
      text: 'is the jump in accuracy of AI answers over data when context is structured.',
      note: 'Figures from Anthropic’s data team, which now answers 95% of business questions with AI.',
      linkLabel: 'Read the study',
      href: 'https://claude.com/blog/how-anthropic-enables-self-service-data-analytics-with-claude',
    },
  },
  delivery: {
    label: 'What we deliver',
    title: 'We are the data hub your company is missing',
    subtitle: 'From scratch or alongside the analyst you already have, without stitching together tools, consultants and freelancers.',
    pillars: [
      { title: 'Team + agents', text: 'Senior people and AI agents working together, without you having to hire.' },
      { title: 'Data platform', text: 'Integration, organization and AI in one place, on market-leading platforms.' },
      { title: 'A data hub', text: 'One place, from raw data to decision, with a single owner for the result.' },
    ],
    numbers: [
      { value: '30 days', text: 'to have data integrated and the first use case live' },
      { value: '1 to 2', text: 'value deliveries per month, once the foundation is in place' },
      { value: '0', text: 'hires: the team arrives ready' },
    ],
    rolesTitle: 'The roles your company gains',
    roles: [
      { title: 'Data engineering', text: 'connects the sources and keeps everything running.' },
      { title: 'Modeling', text: 'organizes the data and turns business rules into code.' },
      { title: 'BI and analysis', text: 'dashboards and answers to business questions.' },
      { title: 'Strategy', text: 'someone senior who prioritizes with you what creates the most value.' },
      { title: 'Applied AI', text: 'AI use cases on top of a reliable foundation.' },
    ],
    closing:
      'One hire covers, at best, one or two of these roles. And learns alone, while our team learns across many clients at once.',
  },
  value: {
    label: 'The value',
    title: 'Data only matters when it becomes revenue, savings or time',
    groups: [
      {
        title: 'More revenue',
        items: [
          'Customers who stopped buying, before they become losses',
          'Lead conversion by channel and by salesperson',
          'Mix and opportunities per customer',
          'Pricing based on real margin',
        ],
      },
      {
        title: 'Lower cost',
        items: [
          'Idle stock and stockouts',
          'Real margin per product and per customer',
          'Cost per lead in each channel',
          'Tools and licenses that don’t pay off',
        ],
      },
      {
        title: 'More efficiency',
        items: [
          'Reports that update themselves',
          'Month-end close in hours, not days',
          'One number for every department',
          'A team making decisions, not building spreadsheets',
        ],
      },
    ],
  },
  start: {
    label: 'How we start',
    title: 'In 30 days, integrated data and the first result on the table',
    steps: [
      {
        when: 'Month 1',
        name: 'Value Sprint',
        text: 'We choose with you the highest-value use case, integrate the data and deliver the first result. No lock-in.',
      },
      {
        when: 'Every quarter',
        name: 'Expansion',
        text: 'You prioritize new initiatives: use cases, departments, integrations and AI on top of the ready foundation.',
      },
      {
        when: 'Once the foundation matures',
        name: 'Sustain',
        text: 'Everything running, context kept up to date and improvements to what already exists, at a lower fee.',
      },
    ],
    needsTitle: 'What we need from you',
    needs: [
      'A point of contact to prioritize initiatives with us',
      'Access to the systems',
      'The departments involved available to validate business rules',
    ],
    ctaText: 'Want to find out what the first use case would be at your company?',
  },
  trust: {
    label: 'Trust',
    title: 'Your data, your rules',
    items: [
      { title: 'The data is yours.', text: 'It stays in your company’s cloud account, not ours.' },
      { title: 'No lock-in to start.', text: 'The Value Sprint has no lock-in. After that, plans are quarterly.' },
      { title: 'Want to build an in-house team?', text: 'You take the code and documentation, with 3 months of guided transition.' },
      { title: 'Security and data protection.', text: 'SOC 2 Type II certified platform and role-based access. Data processing agreement.' },
      { title: 'We measure before we release.', text: 'We build test questions from your business and measure AI accuracy before releasing it to each department.' },
    ],
  },
  faq: {
    label: 'FAQ',
    title: 'What people usually ask us',
    items: [
      { q: 'We already use Power BI. Do we need to switch?', a: 'No. We can use and improve what you already have, or evaluate a cheaper alternative that delivers the same value.' },
      { q: 'I already have an analyst. Does this make sense?', a: 'Yes. We take care of the foundation and the analyst focuses on analysis.' },
      { q: 'How much of my team’s time do you need?', a: 'It depends on the use case. Usually, a point of contact who prioritizes initiatives with us, and the departments involved to validate business rules.' },
      { q: 'Who owns the data?', a: 'Your company. It stays in your company’s cloud account, not ours.' },
      { q: 'What if I cancel?', a: 'You take the code and documentation and can subscribe to the tools directly, with 3 months of guided transition.' },
      { q: 'What about data protection (LGPD)?', a: 'The data stays in your company’s cloud, on a SOC 2 Type II platform, with encryption and role-based access. Your company is the controller; Oika acts as processor, under a data processing agreement.' },
    ],
  },
  cta: {
    title: 'Shall we choose your first use case?',
    support: ['Value Sprint', '30 days', 'no lock-in'],
    howTitle: 'How it works',
    how: [
      'A conversation to choose the use case',
      'Data integration and modeling',
      'Delivery of the result and a plan for the quarter',
    ],
    button: 'Book a 30-minute call',
    alt: 'Prefer to message? Reach us on',
    whatsapp: 'WhatsApp',
    or: 'or write to',
  },
  footer: {
    whatsapp: 'WhatsApp',
    slogan: 'where data makes sense',
  },
};
