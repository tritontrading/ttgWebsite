export const NAV_LINKS = [
    { label: "ABOUT", href: "/#about", anchor: true },
    { label: "ASSET MGMT", href: "/asset-management", anchor: false },
    { label: "FP&A", href: "/advisory", anchor: false },
    { label: "QUANT", href: "/quant", anchor: false },
    { label: "COMMUNITY", href: "/community", anchor: false },
    { label: "TEAM", href: "/team", anchor: false },
];

export const EXEC_BOARD = [
    {
        role: "President",
        title: "Chief Executive Officer (CEO)",
        name: "Shaurya Prakaash",
        desc: "Provides overall leadership for the organization and sets TTG's strategic direction.",
    },
    {
        role: "Executive Vice President",
        title: "Chief Operating Officer (COO)",
        name: "Maya Nayberg",
        desc: "Manages day-to-day operations and ensures teams execute projects and events effectively.",
    },
    {
        role: "Vice President of Finance",
        title: "Chief Financial Officer (CFO)",
        desc: "Oversees budgeting, financial reporting, and compliance with financial policies.",
    },
    {
        role: "Vice President of Marketing",
        title: "Chief Marketing Officer (CMO)",
        desc: "Leads branding, outreach, recruitment marketing, and communications.",
    },
    {
        role: "Vice President of Quantitative",
        title: "Chief Quantitative Officer (CQO)",
        desc: "Leads quantitative research, algorithm development, and strategy testing.",
    },
    {
        role: "Vice President of Product",
        title: "Chief Product Officer (CPO)",
        desc: "Transforms research outputs into member-facing resources, reports, and tools.",
    },
    {
        role: "Vice President of External Relations",
        title: "Chief External Relations Officer (CXO)",
        name: "Naliya Montebon",
        desc: "Develops partnerships with organizations, firms, and speakers.",
    },
    {
        role: "Chief Investment Officer",
        title: "CIO",
        desc: "Oversees the investment strategy and asset management framework.",
    },
    {
        role: "Vice President of Asset Management",
        title: "Supporting CIO",
        desc: "Supports the Chief Investment Officer and manages the operational side of the investment process.",
    },
];

export const ADDITIONAL_LEADERSHIP = [
    {
        role: "Head of Activities",
        desc: "Organizes events, onboarding programs, and member engagement initiatives.",
    },
    {
        role: "Head of Social Media",
        desc: "Manages content creation and TTG's digital presence.",
    },
];

export const MEMBER_CLASSES = [
    {
        year: "Class of 2026",
        status: "Senior",
        desc: "Senior members participating in leadership roles and advanced projects — transitioning to advisors.",
    },
    {
        year: "Class of 2027",
        status: "Mid-level",
        desc: "Members developing analytical and technical skills within departments.",
    },
    {
        year: "Class of 2028",
        status: "New",
        desc: "New members beginning their TTG experience and participating in introductory projects.",
    },
];

export const TICKER_SYMBOLS = [
    "SPY +0.4%",
    "QQQ -0.2%",
    "TSLA +1.1%",
    "NVDA +2.3%",
    "AAPL -0.1%",
    "GLD +0.8%",
    "BTC +3.2%",
    "ETH +1.9%",
    "JPM +0.5%",
    "GS +0.7%",
    "MS -0.3%",
    "VIX -4.1%",
    "TLT -0.6%",
    "XLE +1.4%",
    "IWM +0.9%",
];

export interface Department {
    id: string;
    label: string;
    name: string;
    description: string;
    sectors?: Array<{ name: string; pct: number; r: number }>;
    panels?: Array<{ title: string; value: string; change: string }>;
    signals?: Array<{ name: string; value: string; status: string }>;
}

