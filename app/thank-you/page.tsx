import type { Metadata } from 'next'
import { ThankYouHero } from '@/components/site/thank-you-hero'
import { Upsell } from '@/components/site/upsell'
import { Footer } from '@/components/site/footer'

export const metadata: Metadata = {
  title: 'Welcome to the Content That Sells™ Challenge',
  description: 'Your seat is reserved. Here is everything you need to get started.',
  robots: { index: false },
}

export default function ThankYouPage() {
  return (
    <main className="bg-background">
      <ThankYouHero />
      <Upsell />
      <Footer />
    </main>
  )
}
