'use client'

import Image from 'next/image'

interface ToolCardProps {
  name: string
  logo: string
  description?: string
}

export function ToolCard({ name, logo, description }: ToolCardProps) {
  return (
    <div className="group flex h-full flex-col items-center gap-4 border border-[#c79a3b]/35 bg-[#fff9ee] p-6 transition-all duration-200 hover:border-[#1f5eff]/40 hover:bg-[#f4f7ff] md:p-8">
      <div className="flex h-16 w-full items-center justify-center">
        <Image
          src={logo}
          alt={name}
          width={140}
          height={48}
          className="h-10 w-auto max-w-[160px] object-contain md:h-12"
        />
      </div>

      <span className="text-center font-mono text-xs tracking-[0.22em] uppercase text-[#8b6a24] transition-colors duration-200 group-hover:text-[#1f5eff]">
        {name}
      </span>

      {description && (
        <p className="mt-auto w-full border-t border-[#c79a3b]/20 pt-3 text-center font-mono text-sm leading-[1.55] text-[#102347]/76">
          {description}
        </p>
      )}
    </div>
  )
}
