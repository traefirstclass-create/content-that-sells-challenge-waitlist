import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Stripe from 'stripe'
import { VISION_STRATEGY_CALL, VISION_STRATEGY_BOOKING_URL } from '@/lib/vision-strategy'

export const metadata: Metadata = {
  title: 'Confirming Your Payment | Content That Sells™ Challenge',
  robots: { index: false },
}

async function verifyPayment(sessionId: string) {
  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) return false

  try {
    const stripe = new Stripe(secretKey)
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    return (
      session.payment_status === 'paid' &&
      session.metadata?.product === VISION_STRATEGY_CALL.id
    )
  } catch {
    return false
  }
}

export default async function VisionStrategyConfirmedPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>
}) {
  const { session_id: sessionId } = await searchParams

  if (sessionId && (await verifyPayment(sessionId))) {
    redirect(VISION_STRATEGY_BOOKING_URL)
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f5ef] px-5 text-center text-[#151515]">
      <div className="max-w-md">
        <h1 className="font-serif text-3xl leading-tight">We couldn&apos;t verify your payment</h1>
        <p className="mt-4 text-[#5e5a52]">
          If you completed checkout, please check your email for a Stripe receipt, or reach out
          to us and we&apos;ll get your Vision &amp; Strategy Call booked manually.
        </p>
      </div>
    </main>
  )
}
