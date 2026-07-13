import type { Metadata } from 'next'
import Link from 'next/link'
import Stripe from 'stripe'
import { CheckCircle2 } from 'lucide-react'
import { Footer } from '@/components/site/footer'

export const metadata: Metadata = {
  title: 'Order Confirmed | Content That Sells™ Challenge',
  robots: { index: false },
}

async function getSession(sessionId: string) {
  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) return null
  const stripe = new Stripe(secretKey)
  try {
    return await stripe.checkout.sessions.retrieve(sessionId, { expand: ['line_items'] })
  } catch {
    return null
  }
}

export default async function OrderConfirmedPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>
}) {
  const { session_id } = await searchParams
  const session = session_id ? await getSession(session_id) : null
  const lineItems = session?.line_items?.data ?? []
  const total = session?.amount_total

  return (
    <main className="bg-background">
      <section className="relative overflow-hidden bg-luxury-black py-24 text-white sm:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-10%] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gold/10 blur-[130px]" />
        </div>
        <div className="relative mx-auto max-w-2xl px-5 text-center sm:px-8">
          <div className="mx-auto mb-8 flex size-16 items-center justify-center rounded-2xl bg-gold-gradient text-luxury-black">
            <CheckCircle2 className="size-8" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Order Confirmed
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
            Thanks—your order is in!
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
            A receipt is on its way to your email. Any physical items will ship soon, and your
            paperback Implementation Manual will go out as soon as you complete the challenge.
          </p>

          {lineItems.length > 0 && (
            <div className="mx-auto mt-10 max-w-md rounded-2xl border border-gold/20 bg-white/[0.03] p-6 text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Order Summary
              </p>
              <ul className="mt-4 space-y-2">
                {lineItems.map((item) => (
                  <li key={item.id} className="flex justify-between text-sm text-white/80">
                    <span>{item.description}</span>
                    <span>
                      {item.amount_total != null
                        ? `$${(item.amount_total / 100).toFixed(2)}`
                        : ''}
                    </span>
                  </li>
                ))}
              </ul>
              {total != null && (
                <div className="mt-4 flex justify-between border-t border-white/10 pt-4 text-sm font-semibold text-white">
                  <span>Total</span>
                  <span>${(total / 100).toFixed(2)}</span>
                </div>
              )}
            </div>
          )}

          <div className="mt-10">
            <Link
              href="/thank-you"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] text-luxury-black transition-transform hover:-translate-y-0.5"
            >
              Back To Your Next Steps
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
