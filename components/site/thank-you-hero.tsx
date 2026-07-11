'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { CalendarPlus, Users, Play, Check, PartyPopper } from 'lucide-react'

const steps = [
  'Check your inbox for your confirmation email and login details.',
  'Add the challenge dates to your calendar so you never miss a session.',
  'Join the private community and introduce yourself.',
  'Watch the short welcome video to get oriented.',
  'Show up live on Day One ready to recognize your content.',
]

const calendarUrl =
  'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Content+That+Sells+Challenge+-+Day+One&details=Live+5-Day+Challenge+with+Trae+Firstclass.+Learn+the+CAPTURE+Framework.'

export function ThankYouHero() {
  return (
    <section className="relative overflow-hidden bg-luxury-black py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-10%] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gold/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-8 flex size-16 items-center justify-center rounded-2xl bg-gold-gradient text-luxury-black"
        >
          <PartyPopper className="size-8" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-gold"
        >
          Your Seat Is Reserved
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 font-serif text-4xl leading-tight tracking-tight text-balance sm:text-6xl"
        >
          Welcome To The{' '}
          <span className="text-gold-gradient">Content That Sells™</span> Challenge
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 max-w-xl text-lg text-white/60"
        >
          You&apos;ve just made a decision your future self will thank you for. Everything
          you need to get started is below—let&apos;s get you ready for Day One.
        </motion.p>

        {/* Start info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-10 max-w-md rounded-2xl border border-gold/20 bg-white/[0.03] p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Challenge Begins
          </p>
          <p className="mt-2 font-serif text-2xl">Day One · Live Session</p>
          <p className="mt-1 text-sm text-white/50">
            Exact date &amp; access link sent to your email.
          </p>
        </motion.div>

        {/* Actions */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] text-luxury-black transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            <CalendarPlus className="size-4" />
            Add To Calendar
          </Link>
          <Link
            href="#community"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:border-gold hover:bg-white/5 sm:w-auto"
          >
            <Users className="size-4" />
            Join Community
          </Link>
        </div>

        {/* Welcome video placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="group mt-12 flex aspect-video w-full cursor-pointer items-center justify-center rounded-3xl border border-dashed border-white/15 bg-white/[0.02] transition-colors hover:border-gold/40"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="flex size-16 items-center justify-center rounded-full bg-gold-gradient text-luxury-black transition-transform group-hover:scale-105">
              <Play className="size-7 fill-luxury-black" />
            </span>
            <span className="text-sm font-medium text-white/60">Watch Your Welcome Video</span>
          </div>
        </motion.div>

        {/* Checklist */}
        <div className="mt-14 text-left" id="community">
          <h2 className="text-center font-serif text-2xl sm:text-3xl">Your Next Steps</h2>
          <ul className="mx-auto mt-8 max-w-xl space-y-3">
            {steps.map((s, i) => (
              <li
                key={s}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-luxury-black">
                  <Check className="size-4" />
                </span>
                <span className="text-white/85">{s}</span>
                <span className="ml-auto font-serif text-lg text-white/20">{i + 1}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
