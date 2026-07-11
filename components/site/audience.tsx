import {
  Briefcase,
  Users,
  Lightbulb,
  Home,
  Wrench,
  Sparkles,
  Mic,
  Video,
  Building2,
} from 'lucide-react'
import { Reveal } from './reveal'

const roles = [
  { icon: Briefcase, label: 'Business Owners' },
  { icon: Users, label: 'Coaches' },
  { icon: Lightbulb, label: 'Consultants' },
  { icon: Home, label: 'Real Estate Professionals' },
  { icon: Wrench, label: 'Service Businesses' },
  { icon: Sparkles, label: 'Personal Brands' },
  { icon: Mic, label: 'Podcast Hosts' },
  { icon: Video, label: 'Content Creators' },
  { icon: Building2, label: 'Agency Owners' },
]

export function Audience() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
            Who This Is For
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-5 text-center font-serif text-3xl tracking-tight text-balance sm:text-5xl">
            Built For People Who Are Done Guessing
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {roles.map((r, i) => (
            <Reveal key={r.label} delay={i % 3}>
              <div className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_50px_-28px_rgba(212,175,55,0.6)]">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-gold/10 text-gold-deep transition-colors group-hover:bg-gold/20">
                  <r.icon className="size-6" />
                </span>
                <span className="text-sm font-semibold text-foreground sm:text-base">
                  {r.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={1}>
          <p className="mt-10 text-center font-serif text-2xl text-muted-foreground text-balance">
            …and anyone tired of wondering what to post.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
