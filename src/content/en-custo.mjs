// Copy for the cost page: hiring a CLT data professional x Oika.
// Market figures are estimates; update them here when the sales material changes.

export default {
  custo: {
    meta: {
      title: 'How much does a data team cost? Hiring x Oika | Oika Data',
      description: 'Compare the monthly cost and the time to first result between hiring a data professional under CLT and working with Oika’s team.',
    },
    hero: {
      label: 'Hiring x Oika',
      title: 'How much does a data team cost?',
      subtitle: 'Compare the monthly cost and the time to first result between hiring a data professional under CLT (Brazilian employment) and working with Oika’s senior team.',
    },
    totals: [
      { name: 'Hire under CLT', prefix: '≈ ', value: 'R$ 13,600', per: '/month', what: 'One mid-level person, one specialty, with the platform still extra.' },
      { name: 'Oika', prefix: 'from ', value: 'R$ 6,000', per: '/month', what: 'A senior data team covering engineering, modeling, BI and AI, with a first result within 30 days.' },
    ],
    table: {
      columns: ['Hire under CLT', 'Oika'],
      rows: [
        { label: 'Salary', values: ['≈ R$ 8,000 for a mid-level data professional', 'Not applicable: you only pay the plan'] },
        { label: 'Payroll taxes and benefits', values: ['≈ R$ 5,600 (about 70% on top of salary: INSS, FGTS, vacation, 13th salary and benefits)', 'No payroll taxes'] },
        { label: 'Total per month', values: ['≈ R$ 13,600', 'From R$ 6,000'] },
        { label: 'Who you get', values: ['One person, one specialty. Alone, in a company without a data culture, they end up as a report factory', 'Senior team: engineering, modeling, BI and AI'] },
        { label: 'Time to start', values: ['1 to 2 months to hire, plus months of ramp-up before delivering', 'Starts at the kickoff call'] },
        { label: 'First result', values: ['About 6 months to hire, set up the platform and deliver', 'Within 30 days'] },
        { label: 'If the person leaves', values: ['The knowledge leaves too and you start over', 'Team and documentation: the knowledge stays'] },
        { label: 'Commitment', values: ['Fixed cost, hard to adjust', 'Monthly plan, sized to your complexity'] },
      ],
      note: 'CLT figures are market estimates for a mid-level data professional; payroll taxes and benefits vary with the company’s tax regime and benefits package, and tools and platform are not included in the math. Time to hire: Ford/Datafolha 2026. Oika’s price depends on how many teams are served, the visualization tool and the use cases.',
    },
    back: { label: 'Back to the Oika + Nekt partnership', href: '/en/nekt-partnership/' },
  },
};
