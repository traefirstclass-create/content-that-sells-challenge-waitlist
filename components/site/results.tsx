import { Check } from 'lucide-react'
import { Reveal } from './reveal'

const outcomes = [
  'A repeatable content recognition system',
  'Unlimited content opportunities',
  'Clear messaging',
  'Greater authority',
  'Better storytelling',
  'A consistent content process',
  'Less overwhelm',
  'More confidence',
  'More visibility',
  'Content that actually supports your business goals',
]

export function Results() {
  return (
    <section className="bg-luxury-black py-24 text-white sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            The Outcome
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-5 text-center font-serif text-3xl tracking-tight text-balance sm:text-5xl">
            Imagine Leaving This Challenge With…
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {outcomes.map((o, i) => (
            <Reveal key={o} delay={i % 2}>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-gold/40">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-luxury-black">
                  <Check className="size-4" />
                </span>
                <span className="text-white/90 text-pretty">{o}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
