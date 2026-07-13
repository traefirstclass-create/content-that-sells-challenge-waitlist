import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { Footer } from '@/components/site/footer'
import { CartProvider } from '@/components/site/cart-context'
import { CartBar, CartBarSpacer } from '@/components/site/cart-bar'
import { CheckoutPlanSummary } from '@/components/site/checkout-plan-summary'
import { Upsell } from '@/components/site/upsell'
import { ADMISSION_PLANS, type PlanKey } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Complete Your Enrollment | Content That Sells™ Challenge',
  robots: { index: false },
}

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>
}) {
  const { plan } = await searchParams

  if (plan !== 'general' && plan !== 'vip') {
    redirect('/#pricing')
  }

  const planKey = plan as PlanKey
  const planProductId = ADMISSION_PLANS[planKey]

  return (
    <CartProvider initialItems={[planProductId]} lockedItems={[planProductId]}>
      <main className="bg-background">
        <CheckoutPlanSummary plan={planKey} />
        <Upsell />
        <CartBarSpacer />
        <Footer />
      </main>
      <CartBar />
    </CartProvider>
  )
}
