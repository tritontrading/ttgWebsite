export const assetManagementPage = {
  label: "Asset Management",
  titleLines: ["Fundamental", "Investing"],
  description:
    "The Asset Management department runs TTG's student-led investment process. Members build sector coverage, research public companies, develop valuation work, and present investment ideas through a disciplined committee structure centered on risk-adjusted long-term decision making.",
  heroImage: "/images/meetings/image1.png",
  practiceImage: "/images/tabling/image2.png",
  sectors: [
    {
      title: "Technology",
      description:
        "Coverage on software, semiconductors, and platform businesses with a focus on durable cash flow and market structure.",
    },
    {
      title: "Financials",
      description:
        "Banks, insurers, and capital markets names analyzed through balance sheet quality, underwriting, and rate sensitivity.",
    },
    {
      title: "Healthcare",
      description:
        "Research spanning biopharma, medtech, and services with attention to catalysts, reimbursement, and execution risk.",
    },
    {
      title: "Industrials",
      description:
        "Coverage on cyclicals, infrastructure, and manufacturing businesses tied to margin discipline and long-cycle demand.",
    },
    {
      title: "Energy & Defense",
      description:
        "Thesis work around commodity exposure, geopolitics, and capital allocation in supply-constrained industries.",
    },
    {
      title: "Commodities",
      description:
        "Macro-aware work across commodity-linked equities and related value chains.",
    },
  ],
  process: [
    "Idea generation through sector coverage and macro context",
    "Fundamental research using filings, earnings, and competitive analysis",
    "Financial modeling, scenario work, and valuation framing",
    "Written memo development and investment committee presentation",
    "Post-pitch monitoring, sizing discipline, and risk review",
  ],
  skills: [
    "Equity research and thesis formation",
    "Three-statement and valuation modeling",
    "Investment memo writing",
    "Portfolio construction and diversification logic",
    "Risk management and position review",
    "Clear verbal defense of recommendations",
  ],
  careers: [
    { role: "Asset Management", detail: "Public markets research, portfolio teams, and buy-side analyst tracks" },
    { role: "Hedge Funds", detail: "Fundamental long/short research and catalyst-driven investing" },
    { role: "Investment Banking", detail: "Valuation, financial statement fluency, and presentation discipline" },
    { role: "Equity Research", detail: "Structured coverage work and repeatable written analysis" },
    { role: "Corporate Finance", detail: "Capital allocation judgment and operating-performance analysis" },
    { role: "Buyside Internships", detail: "Interview-ready investment process and security-selection language" },
  ],
} as const;
