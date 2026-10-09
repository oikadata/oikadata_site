// English content. Draft translation of pt.mjs: review before publishing.
// To publish, add 'en' to LANGS in build.mjs.

export default {
  lang: 'en',
  path: '/en/',
  ui: {
    skip: 'Skip to content',
    navLabel: 'Main navigation',
    menu: 'Menu',
    close: 'Close',
    langSwitch: 'PT',
    langSwitchLabel: 'Ler em português',
    langGroupLabel: 'Language',
    schedule: 'Book a call',
    scheduleShort: 'Book a call',
    whatsappMessage: 'Hi! I found Oika Data on your website and would like to understand how you can help with my company’s data.',
  },
  nav: [
    { page: 'home', label: 'Solutions' },
    { page: 'planos', label: 'Plans' },
    { page: 'porque', label: 'Why Oika' },
  ],
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
    privacy: { label: 'Privacy Policy (in Portuguese)', href: '/privacidade/' },
    whatsapp: 'WhatsApp',
    slogan: 'where data makes sense',
  },
  pages: {
    home: {
      meta: {
        ogTitle: 'The shortest path from your data to results',
        title: 'Oika Data | The shortest path from your data to results',
        description:
          'A hub of data and AI solutions for companies that want to decide better and grow. First results within 30 days.',
      },
      hero: {
        title: 'The shortest path from your data to results',
        subtitle: 'A hub of data and AI solutions for companies that want to decide better and grow.',
        support: 'First results within 30 days.',
        ctaPrimary: 'Book a call',
        ctaSecondary: 'See what we deliver',
      },
      problem: {
        title: 'Your company already has the data to make better decisions. It just isn’t organized to create value',
        symptoms: [
          'Every department brings a different number for the same thing.',
          'A simple question, like “what is our margin per customer?”, takes days of spreadsheets and the answer arrives after the decision.',
          'The business rule that matters is known by only one person.',
          'The AI you already use doesn’t know your business and gives generic answers.',
        ],
        stat: {
          from: '21%',
          to: '95%',
          text: 'is the jump in accuracy of AI over data when it has the business context.',
          note: 'Figures from Anthropic’s data team, which now answers 95% of business questions with AI.',
          linkLabel: 'Read the study',
          href: 'https://claude.com/blog/how-anthropic-enables-self-service-data-analytics-with-claude',
        },
      },
      value: {
        title: 'Your data working for your business',
        subtitle: 'We integrate and organize your company’s data and deliver what each department needs to decide.',
        pillars: [
          {
            tag: 'One environment',
            title: 'Every area. One environment.',
            text: 'Finance, sales, marketing, operations and logistics integrated in one environment, with your business rules. Dashboards, apps, models and AI all run on it.',
            visual: {
              type: 'hub',
              uses: ['Dashboards', 'Apps', 'Models', 'AI'],
              name: 'Oika environment',
              note: 'Integrated, with your business rules',
              areas: ['Finance', 'Sales', 'Marketing', 'Operations', 'Logistics'],
              more: '+ others',
            },
          },
          {
            tag: 'AI with context',
            title: 'A senior analyst, any time',
            text: 'Ask as you would ask an analyst. AI goes beyond the number: it cross-checks the data, explains why and brings insights with your numbers and your rules. Plus what to do next.',
            visual: {
              type: 'chat',
              question: 'Which customers lost the most margin this quarter, and why?',
              answer: 'Three customers explain 70% of the drop. Cross-checking orders, prices and sales policy, the reasons differ:',
              rows: [
                { label: 'South Distribution', reason: 'Discount off policy', value: '−8.2 pp', size: 100 },
                { label: 'Central Stores', reason: 'Discount off policy', value: '−5.1 pp', size: 62 },
                { label: 'Village Market', reason: 'Lower-margin mix', value: '−3.4 pp', size: 41 },
              ],
              next: 'Next step: review discounts on the first two accounts and offer the higher-margin mix to the third.',
            },
          },
          {
            tag: 'Dashboards',
            title: 'Every department’s metrics, always up to date',
            text: 'Dashboards that update themselves, with the numbers each department uses to decide. No more building spreadsheets at month-end.',
            visual: {
              type: 'dashboard',
              title: 'Sales',
              updated: 'Updated today, 7 am',
              kpis: [
                { label: 'Revenue', value: '$1.24M', delta: '+12%' },
                { label: 'Margin', value: '31.4%', delta: '+2.1 pp' },
                { label: 'Avg. ticket', value: '$4,870', delta: '+5%' },
              ],
              bars: [42, 48, 45, 53, 50, 58, 61, 57, 66, 70, 68, 78],
            },
          },
          {
            tag: 'AI models and segmentation',
            title: 'Know in advance who will buy, and who will stop',
            text: 'Models that predict who will stop buying, how much you will sell and what to offer each customer. Segments ready for campaigns and for your CRM.',
            visual: {
              type: 'model',
              title: 'Customers at risk',
              columns: ['Customer', 'Segment', 'Churn risk'],
              rows: [
                { name: 'Central Stores', segment: 'High value', risk: 82, action: 'Call this week' },
                { name: 'North Pharmacy', segment: 'Recurring', risk: 64, action: 'Repurchase offer' },
                { name: 'Garden Shop', segment: 'New', risk: 23, action: 'Keep nurturing' },
              ],
            },
          },
        ],
      },
      cases: {
        title: 'Use cases that turn into revenue, savings and time',
        subtitle: 'Every delivery answers a business question and has a result you can measure.',
        groups: [
          {
            title: 'More revenue',
            cases: [
              { name: 'Customers at risk', result: 'Revenue recovered before it becomes a loss' },
              { name: 'Conversion by channel and salesperson', result: 'Investment where conversion is highest' },
              { name: 'Marketing segmentation', result: 'Campaigns with the right audience and mix' },
            ],
          },
          {
            title: 'Lower cost',
            cases: [
              { name: 'Real margin', result: 'Pricing and discounts based on what’s really left' },
              { name: 'Inventory', result: 'Less idle capital and fewer stockouts' },
              { name: 'Acquisition cost', result: 'Budget cut from what doesn’t pay off' },
            ],
          },
          {
            title: 'More efficiency',
            cases: [
              { name: 'Automated reports', result: 'Reports that update themselves' },
              { name: 'Month-end close', result: 'Close in hours, not days' },
              { name: 'One number', result: 'One definition, used by every department' },
            ],
          },
        ],
      },
      work: {
        title: 'In 30 days, integrated data and the first result on the table',
        subtitle: 'One hire covers it all: team, AI agents and platform.',
        steps: [
          {
            when: 'Month 1',
            name: 'Value Sprint',
            text: 'We choose with you the highest-value use case, integrate the data and deliver the first result. No lock-in.',
          },
          {
            when: 'Every quarter',
            name: 'Expansion',
            text: 'You prioritize new initiatives on top of the ready foundation: use cases, departments, integrations and AI. 1 to 2 value deliveries per month.',
          },
          {
            when: 'Once the foundation matures',
            name: 'Sustain',
            text: 'Everything running, context kept up to date and improvements to what already exists, at a lower fee.',
          },
        ],
        teamTitle: 'Who makes it happen',
        team: [
          { title: 'Senior team', text: 'Engineering, modeling, BI and strategy, without you having to hire.' },
          { title: 'AI agents', text: 'Working alongside the team to speed up every delivery.' },
          { title: 'Data platform', text: 'Integration, organization and AI in one place, on market-leading platforms.' },
        ],
        needsTitle: 'What we need from you',
        needs: [
          'A point of contact to prioritize initiatives with us',
          'Access to the systems',
          'The departments involved available to validate business rules',
        ],
        plansLink: 'See the plans',
        plansHref: '/en/plans/',
      },
    },
    planos: {
      meta: {
        title: 'Plans | Oika Data',
        description:
          'Start with the Value Sprint: 30 days, one use case and no lock-in. Then accelerate with the Core or Omni plans and move to Sustain once the foundation matures.',
      },
      hero: {
        title: 'Accelerate as you need. The price adjusts',
        subtitle: 'Start with a Value Sprint, no lock-in. Then alternate between expansion and sustain cycles, as your company needs.',
        cta: 'Book a call',
      },
      cycle: {
        sprint: {
          when: 'Month 1',
          name: 'Value Sprint',
          text: 'We choose with you the highest-value use case, integrate the data and deliver the first result.',
          price: 'No lock-in',
        },
        expand: {
          when: 'Quarterly cycle',
          name: 'Expansion',
          text: 'New use cases, departments, integrations and AI on top of the ready foundation.',
          price: 'Core or Omni plan',
        },
        sustain: {
          when: 'Once the foundation matures',
          name: 'Sustain',
          text: 'Everything running, context kept up to date and improvements to what already exists.',
          price: 'Lower fee',
        },
        toSustain: 'Mature foundation',
        toExpand: 'New priorities',
        center: 'You choose the pace every quarter',
      },
      plans: {
        title: 'Compare the plans',
        subtitle: 'Core and Omni are the expansion plans: choose based on the team you already have. Sustain keeps the foundation we built alive, whichever plan it came from.',
        featureLabel: 'What’s included',
        yes: 'Included',
        no: 'Not included',
        columns: [
          {
            name: 'Core',
            scope: 'Analytics engineering',
            for: 'For companies that already have a BI analyst, or want to query data directly with AI.',
          },
          {
            name: 'Omni',
            scope: 'Analytics engineering + BI',
            for: 'For companies with nobody looking at data: the whole data team, end to end.',
            featured: true,
          },
          {
            name: 'Sustain',
            scope: 'Maintenance',
            for: 'For when the foundation is mature, your in-house team takes over, or during a 3-month transition.',
          },
        ],
        groups: [
          {
            title: 'Data foundation',
            rows: [
              { label: 'One environment with data from every department', values: [true, true, true] },
              { label: 'Integration of new data sources', values: [true, true, 'Keeps existing ones'] },
              { label: 'Business rules in code: one number for every department', values: [true, true, 'Updates what changes'] },
              { label: 'Access control: each person sees only what they should', values: [true, true, true] },
              { label: 'Data monitoring and quality', values: [true, true, true] },
            ],
          },
          {
            title: 'AI with context',
            rows: [
              { label: 'Ask AI and get answers with your numbers and your rules', values: [true, true, 'Context kept up to date'] },
              { label: 'Accuracy measured with test questions', values: [true, true, true] },
            ],
          },
          {
            title: 'Everyday decisions',
            rows: [
              { label: 'Dashboards for each department', values: [false, true, 'Keeps existing ones'] },
              { label: 'Analyses for business questions', values: [false, true, false] },
              { label: 'AI models: who will stop buying, how much you will sell, what to offer', values: [false, true, 'Keeps existing ones'] },
              { label: 'Marketing segments ready for campaigns and CRM', values: [false, true, 'Keeps existing ones'] },
            ],
          },
          {
            title: 'Pace',
            rows: [
              { label: 'New value deliveries', values: ['About 1 per month', '1 to 2 per month', 'Incremental improvements'] },
              { label: 'Senior team, AI agents and data platform', values: [true, true, true] },
            ],
          },
        ],
        special: 'Special terms for early customers and for real estate agencies, distributors and schools.',
      },
      addons: {
        title: 'Going further',
        subtitle: 'Add-ons available with any plan. Pricing on request.',
        items: [
          { title: 'Strategic Management', text: 'A senior person who prioritizes with you what creates the most value, tracks results and brings data into board decisions.' },
          { title: 'Data Culture', text: 'Training and support for your team to use data and AI every day, in a format designed for your company.' },
        ],
      },
    },
    porque: {
      meta: {
        title: 'Why Oika | Oika Data',
        description:
          'Hiring takes months and consulting ends with the project. With Oika Data, the first result arrives in 30 days and the knowledge stays in your company.',
      },
      hero: {
        title: 'Hiring takes months. With us, the first result arrives in 30 days',
        subtitle: 'The Omni plan plays the role of an entire data team, with the platform included and no hiring needed.',
      },
      compare: {
        columns: ['Hiring someone', 'Project-based consulting', 'Oika Data'],
        rows: [
          { label: 'First result', values: ['About 6 months to hire, set up the platform and deliver', 'Within weeks, but it ends with the project', 'Within 30 days'] },
          { label: 'Expertise', values: ['One specialty', 'Broad, but temporary', 'Engineering, modeling, BI and AI, with experience across industries'] },
          { label: 'Continuity', values: ['If the person leaves, the knowledge goes too', 'Delivers and leaves', 'Team and documentation: the knowledge stays in the company'] },
          { label: 'Tools', values: ['Platform, licenses and AI paid separately', 'Usually separate', 'Platform included in the plan'] },
          { label: 'Commitment', values: ['Fixed cost, hard to adjust', 'Closed scope', 'Quarterly plan, after a no-lock-in Sprint'] },
        ],
        note: 'Time to hire: Ford/Datafolha 2026 (half of companies take 1 to 2 months to fill a tech role). Platform and first use case timelines are our own estimates.',
        plansLink: 'See the plans',
        plansHref: '/en/plans/',
      },
    },
  },
};
