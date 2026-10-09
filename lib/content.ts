/** Editable page content — swap copy here without touching layout components. */

export const site = {
    name: "Triton Trading Group",
    shortName: "TTG",
    university: "University of California, San Diego",
    hero: {
        headline: "Build practical experience in finance, investing, and quantitative research.",
        description:
            "Triton Trading Group is a nonprofit student organization serving students at the University of California, San Diego through hands-on programs in Asset Management, Financial Planning & Analysis, Quantitative Finance, and professional development.",
        image: "/images/hero/asset-management.png",
        alt: "Triton Trading Group members at an information session",
    },
} as const;

export const divisionLinks = [
    { label: "Asset Management", href: "/asset-management" },
    { label: "Financial Planning & Analysis", href: "/advisory" },
    { label: "Quantitative Finance", href: "/quant" },
] as const;

export const memberLinks = [
    { label: "Current", href: "/members/current" },
    { label: "Founders", href: "/members/founders" },
    { label: "Alumni", href: "/members/alumni" },
] as const;

export const tickerItems = [
    "SPY", "QQQ", "NVDA", "TSLA", "AAPL", "GLD", "BTC-USD", "ETH-USD", "JPM", "GS", "MS", "VIX", "TLT", "XLE",
] as const;

export const about = {
    headline:
        "Triton Trading Group is a student-run organization dedicated to advancing financial education, investment literacy, and professional development at UC San Diego.",
    mission:
        "Our mission is to provide members with practical exposure to capital markets, financial analysis, business strategy, and technological innovation in finance through structured training programs and real-world experiences.",
    description:
        "Through our departments in asset management, financial planning and analysis, and quantitative finance, TTG bridges the gap between academic learning and professional practice. As a nonprofit, we reinvest resources into educational programming and research initiatives.",
    skills: "Skills developed: equity research / financial modeling / algorithmic strategy / consulting / valuation analysis",
    stats: [
        { label: "Core Departments", value: "3" },
        { label: "Active Members", value: "50+" },
    ],
} as const;

export const whoWeAre = {
    title: "About us",
    paragraphs: [
        "Triton Trading Group is a nonprofit student organization focused on practical financial education, professional development, and applied learning for UC San Diego students.",
        "Triton Trading Group gives UC San Diego students a place to practice investment research, financial analysis, and quantitative work. Members learn through training, team projects, and presentations.",
    ],
    skillsLabel: "Skills Developed",
    skills: [
        "equity research",
        "financial modeling",
        "algorithmic strategy",
        "consulting",
        "valuation analysis",
    ],
} as const;

export const mission = {
    title: "Our Mission",
    paragraphs: [
        "Triton Trading Group is a nonprofit organization serving students at the University of California, San Diego. Our mission is to provide students with practical financial education and professional development through hands-on experience in investment research, financial analysis, quantitative finance, and business strategy.",
        "We carry out this mission through our primary programs in Asset Management, Financial Planning & Analysis, and Quantitative Finance. Members participate in structured training, investment and market research, financial modeling, quantitative strategy development, company projects, workshops, competitions, presentations, and other professional development opportunities.",
        "Triton Trading Group owns and operates tritontradinggroup.org as the organization’s official website.",
    ],
} as const;

export const departments = {
    headline: "Three ways to build practical finance experience.",
    branches: [
        {
            department: "Asset Management",
            href: "/asset-management",
            title: "Research public companies and defend investment ideas.",
            description:
                "Members cover sectors, build valuation models, write investment memos, and present their conclusions to the investment committee.",
            image: "/images/meetings/image1.png",
            bullets: [
                "Conduct company and sector research",
                "Build financial models and valuation frameworks",
                "Write investment memos",
                "Present investment ideas to the Investment Committee",
                "Monitor portfolio positions and performance",
            ],
            careers: "Asset management, hedge funds, investment banking",
        },
        {
            department: "Financial Planning & Analysis",
            href: "/advisory",
            title: "Help organizations answer finance and operating questions.",
            description:
                "Members work on financial analysis, market research, business strategy, and systems projects for startups, student ventures, and organizations.",
            image: "/images/tabling/image1.png",
            bullets: [
                "Financial analysis and forecasting",
                "Market research and competitive analysis",
                "Business strategy development",
                "Technology consulting and system implementation",
                "AI integration and API systems",
            ],
            careers:
                "Consulting, venture capital, corporate strategy, entrepreneurship",
        },
        {
            department: "Quantitative Finance",
            href: "/quant",
            title: "Turn market questions into testable strategies.",
            description:
                "Members use Python, financial data, and statistical methods to research, backtest, and evaluate systematic investment ideas.",
            image: "/images/meetings/image2.png",
            bullets: [
                "Algorithmic trading strategies",
                "Factor-based investing",
                "Statistical arbitrage",
                "Market data analysis",
                "Machine learning applications in finance",
            ],
            careers: "Quant trading, hedge funds, fintech, data science",
        },
    ],
} as const;

