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
      <span className="mb-4 block font-mono text-xs tracking-[0.24em] uppercase text-[#c79a3b]">
        {label}
      </span>
      <div className="mb-6 border-t border-[#c79a3b]/35" />
      <h2 className="mb-4 text-4xl font-bold tracking-tight text-[#0d1b3d] md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-[#102347]/78">
          {description}
        </p>
      )}
    </div>
  )
}
