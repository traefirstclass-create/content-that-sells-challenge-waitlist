'use client'

import { cn } from '@/lib/utils'
import { Play } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { Reveal } from './reveal'

// Swap in the real clip once it's ready — leave blank to show the poster placeholder.
const testimonialVideoSrc = ''
const testimonialPoster = '/trae-firstclass.png'

export function SocialProof() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
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

        <Reveal delay={2}>
          <div className="group relative mx-auto mt-14 aspect-video w-full overflow-hidden rounded-3xl border border-border bg-luxury-black shadow-[0_40px_90px_-40px_rgba(212,175,55,0.35)]">
            {testimonialVideoSrc ? (
              <video
                ref={videoRef}
                src={testimonialVideoSrc}
                poster={testimonialPoster}
                playsInline
                preload="metadata"
                onEnded={() => setPlaying(false)}
                onClick={toggle}
                className="absolute inset-0 size-full cursor-pointer object-cover"
              />
            ) : (
              <Image
                src={testimonialPoster || '/placeholder.svg'}
                alt="Student results preview"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover opacity-70"
              />
            )}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-luxury-black/10 to-transparent"
              aria-hidden="true"
            />
            <button
              type="button"
              onClick={testimonialVideoSrc ? toggle : undefined}
              aria-label={playing ? 'Pause video' : 'Play student results video'}
              className={cn(
                'absolute inset-0 z-10 grid place-items-center transition-opacity duration-300',
                playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100',
              )}
            >
              <span className="grid size-16 place-items-center rounded-full bg-gold-gradient text-luxury-black shadow-[0_10px_40px_-8px_rgba(212,175,55,0.7)] transition-transform duration-300 group-hover:scale-110">
                <Play className="size-6 translate-x-0.5 fill-current" />
              </span>
            </button>
            <p className="absolute bottom-5 left-6 text-sm font-semibold uppercase tracking-[0.15em] text-white/90">
              Student Results
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
