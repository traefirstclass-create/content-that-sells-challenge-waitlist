import {
  Infinity as InfinityIcon,
  MessagesSquare,
  PhoneCall,
  Clapperboard,
  BadgeCheck,
  HeartHandshake,
  TrendingUp,
  Repeat,
  Eye,
  DollarSign,
} from 'lucide-react'
import { Reveal } from './reveal'

const items = [
  { icon: InfinityIcon, text: 'Never run out of content ideas again' },
  { icon: MessagesSquare, text: 'Turn conversations into content' },
  { icon: PhoneCall, text: 'Create weeks of content from one client call' },
  { icon: Clapperboard, text: 'Capture content without spending all day filming' },
  { icon: BadgeCheck, text: 'Build authority naturally' },
  { icon: HeartHandshake, text: 'Create trust before the sales call' },
  { icon: TrendingUp, text: 'Stop relying on trends' },
  { icon: Repeat, text: 'Build a repeatable content system' },
  { icon: Eye, text: 'Recognize hidden content opportunities' },
  { icon: DollarSign, text: 'Create content that actually supports revenue' },
]

export function Learn() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
            Inside The Challenge
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-5 text-center font-serif text-3xl tracking-tight text-balance sm:text-5xl">
            What You&apos;ll Learn
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.text} delay={i % 2}>
              <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-[0_18px_50px_-24px_rgba(212,175,55,0.5)]">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold-deep transition-colors group-hover:bg-gold/20">
                  <item.icon className="size-5" />
                </span>
                <span className="text-base font-medium text-foreground text-pretty">
                  {item.text}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
