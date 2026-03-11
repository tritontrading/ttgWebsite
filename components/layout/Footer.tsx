import { MonoText } from '@/components/ui/MonoText'

const SOCIALS = [
  { label: 'X',         href: 'https://x.com/ttgatucsd' },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/tritontradinggroup' },
  { label: 'Reddit',    href: 'https://www.reddit.com/user/TritonTradingatUCSD/' },
  { label: 'Instagram', href: 'https://www.instagram.com/tritontradingucsd' },
]

export function Footer() {
  return (
    <footer className="border-t-2 border-[#080808]/20 bg-cream px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <MonoText className="text-[#080808] font-semibold text-sm tracking-wider block mb-2">
            TRITON TRADING GROUP
          </MonoText>
          <MonoText className="text-[#080808]/30 text-xs">
            University of California, San Diego
          </MonoText>
        </div>

        <div className="flex gap-6">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-widest uppercase text-[#080808]/35 hover:text-[#080808] transition-colors duration-200"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-1 text-right">
          <span className="font-mono text-[#080808]/25 text-xs" suppressHydrationWarning>
            © {new Date().getFullYear()} Triton Trading Group. All rights reserved.
          </span>
          <MonoText className="text-[#080808]/25 text-xs">
            For educational purposes only. Not investment advice.
          </MonoText>
        </div>
      </div>
    </footer>
  )
}
