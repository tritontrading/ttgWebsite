export const advisoryPage = {
  label: "Financial Planning & Analysis",
  title: "Financial Planning & Analysis",
  description:
    "TFG helps early-stage teams use cash-flow models, market research, and operating plans to make finance and growth decisions. Student analysts work with a named engagement lead.",
  email: "contact@tritonfinance.org",

  process: [
    {
      step: "01",
      title: "Scope",
      description:
        "Share your goals, data, and timeline. We agree on the question and deliverables.",
    },
    {
      step: "02",
      title: "Build",
      description:
        "A student team develops the analysis with a project lead and regular check-ins.",
    },
    {
      step: "03",
      title: "Deliver",
      description:
        "We present findings and hand over the models, recommendations, and documentation.",
    },
  ],

  whyUs: [
    {
      title: "Built for Early-Stage",
      description:
        "Focused work designed around a small team’s priorities and resources.",
    },
    {
      title: "Custom-Tailored Work",
      description:
        "A clear question, agreed scope, and deliverables you can put to use.",
    },
    {
      title: "A Team, Not a Handoff",
      description:
        "A named project lead keeps the analysis and communication on track.",
    },
    {
      title: "A Useful Handoff",
      description:
        "Models, findings, and documentation your team can keep working with.",
    },
  ],

  services: [
    {
      title: "Finance & Business Analysis",
      items: [
        "Financial modeling & forecasting",
        "Cash flow and runway analysis",
        "Unit economics and scenario planning",
      ],
    },
    {
      title: "Strategic Finance & Research",
      items: ["Market research and competitive analysis", "Go-to-market analysis", "Dashboards and financial reporting"],
    },
  ],

  automation: {
    title: "Finance-Related Automation",
    items: ["Financial reporting workflows", "Data pipelines for financial analysis", "Finance-related tooling and automation"],
  },

  workWithUs: {
    title: "Work With Us",
    description:
      "TFG partners with startups, student ventures, and organizations that need structured financial analysis, strategic support, and hands-on project work. Our members operate like a consulting bench — scoped engagements, clear deliverables, and professional standards.",
    offerings: [
      {
        title: "Financial Planning & Analysis Consulting",
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
      "TFG reviews fit and assigns a student project team.",
      "Teams deliver structured work on an agreed timeline with check-ins throughout.",
    ],
  },

  memberTrack: {
    title: "For Prospective Members",
    description:
      "The Financial Planning & Analysis track gives members practice with financial analysis, client communication, and project delivery.",
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
