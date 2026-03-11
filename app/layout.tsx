import type { Metadata } from 'next'
import './globals.css'
import { LenisProvider } from '@/components/providers/LenisProvider'
import { GSAPProvider } from '@/components/providers/GSAPProvider'

export const metadata: Metadata = {
  title: 'Triton Trading Group — UCSD',
  description:
    'Triton Trading Group is UCSD\'s premier student-run finance organization, operating across Asset Management, FP&A Consulting, and Quantitative Finance.',
  keywords: ['finance', 'trading', 'UCSD', 'quantitative', 'investing', 'student organization'],
  openGraph: {
    title: 'Triton Trading Group — UCSD',
    description: 'Where UCSD\'s sharpest minds trade, model, and analyze.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <LenisProvider>
          <GSAPProvider>
            {children}
          </GSAPProvider>
        </LenisProvider>
      </body>
    </html>
  )
}
