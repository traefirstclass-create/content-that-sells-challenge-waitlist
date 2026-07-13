'use client'

import { useState } from 'react'
import { ShoppingCart, Loader2 } from 'lucide-react'
import { useCart } from './cart-context'
import { PRODUCTS } from '@/lib/products'

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(cents % 100 === 0 ? 0 : 2)}`
}

export function CartBarSpacer() {
  const { items } = useCart()
  if (items.length === 0) return null
  return <div className="h-[88px] sm:h-[76px]" aria-hidden="true" />
}

export function CartBar() {
  const { items, totalCents } = useCart()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (items.length === 0) return null

  async function handleCheckout() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      })
      const data = await res.json()
      if (!res.ok || !data.url) {
        throw new Error(data.error ?? 'Something went wrong starting checkout.')
      }
      window.location.href = data.url
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong starting checkout.')
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/20 bg-luxury-black/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-3 text-white">
          <ShoppingCart className="size-5 text-gold" />
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
            <span className="font-semibold">
              {items.length} {items.length === 1 ? 'item' : 'items'} in your order
            </span>
            <span className="text-white/40">
              ({items.map((id) => PRODUCTS[id]?.name).join(', ')})
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {error && <span className="text-sm text-red-400">{error}</span>}
          <span className="font-serif text-xl font-semibold text-white">
            {formatPrice(totalCents)}
          </span>
          <button
            type="button"
            onClick={handleCheckout}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-luxury-black transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {loading && <Loader2 className="size-4 animate-spin" />}
            {loading ? 'Redirecting…' : 'Checkout'}
          </button>
        </div>
      </div>
    </div>
  )
}
