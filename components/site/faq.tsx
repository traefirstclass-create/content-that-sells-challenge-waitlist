'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

const faqs = [
  {
    q: 'Who is this challenge for?',
    a: 'It’s built for business owners, coaches, consultants, service providers, real estate professionals, personal brands, podcast hosts, content creators, and agency owners—anyone who is tired of wondering what to post and ready to create with intention.',
  },
  {
    q: 'Will there be replays?',
    a: 'Yes. Every session is recorded, and you’ll receive daily replay access. Your enrollment also includes a lifetime replay library so you can revisit the training whenever you need it.',
  },
  {
    q: 'What if I miss a day?',
    a: 'No problem at all. Replays are posted daily, so you can catch up on your own schedule and never fall behind on the framework.',
  },
  {
    q: 'What’s the difference between General Admission and VIP?',
    a: 'General Admission includes all five live sessions, replays, and the complete CAPTURE Framework training. VIP adds an exclusive hour before each training, live interactive coaching, personalized consulting, hot seat coaching, bonus sessions, and priority support.',
  },
  {
    q: 'Do I need experience creating content?',
    a: 'Not at all. This challenge is designed to work whether you’re just starting out or already creating regularly. The framework meets you exactly where you are.',
  },
  {
    q: 'Will I receive worksheets?',
    a: 'Yes. You’ll get implementation resources throughout the challenge, and the optional CAPTURE Framework™ Guided Workbook gives you structured space to build your personalized content-recognition system.',
  },
  {
    q: 'How long are the sessions?',
    a: 'Each daily session is focused and efficient—designed to deliver maximum value without consuming your entire day. VIP members also get an additional coaching hour before each training.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
            Questions
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-5 text-center font-serif text-3xl tracking-tight text-balance sm:text-5xl">
            Everything You Need To Know
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={i % 3}>
                <div
                  className={cn(
                    'overflow-hidden rounded-2xl border bg-card transition-colors',
                    isOpen ? 'border-gold/40' : 'border-border',
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-foreground sm:text-lg">
                      {item.q}
                    </span>
                    <Plus
                      className={cn(
                        'size-5 shrink-0 text-gold-deep transition-transform duration-300',
                        isOpen && 'rotate-45',
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-6 text-base leading-relaxed text-muted-foreground">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
