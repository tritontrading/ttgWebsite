import { cn } from '@/lib/utils'

interface BorderBoxProps {
  children: React.ReactNode
  className?: string
}

export function BorderBox({ children, className }: BorderBoxProps) {
  return (
    <div className={cn('border border-white/20', className)}>
      {children}
    </div>
  )
}
