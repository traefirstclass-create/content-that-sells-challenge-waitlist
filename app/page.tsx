'use client'

import Image from 'next/image'
import { FormEvent, useState } from 'react'
import { ArrowRight, Check, Download, FileText, Sparkles } from 'lucide-react'

const leadMagnets = [
  {
    title: 'Content Recognition Scorecard',
    description: 'Audit the conversations, expertise, and everyday moments that can become profitable content.',
    href: '/lead-magnets/content-recognition-scorecard.pdf',
  },
  {
    title: 'Personalized Recognition Results Guide',
    description: 'Turn your score into a clearer content direction before the challenge begins.',
    href: '/lead-magnets/personalized-recognition-results-guide.pdf',
  },
]

export default function Page() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setError('')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          business: formData.get('business'),
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong. Please try again.')
      }

      form.reset()
      setStatus('success')
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#151515]">
      <section className="relative overflow-hidden bg-[#111111] text-white">
        <div className="absolute inset-0">
          <Image
            src="/challenge-graphic.png"
            alt="Content That Sells Challenge workbook preview"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-24"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#111111_0%,rgba(17,17,17,.9)_42%,rgba(17,17,17,.58)_100%)]" />
        </div>

        <div className="relative mx-auto grid min-h-[86vh] max-w-7xl items-center gap-10 px-5 py-8 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
          <div className="max-w-3xl py-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-3 py-1.5 text-sm text-white/82 backdrop-blur">
              <Sparkles className="size-4 text-[#d7ad55]" aria-hidden="true" />
              Waitlist now open
            </div>

            <h1 className="font-serif text-5xl leading-[0.96] text-balance sm:text-6xl lg:text-7xl">
              Content That Sells Challenge
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
              Join the waiting list and get two free Content Recognition downloads so you can start finding the
              sales-ready content already hiding inside your business.
            </p>

            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {['Score your content assets', 'Find your strongest angles', 'Get challenge access first'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/82">
                  <Check className="size-4 text-[#d7ad55]" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="waitlist" className="rounded-lg border border-white/12 bg-white p-4 text-[#151515] shadow-2xl sm:p-6">
            {status === 'success' ? (
              <div className="space-y-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8a6828]">You are on the list</p>
                  <h2 className="mt-2 font-serif text-4xl leading-tight">Your downloads are ready.</h2>
                  <p className="mt-3 text-sm leading-6 text-[#5e5a52]">
                    Grab both lead magnets now. Keep an eye on your inbox for challenge updates.
                  </p>
                </div>

                <div className="grid gap-3">
                  {leadMagnets.map((magnet) => (
                    <a
                      key={magnet.href}
                      href={magnet.href}
                      download
                      className="flex items-center justify-between gap-4 rounded-lg border border-[#ded6c8] bg-[#fbfaf7] p-4 transition hover:border-[#b99045] hover:bg-[#f3ecdf]"
                    >
                      <span className="flex items-center gap-3">
                        <FileText className="size-5 text-[#8a6828]" aria-hidden="true" />
                        <span>
                          <span className="block font-semibold">{magnet.title}</span>
                          <span className="block text-sm text-[#6a665d]">{magnet.description}</span>
                        </span>
                      </span>
                      <Download className="size-5 shrink-0" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8a6828]">Free download</p>
                  <h2 className="mt-2 font-serif text-4xl leading-tight">Join the waitlist.</h2>
                  <p className="mt-3 text-sm leading-6 text-[#5e5a52]">
                    Get instant access to the Scorecard and Results Guide.
                  </p>
                </div>

                <label className="block">
                  <span className="text-sm font-medium">Name</span>
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    className="mt-2 h-12 w-full rounded-lg border border-[#d8d0c3] bg-white px-3 text-base outline-none transition focus:border-[#8a6828] focus:ring-4 focus:ring-[#d7ad55]/20"
                    placeholder="Your name"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 h-12 w-full rounded-lg border border-[#d8d0c3] bg-white px-3 text-base outline-none transition focus:border-[#8a6828] focus:ring-4 focus:ring-[#d7ad55]/20"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium">Business or niche</span>
                  <input
                    name="business"
                    autoComplete="organization"
                    className="mt-2 h-12 w-full rounded-lg border border-[#d8d0c3] bg-white px-3 text-base outline-none transition focus:border-[#8a6828] focus:ring-4 focus:ring-[#d7ad55]/20"
                    placeholder="Creative agency, coach, service provider..."
                  />
                </label>

                {error && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#151515] px-4 font-semibold text-white transition hover:bg-[#2b2b2b] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Saving...' : 'Join and get the downloads'}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8a6828]">What you receive</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">Two tools before the doors open.</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {leadMagnets.map((magnet) => (
              <article key={magnet.title} className="rounded-lg border border-[#e7dece] bg-[#f8f5ef] p-5">
                <FileText className="mb-5 size-8 text-[#8a6828]" aria-hidden="true" />
                <h3 className="text-xl font-semibold">{magnet.title}</h3>
                <p className="mt-3 leading-7 text-[#5e5a52]">{magnet.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
