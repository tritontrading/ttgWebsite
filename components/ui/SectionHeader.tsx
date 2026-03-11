import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ label, title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-16', className)}>
      <span className="font-mono text-[11px] text-[#080808]/30 tracking-widest uppercase block mb-4">
        {label}
      </span>
      <div className="border-t border-[#080808]/10 mb-6" />
      <h2 className="text-4xl md:text-5xl font-bold text-[#080808] tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-[#080808]/50 text-sm leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  )
}
