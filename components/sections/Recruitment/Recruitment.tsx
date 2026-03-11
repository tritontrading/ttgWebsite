'use client'

import Image from 'next/image'

export function Recruitment() {
  return (
    <section id="recruitment" className="bg-cream py-32 px-6 md:px-12 border-t border-[#080808]/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <span className="font-mono text-[11px] text-[#080808]/30 tracking-widest uppercase">
            RECRUITMENT
          </span>
        </div>
        <div className="border-t border-[#080808]/20 mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#080808] tracking-tight mb-6">
              Join Triton Trading Group
            </h2>
            <p className="text-[#080808]/60 text-sm leading-relaxed mb-10 max-w-md">
              Triton Trading Group recruits students each academic quarter who are interested in finance, markets, technology, and business strategy. We welcome students from all majors and academic backgrounds.
            </p>

            <div className="mb-10 space-y-3">
              {[
                'New members participate in introductory projects and learn core analytical skills.',
                'Members work alongside teams on company advisory projects and research initiatives.',
                'Members then specialize in Asset Management, FP&A, or Quantitative Finance.',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-[#080808]/60">
                  <span className="font-mono text-[#0066ff] text-[10px] mt-1 shrink-0">0{i + 1}</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-block font-mono text-sm tracking-widest uppercase border border-[#080808] text-[#080808] px-10 py-4 hover:bg-[#080808] hover:text-white transition-all duration-200"
            >
              Apply Next Quarter
            </a>
          </div>

          {/* Right — Photo */}
          <div className="relative">
            <div className="border border-[#080808]/20 overflow-hidden relative">
              <Image
                src="/images/brand/group_photoshoot.png"
                alt="TTG Group Photo"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-cream/10" />
            </div>

            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-2">
              {[
                { label: 'Acceptance Rate', value: '~10%' },
                { label: 'All Majors', value: 'Welcome' },
              ].map((stat, i) => (
                <div key={i} className="bg-cream/90 border border-[#080808]/20 p-3 backdrop-blur-sm">
                  <span className="font-mono text-[10px] text-[#080808]/40 block">{stat.label}</span>
                  <span className="font-bold text-[#080808] text-lg">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
