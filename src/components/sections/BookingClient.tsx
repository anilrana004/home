'use client'
import dynamic from 'next/dynamic'

// Load Booking client-only to prevent hydration mismatch from AnimatePresence/motion state
const Booking = dynamic(() => import('./Booking'), { ssr: false })

export default function BookingClient() {
  return <Booking />
}
