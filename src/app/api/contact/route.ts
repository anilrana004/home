import { NextRequest, NextResponse } from 'next/server'
import { SITE } from '@/data/site'

// ── Simple in-memory rate limiter (per IP, resets on cold start) ─────────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const window = 60_000 // 1 minute
  const limit  = 5      // max 5 submissions per minute per IP

  const record = rateLimitMap.get(ip)
  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + window })
    return false
  }
  if (record.count >= limit) return true
  record.count++
  return false
}

// ── Sanitise: strip HTML tags ────────────────────────────────────────────────
function sanitise(val: unknown): string {
  if (typeof val !== 'string') return ''
  return val.replace(/<[^>]*>/g, '').trim().slice(0, 500)
}

// ── POST /api/contact ─────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Rate limit
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown'
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a minute and try again.' },
      { status: 429 }
    )
  }

  // Parse body
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  // Validate required fields
  const name     = sanitise(body.name)
  const email    = sanitise(body.email)
  const phone    = sanitise(body.phone)
  const city     = sanitise(body.city)
  const adults   = sanitise(body.adults)
  const rooms    = sanitise(body.rooms)
  const child1   = sanitise(body.child1)
  const child2   = sanitise(body.child2)
  const checkin  = sanitise(body.checkin)
  const checkout = sanitise(body.checkout)
  const message  = sanitise(body.message)

  if (!name || !email || !phone) {
    return NextResponse.json(
      { error: 'Name, email and phone are required.' },
      { status: 422 }
    )
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 422 })
  }

  if (checkin && checkout && checkin >= checkout) {
    return NextResponse.json(
      { error: 'Check-out date must be after check-in date.' },
      { status: 422 }
    )
  }

  // Forward to Formspree
  const formspreeId = SITE.formspreeId
  if (!formspreeId || formspreeId === 'YOUR_FORMSPREE_ID') {
    // Dev mode: just log and return success
    console.log('[DEV] Booking form submission:', { name, email, phone })
    return NextResponse.json({ ok: true, dev: true })
  }

  try {
    const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        _subject: `New Booking Request — ${name} | The Alpine Homestay Jakhol`,
        name, email, phone, city,
        adults, rooms, 'children_0_6': child1, 'children_7_12': child2,
        checkin, checkout, message,
        _ip: ip,
      }),
    })

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      console.error('[Formspree error]', err)
      return NextResponse.json({ error: 'Failed to send. Please try again.' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[Contact API error]', err)
    return NextResponse.json({ error: 'Server error. Please try again.' }, { status: 500 })
  }
}

// Reject other methods
export function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 })
}
