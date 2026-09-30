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
  ],
  hero: {
    title: 'The shortest path from your data to results',
    subtitle: 'A hub for companies that want to get value from their data and enable AI.',
    support: 'Data team, agents and platform in a single contract. First results within 30 days.',
    ctaPrimary: 'Book a call',
    ctaSecondary: 'See what we deliver',
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
      { title: 'Use cases', text: 'Dashboards, analyses and marketing segmentation, delivered on data you can trust.' },
    ],
    numbers: [
      { value: '30 days', text: 'to have data integrated and the first use case live' },
      { value: '1 to 2', text: 'value deliveries per month, once the foundation is in place' },
      { value: '0', text: 'hires: the team arrives ready' },
    ],
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