export const clients = {
    title: "Work with us",
    description:
        "Bring TTG a finance, strategy, operations, or systems question. We work with startups, student ventures, and organizations on scoped projects.",
    href: "/advisory",
} as const;

export const network = {
    title: "Connections",
    description:
        "Organizations represented in the TTG network.",
    partners: [
        {
            name: "Stanford University",
            image: "/images/connections/stanford.png",
        },
        { name: "Zūm", image: "/images/connections/zum.png" },
        { name: "Apple", image: "/images/connections/apple.png" },
        { name: "Wharton School", image: "/images/connections/wharton.png" },
        { name: "Chase", image: "/images/connections/chase.png" },
        { name: "PwC", image: "/images/connections/pwc.png" },
        {
            name: "Goldman Sachs",
            image: "/images/connections/goldman-sachs.png",
        },
        { name: "Amazon", image: "/images/connections/amazon.png" },
        { name: "Pinterest", image: "/images/connections/pinterest.png" },
        {
            name: "SoCal Premier Marketing Inc.",
            image: "/images/connections/socal-premier.png",
        },
        { name: "Amazon KDP", image: "/images/connections/amazon-kdp.png" },
        { name: "Logitech", image: "/images/connections/logitech.png" },
        { name: "Adobe", image: "/images/connections/adobe.png" },
        { name: "Goinfo", image: "/images/connections/goinfo.png" },
        { name: "Northrop Grumman", image: "/images/connections/northrop-grumman.png" },
        { name: "KPMG", image: "/images/connections/kpmg.png" },
        { name: "SMBC", image: "/images/connections/smbc.png" },
        {
            name: "The White House",
            image: "/images/connections/whitehouse.png",
        },
        { name: "Ochyo", image: "/images/connections/ochyo.png" },
        { name: "Flo", image: "/images/connections/flo.png" },
        {
            name: "Spartan Partnership",
            image: "/images/connections/spartan-partnership.png",
        },
        {
            name: "Lemon My Vehicle",
            image: "/images/connections/lemon-my-vehicle.png",
        },
        {
            name: "Raymond James",
            image: "/images/connections/raymond-james.png",
        },
        { name: "Tetra Tech", image: "/images/connections/tetra-tech.png" },
        { name: "First Point Group", image: "/images/connections/first-point-group.png" },
        { name: "Block", image: "/images/connections/block.png" },
        { name: "Arcadia", image: "/images/connections/arcadia.png" },
        {
            name: "Bentley Associates L.P.",
            image: "/images/connections/bentley-associates.png",
        },
        { name: "EY", image: "/images/connections/ey.png" },
        {
            name: "Meadow Cognition",
            image: "/images/connections/meadow-cognition.png",
        },
        {
            name: "SharkNinja",
            image: "/images/connections/sharkninja.png",
        },
        {
            name: "Skin 22",
            image: "/images/connections/skin22.png",
        },
    ],
} as const;

export const community = {
    title: "Community",
    description:
        "Building more than portfolios — building the relationships, collaboration, and community that drive our success.",
    photos: [
        { src: "/images/socials/GroupPicUsc.jpeg", alt: "TTG group at USC" },
        { src: "/images/socials/GirlsUsc.JPG", alt: "TTG members at USC" },
        {
            src: "/images/socials/GuysPicUsc.JPG",
            alt: "TTG members group photo",
        },
        { src: "/images/socials/sunsetCalm.JPG", alt: "TTG sunset gathering" },
        { src: "/images/socials/beach.JPEG", alt: "TTG at the beach" },
        { src: "/images/socials/hutPic.JPG", alt: "TTG team outing" },
        { src: "/images/socials/poster.JPEG", alt: "TTG event poster" },
        { src: "/images/socials/image1.png", alt: "TTG community event" },
        { src: "/images/socials/group-dinner.png", alt: "TTG group dinner" },
        {
            src: "/images/socials/pool-gathering.png",
            alt: "TTG members at a pool gathering",
        },
        {
            src: "/images/socials/group-night.png",
            alt: "TTG members together at night",
        },
    ],
} as const;

