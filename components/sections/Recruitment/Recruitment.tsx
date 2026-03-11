'use client'

import Image from 'next/image'
import { ApplyNowLink } from '@/components/ui/ApplyNowLink'

export function Recruitment() {
  return (
    <section id="recruitment" className="border-t border-[#080808]/20 bg-cream px-5 py-20 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <span className="font-mono text-[11px] tracking-widest uppercase text-[#080808]/30">
            RECRUITMENT
          </span>
        </div>
        <div className="mb-10 border-t border-[#080808]/20 md:mb-16" />

        <div className="grid grid-cols-1 items-start gap-10 md:gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 font-serif text-4xl font-bold tracking-tight text-[#080808] md:text-5xl">
              Join Triton Trading Group
            </h2>
            <p className="mb-10 max-w-md text-sm leading-relaxed text-[#080808]/60">
              Triton Trading Group recruits students each academic quarter who are interested in finance, markets, technology, and business strategy. We welcome students from all majors and academic backgrounds.
            </p>

            <div className="mb-10 space-y-3">
              {[
                'New members participate in introductory projects and learn core analytical skills.',
                'Members work alongside teams on company advisory projects and research initiatives.',
                'Members then specialize in Asset Management, FP&A, or Quantitative Finance.',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-[#080808]/60">
                  <span className="mt-1 shrink-0 font-mono text-[10px] text-[#0066ff]">0{i + 1}</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            <ApplyNowLink className="inline-block w-full border border-[#080808] px-10 py-4 text-center font-mono text-sm tracking-widest uppercase text-[#080808] transition-all duration-200 hover:bg-[#080808] hover:text-white sm:w-auto">
              Apply Next Quarter
            </ApplyNowLink>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden border border-[#080808]/20">
              <Image
                src="/images/brand/group_photoshoot.png"
                alt="TTG Group Photo"
                width={700}
                height={500}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-cream/10" />
            </div>

            <div className="absolute right-3 bottom-3 left-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {[
                { label: 'Acceptance Rate', value: '~10%' },
                { label: 'All Majors', value: 'Welcome' },
              ].map((stat, i) => (
                <div key={i} className="border border-[#080808]/20 bg-cream/90 p-3 backdrop-blur-sm">
                  <span className="block font-mono text-[10px] text-[#080808]/40">{stat.label}</span>
                  <span className="text-lg font-bold text-[#080808]">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
