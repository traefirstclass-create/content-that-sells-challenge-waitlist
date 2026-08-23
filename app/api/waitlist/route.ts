import { mkdir, appendFile } from 'node:fs/promises'
import path from 'node:path'
import { NextResponse } from 'next/server'

type WaitlistPayload = {
  name?: unknown
  email?: unknown
  business?: unknown
}

function cleanValue(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

async function saveToGoogleSheets(submission: {
  name: string
  email: string
  business: string
  submittedAt: string
}) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL

  if (!webhookUrl) {
    return false
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(submission),
  })

  const responseText = await response.text()

  if (!response.ok) {
    throw new Error(`Google Sheets webhook failed with status ${response.status}: ${responseText.slice(0, 500)}`)
  }

  if (!responseText.includes('"ok":true') && !responseText.includes('ok')) {
    console.warn('Unexpected Google Sheets webhook response', responseText.slice(0, 500))
  }

  return true
}

export async function POST(request: Request) {
  let payload: WaitlistPayload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Please submit the form again.' }, { status: 400 })
  }

  const name = cleanValue(payload.name)
  const email = cleanValue(payload.email).toLowerCase()
  const business = cleanValue(payload.business)

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const submission = {
    name,
    email,
    business,
    submittedAt: new Date().toISOString(),
  }

  const dataDir = process.env.VERCEL ? '/tmp' : path.join(process.cwd(), 'data')
  const filePath = path.join(dataDir, 'waitlist-submissions.jsonl')

  try {
    const savedToGoogleSheets = await saveToGoogleSheets(submission)

    if (!savedToGoogleSheets) {
      await mkdir(dataDir, { recursive: true })
      await appendFile(filePath, `${JSON.stringify(submission)}\n`)
    }
  } catch (error) {
    console.error('Waitlist storage failed', error)
    return NextResponse.json(
      { error: 'We could not save your signup. Please try again in a moment.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
