import { Reveal } from './reveal'

const moments = [
  'Every conversation.',
  'Every client.',
  'Every lesson.',
  'Every mistake.',
  'Every result.',
  'Every experience.',
]

export function Problem() {
  return (
    <section className="relative bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
            The Real Problem
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="text-center font-serif text-3xl leading-tight tracking-tight text-balance sm:text-5xl">
            Most Business Owners Don&apos;t Have A Content Problem…
            <span className="mt-2 block text-gold-gradient">
              They Have A Recognition Problem.
            </span>
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 max-w-2xl space-y-6 text-lg leading-relaxed text-muted-foreground">
          <Reveal delay={2}>
            <p>
              You don&apos;t struggle because you&apos;re not creative. You struggle
              because you&apos;ve been taught to think content only happens when
              you&apos;re filming.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p className="text-center font-serif text-2xl font-medium text-foreground sm:text-3xl">
              Content happens long before the camera ever turns on.
            </p>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <ul className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {moments.map((m) => (
              <li
                key={m}
                className="bg-background px-5 py-6 text-center font-serif text-lg text-foreground"
              >
                {m}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={2}>
          <div className="mx-auto mt-12 max-w-2xl space-y-4 text-center text-lg leading-relaxed text-muted-foreground">
            <p>
              Your business is already producing content every single day. You simply
              haven&apos;t learned how to recognize it.
            </p>
            <p className="font-semibold text-foreground">That changes inside this challenge.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
