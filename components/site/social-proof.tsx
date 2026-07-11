import { Play, Quote, TrendingUp, ImageIcon, Trophy } from 'lucide-react'
import { Reveal } from './reveal'

const tiles = [
  {
    icon: Play,
    kind: 'Video Testimonials',
    span: 'sm:col-span-2 sm:row-span-2',
    tall: true,
  },
  { icon: TrendingUp, kind: 'Student Results', span: '' },
  { icon: Trophy, kind: 'Client Wins', span: '' },
  { icon: ImageIcon, kind: 'Screenshots', span: '' },
  { icon: Quote, kind: 'Success Stories', span: '' },
]

export function SocialProof() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
            Real Proof
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-5 text-center font-serif text-3xl tracking-tight text-balance sm:text-5xl">
            The Results Speak For Themselves
          </h2>
        </Reveal>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-4">
          {tiles.map((t) => (
            <Reveal key={t.kind} className={t.span}>
              <div
                className={`group relative flex h-full min-h-[180px] flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl border border-dashed border-border bg-muted/40 p-6 text-center transition-colors hover:border-gold/40 hover:bg-muted/60 ${
                  t.tall ? 'sm:h-full' : ''
                }`}
              >
                <span className="flex size-14 items-center justify-center rounded-2xl bg-gold/10 text-gold-deep">
                  <t.icon className="size-6" />
                </span>
                <span className="text-sm font-semibold text-foreground">{t.kind}</span>
                <span className="text-xs text-muted-foreground">Coming soon</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
