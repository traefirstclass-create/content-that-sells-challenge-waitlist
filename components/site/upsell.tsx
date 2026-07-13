'use client'

import Image from 'next/image'
import {
  Check,
  Plus,
  Shirt,
  ShoppingBag,
  HardHat,
  Coffee,
  NotebookPen,
  BookOpenText,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { useCart } from './cart-context'

const workbookFeatures = [
  'Guided note pages for every session',
  'Implementation exercises',
  'Reflection prompts',
  'Content capture templates',
  'Framework worksheets',
  'Space to build your personalized content-recognition system',
]

const merch = [
  { icon: Shirt, label: 'Signature T-Shirt', price: '$34' },
  { icon: ShoppingBag, label: 'Hoodie', price: '$64' },
  { icon: HardHat, label: 'Hat', price: '$28' },
  { icon: Coffee, label: 'Coffee Mug', price: '$22' },
  { icon: NotebookPen, label: 'Notebook', price: '$18' },
]

function AddButton({
  added,
  onClick,
  children,
}: {
  added: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] transition-all duration-300',
        added
          ? 'bg-luxury-black text-white'
          : 'bg-gold-gradient text-luxury-black hover:-translate-y-0.5',
      )}
    >
      {added ? <Check className="size-4" /> : <Plus className="size-4" />}
      {added ? 'Added To Order' : children}
    </button>
  )
}

export function Upsell() {
  const { hasItem, toggleItem } = useCart()
  const workbookAdded = hasItem('workbook')
  const manualAdded = hasItem('paperback-manual')
  const merchAdded = hasItem('merch')

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
            Add To Your Order
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-5 text-center font-serif text-3xl tracking-tight text-balance sm:text-5xl">
            Equip Yourself To Implement Everything You&apos;ll Learn
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
            These are optional—add anything below and it&apos;ll be included in the same
            checkout, one payment, right after this step.
          </p>
        </Reveal>

        {/* Offer 1: Workbook */}
        <Reveal>
          <div className="mt-16 grid items-center gap-10 rounded-3xl border border-gold/30 bg-gradient-to-b from-gold/[0.05] to-transparent p-8 lg:grid-cols-2 lg:p-12">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-6 -z-10 rounded-full bg-gold/10 blur-3xl" />
              <Image
                src="/capture-workbook.png"
                alt="The CAPTURE Framework Guided Workbook"
                width={600}
                height={600}
                className="h-auto w-full rounded-2xl"
              />
            </div>
            <div>
              <span className="inline-block rounded-full border border-gold/40 bg-gold/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-gold-deep">
                Official Companion
              </span>
              <h3 className="mt-4 font-serif text-3xl font-medium sm:text-4xl">
                The CAPTURE Framework™ Guided Workbook
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                The official companion workbook for the challenge—designed to help you capture,
                organize, and implement in real time during every session.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {workbookFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold-deep" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-4xl font-semibold">$47</span>
                  <span className="text-sm text-muted-foreground line-through">$79</span>
                </div>
                <AddButton added={workbookAdded} onClick={() => toggleItem('workbook')}>
                  Add The Workbook
                </AddButton>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Offer 2: Paperback Implementation Manual */}
        <Reveal>
          <div className="mt-10 grid items-center gap-10 rounded-3xl border border-border bg-card p-8 lg:grid-cols-2 lg:p-12">
            <div className="order-2 lg:order-1">
              <span className="inline-block rounded-full border border-gold/40 bg-gold/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-gold-deep">
                Ships After The Challenge
              </span>
              <h3 className="mt-4 font-serif text-3xl font-medium sm:text-4xl">
                The Implementation Manual{' '}
                <span className="block text-2xl text-muted-foreground sm:text-3xl">
                  Paperback Edition
                </span>
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Want it in your hands, not just on your screen? Get the printed paperback
                edition of the Implementation Manual mailed to you as soon as you complete the
                challenge—perfect for marking up, keeping on your desk, and referencing long
                after Day Five.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <span className="font-serif text-4xl font-semibold">$12</span>
                <AddButton added={manualAdded} onClick={() => toggleItem('paperback-manual')}>
                  Add The Paperback
                </AddButton>
              </div>
            </div>
            <div className="relative order-1 mx-auto max-w-xs lg:order-2">
              <div className="absolute -inset-6 -z-10 rounded-full bg-gold/10 blur-3xl" />
              <div className="flex aspect-[3/4] w-full items-center justify-center rounded-2xl border border-dashed border-gold/30 bg-gold/5">
                <BookOpenText className="size-16 text-gold-deep" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Offer 3: Merch */}
        <Reveal>
          <div className="mt-10 rounded-3xl border border-border bg-card p-8 lg:p-12">
            <div className="text-center">
              <h3 className="font-serif text-3xl font-medium sm:text-4xl">
                Content That Sells™ Merchandise
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
                Apparel and accessories for entrepreneurs committed to building a recognizable
                brand—and living the philosophy that{' '}
                <span className="font-semibold text-foreground">“Everything Is Content.”</span>
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {merch.map((m) => (
                <div
                  key={m.label}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border bg-muted/40 p-6 text-center transition-colors hover:border-gold/40"
                >
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-gold/10 text-gold-deep transition-colors group-hover:bg-gold/20">
                    <m.icon className="size-6" />
                  </span>
                  <span className="text-sm font-semibold text-foreground">{m.label}</span>
                  <span className="text-sm text-muted-foreground">{m.price}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center gap-4">
              <div className="flex items-baseline gap-2">
                <span className="text-sm uppercase tracking-[0.15em] text-muted-foreground">
                  Complete Bundle
                </span>
                <span className="font-serif text-4xl font-semibold">$129</span>
                <span className="text-sm text-muted-foreground line-through">$166</span>
              </div>
              <AddButton added={merchAdded} onClick={() => toggleItem('merch')}>
                Add Merch To My Order
              </AddButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
