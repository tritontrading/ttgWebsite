import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ApplyNowLink } from "@/components/ui/ApplyNowLink";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
    title: "Quantitative Finance - Triton Trading Group",
    description:
        "TTG's Quantitative Finance department focuses on data-driven investing and algorithmic trading strategies using Python, QuantConnect, and Alpaca.",
};

const AREAS = [
    {
        label: "Algorithmic Trading Strategies",
        desc: "Design, backtest, and refine systematic trading strategies using historical and live market data. Evaluate performance with rigorous statistical frameworks.",
    },
    {
        label: "Factor-Based Investing",
        desc: "Construct multi-factor models that capture systematic return drivers across equities. Research factors including momentum, value, quality, and low-volatility.",
    },
    {
        label: "Statistical Arbitrage",
        desc: "Identify and exploit transient price dislocations using cointegration analysis, pairs trading, and cross-sectional momentum.",
    },
    {
        label: "Market Data Analysis",
        desc: "Process and analyze large financial datasets, price histories, and portfolio data to surface actionable signals.",
    },
    {
        label: "Machine Learning in Finance",
        desc: "Apply supervised and unsupervised learning techniques to financial prediction problems, regime detection, and portfolio optimization.",
    },
    {
        label: "Live Trading",
        desc: "Deploy models that trade on paper. If they are performant, live deploy them to make trades with real capital.",
    },
];

const TOOLS = [
    {
        name: "Python",
        note: "Primary development language - pandas, numpy, scipy, sklearn",
    },
    {
        name: "QuantConnect Sponsorship",
        note: "The quant team is specifically sponsored by QuantConnect for strategy research and backtesting",
    },
    {
        name: "Broker & Execution",
        note: "Alpaca for paper trading, brokerage connectivity, and live strategy workflows",
    },
    {
        name: "Statistical Modeling",
        note: "Time-series analysis, regression, Bayesian methods",
    },
    {
        name: "Backtesting Frameworks",
        note: "QuantConnect and internal research workflows",
    },
    {
        name: "Version Control & Notebooks",
        note: "Git, Jupyter, collaborative research workflows",
    },
];

const SKILLS = [
    "Statistical modeling",
    "Algorithmic strategy development",
    "Data analysis and visualization",
    "Quantitative portfolio construction",
    "Risk management and performance attribution",
    "Python and scientific computing",
];

const CAREERS = [
    {
        firm: "Quantitative Trading",
        note: "Citadel, Two Sigma, DE Shaw, Jane Street",
    },
    { firm: "Hedge Funds", note: "Systematic and discretionary strategies" },
    { firm: "Fintech", note: "Algorithmic infrastructure and product" },
    { firm: "Data Science", note: "Applied ML across finance and tech" },
    {
        firm: "Risk Management",
        note: "Market risk and quant analytics at banks",
    },
    { firm: "Research", note: "Academic and institutional finance research" },
];

