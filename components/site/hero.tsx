'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ChevronDown, Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import { CtaButton } from './cta-button'
import { Counter } from './counter'

const stats = [
  { to: 5, suffix: '', label: 'Live Days' },
  { to: 7, suffix: '', label: 'CAPTURE Pillars' },
  { to: 3291, prefix: '$', label: 'Total Value' },
]

export function Hero() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-background pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Ambient gold wash */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ transform: `translateY(${offset * 0.15}px)` }}
      >
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,var(--background)_100%)]" />
      </div>
      <div className="noise-overlay pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden="true" />

      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-deep"
        >
          <span className="inline-block size-1.5 animate-pulse rounded-full bg-gold" />
          Live 5-Day Challenge · With Trae Firstclass
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ transform: `translateY(${offset * -0.08}px)` }}
          className="mx-auto mb-10 w-full max-w-2xl"
        >
          <Image
            src="/challenge-graphic.png"
            alt="Content That Sells Challenge"
            width={900}
            height={900}
            priority
            className="mx-auto h-auto w-full max-w-md drop-shadow-[0_25px_60px_rgba(212,175,55,0.15)] sm:max-w-lg"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl md:text-6xl"
        >
          Stop Wondering What To Post.
          <span className="mt-2 block text-gold-gradient animate-shimmer">
            Start Recognizing The Content That&apos;s Already Inside Your Business.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Your business creates valuable content every single day. Most entrepreneurs
          simply haven&apos;t been taught how to recognize it. In this live 5-Day Challenge,
          you&apos;ll learn the exact{' '}
          <span className="font-semibold text-foreground">CAPTURE Framework™</span> that
          transforms your conversations, expertise, processes, client wins, and everyday
          experiences into content that builds authority and generates sales.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <CtaButton href="#pricing" className="w-full sm:w-auto">
            Reserve My Seat
          </CtaButton>
          <CtaButton href="#pricing" variant="outline" className="w-full sm:w-auto">
            See VIP Benefits
          </CtaButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span className="font-serif text-2xl font-semibold text-gold-gradient sm:text-3xl">
                <Counter to={s.to} prefix={s.prefix} suffix={s.suffix} />
              </span>
              <span className="text-[0.68rem] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-1" aria-label="Five star rated">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-gold text-gold" />
            ))}
          </div>
          <p className="max-w-xl text-sm text-muted-foreground text-pretty">
            Built for business owners, creators, coaches, consultants, service providers,
            and entrepreneurs ready to stop guessing and start creating intentional content.
          </p>
        </motion.div>
      </div>

      <a
        href="#problem"
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-gold sm:block"
      >
        <ChevronDown className="size-6 animate-float-soft" />
      </a>
    </section>
  )
}
