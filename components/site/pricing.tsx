import { Check } from 'lucide-react'
import { Reveal } from './reveal'
import { CtaButton } from './cta-button'

const generalFeatures = [
  'Five Live Challenge Sessions',
  'Daily Replay Access',
  'Complete CAPTURE Framework Training',
  'Lifetime Replay Library',
  'Community Access',
]

const vipFeatures = [
  'Exclusive VIP Hour Before Every Training',
  'Live Interactive Coaching',
  'Raise Your Hand & Ask Questions',
  'Personalized Business Consulting',
  'Industry-Specific Strategy',
  'Bonus Teaching Sessions',
  'Hot Seat Coaching',
  'Priority Support',
]

const valueStack = [
  { label: 'Five Live Challenge Sessions', value: '$497' },
  { label: 'Exclusive VIP Coaching Hours', value: '$897' },
  { label: 'Personalized Business Consulting', value: '$750' },
  { label: 'Hot Seat Coaching', value: '$500' },
  { label: 'Bonus Teaching Sessions', value: '$350' },
  { label: 'Lifetime Replay Library', value: '$297' },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
            Choose Your Experience
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-5 text-center font-serif text-3xl tracking-tight text-balance sm:text-5xl">
            Reserve Your Seat
          </h2>
        </Reveal>

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-2">
          {/* General Admission */}
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                General Admission
              </p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-serif text-6xl font-semibold">$97</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">One-time enrollment</p>

              <ul className="mt-8 space-y-4">
                {generalFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-5 shrink-0 text-gold-deep" />
                    <span className="text-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-10">
                <CtaButton href="/thank-you" variant="outline" className="w-full">
                  Join General Admission
                </CtaButton>
              </div>
            </div>
          </Reveal>

          {/* VIP Experience */}
          <Reveal delay={1}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-gold bg-luxury-black p-8 text-white shadow-[0_30px_80px_-30px_rgba(212,175,55,0.55)] sm:p-10">
              <div className="pointer-events-none absolute right-[-15%] top-[-20%] h-64 w-64 rounded-full bg-gold/20 blur-[90px]" />
              <span className="absolute right-8 top-8 rounded-full bg-gold-gradient px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-luxury-black">
                Most Popular
              </span>

              <p className="relative text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                VIP Experience
              </p>
              <div className="relative mt-5 flex items-baseline gap-3">
                <span className="font-serif text-6xl font-semibold text-gold-gradient">$197</span>
                <span className="text-xl text-white/40 line-through">$297</span>
              </div>
              <p className="relative mt-2 text-sm text-white/60">
                Today only · Save $100 on the full experience
              </p>

              <p className="relative mt-8 text-sm font-semibold uppercase tracking-[0.15em] text-white/50">
                Everything in General Admission, plus:
              </p>
              <ul className="relative mt-5 space-y-4">
                {vipFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-5 shrink-0 text-gold" />
                    <span className="text-white/90">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Value stack */}
              <div className="relative mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Total Real-World Value
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {valueStack.map((v) => (
                    <li key={v.label} className="flex items-center justify-between gap-4">
                      <span className="text-white/70">{v.label}</span>
                      <span className="text-white/50 line-through">{v.value}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="font-semibold text-white">Total Value</span>
                  <span className="font-serif text-2xl font-semibold text-gold-gradient">
                    $3,291
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-semibold text-white">Your Price Today</span>
                  <span className="font-serif text-2xl font-semibold text-white">$197</span>
                </div>
              </div>

              <div className="relative mt-auto pt-8">
                <CtaButton href="/thank-you" className="w-full">
                  Become VIP
                </CtaButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
