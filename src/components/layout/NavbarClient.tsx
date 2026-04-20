'use client'
import dynamic from 'next/dynamic'

// Load Navbar client-only to prevent hydration mismatch from scroll/mount state
const Navbar = dynamic(() => import('./Navbar'), { ssr: false })

export default function NavbarClient() {
  return <Navbar />
}
