export const assetManagementPage = {
  label: "Asset Management",
  titleLines: ["Fundamental", "Investing"],
  description:
    "Members research public companies, build valuation models, and present investment ideas to TTG's investment committee.",
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
    { role: "Asset Management", detail: "Public-markets research and portfolio analysis" },
    { role: "Hedge Funds", detail: "Fundamental research and investment theses" },
    { role: "Investment Banking", detail: "Valuation and financial-statement analysis" },
    { role: "Equity Research", detail: "Company coverage and written analysis" },
    { role: "Corporate Finance", detail: "Capital allocation and operating analysis" },
    { role: "Buy-Side Internships", detail: "Investment process and security-selection practice" },
  ],
} as const;
