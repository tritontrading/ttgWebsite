/** Editable page content — swap copy here without touching layout components. */

export const site = {
    name: "Triton Trading Group",
    shortName: "TTG",
    university: "University of California, San Diego",
    hero: {
        headline: "Preparing the next generation of finance leaders through",
        divisions: [
            {
                label: "Asset Management.",
                image: "/images/hero/asset-management.png",
                alt: "TTG members at an info session",
            },
            {
                label: "Quantitative Research.",
                image: "/images/hero/quantitative-research.png",
                alt: "TTG members collaborating with laptops",
            },
            {
                label: "Business Advisory.",
                image: "/images/hero/business-advisory.png",
                alt: "TTG members at a client advisory project",
            },
        ],
    },
} as const;

export const divisionLinks = [
    { label: "Asset management", href: "/asset-management" },
    { label: "FP&A", href: "/advisory" },
    { label: "Quant", href: "/quant" },
] as const;

export const memberLinks = [
    { label: "Current", href: "/members/current" },
    { label: "Alumni", href: "/members/alumni" },
] as const;

export const tickerItems = [
    { symbol: "SPY", change: "+0.40%", positive: true },
    { symbol: "QQQ", change: "-0.20%", positive: false },
    { symbol: "NVDA", change: "+2.30%", positive: true },
    { symbol: "TSLA", change: "+1.10%", positive: true },
    { symbol: "AAPL", change: "-0.10%", positive: false },
    { symbol: "GLD", change: "+0.80%", positive: true },
    { symbol: "BTC-USD", change: "+3.20%", positive: true },
    { symbol: "ETH-USD", change: "+1.90%", positive: true },
    { symbol: "JPM", change: "+0.50%", positive: true },
    { symbol: "GS", change: "+0.70%", positive: true },
    { symbol: "MS", change: "-0.30%", positive: false },
    { symbol: "VIX", change: "-4.10%", positive: false },
    { symbol: "TLT", change: "-0.60%", positive: false },
    { symbol: "XLE", change: "+1.40%", positive: true },
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

export const sponsors = {
    title: "Featured Sponsors",
    description:
        "QuantConnect and MarketCrunch directly support TTG members with tools and infrastructure used in research, market analysis, and quantitative development.",
    items: [
        { name: "QuantConnect", image: "/images/sponsors/quantconnect.avif" },
        {
            name: "MarketCrunch AI",
            image: "/images/sponsors/marketcrunchai.png",
        },
    ],
} as const;

export const whoWeAre = {
    title: "About us",
    paragraphs: [
        "Triton Trading Group equips UC San Diego students with practical experience across finance, strategy, and technology. Through structured training and real-world projects in Asset Management, FP&A, and Quantitative Finance, members develop the skills to analyze markets, solve business problems, and apply financial concepts beyond the classroom.",
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

export const departments = {
    headline: "Three branches. Three distinct operating environments.",
    branches: [
        {
            department: "Asset Management",
            href: "/asset-management",
            title: "Student Managed Investment Fund",
            description:
                "The Asset Management department manages TTG's student-led investment portfolio. Members conduct equity research, develop financial models, and present investment ideas through a structured investment committee process. The portfolio follows a disciplined investment framework focused on risk management, diversification, and long-term value creation.",
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
            title: "Real-World Experience with Companies",
            description:
                "The FP&A department provides hands-on experience working directly with companies, startups, and organizations. Members participate in real consulting-style projects where they help organizations analyze financial performance, improve operations, and develop strategic solutions. This department combines elements of corporate finance, consulting, and operational strategy.",
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
            title: "Data-Driven Investing & Algorithmic Trading",
            description:
                "The Quantitative Finance department focuses on data-driven investing and algorithmic trading strategies. Members develop systematic investment models using Python, QuantConnect, Alpaca, and statistical research workflows. The quant team is specifically sponsored by QuantConnect and combines finance, mathematics, and computer science to analyze markets and develop automated trading strategies.",
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
        "Partner with TTG for student-led consulting, research, and financial analysis. We work with startups, nonprofits, and growing organizations on scoped projects with clear deliverables.",
    href: "/advisory",
} as const;

export const network = {
    title: "Connections",
    description:
        "TTG members and alumni have gone on to roles and opportunities across leading firms, universities, and organizations.",
    partners: [
        {
            name: "Stanford University",
            image: "/images/connections/stanford.webp",
        },
        { name: "Zūm", image: "/images/connections/zum.webp" },
        { name: "Apple", image: "/images/connections/apple.webp" },
        { name: "Wharton School", image: "/images/connections/wharton.png" },
        { name: "Chase", image: "/images/connections/chase.png" },
        { name: "PwC", image: "/images/connections/pwc.png" },
        {
            name: "Goldman Sachs",
            image: "/images/connections/goldman-sachs.png",
        },
        { name: "Amazon", image: "/images/connections/amazon.webp" },
        { name: "Pinterest", image: "/images/connections/pinterest.webp" },
        {
            name: "SoCal Premier Marketing Inc.",
            image: "/images/connections/socal-premier.jpg",
        },
        { name: "Amazon KDP", image: "/images/connections/amazon-kdp.webp" },
        { name: "Logitech", image: "/images/connections/logitech.png" },
        { name: "Adobe", image: "/images/connections/adobe.png" },
        { name: "Goinfo", image: "/images/connections/goinfo.webp" },
        { name: "Northrup", image: "/images/connections/northrup.png" },
        { name: "KPMG", image: "/images/connections/kpmg.png" },
        { name: "SMBC", image: "/images/connections/smbc.png" },
        {
            name: "The White House",
            image: "/images/connections/whitehouse.png",
        },
        { name: "Ochyo", image: "/images/connections/ochyo.webp" },
        { name: "Flo", image: "/images/connections/flo-health.png" },
        {
            name: "Spartan Partnership",
            image: "/images/connections/Spartan-Partnership-Executive-Search-Logo.webp",
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
        { name: "First Point Group", image: "/images/connections/fpglogo.svg" },
        { name: "Block", image: "/images/connections/block.png" },
        { name: "Arcadia", image: "/images/connections/arcadia.png" },
        {
            name: "Bentley Associates L.P.",
            image: "/images/connections/bentley-associates.png",
        },
        { name: "EY", image: "/images/connections/ey.png" },
        {
            name: "Meadow Cognition",
            image: "/images/connections/meadowlabs.jpg",
        },
        {
            name: "SharkNinja",
            image: "/images/connections/sharkninja.svg",
        },
        {
            name: "Skin 22",
            image: "/images/connections/skin22.webp",
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

const applicationFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSf5iQbS2NwGXnqd-L0uw4LxIIB7bJtzA8ZUCeg6xoZP6TbQsA/viewform";

export const recruitment = {
    title: "Join Triton Trading Group",
    description:
        "Triton Trading Group recruits students each academic quarter who are interested in finance, markets, technology, and business strategy.",
    links: {
        interestForm: {
            label: "Interest Form",
            href: applicationFormUrl,
        },
        application: {
            label: "Application",
            href: applicationFormUrl,
        },
    },
    schedule: {
        title: "Fall 2026 Recruitment",
        description:
            "Key dates for the upcoming cycle. Times and locations will be confirmed closer to each event.",
        events: [
            {
                date: "Oct 1",
                title: "Applications Open",
                description:
                    "Online application goes live. Submit your resume, transcript, and short responses by the deadline.",
            },
            {
                date: "Oct 8",
                title: "Info Session",
                description:
                    "Meet members, learn about each department, and ask questions about the recruitment process.",
            },
            {
                date: "Oct 15",
                title: "Written Assessment",
                description:
                    "Candidates complete a timed technical and fit assessment covering finance fundamentals and analytical reasoning.",
            },
            {
                date: "Oct 22–24",
                title: "Interviews",
                description:
                    "Selected applicants interview with department leads across technical, case, and behavioral rounds.",
            },
            {
                date: "Oct 31",
                title: "Offers & Onboarding",
                description:
                    "Offers released to new members. Accepted candidates begin orientation and the training program.",
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
                answer: "Yes. You may indicate interest in Asset Management, FP&A, and Quant on your application. Final placement depends on fit, assessment performance, and interview outcomes.",
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
        "Triton Trading Group takes no liability for any advice given through public platform.",
} as const;
