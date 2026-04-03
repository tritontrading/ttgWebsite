import Link from 'next/link'
import Image from 'next/image'

const DEPTS = [
  {
    num: '01',
    label: 'Asset Management',
    href: '/asset-management',
    subtitle: 'Student Managed Investment Fund',
    body: 'The Asset Management department manages TTG\'s student-led investment portfolio. Members conduct equity research, develop financial models, and present investment ideas through a structured investment committee process. The portfolio follows a disciplined investment framework focused on risk management, diversification, and long-term value creation.',
    items: [
      'Conduct company and sector research',
      'Build financial models and valuation frameworks',
      'Write investment memos',
      'Present investment ideas to the Investment Committee',
      'Monitor portfolio positions and performance',
    ],
    careersLabel: 'CAREERS',
    careers: 'Asset management, hedge funds, investment banking',
    photo: '/images/meetings/image1.png',
  },
  {
    num: '02',
    label: 'Financial Planning & Analysis',
    href: '/advisory',
    subtitle: 'Real-World Experience with Companies',
    body: 'The FP&A department provides hands-on experience working directly with companies, startups, and organizations. Members participate in real consulting-style projects where they help organizations analyze financial performance, improve operations, and develop strategic solutions. This department combines elements of corporate finance, consulting, and operational strategy.',
    items: [
      'Financial analysis and forecasting',
      'Market research and competitive analysis',
      'Business strategy development',
      'Technology consulting and system implementation',
      'AI integration and API systems',
    ],
    careersLabel: 'CAREERS',
    careers: 'Consulting, venture capital, corporate strategy, entrepreneurship',
    photo: '/images/tabling/image1.png',
  },
  {
    num: '03',
    label: 'Quantitative Finance',
    href: '/quant',
    subtitle: 'Data-Driven Investing & Algorithmic Trading',
    body: 'The Quantitative Finance department focuses on data-driven investing and algorithmic trading strategies. Members develop systematic investment models using Python, QuantConnect, Alpaca, and statistical research workflows. The quant team is specifically sponsored by QuantConnect and combines finance, mathematics, and computer science to analyze markets and develop automated trading strategies.',
    items: [
      'Algorithmic trading strategies',
      'Factor-based investing',
      'Statistical arbitrage',
      'Market data analysis',
      'Machine learning applications in finance',
    ],
    careersLabel: 'CAREERS',
    careers: 'Quant trading, hedge funds, fintech, data science',
    photo: '/images/meetings/image2.png',
  },
]

function DepartmentCard({ dept }: { dept: (typeof DEPTS)[number] }) {
  return (
    <Link
      href={dept.href}
      className="group flex h-full flex-col overflow-hidden border border-[#c79a3b]/35 bg-[#fff8ea] shadow-[0_18px_40px_rgba(13,27,61,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c79a3b]/70 hover:shadow-[0_28px_60px_rgba(13,27,61,0.12)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden border-b border-[#c79a3b]/30">
        <Image
          src={dept.photo}
          alt={dept.label}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>

      <div className="flex h-full flex-col gap-6 p-5 md:p-7">
        <div className="space-y-1">
          <span className="font-mono text-xs tracking-[0.22em] uppercase">
            <span className="text-[#1f5eff]">{dept.num}</span>
            <span className="text-[#102347]/50"> - </span>
            <span className="text-[#c79a3b]">{dept.label}</span>
          </span>
          <h3 className="font-serif text-3xl font-bold leading-tight text-[#0d1b3d]">
            {dept.subtitle}
          </h3>
        </div>

        <p className="text-base leading-relaxed text-[#102347]/82">{dept.body}</p>

        <ul className="space-y-2">
          {dept.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-base text-[#0d1b3d]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-none bg-[#c79a3b]" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto border-t border-[#c79a3b]/25 pt-5">
          <span className="mb-1 block font-mono text-xs tracking-[0.22em] uppercase text-[#c79a3b]">
            {dept.careersLabel}
          </span>
          <span className="block font-mono text-sm text-[#102347]/78">{dept.careers}</span>
        </div>

        <div className="flex items-center justify-between border-t border-[#c79a3b]/25 pt-5 font-mono text-xs tracking-[0.22em] uppercase text-[#0d1b3d]">
          <span>Visit Branch Page</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">-</span>
        </div>
      </div>
    </Link>
  )
}

export function Departments() {
  return (
    <section id="departments" className="border-t border-[#c79a3b]/40 bg-cream">
      <div className="px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="font-mono text-xs tracking-[0.24em] uppercase text-[#c79a3b]">
                DEPARTMENTS
              </span>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-[0.95] text-[#0d1b3d] md:text-6xl">
                Three branches. Three distinct operating environments.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-[#102347]/68 md:text-base">
              Each branch now has its own dedicated page. Explore the investment process in Asset Management,
              the operating work inside FP&amp;A, and the systematic research stack behind Quant.
            </p>
          </div>

          <div className="mb-10 border-t border-[#c79a3b]/35" />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {DEPTS.map((dept) => (
              <DepartmentCard key={dept.num} dept={dept} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
