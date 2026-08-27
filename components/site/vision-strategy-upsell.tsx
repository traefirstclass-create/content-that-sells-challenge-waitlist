'use client'

import { useState } from 'react'
import { ArrowRight, Loader2, Sparkles } from 'lucide-react'
import { VISION_STRATEGY_CALL } from '@/lib/vision-strategy'

export function VisionStrategyUpsell() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleBook() {
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/vision-strategy-checkout', { method: 'POST' })
      const data = await res.json().catch(() => ({}))

      if (!res.ok || !data.url) {
        throw new Error(data.error ?? 'Something went wrong starting checkout.')
      }

      window.location.href = data.url
    } catch (submitError) {
      setError(
        submitError instanceof Error ? submitError.message : 'Something went wrong starting checkout.',
      )
      setLoading(false)
    }
  }

  return (
    <div
      id="vision-strategy"
      className="rounded-lg border border-[#d7ad55]/40 bg-[#111111] p-5 text-white sm:p-6"
    >
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#d7ad55]">
        <Sparkles className="size-3.5" aria-hidden="true" />
        For Serious Action-Takers
      </div>

      <h3 className="font-serif text-2xl leading-tight sm:text-3xl">
        Ready to take immediate, massive action?
      </h3>
      <p className="mt-3 text-sm leading-6 text-white/78">
        Book a focused 30-minute Vision &amp; Strategy Call to align your creative goals with
        actionable strategies for growth—before the challenge even begins.
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <div className="flex items-baseline gap-2">
          <span className="font-serif text-3xl font-semibold">
            ${VISION_STRATEGY_CALL.priceCents / 100}
          </span>
          <span className="text-sm text-white/50 line-through">
            ${VISION_STRATEGY_CALL.compareAtCents / 100}
          </span>
        </div>

        <button
          type="button"
          onClick={handleBook}
          disabled={loading}
          className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-[#d7ad55] px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.08em] text-[#151515] transition hover:bg-[#c99a3e] disabled:cursor-not-allowed disabled:opacity-60 sm:flex-none"
        >
          {loading ? (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <ArrowRight className="size-4" aria-hidden="true" />
          )}
          {loading ? 'Redirecting…' : 'Book My Call'}
        </button>
      </div>

      {error && <p className="mt-3 text-sm text-red-400">{error}</p>}

      <p className="mt-4 text-xs text-white/45">
        You&apos;ll be taken to Stripe to complete your $
        {VISION_STRATEGY_CALL.priceCents / 100} payment. Once it&apos;s confirmed, you&apos;ll be
        sent straight to the scheduler to pick your time.
      </p>
    </div>
  )
}
