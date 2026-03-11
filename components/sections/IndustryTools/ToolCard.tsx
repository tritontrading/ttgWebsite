'use client'

import Image from 'next/image'

interface ToolCardProps {
  name: string
  logo: string
  description?: string
}

export function ToolCard({ name, logo, description }: ToolCardProps) {
  return (
    <div className="border-2 border-[#080808]/15 bg-cream p-6 md:p-8 flex flex-col items-center gap-4">
      <div className="h-16 w-full flex items-center justify-center">
        <Image
          src={logo}
          alt={name}
          width={140}
          height={48}
          className="h-10 md:h-12 w-auto max-w-[160px] object-contain"
        />
      </div>

      <span className="font-mono text-[10px] text-[#080808]/55 tracking-widest uppercase text-center">
        {name}
      </span>

      {description && (
        <p className="min-h-[3.25rem] font-mono text-[11px] text-[#080808]/55 text-center leading-[1.45] pt-3 border-t border-[#080808]/8">
          {description}
        </p>
      )}
    </div>
  )
}
