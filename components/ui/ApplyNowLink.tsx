import { cn } from '@/lib/utils'

const APPLICATION_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSf5iQbS2NwGXnqd-L0uw4LxIIB7bJtzA8ZUCeg6xoZP6TbQsA/viewform'

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
