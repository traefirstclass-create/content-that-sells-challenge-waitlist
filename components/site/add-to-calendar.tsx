'use client'

import { CalendarPlus, ChevronDown } from 'lucide-react'

// No confirmed Day One date/time exists yet — it's emailed per cohort. Once one
// exists, add a real start/end here and wire `dates=`/`startdt=`/DTSTART params
// into the three links below for accurate entries across all three providers.
const EVENT = {
  title: 'Content That Sells Challenge - Day One',
  details:
    'Live 5-Day Challenge with Trae Firstclass. Learn the CAPTURE Framework. Your exact date and time will be emailed to you.',
}

const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(EVENT.title)}&details=${encodeURIComponent(EVENT.details)}`

const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent(EVENT.title)}&body=${encodeURIComponent(EVENT.details)}`

function downloadAppleIcs() {
  const today = new Date()
  const y = today.getFullYear()
  const m = String(today.getMonth() + 1).padStart(2, '0')
  const d = String(today.getDate()).padStart(2, '0')
  const dateStamp = `${y}${m}${d}`

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Content That Sells Challenge//EN',
    'BEGIN:VEVENT',
    `UID:${Date.now()}@contentthatsells`,
    `DTSTAMP:${dateStamp}T000000Z`,
    `DTSTART;VALUE=DATE:${dateStamp}`,
    `SUMMARY:${EVENT.title}`,
    `DESCRIPTION:${EVENT.details}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  const blob = new Blob([ics], { type: 'text/calendar' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'content-that-sells-day-one.ics'
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

export function AddToCalendar() {
  return (
    <details className="group relative w-full sm:w-auto">
      <summary className="flex w-full cursor-pointer list-none items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] text-luxury-black transition-transform hover:-translate-y-0.5 sm:w-auto [&::-webkit-details-marker]:hidden">
        <CalendarPlus className="size-4" />
        Add To Calendar
        <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
      </summary>
      <div className="absolute inset-x-0 top-full z-10 mt-2 overflow-hidden rounded-2xl border border-gold/20 bg-luxury-black shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] sm:inset-x-auto sm:w-56">
        <a
          href={googleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-5 py-3 text-sm font-medium text-white/85 transition-colors hover:bg-white/5 hover:text-white"
        >
          Google Calendar
        </a>
        <a
          href={outlookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-5 py-3 text-sm font-medium text-white/85 transition-colors hover:bg-white/5 hover:text-white"
        >
          Outlook
        </a>
        <button
          type="button"
          onClick={downloadAppleIcs}
          className="block w-full px-5 py-3 text-left text-sm font-medium text-white/85 transition-colors hover:bg-white/5 hover:text-white"
        >
          Apple Calendar
        </button>
      </div>
    </details>
  )
}
