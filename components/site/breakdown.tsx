import { Reveal } from './reveal'

const days = [
  {
    day: 'Day One',
    title: 'Recognizing Content',
    body: 'Discover why your business already creates content every day. Learn to see content opportunities everywhere.',
  },
  {
    day: 'Day Two',
    title: 'Capturing Content',
    body: 'Learn how to document conversations, ideas, processes, and moments without disrupting your workflow.',
  },
  {
    day: 'Day Three',
    title: 'Organizing Content',
    body: 'Create a repeatable system that stores and categorizes your content so nothing valuable is ever lost.',
  },
  {
    day: 'Day Four',
    title: 'Creating Content That Sells',
    body: 'Transform your captured content into educational, authority-building, relationship-building, and sales-driven content.',
  },
  {
    day: 'Day Five',
    title: 'Building Your Content Ecosystem',
    body: 'Leave with a sustainable content system that continues producing ideas long after the challenge ends.',
  },
]

export function Breakdown() {
  return (
    <section id="breakdown" className="bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
            The 5-Day Journey
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-5 text-center font-serif text-3xl tracking-tight text-balance sm:text-5xl">
            Your Challenge Breakdown
          </h2>
        </Reveal>

        <ol className="mt-16 space-y-6">
          {days.map((d, i) => (
            <Reveal key={d.day} delay={i % 3} as="li">
              <div className="group relative flex gap-6 rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:border-gold/40 hover:shadow-[0_20px_60px_-30px_rgba(212,175,55,0.5)] sm:p-9">
                <div className="flex flex-col items-center">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gold-gradient font-serif text-2xl font-semibold text-luxury-black">
                    {i + 1}
                  </span>
                  {i < days.length - 1 && (
                    <span className="mt-3 hidden h-full w-px flex-1 bg-gradient-to-b from-gold/40 to-transparent sm:block" />
                  )}
                </div>
                <div className="pt-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">
                    {d.day}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-medium sm:text-3xl">{d.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground text-pretty">
                    {d.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