export const timeline = {
    title: "From Recruit to Analyst",
    steps: [
        {
            id: "1",
            title: "Recruitment",
            description:
                "Applications open. Written test, technical interview, and fit interview evaluate candidates across all three departments.",
            align: "left" as const,
        },
        {
            id: "2",
            title: "Training Program",
            description:
                "Eight-week curriculum covering financial modeling, Python, valuation frameworks, and quantitative methods.",
            align: "right" as const,
        },
        {
            id: "3",
            title: "Research Teams",
            description:
                "Members join department teams, produce original research, and present findings to the full group.",
            align: "left" as const,
            image: "/images/meetings/image1.png",
        },
        {
            id: "4",
            title: "Live Projects",
            description:
                "Client-facing consulting work, live portfolio management, and algorithmic strategy deployment.",
            align: "right" as const,
            image: "/images/meetings/image2.png",
        },
        {
            id: "BEYOND",
            title: "Industry Careers",
            description:
                "Enter the industry ready to face any career in consulting or finance",
            align: "left" as const,
        },
    ],
} as const;

export const recruitment = {
    title: "Join Triton Trading Group",
    description:
        "Triton Trading Group recruits students each academic quarter who are interested in finance, markets, technology, and business strategy.",
    schedule: {
        title: "Schedule",
        events: [
            {
                date: "Thursday 10/01",
                title: "Dirty Birds Social",
                details: "8-9:30 pm | Dirty Birds UCSD | Casual",
            },
            {
                date: "Friday 10/02",
                title: "Yogurt Chats",
                details: "11-9 pm | Yogurtworld | Casual",
            },
            {
                date: "Monday 10/05",
                title: "Info Night",
                details: "8-10 pm | Location TBD | Business Casual",
                note: "Applications due tonight.",
            },
            {
                date: "Wednesday 10/07",
                title: "Stock Pitch Night",
                qualifier: "Invite-only",
                details: "8-10 pm | Business Professional",
            },
            {
                date: "Saturday 10/10",
                title: "Interviews",
                qualifier: "Invite-only",
                details: "Business Professional",
            },
        ],
    },
    faqs: {
        title: "FAQs",
        items: [
            {
                question: "Who can apply to TTG?",
                answer: "TTG recruits UC San Diego undergraduate students each quarter. We welcome applicants from all majors who are interested in finance, markets, technology, and business strategy.",
            },
            {
                question: "Do I need prior finance experience?",
                answer: "No. Many members join without a finance background. We look for curiosity, work ethic, and analytical potential — the training program is designed to bring new members up to speed.",
            },
            {
                question: "Can I apply to more than one department?",
                answer: "Yes. You may indicate interest in Asset Management, Financial Planning & Analysis, and Quantitative Finance on your application. Final placement depends on fit, assessment performance, and interview outcomes.",
            },
            {
                question: "What does the recruitment process involve?",
                answer: "The process typically includes an online application, info session, written assessment, and interviews with department leads. See the recruitment timeline above for key dates each cycle.",
            },
            {
                question: "How much time does membership require?",
                answer: "Expect a meaningful weekly commitment that varies by department and project load. Members balance coursework with meetings, training, research, and live project work.",
            },
            {
                question: "When does recruitment happen?",
                answer: "TTG recruits each academic quarter. Dates shift slightly by cycle — check the recruitment timeline and follow our social channels for the latest announcements.",
            },
        ],
    },
} as const;

export const footer = {
    email: "tritontradinggroup@ucsd.edu",
    description:
        "Nonprofit student organization serving students at the University of California, San Diego",
    address: "9500 Gilman Drive, La Jolla, CA 92093",
    ein: "41-2939437",
    website: "tritontradinggroup.org",
    social: [
        {
            label: "LinkedIn",
            handle: "@tritontradinggroup",
            href: "https://www.linkedin.com/company/tritontradinggroup",
        },
        { label: "X", handle: "@ttgatucsd", href: "https://x.com/ttgatucsd" },
        {
            label: "Instagram",
            handle: "@tritontradingucsd",
            href: "https://www.instagram.com/tritontradingucsd",
        },
        {
            label: "Reddit",
            handle: "u/TritonTradingatUCSD",
            href: "https://www.reddit.com/user/TritonTradingatUCSD/",
        },
    ],
    disclaimer:
        "Educational content only; not investment, legal, or tax advice. Student organization; no university endorsement is implied.",
} as const;
