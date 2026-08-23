import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const siteUrl = 'https://content-that-sells-waitlist.brandvisionpros.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Content That Sells Challenge Waitlist | Free Content Recognition Downloads',
  description:
    'Join the Content That Sells Challenge waitlist and get the free Content Recognition Scorecard and Personalized Recognition Results Guide.',
  generator: 'Codex',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Content That Sells Challenge Waitlist',
    description:
      'Get first access to the challenge plus two free Content Recognition downloads.',
    url: siteUrl,
    type: 'website',
    images: ['/challenge-graphic.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0A0A0A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
