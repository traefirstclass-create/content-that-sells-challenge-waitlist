import { NextRequest, NextResponse } from 'next/server'
import { getStripeClient } from '@/lib/stripe'
import { VISION_STRATEGY_CALL } from '@/lib/vision-strategy'

export async function POST(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) {
    return NextResponse.json({ error: 'Stripe is not configured.' }, { status: 500 })
  }

  const stripe = getStripeClient(secretKey)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? req.nextUrl.origin

  if (req.nextUrl.searchParams.has('debug')) {
    const raw = process.env.NEXT_PUBLIC_SITE_URL ?? null
    return NextResponse.json({
      raw,
      rawLength: raw?.length ?? null,
      rawCodes: raw ? Array.from(raw).map((c) => c.codePointAt(0)) : null,
      siteUrl,
      origin: req.nextUrl.origin,
    })
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'usd',
            unit_amount: VISION_STRATEGY_CALL.priceCents,
            product_data: {
              name: VISION_STRATEGY_CALL.name,
              description: VISION_STRATEGY_CALL.description,
            },
          },
        },
      ],
      metadata: { product: VISION_STRATEGY_CALL.id },
      success_url: `${siteUrl}/vision-strategy/confirmed?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/#vision-strategy`,
    })

    if (!session.url) {
      return NextResponse.json({ error: 'Could not start checkout.' }, { status: 500 })
    }

    return NextResponse.json({ url: session.url })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Could not start checkout.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
