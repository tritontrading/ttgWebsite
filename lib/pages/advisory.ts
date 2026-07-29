export const advisoryPage = {
  label: "FP&A",
  title: "FP&A",
  description:
    "TTG's FP&A work serves both sides of the program: students developing real operating judgment, and organizations looking for structured support across finance, strategy, and execution.",
  email: "tritontradinggroup@ucsd.edu",

  process: [
    {
      step: "01",
      title: "Excellence",
      description:
        "We operate with client-grade rigor. Our work is evidence-based, internally reviewed, and built to stand up in front of investors, advisors, and leadership teams.",
    },
    {
      step: "02",
      title: "Adaptability",
      description:
        "We do not copy-paste frameworks. We tailor analysis, deliverables, and communication style to the client stage, industry, and constraints.",
    },
    {
      step: "03",
      title: "Commitment",
      description:
        "We prioritize responsiveness, clarity, and follow-through, working closely with one client at a time so you are not competing for attention.",
    },
  ],

  whyUs: [
    {
      title: "Research-Driven Clarity",
      description:
        "We deliver research-driven clarity, powered by top-tier student talent and rigorous internal review, so teams can explore options and defend decisions with sharper conviction.",
    },
    {
      title: "Measurable Impact",
      description:
        "Every engagement is structured around outputs you can use immediately and maintain after handoff, from decision memos to operating models and implementation plans.",
    },
  ],

  services: [
    {
      title: "Operations and Strategy",
      items: [
        "Customer identification",
        "Market positioning strategy",
        "Sales process structuring",
        "CRM design and cleanup",
      ],
    },
    {
      title: "Marketing & Growth Strategy",
      items: [
        "Ad creation support",
        "Influencer strategy and vetting",
        "Marketing tracking systems",
        "Sample disbursement SOPs",
      ],
    },
    {
      title: "Finance",
      items: [
        "Cash flow analysis",
        "SWOT analysis",
        "Financial modeling",
        "Startup credit analysis and auditing",
        "Unit economics",
      ],
    },
    {
      title: "Technology",
      items: [
        "AI infrastructure",
        "Automation",
        "Cloud tooling and security workflows",
        "Distributed data analytics",
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
      "The FP&A track gives TTG members structured exposure to consulting-style problem solving, corporate finance, and operator-level execution. Members learn by working through real business questions with clear deliverables and accountability.",
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
