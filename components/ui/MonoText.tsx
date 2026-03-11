import { cn } from '@/lib/utils'

interface MonoTextProps {
  children: React.ReactNode
  className?: string
}

export function MonoText({ children, className }: MonoTextProps) {
  return (
    <span className={cn('font-mono', className)}>
      {children}
    </span>
  )
}
