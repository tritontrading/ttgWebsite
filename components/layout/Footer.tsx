import { MonoText } from '@/components/ui/MonoText'

const SOCIALS = [
  { label: 'X', href: 'https://x.com/ttgatucsd' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/tritontradinggroup' },
  { label: 'Reddit', href: 'https://www.reddit.com/user/TritonTradingatUCSD/' },
  { label: 'Instagram', href: 'https://www.instagram.com/tritontradingucsd' },
]

export function Footer() {
  return (
    <footer className="border-t-2 border-[#080808]/20 bg-cream px-5 py-10 md:px-12 md:py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <MonoText className="mb-2 block text-sm font-semibold tracking-wider text-[#080808]">
            TRITON TRADING GROUP
          </MonoText>
          <MonoText className="text-xs text-[#080808]/30">
            University of California, San Diego
          </MonoText>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-3">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-widest uppercase text-[#080808]/35 transition-colors duration-200 hover:text-[#080808]"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-1 text-left md:text-right">
          <span className="font-mono text-xs text-[#080808]/25" suppressHydrationWarning>
            © {new Date().getFullYear()} Triton Trading Group. All rights reserved.
          </span>
          <MonoText className="text-xs text-[#080808]/25">
            Triton Trading Group takes no liability for any advice given through public platform.
          </MonoText>
        </div>
      </div>
    </footer>
  )
}
