import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { getProduct } from '@/lib/products'

export async function POST(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) {
    return NextResponse.json({ error: 'Stripe is not configured.' }, { status: 500 })
  }

  const body = await req.json().catch(() => null)
  const itemIds: unknown = body?.items

  if (!Array.isArray(itemIds) || itemIds.length === 0) {
    return NextResponse.json({ error: 'Your cart is empty.' }, { status: 400 })
  }

  const products = itemIds
    .filter((id): id is string => typeof id === 'string')
    .map((id) => getProduct(id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))

  if (products.length === 0) {
    return NextResponse.json({ error: 'No valid items in your cart.' }, { status: 400 })
  }

  const stripe = new Stripe(secretKey)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? req.nextUrl.origin
  const needsShipping = products.some((p) => p.physical)

  const planId = products.find((p) => p.id === 'general-admission' || p.id === 'vip-admission')
    ?.id
  const cancelUrl = planId
    ? `${siteUrl}/checkout?plan=${planId === 'vip-admission' ? 'vip' : 'general'}`
    : `${siteUrl}/`

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: products.map((p) => ({
        quantity: 1,
        price_data: {
          currency: 'usd',
          unit_amount: p.priceCents,
          product_data: { name: p.name, description: p.description },
        },
      })),
      ...(needsShipping
        ? { shipping_address_collection: { allowed_countries: ['US', 'CA'] } }
        : {}),
      success_url: `${siteUrl}/thank-you`,
      cancel_url: cancelUrl,
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
