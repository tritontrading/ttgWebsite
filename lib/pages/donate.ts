export const donatePage = {
  label: "501(c)(3) Educational Nonprofit · Tax-Deductible",
  titleLines: ["Help Us Build", "What's Next"],
  paragraphs: [
    "Three months ago we started TTG's paper trading portfolio with one question: can a student-run team actually compete with the market? Today we have 35 positions, over $1M in cumulative P&L, and roughly 5× the S&P 500's return over the same window.",
    "We're raising $500,000 to fund the next phase — analyst training, a flagship student finance conference, an entrepreneurship incubator, alumni network buildout, and seed capital for a live student-managed fund. Donations are 100% tax-deductible.",
  ],
  goFundMeUrl: "https://gofund.me/5648b15d5",
  stats: [
    { value: "$500K", label: "Fundraising Goal" },
    { value: "~5×", label: "S&P 500 Outperformance" },
    { value: "$1M+", label: "Cumulative P&L" },
    { value: "35", label: "Active Positions" },
  ],
  whyTitle: "The existing path wasn't producing the talent the industry needs.",
  whyParagraphs: [
    "Résumé-padded clubs, slow-moving committees, recruiting pipelines that reward who you know over what you can do. We started TTG because that system wasn't working — for students or for the industry.",
    "The discipline is institutional. The team is undergrads. We've spent months trying to formalize a Student Managed Investment Fund with UCSD. That conversation hasn't moved. We're not waiting anymore.",
  ],
  audiences: [
    {
      label: "UC Alumni",
      description:
        "If you remember needing a break early in your career — and wish there had been a group doing what TTG is doing — this is how you pay it forward.",
    },
    {
      label: "Philanthropists",
      description:
        "If you believe student-led institutions can outwork the bureaucracies above them — the track record is already here. We're asking for your support to scale it.",
    },
    {
      label: "Tax Deductibility",
      description:
        "TTG is a registered 501(c)(3) educational nonprofit. Donations are 100% tax-deductible. Every donor receives an official receipt with our EIN. IRS determination letter available on request.",
    },
  ],
  allocations: [
    {
      title: "Analyst Training",
      description:
        "A rigorous curriculum that turns undergrads into analysts who can actually compete — real modeling, real process, real review cadence.",
    },
    {
      title: "Student Finance Conference",
      description:
        "A flagship annual conference bringing together student investors, practitioners, and researchers from across the country.",
    },
    {
      title: "Entrepreneurship Incubator",
      description:
        "A structured program for student founders and operators to build alongside TTG's finance and strategy talent.",
    },
    {
      title: "Alumni Network",
      description:
        "Formalize the alumni pipeline — connecting current members with TTG graduates who are already working in the industry.",
    },
    {
      title: "Live Fund Seed Capital",
      description:
        "Seed capital to transition our paper trading portfolio — already generating over $1M in cumulative P&L — into a live, student-managed fund.",
    },
  ],
} as const;
