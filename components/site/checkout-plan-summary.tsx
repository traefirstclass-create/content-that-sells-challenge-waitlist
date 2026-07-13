import { Check } from 'lucide-react'
import { Reveal } from './reveal'
import type { PlanKey } from '@/lib/products'
import { PRODUCTS, ADMISSION_PLANS } from '@/lib/products'

const planFeatures: Record<PlanKey, string[]> = {
  general: [
    'Five Live Challenge Sessions',
    'Daily Replay Access',
    'Complete CAPTURE Framework Training',
    'Community Access',
  ],
  vip: [
    'Everything in General Admission',
    'Exclusive VIP Hour Before Every Training',
    'Personalized Business Consulting',
    'Priority Support',
  ],
}

export function CheckoutPlanSummary({ plan }: { plan: PlanKey }) {
  const product = PRODUCTS[ADMISSION_PLANS[plan]]
  const price = (product.priceCents / 100).toFixed(0)

  return (
    <section className="bg-background pt-24 sm:pt-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
            You&apos;re Almost In
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="mt-5 text-center font-serif text-3xl tracking-tight text-balance sm:text-5xl">
            Complete Your Enrollment
          </h1>
        </Reveal>

        <Reveal delay={2}>
          <div className="mt-12 flex flex-col items-start gap-6 rounded-3xl border border-gold/30 bg-gradient-to-b from-gold/[0.05] to-transparent p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="inline-block rounded-full border border-gold/40 bg-gold/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-gold-deep">
                Your Selection
              </span>
              <h2 className="mt-4 font-serif text-2xl font-medium sm:text-3xl">{product.name}</h2>
              <ul className="mt-4 space-y-2">
                {planFeatures[plan].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-foreground">
                    <Check className="size-4 shrink-0 text-gold-deep" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0 text-left sm:text-right">
              <div className="flex items-baseline gap-2 sm:justify-end">
                <span className="font-serif text-4xl font-semibold">${price}</span>
                {product.compareAtCents && (
                  <span className="text-sm text-muted-foreground line-through">
                    ${(product.compareAtCents / 100).toFixed(0)}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">Included in your order</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={3}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
            Before you check out, here&apos;s a chance to add a few things that&apos;ll help you
            get the most out of the challenge.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
