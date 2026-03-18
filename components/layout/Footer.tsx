import { MonoText } from '@/components/ui/MonoText'

const SOCIALS = [
  { label: 'X', href: 'https://x.com/ttgatucsd' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/tritontradinggroup' },
  { label: 'Reddit', href: 'https://www.reddit.com/user/TritonTradingatUCSD/' },
  { label: 'Instagram', href: 'https://www.instagram.com/tritontradingucsd' },
]

export function Footer() {
  return (
    <footer className="bg-[#0d1b3d] px-5 py-10 text-[#f8f1df] md:px-12 md:py-12">
      <div className="h-0.5 w-full bg-gradient-to-r from-[#1f5eff]/60 via-[#c79a3b]/60 to-[#1f5eff]/60 mb-10 md:mb-12" />
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <MonoText className="mb-2 block text-sm font-semibold tracking-[0.22em] text-[#efd8a4]">
            TRITON TRADING GROUP
          </MonoText>
          <MonoText className="text-sm text-[#f8f1df]/78">
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
              className="font-mono text-xs tracking-[0.22em] uppercase text-[#f8f1df]/78 transition-colors duration-200 hover:text-[#efd8a4]"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-1 text-left md:text-right">
          <span className="font-mono text-sm text-[#f8f1df]/70" suppressHydrationWarning>
            Copyright {new Date().getFullYear()} Triton Trading Group. All rights reserved.
          </span>
          <MonoText className="text-sm text-[#f8f1df]/60">
            Triton Trading Group takes no liability for any advice given through public platform.
          </MonoText>
        </div>
      </div>
    </footer>
  )
}
