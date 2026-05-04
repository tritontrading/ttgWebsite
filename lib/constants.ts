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
        photo: "/images/board/shaurya.JPG",
        desc: "Provides overall leadership, sets strategic vision, and represents TTG to campus and industry partners.",
    },
    {
        role: "Executive Vice President",
        title: "Chief Operating Officer (COO)",
        name: "Maya Nayberg",
        photo: "/images/board/maya.JPG",
        desc: "Supports the President by overseeing Vice Presidents and maintaining organizational structure and operational efficiency.",
    },
    {
        role: "Chief Investment Officer",
        title: "Chief Investment Officer (CIO)",
        name: "Anthony Volkov",
        photo: "/images/board/anthony.JPG",
        desc: "Manages TTG's investment portfolio and leads financial education workshops.",
    },
    {
        role: "Vice President of Finance",
        title: "Chief Financial Officer (CFO)",
        name: "Michael Valdivia",
        photo: "/images/board/michael.JPG",
        desc: "Oversees budgeting, funding, reimbursements, and financial compliance with UCSD policies.",
    },
    {
        role: "Vice President of Quantitative",
        title: "Chief Quantitative Officer (CQO)",
        name: "Noor Dhillon",
        photo: "/images/board/noor.JPEG",
        desc: "Oversees quantitative strategy development, algorithm performance, and data integrity.",
    },
    {
        role: "Vice President of Product",
        title: "Chief Product Officer (CPO)",
        name: "Titus Cheng",
        photo: "/images/board/titus.JPG",
        desc: "Directs AI-driven projects and technology initiatives to provide members with hands-on technical experience.",
    },
    {
        role: "Vice President of External Relations",
        title: "Chief External Relations Officer (CXO)",
        name: "Jacqueline Dao",
        photo: "/images/board/jackie.JPG",
        desc: "Leads recruitment, onboarding, and social programming to strengthen community engagement.",
    },
];

export const BOARD_MEMBERS = [
    {
        role: "VP of Asset Management",
        name: "Micah Watson",
        photo: "/images/board/micah.JPG",
        desc: "Oversees the day-to-day operations of the Asset Management department, keeping research teams on track and ensuring all coverage work meets TTG's standards.",
    },
    {
        role: "VP of Activities & Social Media",
        name: "Prisca Lee",
        photo: "/images/board/prisca.JPG",
        desc: "Plans and organizes club socials and community events while managing TTG's social media presence and content across all platforms.",
    },
    {
        role: "Director of Marketing Design",
        name: "Shiyo Ohashi",
        photo: "/images/board/shiyo.JPG",
        desc: "Creates all visual designs for TTG's social media posts, marketing materials, and brand content across every platform.",
    },
    {
        role: "Director of Quant",
        name: "Anirudh Iyengar",
        desc: "Leads the Quant Division's strategy, research initiatives, and competition efforts while coordinating with executive leadership.",
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
