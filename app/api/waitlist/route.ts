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
    await mkdir(dataDir, { recursive: true })
    await appendFile(filePath, `${JSON.stringify(submission)}\n`)
  } catch (error) {
    console.error('Waitlist local storage failed', error)
  }

  return NextResponse.json({ ok: true })
}