export default function QuantPage() {
    return (
        <main className="min-h-screen bg-cream">
            <Nav />

            <section className="border-b-2 border-[#080808]/20 px-5 pb-20 pt-32 md:px-12 md:pb-24 md:pt-40">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-2">
                        <div>
                            <span
                                className="page-hero-reveal mb-6 block font-mono text-[13px] tracking-widest uppercase text-[#080808]/50"
                                style={{ animationDelay: '0ms' }}
                            >
                                03 - QUANTITATIVE FINANCE
                            </span>
                            <h1
                                className="page-hero-reveal mb-6 font-serif text-4xl font-bold leading-none text-[#080808] sm:text-5xl md:text-7xl"
                                style={{ animationDelay: '100ms' }}
                            >
                                Data-Driven
                                <br />
                                Investing
                            </h1>
                            <p
                                className="page-hero-reveal max-w-lg text-base leading-relaxed text-[#080808]/60"
                                style={{ animationDelay: '200ms' }}
                            >
                                The Quantitative Finance department focuses on
                                data-driven investing and algorithmic trading
                                strategies. Members develop systematic
                                investment models using Python, QuantConnect,
                                Alpaca, and statistical research workflows -
                                combining finance, mathematics, and computer
                                science to analyze markets and develop automated
                                strategies.
                            </p>
                        </div>
                        <div
                            className="page-hero-reveal overflow-hidden border-2 border-[#080808]/20"
                            style={{ animationDelay: '280ms' }}
                        >
                            <Image
                                src="/images/tabling/image3.png"
                                alt="Quantitative Finance"
                                width={700}
                                height={420}
                                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b-2 border-[#080808]/20 px-5 py-20 md:px-12 md:py-24">
                <div className="mx-auto max-w-7xl">
                    <ScrollReveal>
                        <div className="mb-12">
                            <span className="mb-4 block font-mono text-[13px] tracking-widest uppercase text-[#080808]/50">
                                AREAS OF WORK
                            </span>
                            <div className="border-t-2 border-[#080808]/20" />
                        </div>
                    </ScrollReveal>
                    <ScrollReveal
                        className="grid grid-cols-1 gap-px bg-[#080808]/15 md:grid-cols-2 lg:grid-cols-3"
                        stagger={0.08}
                    >
                        {AREAS.map((area) => (
                            <div
                                key={area.label}
                                data-reveal
                                className="card-hover flex flex-col gap-3 bg-cream p-6 md:p-8"
                            >
                                <h3 className="font-serif text-base font-bold leading-tight text-[#080808]">
                                    {area.label}
                                </h3>
                                <p className="text-sm leading-relaxed text-[#080808]/50">
                                    {area.desc}
                                </p>
                            </div>
                        ))}
                    </ScrollReveal>
                </div>
            </section>

            <section className="border-b-2 border-[#080808]/20 px-5 py-20 md:px-12 md:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 items-start gap-12 md:gap-20 lg:grid-cols-2">
                        <ScrollReveal>
                            <div>
                                <span className="mb-4 block font-mono text-[13px] tracking-widest uppercase text-[#080808]/50">
                                    TOOLS & TECH STACK
                                </span>
                                <div className="mb-8 border-t-2 border-[#080808]/20" />
                                <div className="divide-y-2 divide-[#080808]/15 border-2 border-[#080808]/20">
                                    {TOOLS.map((tool) => (
                                        <div
                                            key={tool.name}
                                            className="flex items-start gap-4 px-5 py-5 transition-colors duration-200 hover:bg-[#f4f5ec] md:px-6"
                                        >
                                            <span className="mt-0.5 w-4 shrink-0 font-mono text-[10px] uppercase tracking-widest text-[#0066ff]">
                                                {"->"}
                                            </span>
                                            <div>
                                                <span className="mb-0.5 block font-serif text-sm font-bold text-[#080808]">
                                                    {tool.name}
                                                </span>
                                                <span className="font-mono text-[10px] text-[#080808]/40">
                                                    {tool.note}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1}>
                            <div>
                                <span className="mb-4 block font-mono text-[13px] tracking-widest uppercase text-[#080808]/50">
                                    IN PRACTICE
                                </span>
                                <div className="mb-8 border-t-2 border-[#080808]/20" />
                                <div className="overflow-hidden border-2 border-[#080808]/20">
                                    <Image
                                        src="/images/meetings/image2.png"
                                        alt="Quant team at work"
                                        width={600}
                                        height={420}
                                        className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                                    />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <section className="px-5 py-20 md:px-12 md:py-24">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:gap-20 lg:grid-cols-2">
                    <ScrollReveal>
                        <div>
                            <span className="mb-4 block font-mono text-[13px] tracking-widest uppercase text-[#080808]/50">
                                SKILLS MEMBERS DEVELOP
                            </span>
                            <div className="mb-8 border-t-2 border-[#080808]/20" />
                            <div className="space-y-3">
                                {SKILLS.map((skill) => (
                                    <div
                                        key={skill}
                                        className="flex items-center gap-3 text-sm text-[#080808]"
                                    >
                                        <span className="h-1 w-1 shrink-0 bg-[#0066ff]" />
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <div>
                            <span className="mb-4 block font-mono text-[13px] tracking-widest uppercase text-[#080808]/50">
                                CAREER OUTCOMES
                            </span>
                            <div className="mb-8 border-t-2 border-[#080808]/20" />
                            <div className="divide-y-2 divide-[#080808]/15 border-2 border-[#080808]/20">
                                {CAREERS.map((c) => (
                                    <div
                                        key={c.firm}
                                        className="flex flex-col gap-1 px-5 py-4 transition-colors duration-200 hover:bg-[#f4f5ec] sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                                    >
                                        <span className="font-serif text-sm font-bold text-[#080808]">
                                            {c.firm}
                                        </span>
                                        <span className="font-mono text-[10px] text-[#080808]/40 sm:text-right">
                                            {c.note}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="border-t-2 border-[#080808]/20 px-5 py-20 md:px-12 md:py-24">
                <ScrollReveal className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                    <div>
                        <h2 className="mb-2 font-serif text-3xl font-bold text-[#080808]">
                            Interested in Quant?
                        </h2>
                        <p className="text-sm text-[#080808]/50">
                            Python experience helpful but not required. We train
                            from the ground up.
                        </p>
                    </div>
                    <ApplyNowLink className="w-full shrink-0 border-2 border-[#080808] px-10 py-4 text-center font-mono text-sm tracking-widest uppercase text-[#080808] transition-all duration-200 hover:bg-[#080808] hover:text-cream sm:w-auto">
                        Apply Now
                    </ApplyNowLink>
                </ScrollReveal>
            </section>

            <Footer />
        </main>
    );
}
