export const quantPage = {
  label: "Quantitative Finance",
  titleLines: ["Data-Driven", "Investing"],
  description:
    "The Quantitative Finance department focuses on data-driven investing and algorithmic trading strategies. Members develop systematic investment models using Python, QuantConnect, Alpaca, and statistical research workflows - combining finance, mathematics, and computer science to analyze markets and develop automated strategies.",
  heroImage: "/images/tabling/image3.png",
  practiceImage: "/images/meetings/image2.png",
  areas: [
    {
      title: "Algorithmic Trading Strategies",
      description:
        "Design, backtest, and refine systematic trading strategies using historical and live market data. Evaluate performance with rigorous statistical frameworks.",
    },
    {
      title: "Factor-Based Investing",
      description:
        "Construct multi-factor models that capture systematic return drivers across equities. Research factors including momentum, value, quality, and low-volatility.",
    },
    {
      title: "Statistical Arbitrage",
      description:
        "Identify and exploit transient price dislocations using cointegration analysis, pairs trading, and cross-sectional momentum.",
    },
    {
      title: "Market Data Analysis",
      description:
        "Process and analyze large financial datasets, price histories, and portfolio data to surface actionable signals.",
    },
    {
      title: "Machine Learning in Finance",
      description:
        "Apply supervised and unsupervised learning techniques to financial prediction problems, regime detection, and portfolio optimization.",
    },
    {
      title: "Live Trading",
      description:
        "Deploy models that trade on paper. If they are performant, live deploy them to make trades with real capital.",
    },
  ],
  tools: [
    { name: "Python", detail: "Primary development language - pandas, numpy, scipy, sklearn" },
    {
      name: "QuantConnect Sponsorship",
      detail: "The quant team is specifically sponsored by QuantConnect for strategy research and backtesting",
    },
    {
      name: "Broker & Execution",
      detail: "Alpaca for paper trading, brokerage connectivity, and live strategy workflows",
    },
    { name: "Statistical Modeling", detail: "Time-series analysis, regression, Bayesian methods" },
    { name: "Backtesting Frameworks", detail: "QuantConnect and internal research workflows" },
    { name: "Version Control & Notebooks", detail: "Git, Jupyter, collaborative research workflows" },
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
    { role: "Quantitative Trading", detail: "Citadel, Two Sigma, DE Shaw, Jane Street" },
    { role: "Hedge Funds", detail: "Systematic and discretionary strategies" },
    { role: "Fintech", detail: "Algorithmic infrastructure and product" },
    { role: "Data Science", detail: "Applied ML across finance and tech" },
    { role: "Risk Management", detail: "Market risk and quant analytics at banks" },
    { role: "Research", detail: "Academic and institutional finance research" },
  ],
} as const;
