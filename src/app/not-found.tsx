import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Page Not Found | The Alpine Homestay Jakhol',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        background: 'linear-gradient(135deg, #F5F0EA 0%, #FDFAF7 60%, #EDE5D8 100%)',
      }}
    >
      <div className="text-center max-w-lg">
        {/* Mountain illustration */}
        <div className="mb-8" aria-hidden="true">
          <svg viewBox="0 0 200 120" className="w-40 mx-auto opacity-60">
            <polygon points="100,10 170,100 30,100" fill="#B8861E" opacity="0.35" />
            <polygon points="55,50 110,100 0,100" fill="#3E5235" opacity="0.4" />
            <polygon points="100,10 120,48 80,48" fill="#FDFAF7" opacity="0.8" />
          </svg>
        </div>

        <div className="text-[0.65rem] tracking-[0.25em] uppercase text-gold font-medium mb-4">
          404 — Lost in the Mountains
        </div>

        <h1
          className="font-serif font-light text-bark mb-4"
          style={{ fontSize: 'clamp(2rem,5vw,3rem)', lineHeight: 1.08 }}
        >
          This path leads<br />
          <em className="italic text-moss">nowhere</em>
        </h1>

        <p className="text-[0.9rem] leading-[1.75] text-text-muted font-light mb-8 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist — but The Alpine Homestay
          in Jakhol absolutely does. Let us take you back.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-bark text-white px-8 py-[0.85rem] text-[0.72rem] tracking-[0.13em] uppercase rounded-[3px] hover:bg-gold transition-colors duration-[280ms]"
          >
            ← Return Home
          </Link>
          <Link
            href="/#booking"
            className="inline-flex items-center gap-2 bg-transparent text-bark px-8 py-[0.85rem] text-[0.72rem] tracking-[0.13em] uppercase rounded-[3px] border border-bark hover:bg-bark hover:text-white transition-all duration-[280ms]"
          >
            Book a Stay
          </Link>
        </div>

        <p className="text-[0.72rem] text-text-light mt-10">
          The Alpine Homestay · Jakhol, Uttarkashi · Uttarakhand
        </p>
      </div>
    </div>
  )
}
