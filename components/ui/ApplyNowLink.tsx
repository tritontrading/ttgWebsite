import { cn } from '@/lib/utils'

const APPLICATION_FORM_URL =
  'https://docs.google.com/forms/u/1/d/e/1FAIpQLSei_EqEyZJOGVKNz8doncU0EjD538COcgBJNkw-fxrdkmFe6g/viewform'

type ApplyNowLinkProps = {
  children?: React.ReactNode
  className?: string
}

export function ApplyNowLink({ children = 'Apply Now', className }: ApplyNowLinkProps) {
  return (
    <a
      href={APPLICATION_FORM_URL}
      target="_blank"
      rel="noreferrer"
      className={cn(className)}
    >
      {children}
    </a>
  )
}
