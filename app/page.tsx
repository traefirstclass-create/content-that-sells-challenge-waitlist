import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { Problem } from '@/components/site/problem'
import { Framework } from '@/components/site/framework'
import { Learn } from '@/components/site/learn'
import { Breakdown } from '@/components/site/breakdown'
import { Audience } from '@/components/site/audience'
import { Pricing } from '@/components/site/pricing'
import { About } from '@/components/site/about'
import { Results } from '@/components/site/results'
import { SocialProof } from '@/components/site/social-proof'
import { Faq } from '@/components/site/faq'
import { FinalCta } from '@/components/site/final-cta'
import { Footer } from '@/components/site/footer'

export default function Page() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <Problem />
      <Framework />
      <Learn />
      <Breakdown />
      <Audience />
      <Pricing />
      <About />
      <Results />
      <SocialProof />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  )
}
