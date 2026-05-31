import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Work Minimization Calculator',
  description: 'Calculate optimal effort for maximum career safety. Analyze job requirements vs actual workload to find the sweet spot of minimal effort without getting fired.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="24748f86-fa59-4221-b12c-69bafa5a459b"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
