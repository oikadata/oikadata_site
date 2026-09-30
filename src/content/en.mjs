// English content. Draft translation of pt.mjs: review before publishing.
// To publish, add 'en' to LANGS in build.mjs.

export default {
  lang: 'en',
  path: '/en/',
  meta: {
    title: 'Oika Data | The shortest path from your data to results',
    description:
      'A hub of data and AI solutions for companies that want to decide better and grow. First results within 30 days.',
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
    { href: '/en/', label: 'Solutions' },
  ],
  hero: {
    title: 'The shortest path from your data to results',
    subtitle: 'A hub of data and AI solutions for companies that want to decide better and grow.',
    support: 'First results within 30 days.',
    ctaPrimary: 'Book a call',
    ctaSecondary: 'See what we deliver',
  },
  problem: {
    label: 'The problem',
    title: 'Your company already has the data to make better decisions. It just isn’t organized to create value',
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
    title: 'Use cases that turn into revenue, savings and time',
    subtitle: 'Every delivery answers a business question and has a result you can measure.',
    groups: [
      {
        title: 'More revenue',
        cases: [
          { name: 'Customers at risk', question: 'Who stopped buying, and how much is that worth?', result: 'Revenue recovered before it becomes a loss' },
          { name: 'Conversion by channel and salesperson', question: 'Where do your best customers come from?', result: 'Investment where conversion is highest' },
          { name: 'Marketing segmentation', question: 'What to offer to whom, and when?', result: 'Campaigns with the right audience and mix' },
        ],
      },
      {
        title: 'Lower cost',
        cases: [
          { name: 'Real margin', question: 'What’s left per product and per customer, after all costs?', result: 'Pricing and discounts based on what’s really left' },
          { name: 'Inventory', question: 'What is idle and what is about to run out?', result: 'Less idle capital and fewer stockouts' },
          { name: 'Acquisition cost', question: 'How much does each lead cost in each channel?', result: 'Budget cut from what doesn’t pay off' },
        ],
      },
      {
        title: 'More efficiency',
        cases: [
          { name: 'Automated reports', question: 'How much time does the team spend building spreadsheets?', result: 'Reports that update themselves' },
          { name: 'Month-end close', question: 'Why does closing the month take days?', result: 'Close in hours, not days' },
          { name: 'One number', question: 'Why does each department bring a different number?', result: 'One definition, used by every department' },
        ],
      },
    ],
  },
  how: {
    label: 'How we deliver',
    title: 'Organized data that steers your business',
    productsTitle: 'What you get',
    products: [
      { title: 'AI with context', text: 'Ask AI and get answers with your numbers and your business rules, not generic ones.' },
      { title: 'Modeled data', text: 'Your sources integrated and organized, with business rules written in code. One number for every department.' },
      { title: 'Dashboards', text: 'Dashboards that update themselves, with the metrics each department uses to decide.' },
      { title: 'Analyses', text: 'Answers to business questions, with what to do next.' },
      { title: 'Marketing segmentation', text: 'Customers grouped by behavior, value and potential, ready for campaigns and for your CRM.' },
      { title: 'AI models', text: 'Predictive and recommendation models: who will stop buying, how much you will sell and what to offer each customer.' },
    ],
    teamTitle: 'Who makes it happen',
    team: [
      { title: 'Senior team', text: 'Engineering, modeling, BI and strategy, without you having to hire.' },
      { title: 'AI agents', text: 'Working alongside the team to speed up every delivery.' },
      { title: 'Data platform', text: 'Integration, organization and AI in one place, on market-leading platforms.' },
    ],
    numbers: [
      { value: '30 days', text: 'to have data integrated and the first use case live' },
      { value: '1 to 2', text: 'value deliveries per month, once the foundation is in place' },
      { value: '1', text: 'hire that covers it all: team, tools, platform and BI' },
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
    title: 'Shall we start your first use case?',
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
