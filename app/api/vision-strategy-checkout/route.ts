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
    return NextResponse.json({
      keyLength: secretKey.length,
      keyTrimmedLength: secretKey.trim().length,
      keyPrefix: secretKey.slice(0, 8),
      keyHasWhitespace: /\s/.test(secretKey),
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
    const raw = (err as { raw?: { detail?: unknown } } | undefined)?.raw
    const detail = raw?.detail
    const detailInfo =
      detail instanceof Error
        ? { name: detail.name, message: detail.message, cause: String((detail as { cause?: unknown }).cause ?? '') }
        : detail
    return NextResponse.json({ error: message, debugDetail: detailInfo }, { status: 500 })
  }
}
