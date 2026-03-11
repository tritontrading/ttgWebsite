import { cn } from '@/lib/utils'

interface DataBadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'green' | 'blue' | 'red'
  className?: string
}

export function DataBadge({ children, variant = 'default', className }: DataBadgeProps) {
  return (
    <span
      className={cn(
        'inline-block font-mono text-[10px] px-2 py-0.5 border tracking-widest uppercase',
        variant === 'default' && 'border-[#080808]/20 text-[#080808]/50',
        variant === 'green'   && 'border-[#00994d]/40 text-[#00994d]',
        variant === 'blue'    && 'border-[#0066ff]/40 text-[#0066ff]',
        variant === 'red'     && 'border-red-500/40 text-red-600',
        className
      )}
    >
      {children}
    </span>
  )
}
