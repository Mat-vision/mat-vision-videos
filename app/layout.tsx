import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mat Vision Videos | Turn Your Copy Into Videos That Sell',
  description: '500M+ paid views generated. Premium video editing services for ads, VSLs, and brand content.',
  icons: {
    icon: '/assets/mat-vision-logo-black.png',
    shortcut: '/assets/mat-vision-logo-black.png',
    apple: '/assets/mat-vision-logo-black.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
