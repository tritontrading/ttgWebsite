import type { Metadata } from 'next'
import Image from 'next/image'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Quantitative Finance - Triton Trading Group',
  description:
    'TTG\'s Quantitative Finance department focuses on data-driven investing and algorithmic trading strategies using Python, QuantConnect, and Alpaca.',
}

const AREAS = [
  { label: 'Algorithmic Trading Strategies', desc: 'Design, backtest, and refine systematic trading strategies using historical and live market data. Evaluate performance with rigorous statistical frameworks.' },
  { label: 'Factor-Based Investing', desc: 'Construct multi-factor models that capture systematic return drivers across equities. Research factors including momentum, value, quality, and low-volatility.' },
  { label: 'Statistical Arbitrage', desc: 'Identify and exploit transient price dislocations using cointegration analysis, pairs trading, and cross-sectional momentum.' },
  { label: 'Market Data Analysis', desc: 'Process and analyze large financial datasets, price histories, and portfolio data to surface actionable signals.' },
  { label: 'Machine Learning in Finance', desc: 'Apply supervised and unsupervised learning techniques to financial prediction problems, regime detection, and portfolio optimization.' },
]

const TOOLS = [
  { name: 'Python', note: 'Primary development language - pandas, numpy, scipy, sklearn' },
  { name: 'QuantConnect Sponsorship', note: 'The quant team is specifically sponsored by QuantConnect for strategy research and backtesting' },
  { name: 'Broker & Execution', note: 'Alpaca for paper trading, brokerage connectivity, and live strategy workflows' },
  { name: 'Statistical Modeling', note: 'Time-series analysis, regression, Bayesian methods' },
  { name: 'Backtesting Frameworks', note: 'QuantConnect and internal research workflows' },
  { name: 'Version Control & Notebooks', note: 'Git, Jupyter, collaborative research workflows' },
]

const SKILLS = [
  'Statistical modeling',
  'Algorithmic strategy development',
  'Data analysis and visualization',
  'Quantitative portfolio construction',
  'Risk management and performance attribution',
  'Python and scientific computing',
]

const CAREERS = [
  { firm: 'Quantitative Trading', note: 'Citadel, Two Sigma, DE Shaw, Jane Street' },
  { firm: 'Hedge Funds', note: 'Systematic and discretionary strategies' },
  { firm: 'Fintech', note: 'Algorithmic infrastructure and product' },
  { firm: 'Data Science', note: 'Applied ML across finance and tech' },
  { firm: 'Risk Management', note: 'Market risk and quant analytics at banks' },
  { firm: 'Research', note: 'Academic and institutional finance research' },
]

export default function QuantPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Nav />

      <section className="pt-40 pb-24 px-6 md:px-12 border-b-2 border-[#080808]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-[11px] text-[#080808]/30 tracking-widest uppercase block mb-6">
                03 - QUANTITATIVE FINANCE
              </span>
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#080808] leading-none mb-6">
                Data-Driven
                <br />
                Investing
              </h1>
              <p className="text-[#080808]/60 text-base leading-relaxed max-w-lg">
                The Quantitative Finance department focuses on data-driven investing and algorithmic trading strategies. Members develop systematic investment models using Python, QuantConnect, Alpaca, and statistical research workflows - combining finance, mathematics, and computer science to analyze markets and develop automated strategies.
              </p>
            </div>
            <div className="border-2 border-[#080808]/20 overflow-hidden">
              <Image
                src="/images/tabling/image3.png"
                alt="Quantitative Finance"
                width={700}
                height={420}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 border-b-2 border-[#080808]/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-[11px] text-[#080808]/30 tracking-widest uppercase block mb-4">AREAS OF WORK</span>
            <div className="border-t-2 border-[#080808]/20" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#080808]/15">
            {AREAS.map((area) => (
              <div key={area.label} className="bg-cream p-8 flex flex-col gap-3">
                <h3 className="font-serif font-bold text-[#080808] text-base leading-tight">{area.label}</h3>
                <p className="text-[#080808]/50 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 border-b-2 border-[#080808]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <span className="font-mono text-[11px] text-[#080808]/30 tracking-widest uppercase block mb-4">TOOLS & TECH STACK</span>
              <div className="border-t-2 border-[#080808]/20 mb-8" />
              <div className="border-2 border-[#080808]/20 divide-y-2 divide-[#080808]/15">
                {TOOLS.map((tool) => (
                  <div key={tool.name} className="px-6 py-5 flex items-start gap-4">
                    <span className="font-mono text-[10px] text-[#0066ff] tracking-widest uppercase mt-0.5 w-4 shrink-0">{'->'}</span>
                    <div>
                      <span className="font-serif font-bold text-[#080808] text-sm block mb-0.5">{tool.name}</span>
                      <span className="font-mono text-[10px] text-[#080808]/40">{tool.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="font-mono text-[11px] text-[#080808]/30 tracking-widest uppercase block mb-4">IN PRACTICE</span>
              <div className="border-t-2 border-[#080808]/20 mb-8" />
              <div className="border-2 border-[#080808]/20 overflow-hidden">
                <Image
                  src="/images/meetings/image2.png"
                  alt="Quant team at work"
                  width={600}
                  height={420}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="font-mono text-[11px] text-[#080808]/30 tracking-widest uppercase block mb-4">SKILLS MEMBERS DEVELOP</span>
            <div className="border-t-2 border-[#080808]/20 mb-8" />
            <div className="space-y-3">
              {SKILLS.map((skill) => (
                <div key={skill} className="flex items-center gap-3 text-sm text-[#080808]">
                  <span className="w-1 h-1 bg-[#0066ff] shrink-0" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="font-mono text-[11px] text-[#080808]/30 tracking-widest uppercase block mb-4">CAREER OUTCOMES</span>
            <div className="border-t-2 border-[#080808]/20 mb-8" />
            <div className="border-2 border-[#080808]/20 divide-y-2 divide-[#080808]/15">
              {CAREERS.map((c) => (
                <div key={c.firm} className="flex items-center justify-between px-5 py-4">
                  <span className="font-serif font-bold text-[#080808] text-sm">{c.firm}</span>
                  <span className="font-mono text-[10px] text-[#080808]/40">{c.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 border-t-2 border-[#080808]/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-3xl font-bold text-[#080808] mb-2">Interested in Quant?</h2>
            <p className="text-[#080808]/50 text-sm">Python experience helpful but not required. We train from the ground up.</p>
          </div>
          <a
            href="/#recruitment"
            className="font-mono text-sm tracking-widest uppercase border-2 border-[#080808] text-[#080808] px-10 py-4 hover:bg-[#080808] hover:text-cream transition-all duration-200 shrink-0"
          >
            Apply Now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
