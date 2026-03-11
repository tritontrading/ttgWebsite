'use client'

import Image from 'next/image'

interface TimelineNodeProps {
  year: string
  title: string
  description: string
  image?: string
  isLeft?: boolean
}

export function TimelineNode({ year, title, description, image, isLeft }: TimelineNodeProps) {
  return (
    <div className={`timeline-node flex items-start gap-8 ${isLeft ? 'flex-row-reverse' : ''}`}>
      {/* Content */}
      <div className={`flex-1 ${isLeft ? 'text-right' : ''}`}>
        <span className="font-mono text-xs text-blue tracking-widest uppercase block mb-2">
          {year}
        </span>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="font-mono text-white/50 text-sm leading-relaxed">{description}</p>

        {image && (
          <div className="mt-4 border border-white/20 inline-block">
            <Image
              src={image}
              alt={title}
              width={240}
              height={160}
              className="w-60 h-40 object-cover opacity-80"
            />
          </div>
        )}
      </div>

      {/* Node */}
      <div className="flex flex-col items-center shrink-0 relative">
        <div className="node-circle w-4 h-4 border-2 border-blue/40 bg-black" />
      </div>

      {/* Empty side */}
      <div className="flex-1" />
    </div>
  )
}
