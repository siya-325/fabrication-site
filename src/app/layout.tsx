import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Urbanist, Lato } from 'next/font/google'
import './globals.css'

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-urbanist',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ironis — Metal Fabrication & Engineering',
  description: 'High-quality metalwork, built for efficiency, accuracy, and long-term performance. Specialist in custom metal fabrication and architectural elements.',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f9f9f9',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${urbanist.variable} ${lato.variable}`}>
      <body className={urbanist.className}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
