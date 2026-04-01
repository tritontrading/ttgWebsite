import { MonoText } from '@/components/ui/MonoText'

const SOCIALS = [
  { label: 'LinkedIn', handle: '@tritontradinggroup', href: 'https://www.linkedin.com/company/tritontradinggroup' },
  { label: 'X', handle: '@ttgatucsd', href: 'https://x.com/ttgatucsd' },
  { label: 'Instagram', handle: '@tritontradingucsd', href: 'https://www.instagram.com/tritontradingucsd' },
  { label: 'Reddit', handle: 'u/TritonTradingatUCSD', href: 'https://www.reddit.com/user/TritonTradingatUCSD/' },
]

export function Footer() {
  return (
    <footer className="bg-[#0d1b3d] px-5 py-10 text-[#f8f1df] md:px-12 md:py-12">
      <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-[#efd8a4]/30 to-transparent md:mb-12" />
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-start">
        <div>
          <MonoText className="mb-2 block text-base font-semibold tracking-[0.22em] text-[#efd8a4]">
            TRITON TRADING GROUP
          </MonoText>
          <MonoText className="text-base text-[#f8f1df]/78">
            University of California, San Diego
          </MonoText>
        </div>

        <div className="min-w-[18rem]">
          <MonoText className="mb-3 block text-base font-semibold tracking-[0.22em] text-[#efd8a4]">
            CONNECT WITH US
          </MonoText>
          <div className="grid gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline justify-between gap-6 border-b border-[#f8f1df]/7 pb-2 font-mono text-sm tracking-[0.16em] uppercase text-[#f8f1df]/78 transition-colors duration-200 hover:text-[#efd8a4]"
              >
                <span>{s.label}</span>
                <span className="text-[0.72rem] tracking-[0.12em] text-[#f8f1df]/52 normal-case">
                  {s.handle}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1 text-left md:text-right">
          <span className="font-mono text-base text-[#f8f1df]/70" suppressHydrationWarning>
            Copyright {new Date().getFullYear()} Triton Trading Group. All rights reserved.
          </span>
          <MonoText className="text-base text-[#f8f1df]/60">
            Triton Trading Group takes no liability for any advice given through public platform.
          </MonoText>
        </div>
      </div>
    </footer>
  )
}
