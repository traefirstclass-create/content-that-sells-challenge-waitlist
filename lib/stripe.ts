import Stripe from 'stripe'

export function getStripeClient(secretKey: string) {
  return new Stripe(secretKey.trim(), {
    httpClient: Stripe.createFetchHttpClient(),
  })
}
