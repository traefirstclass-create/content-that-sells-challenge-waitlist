import Image from 'next/image'
import { Reveal } from './reveal'

const credentials = [
  'Creative Strategist',
  'Content Systems Architect',
  'Podcast Producer',
  'Marketing Consultant',
]

export function About() {
  return (
    <section id="about" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gold/10 blur-2xl" />
              <div className="overflow-hidden rounded-[2rem] border border-border shadow-[0_40px_80px_-40px_rgba(0,0,0,0.5)]">
                <Image
                  src="/trae-firstclass.png"
                  alt="Trae Firstclass, creator of the Content That Sells Challenge"
                  width={700}
                  height={900}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
                Your Host
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-5 font-serif text-4xl tracking-tight text-balance sm:text-5xl">
                Meet Trae Firstclass
              </h2>
            </Reveal>

            <Reveal delay={2}>
              <div className="mt-5 flex flex-wrap gap-2">
                {credentials.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-medium text-gold-deep"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="mt-7 space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Trae Firstclass is a creative strategist, content systems architect, podcast
                  producer, and marketing consultant who believes businesses don&apos;t need more
                  ideas—they need a better way to recognize and leverage the content
                  they&apos;re already creating.
                </p>
                <p>
                  This challenge introduces the{' '}
                  <span className="font-semibold text-foreground">
                    Content Recognition Framework™
                  </span>
                  , helping entrepreneurs build authority and increase sales by documenting the
                  expertise, conversations, and experiences they already have.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
