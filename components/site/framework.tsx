'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { CtaButton } from './cta-button'

type Pillar = {
  letter: string
  title: string
  tagline: string
  lines: string[]
  close: string
}

const pillars: Pillar[] = [
  {
    letter: 'C',
    title: 'Conversations',
    tagline: 'Everything you say… is content.',
    lines: [
      'Every sales call.',
      'Every client meeting.',
      'Every coaching session.',
      'Every objection.',
      'Every question.',
    ],
    close:
      'Your conversations already contain the exact content your audience wants to hear.',
  },
  {
    letter: 'A',
    title: 'Authority',
    tagline: 'Everything you know… is content.',
    lines: ['What you teach.', 'What you know.', 'What you believe.'],
    close: 'Your expertise becomes the foundation for trust and authority.',
  },
  {
    letter: 'P',
    title: 'Process',
    tagline: 'Everything you do… is content.',
    lines: ['Behind the scenes.', 'Your workflow.', 'Your systems.', 'How your business actually creates results.'],
    close: 'People don’t just buy outcomes. They buy confidence in your process.',
  },
  {
    letter: 'T',
    title: 'Transformations',
    tagline: 'Every success story… is content.',
    lines: ['Client wins.', 'Testimonials.', 'Before and after stories.'],
    close: 'Every transformation becomes proof.',
  },
  {
    letter: 'U',
    title: 'Unique Perspective',
    tagline: 'The way you think… is content.',
    lines: ['Your philosophy.', 'Your beliefs.', 'Your experiences.'],
    close: 'The way you see the world is your competitive advantage.',
  },
  {
    letter: 'R',
    title: 'Results',
    tagline: 'Every moment of growth… is content.',
    lines: ['Revenue.', 'Milestones.', 'Progress.', 'Wins.'],
    close: 'Proof builds trust.',
  },
  {
    letter: 'E',
    title: 'Experiences',
    tagline: 'Every single moment… is content.',
    lines: ['Events.', 'Networking.', 'Speaking engagements.', 'Travel.', 'Community.'],
    close: 'Your experiences make your brand unforgettable.',
  },
]

export function Framework() {
  const [active, setActive] = useState(0)
  const pillar = pillars[active]

  return (
    <section id="framework" className="relative overflow-hidden bg-luxury-black py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-40">
        <div className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-gold/10 blur-[130px]" />
        <div className="absolute left-[-10%] bottom-[5%] h-[420px] w-[420px] rounded-full bg-gold/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            The Proprietary System
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-5 text-center font-serif text-4xl tracking-tight text-balance sm:text-6xl">
            The <span className="text-gold-gradient">CAPTURE Framework™</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-relaxed text-white/60">
            A proprietary system for recognizing the content already happening inside your
            business.
          </p>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mt-10 max-w-3xl text-center font-serif text-2xl font-medium text-balance sm:text-4xl">
            Everything In Your Business Is Content.
          </p>
        </Reveal>

        {/* Interactive letter selector */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
          <div className="flex flex-wrap justify-center gap-3 lg:flex-col lg:justify-start">
            {pillars.map((p, i) => (
              <button
                key={p.letter}
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-label={p.title}
                className={cn(
                  'flex size-14 items-center justify-center rounded-2xl border font-serif text-2xl font-semibold transition-all duration-300 sm:size-16 sm:text-3xl',
                  active === i
                    ? 'border-gold bg-gold-gradient text-luxury-black shadow-[0_10px_30px_-10px_rgba(212,175,55,0.7)]'
                    : 'border-white/15 bg-white/[0.03] text-white/50 hover:border-white/40 hover:text-white',
                )}
              >
                {p.letter}
              </button>
            ))}
          </div>

          <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm sm:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={pillar.letter}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-6xl font-semibold text-gold-gradient sm:text-7xl">
                    {pillar.letter}
                  </span>
                  <h3 className="font-serif text-3xl font-medium sm:text-4xl">{pillar.title}</h3>
                </div>
                <p className="mt-6 font-serif text-xl text-gold sm:text-2xl">{pillar.tagline}</p>
                <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                  {pillar.lines.map((line) => (
                    <li key={line} className="text-lg text-white/70">
                      {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/90">
                  {pillar.close}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <Reveal delay={1}>
          <div className="mx-auto mt-20 max-w-2xl rounded-3xl border border-gold/20 bg-gradient-to-b from-gold/[0.06] to-transparent p-10 text-center">
            <p className="font-serif text-2xl leading-snug text-balance sm:text-3xl">
              “When you begin seeing your business this way… you&apos;ll never ask{' '}
              <span className="text-gold-gradient">‘What should I post today?’</span> again.”
            </p>
          </div>
        </Reveal>

        <div className="mt-12 flex justify-center">
          <CtaButton href="#pricing">I Want To Learn The Framework</CtaButton>
        </div>
      </div>
    </section>
  )
}
