export const quantPage = {
  label: "Quantitative Finance",
  titleLines: ["Data-Driven", "Investing"],
  description:
    "Members use Python, market data, and statistical methods to research and backtest systematic investment ideas.",
  heroImage: "/images/tabling/image3.png",
  practiceImage: "/images/meetings/image2.png",
  areas: [
    {
      title: "Algorithmic Trading Strategies",
      description:
        "Design and backtest systematic trading strategies using historical market data.",
    },
    {
      title: "Factor-Based Investing",
      description:
        "Research equity factors such as momentum, value, quality, and low volatility.",
    },
    {
      title: "Statistical Arbitrage",
      description:
        "Study cointegration, pairs trading, and cross-sectional momentum.",
    },
    {
      title: "Market Data Analysis",
      description:
        "Analyze price histories and portfolio data to test market questions.",
    },
    {
      title: "Machine Learning in Finance",
      description:
        "Apply machine-learning methods to financial prediction, regime detection, and portfolio research.",
    },
    {
      title: "Paper Trading",
      description:
        "Use paper trading to observe how a tested strategy behaves after backtesting.",
    },
  ],
  tools: [
    { name: "Python", detail: "Data analysis, modeling, and research notebooks" },
    {
      name: "QuantConnect",
      detail: "Backtesting and strategy research",
    },
    {
      name: "Broker & Execution",
      detail: "Paper trading and brokerage connectivity",
    },
    { name: "Statistical Modeling", detail: "Time-series analysis, regression, and Bayesian methods" },
    { name: "Backtesting", detail: "Historical strategy evaluation" },
    { name: "Version Control & Notebooks", detail: "Git and Jupyter for research work" },
  ],
  skills: [
    "Statistical modeling",
    "Algorithmic strategy development",
    "Data analysis and visualization",
    "Quantitative portfolio construction",
    "Risk management and performance attribution",
    "Python and scientific computing",
  ],
  careers: [
    { role: "Quantitative Trading", detail: "Systematic strategy research" },
    { role: "Hedge Funds", detail: "Systematic and discretionary research" },
    { role: "Fintech", detail: "Financial-data products and infrastructure" },
    { role: "Data Science", detail: "Applied modeling and analysis" },
    { role: "Risk Management", detail: "Market-risk and quantitative analysis" },
    { role: "Research", detail: "Academic and institutional finance research" },
  ],
} as const;
