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

export const metadata: Metadata = {
  title: 'Content That Sells™ Challenge | Recognize The Content Already Inside Your Business',
  description:
    'A live 5-Day Challenge with Trae Firstclass. Learn the proprietary CAPTURE Framework™ to transform your conversations, expertise, and everyday experiences into content that builds authority and generates sales.',
  generator: 'v0.app',
  openGraph: {
    title: 'Content That Sells™ Challenge',
    description:
      'Stop wondering what to post. Start recognizing the content that is already inside your business with the CAPTURE Framework™.',
    type: 'website',
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
