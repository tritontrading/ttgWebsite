'use client'

import Image from 'next/image'
import { ApplyNowLink } from '@/components/ui/ApplyNowLink'

export function Recruitment() {
  return (
    <section id="recruitment" className="border-t border-[#c79a3b]/40 bg-cream px-5 py-20 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <span className="font-mono text-xs tracking-[0.24em] uppercase text-[#c79a3b]">
            RECRUITMENT
          </span>
        </div>
        <div className="mb-10 border-t border-[#c79a3b]/35 md:mb-16" />

        <div className="grid grid-cols-1 items-start gap-10 md:gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 font-serif text-4xl font-bold tracking-tight text-[#0d1b3d] md:text-5xl">
              Join Triton Trading Group
            </h2>
            <p className="mb-10 max-w-md text-base leading-relaxed text-[#102347]/82">
              Triton Trading Group recruits students each academic quarter who are interested in finance, markets, technology, and business strategy. We welcome students from all majors and academic backgrounds.
            </p>

            <div className="mb-10 space-y-3">
              {[
                'New members participate in introductory projects and learn core analytical skills.',
                'Members work alongside teams on company advisory projects and research initiatives.',
                'Members then specialize in Asset Management, FP&A, or Quantitative Finance.',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3 text-base text-[#102347]/82">
                  <span className="mt-0.5 shrink-0 border border-[#1f5eff]/30 bg-[#1f5eff]/8 px-1.5 py-0.5 font-mono text-xs text-[#1f5eff]">0{i + 1}</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            <ApplyNowLink className="inline-block w-full border border-[#0d1b3d] bg-[#0d1b3d] px-10 py-4 text-center font-mono text-sm tracking-[0.24em] uppercase text-[#f8f1df] transition-all duration-200 hover:border-[#c79a3b] hover:bg-[#c79a3b] hover:text-[#0d1b3d] sm:w-auto">
              Apply Next Quarter
            </ApplyNowLink>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden border border-[#c79a3b]/35 bg-[#efe1bd] p-2 shadow-[0_24px_64px_rgba(13,27,61,0.1)]">
              <Image
                src="/images/brand/group_photoshoot.png"
                alt="TTG Group Photo"
                width={700}
                height={500}
                className="h-auto w-full border border-[#0d1b3d]/10 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3d]/10 to-transparent" />
            </div>

            <div className="absolute right-3 bottom-3 left-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {[
                { label: 'Acceptance Rate', value: '~10%' },
                { label: 'All Majors', value: 'Welcome' },
              ].map((stat, i) => (
                <div key={i} className="border border-[#c79a3b]/35 bg-[#0d1b3d]/92 p-3 text-[#f8f1df] backdrop-blur-sm">
                  <span className="block font-mono text-xs text-[#efd8a4]">{stat.label}</span>
                  <span className="text-lg font-bold text-[#f8f1df]">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
