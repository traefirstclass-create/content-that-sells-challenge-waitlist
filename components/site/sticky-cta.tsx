'use client'

import { cn } from '@/lib/utils'
import { ArrowRight, CalendarCheck } from 'lucide-react'
import { useEffect, useState } from 'react'

export function StickyCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const nearBottom =
        window.innerHeight + y >= document.documentElement.scrollHeight - 900
      setShow(y > window.innerHeight * 0.9 && !nearBottom)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-40 transition-all duration-500 lg:hidden',
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0',
      )}
    >
      <div className="m-3 flex items-center justify-between gap-3 rounded-2xl border border-gold/20 bg-background/85 px-4 py-3 shadow-2xl shadow-black/10 backdrop-blur-xl backdrop-saturate-150">
        <div className="flex items-center gap-2.5">
          <CalendarCheck className="size-5 shrink-0 text-gold-deep" />
          <p className="text-xs font-medium leading-tight text-foreground">
            Content That Sells™
            <br />
            5-Day Challenge
          </p>
        </div>
        <a
          href="#pricing"
          className="inline-flex items-center gap-1.5 rounded-full bg-gold-gradient px-4 py-2.5 text-xs font-semibold text-luxury-black"
        >
          Reserve Seat
          <ArrowRight className="size-3.5" />
        </a>
      </div>
    </div>
  )
}
