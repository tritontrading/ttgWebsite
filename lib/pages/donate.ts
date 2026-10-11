export const donatePage = {
  label: "Support TFG",
  titleLines: ["Help Students", "Learn By Doing"],
  paragraphs: [
    "Support practical training, student projects, and programming for UC San Diego students interested in finance, strategy, and quantitative work.",
    "Contributions can help fund analyst training, student events, and resources for hands-on projects.",
  ],
  goFundMeUrl: "https://gofund.me/5648b15d5",
  whyTitle: "Help students practice the work they want to pursue.",
  whyParagraphs: [
    "TFG gives members structured opportunities to research companies, analyze business questions, and test quantitative ideas.",
    "Your support helps make those learning experiences available to more students.",
  ],
  audiences: [
    {
      label: "UC Alumni",
      description:
        "If you remember needing a break early in your career — and wish there had been a group doing what TFG is doing — this is how you pay it forward.",
    },
    {
      label: "Philanthropists",
      description:
        "Support practical financial education, student research, and hands-on training.",
    },
    {
      label: "Organization Details",
      description:
        "Triton Trading Group's EIN is 41-2939437. Our address is 9500 Gilman Drive.",
    },
  ],
  allocations: [
    { title: "Research Tools & Market Data", description: "Tools and data for student research, financial analysis, and quantitative projects." },
    { title: "Educational Resources & Member Training", description: "Learning materials and structured practice in financial modeling, investment research, and quantitative methods." },
    { title: "Competitions & Conferences", description: "Opportunities for students to present research, learn from practitioners, and take part in finance competitions." },
    { title: "Research Infrastructure", description: "Computing, reporting, and data infrastructure for educational projects." },
  ],
} as const;
