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
    schedule: 'Book a call',
    scheduleShort: 'Book a call',
    whatsappMessage: 'Hi! I found Oika Data on your website and would like to understand how you can help with my company’s data.',
  },
  nav: [
    { page: 'home', label: 'Solutions' },
    { page: 'planos', label: 'Plans' },
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
            title: 'Your whole company in one place',
            text: 'Sales, finance, marketing and operations integrated in a single foundation, with your business rules. No more arguing about which number is right.',
            visual: {
              type: 'hub',
              sources: ['Sales', 'Finance', 'Marketing', 'Operations'],
              label: 'September revenue',
              value: '$1.24M',
              note: 'The same number for every department',
            },
          },
          {
            tag: 'AI with context',
            title: 'A senior analyst, any time',
            text: 'Ask in plain language and get the answer with your numbers and your rules, not generic ones. Plus what to do next.',
            visual: {
              type: 'chat',
              question: 'Which customers lost the most margin this quarter?',
              answer: 'Three customers explain 70% of the drop. The main reason was discounts above the sales policy.',
              rows: [
                { label: 'South Distribution', value: '−8.2 pp', size: 100 },
                { label: 'Central Stores', value: '−5.1 pp', size: 62 },
                { label: 'Village Market', value: '−3.4 pp', size: 41 },
              ],
              next: 'Next step: review the discounts on these three accounts.',
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
          'Start with the Value Sprint: 30 days, one use case, no lock-in. Then quarterly plans with data team, agents and platform included.',
      },
      hero: {
        title: 'Start small. Grow when it makes sense.',
        subtitle: 'A Value Sprint to start, with no lock-in. Then quarterly plans with team, agents and platform included.',
      },
      sprint: {
        tag: 'To start',
        name: 'Value Sprint',
        facts: ['30 days', '1 use case', 'no lock-in'],
        text: 'Together we choose the highest-value use case, integrate the data and deliver the first result. If it makes sense, we continue on a quarterly plan.',
        cta: 'Book a call',
        stepsTitle: 'How the 30 days go',
        steps: [
          { when: 'Week 1', text: 'A conversation to choose the use case' },
          { when: 'Weeks 2 and 3', text: 'Data integration and modeling' },
          { when: 'Week 4', text: 'Delivery of the result and a plan for the quarter' },
        ],
      },
      plans: {
        title: 'After the Sprint, two quarterly plans',
        subtitle: 'Choose based on the team you already have. Both include the data platform.',
        items: [
          {
            tag: 'Quarterly plan',
            name: 'Context',
            scope: 'Analytics engineering',
            for: 'For companies that already have a BI analyst, or want to query data directly with AI.',
            includes: [
              'Integration of data sources',
              'Modeling and business rules in code',
              'Documentation and context for AI',
            ],
            pace: 'About 1 value delivery per month',
          },
          {
            tag: 'Quarterly plan',
            name: 'Decision',
            scope: 'Analytics engineering + BI',
            for: 'For companies with no one looking at data: the whole data team, end to end.',
            includes: [
              'Everything in Context',
              'Dashboards for each department',
              'Analyses for business questions',
            ],
            pace: '1 to 2 value deliveries per month',
            featured: true,
          },
        ],
        allTitle: 'In every plan:',
        all: 'market-leading data platform, new integrations, monitoring and data quality.',
        special: 'Special terms for early customers and for real estate agencies, distributors and schools.',
      },
      compare: {
        title: 'Hiring takes months. With us, the first result arrives in 30 days',
        subtitle: 'The Decision plan plays the role of a whole data team, with the platform included.',
        columns: ['Hiring one person', 'Project-based consulting', 'Oika Data'],
        rows: [
          { label: 'First result', values: ['About 6 months to hire, set up the platform and deliver', 'In weeks, but it ends with the project', 'Within 30 days'] },
          { label: 'Knowledge', values: ['One specialty', 'Broad, but temporary', 'Engineering, modeling, BI and AI, with experience across industries'] },
          { label: 'Continuity', values: ['If the person leaves, the knowledge goes too', 'Delivers and leaves', 'Team and documentation: the knowledge stays in the company'] },
          { label: 'Tools', values: ['Platform, licenses and AI paid separately', 'Usually separate', 'Platform included in the plan'] },
          { label: 'Commitment', values: ['Fixed cost, hard to adjust', 'Fixed scope', 'Quarterly plan, after a Sprint with no lock-in'] },
        ],
        note: 'Time to hire: Ford/Datafolha 2026 (half of companies take 1 to 2 months to fill a tech role). Platform and first use case timelines are our estimates.',
      },
      sustain: {
        title: 'Sustaining',
        subtitle: 'A foundation in place is not a living foundation. When a rule changes and no one updates it, dashboards and AI keep answering, just wrong.',
        items: [
          { title: 'Everything running', text: 'Routines, integrations and fixes when something changes in the sources.' },
          { title: 'Context up to date', text: 'New rules documented and reflected in models and agents.' },
          { title: 'Accuracy measured', text: 'Test questions keep running, so accuracy doesn’t drop unnoticed.' },
          { title: 'Incremental improvements', text: 'Adjustments to what exists: new cuts, performance and platform cost.' },
        ],
        when: 'For when the foundation is mature, when your in-house team takes over, or during the 3-month transition if you decide to go on your own. At a lower price than the plans.',
      },
      addons: {
        title: 'To go further',
        subtitle: 'Add-ons available with any plan. Pricing on request.',
        items: [
          { title: 'Strategic Management', text: 'A senior person who prioritizes with you what creates the most value, tracks results and brings data into leadership decisions.' },
          { title: 'Data Culture', text: 'Training and support for your team to use data and AI day to day, in a format designed for your company.' },
        ],
      },
    },
  },
};