export const DEPARTMENTS: Department[] = [
    {
        id: "asset-management",
        label: "01",
        name: "Asset Management",
        description:
            "Portfolio construction, sector allocation, and long/short equity strategies. Members manage a simulated fund with real market data.",
        sectors: [
            { name: "Technology", pct: 32, r: 52 },
            { name: "Financials", pct: 18, r: 38 },
            { name: "Healthcare", pct: 14, r: 33 },
            { name: "Energy", pct: 12, r: 30 },
            { name: "Consumer", pct: 15, r: 34 },
            { name: "Other", pct: 9, r: 26 },
        ],
    },
    {
        id: "fpa-consulting",
        label: "02",
        name: "FP&A Consulting",
        description:
            "Financial planning, analysis, and strategic consulting for real client engagements. Build models, decks, and recommendations.",
        panels: [
            { title: "Revenue Model", value: "$4.2M", change: "+12%" },
            { title: "EBITDA Margin", value: "23.4%", change: "+2.1pp" },
            { title: "DCF Valuation", value: "$18.7M", change: "Base case" },
            {
                title: "Scenario Analysis",
                value: "3 Cases",
                change: "Bull / Base / Bear",
            },
        ],
    },
    {
        id: "quant-finance",
        label: "03",
        name: "Quantitative Finance",
        description:
            "Statistical modeling, algorithmic strategy development, and signal research. Python-first environment with real backtesting infrastructure.",
        signals: [
            { name: "MOMENTUM_12M", value: "+0.82", status: "LONG" },
            { name: "MEAN_REVERT_5D", value: "-0.34", status: "SHORT" },
            { name: "VOL_REGIME", value: "LOW", status: "ACTIVE" },
            { name: "CROSS_ASSET_CORR", value: "0.67", status: "WATCH" },
        ],
    },
];

export const TIMELINE_STEPS = [
    {
        year: "1",
        title: "Recruitment",
        description:
            "Applications open. Written test, technical interview, and fit interview evaluate candidates across all three departments.",
    },
    {
        year: "2",
        title: "Training Program",
        description:
            "Eight-week curriculum covering financial modeling, Python, valuation frameworks, and quantitative methods.",
    },
    {
        year: "3",
        title: "Research Teams",
        description:
            "Members join department teams, produce original research, and present findings to the full group.",
        image: "/images/meetings/image1.png",
    },
    {
        year: "4",
        title: "Live Projects",
        description:
            "Client-facing consulting work, live portfolio management, and algorithmic strategy deployment.",
        image: "/images/meetings/image2.png",
    },
    {
        year: "BEYOND",
        title: "Industry Careers",
        description:
            "Enter the industry ready to face any career in consulting or finance",
    },
];

export const SPONSORS = [
    { name: "Amazon", logo: "/images/sponsors/amazon.webp", slug: "amazon" },
    {
        name: "Amazon KDP",
        logo: "/images/sponsors/amazonkdp.avif",
        slug: "amazonkdp",
    },
    { name: "Apple", logo: "/images/sponsors/apple.avif", slug: "apple" },
    {
        name: "Goldman Sachs",
        logo: "/images/sponsors/goldmansachs.png",
        slug: "goldmansachs",
    },
    {
        name: "JPMorgan Chase",
        logo: "/images/sponsors/jpmorganchase.png",
        slug: "jpmorganchase",
    },
    {
        name: "Bain & Company",
        logo: "/images/sponsors/bainandcompany.png",
        slug: "bainandcompany",
    },
    {
        name: "Ochyo Consulting",
        logo: "/images/sponsors/ochyoconsulting.webp",
        slug: "ochyoconsulting",
    },
    {
        name: "Pinterest",
        logo: "/images/sponsors/pinterest.avif",
        slug: "pinterest",
    },
    { name: "PwC", logo: "/images/sponsors/pwc.png", slug: "pwc" },
    {
        name: "QuantConnect",
        logo: "/images/sponsors/quantconnect.avif",
        slug: "quantconnect",
    },
    {
        name: "Social Premier Marketing",
        logo: "/images/sponsors/socialpremiermarketing.jpg",
        slug: "socialpremiermarketing",
    },
    {
        name: "Stanford",
        logo: "/images/sponsors/stanford.avif",
        slug: "stanford",
    },
    {
        name: "UCSD Rady School of Management",
        logo: "/images/sponsors/ucsdradyschooolofmgmt.avif",
        slug: "ucsdradyschooolofmgmt",
    },
    {
        name: "MarketCrunch AI",
        logo: "/images/sponsors/marketcrunchai.png",
        slug: "marketcrunchai",
    },
    {
        name: "UPenn Wharton",
        logo: "/images/sponsors/upennwharton.png",
        slug: "upennwharton",
    },
    { name: "Zum", logo: "/images/sponsors/zum.avif", slug: "zum" },
];
