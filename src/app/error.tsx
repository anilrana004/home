'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log to error tracking (replace with Sentry/Datadog in production)
    console.error('[App Error]', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-warm">
      <div className="text-center max-w-md">
        <div className="text-[0.65rem] tracking-[0.25em] uppercase text-gold font-medium mb-4">
          Something went wrong
        </div>
        <h2 className="font-serif text-[2rem] font-light text-bark mb-4">
          An unexpected error occurred
        </h2>
        <p className="text-[0.88rem] leading-[1.7] text-text-muted font-light mb-8">
          We apologise for the inconvenience. Please try again, or reach out to us
          directly to book your stay.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center bg-bark text-white px-8 py-[0.85rem] text-[0.72rem] tracking-[0.13em] uppercase rounded-[3px] hover:bg-gold transition-colors duration-[280ms]"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center bg-transparent text-bark px-8 py-[0.85rem] text-[0.72rem] tracking-[0.13em] uppercase rounded-[3px] border border-bark hover:bg-bark hover:text-white transition-all duration-[280ms]"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
