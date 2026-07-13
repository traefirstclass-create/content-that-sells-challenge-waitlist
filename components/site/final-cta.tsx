import { Reveal } from './reveal'
import { CtaButton } from './cta-button'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-luxury-black py-28 text-white sm:py-36">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-6xl">
            Your Business Already Creates Content Every Day.
            <span className="mt-3 block text-gold-gradient">
              Now It&apos;s Time To Recognize It.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
            Join the live 5-Day Challenge and walk away with the CAPTURE Framework™—the system
            that changes how you see your business forever.
          </p>
        </Reveal>
        <Reveal delay={2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaButton href="/checkout?plan=general" className="w-full sm:w-auto">
              Reserve My Seat
            </CtaButton>
            <CtaButton
              href="/checkout?plan=vip"
              variant="outline"
              className="w-full border-white/20 text-white hover:border-gold hover:bg-white/5 sm:w-auto"
            >
              Become VIP
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
