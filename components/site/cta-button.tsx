'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'gold' | 'outline' | 'dark'

const base =
  'group relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2'

const styles: Record<Variant, string> = {
  gold: 'bg-gold-gradient text-luxury-black shadow-[0_10px_40px_-12px_rgba(212,175,55,0.65)] hover:shadow-[0_18px_55px_-12px_rgba(212,175,55,0.8)] hover:-translate-y-0.5',
  outline:
    'border border-gold/40 bg-transparent text-foreground hover:border-gold hover:bg-gold/5',
  dark: 'bg-luxury-black text-white shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 hover:shadow-[0_18px_55px_-12px_rgba(0,0,0,0.7)]',
}

export function CtaButton({
  children,
  href = '#pricing',
  variant = 'gold',
  className,
}: {
  children: ReactNode
  href?: string
  variant?: Variant
  className?: string
}) {
  return (
    <Link href={href} className={cn(base, styles[variant], className)}>
      {variant === 'gold' && (
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
        />
      )}
      {children}
    </Link>
  )
}
