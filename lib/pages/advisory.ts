export const advisoryPage = {
  label: "FP&A",
  title: "FP&A",
  description:
    "TTG helps early-stage teams use cash-flow models, market research, and operating plans to make finance and growth decisions. Student analysts work with a named engagement lead.",
  email: "tritontradinggroup@ucsd.edu",

  process: [
    {
      step: "01",
      title: "Discovery",
      description:
        "We learn your business, challenges, and goals before scoping anything.",
    },
    {
      step: "02",
      title: "Diagnosis",
      description:
        "We assess your current state, gather data, and identify root causes.",
    },
    {
      step: "03",
      title: "Analysis & Strategy",
      description:
        "We build models, surface insights, and develop recommendations.",
    },
    {
      step: "04",
      title: "Delivery",
      description:
        "We present findings, support implementation, and hand off cleanly.",
    },
  ],

  whyUs: [
    {
      title: "Built for Early-Stage",
      description:
        "We understand startup constraints - constrained resources, evolving needs, and the pressure to execute quickly. Our process is designed around your reality.",
    },
    {
      title: "Custom-Tailored Work",
      description:
        "Every engagement is scoped around your specific problem and goals.",
    },
    {
      title: "Structured Division Behind You",
      description:
        "You get a team with defined roles and managed delivery - an engagement lead, senior analysts, and specialists all working toward your outcome.",
    },
    {
      title: "High-Impact, Accessible",
      description:
        "Professional-quality analysis delivered with the focus and care that early-stage companies deserve.",
    },
  ],

  services: [
    {
      title: "Finance & Business Analysis",
      items: [
        "Financial modeling & forecasting",
        "Cash flow and runway analysis",
        "Unit economics and break-even",
        "Valuation and comparables",
        "Pricing and margin analysis",
        "Scenario and sensitivity modeling",
      ],
    },
    {
      title: "Operations & Strategy",
      items: [
        "Market research and competitive analysis",
        "Go-to-market planning",
        "Sales process and CRM design",
        "Workflow optimization",
        "KPI tracking and project roadmaps",
      ],
    },
    {
      title: "Tech & AI Integration",
      items: [
        "Workflow automation",
        "AI tooling and API integration",
        "Digital infrastructure setup",
        "Digitization for SMBs",
      ],
    },
    {
      title: "Marketing & Growth",
      items: [
        "Paid ad campaigns (Meta, TikTok, Instagram)",
        "Short-form video and content creation",
        "Website development (UI/UX)",
        "Marketing strategy and sales support",
      ],
    },
  ],

  workWithUs: {
    title: "Work With Us",
    description:
      "TTG partners with startups, student ventures, and organizations that need structured financial analysis, strategic support, and hands-on project work. Our members operate like a consulting bench — scoped engagements, clear deliverables, and professional standards.",
    offerings: [
      {
        title: "FP&A & Consulting",
        description:
          "Financial modeling, forecasting, market research, and operational strategy for early-stage and growth-stage teams.",
      },
      {
        title: "Research & Analysis",
        description:
          "Sector coverage, competitive landscapes, and investment-style memos tailored to your business questions.",
      },
      {
        title: "Technical & Systems",
        description:
          "Workflow design, data infrastructure, and tooling support for teams building finance and operations systems.",
      },
    ],
    process: [
      "Share a brief overview of your organization and project scope.",
      "TTG reviews fit and assigns a student project team.",
      "Teams deliver structured work on an agreed timeline with check-ins throughout.",
    ],
  },

  memberTrack: {
    title: "For Prospective Members",
    description:
      "The FP&A track gives members practice with financial analysis, client communication, and project delivery.",
    areasOfWork: [
      {
        title: "Financial Analysis & Forecasting",
        description:
          "Build financial models, conduct variance analysis, and develop multi-year forecasting frameworks for client organizations.",
      },
      {
        title: "Market Research & Competitive Analysis",
        description:
          "Conduct industry research, map competitive landscapes, and surface market intelligence to inform strategy.",
      },
      {
        title: "Business Strategy Development",
        description:
          "Structure and facilitate strategic planning engagements, from go-to-market planning to growth roadmapping.",
      },
      {
        title: "Operational Improvements",
        description:
          "Identify inefficiencies in business processes and design solutions to improve throughput and reduce cost.",
      },
      {
        title: "Technology Consulting & Implementation",
        description:
          "Advise on digital infrastructure, workflow automation, and system implementation for growing organizations.",
      },
      {
        title: "AI Integration & API Systems",
        description:
          "Design and implement AI-driven workflows, API integrations, and data automation pipelines.",
      },
    ],
    roles: [
      {
        title: "Engagement Lead",
        description: "Manages the project and client relationship. Sets deliverables, timelines, and communication cadence.",
      },
      {
        title: "Senior Consultant",
        description: "Leads analysis and project coordination. Owns the core work product and guides junior team members.",
      },
      {
        title: "Consultant",
        description: "Conducts research and develops insights. Builds models, slide decks, and analytical frameworks.",
      },
      {
        title: "Analyst",
        description: "Supports data gathering and analysis. Executes research tasks and contributes to deliverables.",
      },
    ],
    skills: [
      "Business analysis",
      "Financial modeling",
      "Technology consulting",
      "Strategic thinking",
      "Client communication",
      "Operational design",
    ],
    careers: [
      { role: "Management Consulting", detail: "McKinsey, Bain, BCG, Deloitte" },
      { role: "Venture Capital", detail: "Early-stage and growth investing" },
      { role: "Corporate Strategy", detail: "In-house strategy & finance roles" },
      { role: "Entrepreneurship", detail: "Founding and operating startups" },
      { role: "Investment Banking", detail: "M&A and transaction execution" },
      { role: "Private Equity", detail: "Portfolio operations & value creation" },
    ],
  },

  clients: [
    { name: "Neet Sheets", image: "/images/clients/neet.png" },
    { name: "Linkkup", image: "/images/clients/linkkup2.png" },
    { name: "UC Investments Academy", image: "/images/clients/ucia.png" },
    { name: "Triton Investment Banking", image: "/images/clients/TIB.png" },
  ],
} as const;
