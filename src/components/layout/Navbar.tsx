'use client'
import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV_LINKS } from '@/data/site'
import { scrollTo, trackEvent } from '@/lib/utils'
import { mobileMenu } from '@/lib/motion'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [mounted, setMounted]   = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = useCallback((href: string) => {
    setMenuOpen(false)
    scrollTo(href)
  }, [])

  const handleBookClick = useCallback(() => {
    trackEvent('cta_click', 'nav', 'book_a_stay')
    handleNavClick('#booking')
  }, [handleNavClick])

  // scrolled shadow only applied after mount to avoid SSR mismatch
  const shadowClass = mounted && scrolled
    ? 'shadow-[0_4px_24px_rgba(0,0,0,0.08)]'
    : ''

  return (
    <>
      {/* ── Desktop Nav ── */}
      <nav
        id="nav"
        role="navigation"
        aria-label="Main navigation"
        className={cn(
          'fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between',
          'h-[72px] px-[clamp(1.25rem,5vw,5rem)]',
          'bg-white border-b border-black/10',
          'transition-all duration-[350ms] ease-[ease]',
          shadowClass
        )}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('#hero')}
          className="flex items-center gap-3 flex-shrink-0"
          aria-label="The Alpine Homestay Home"
        >
          <Image
            src="/logo/logo%20home.webp"
            alt="Alpine Homestay logo"
            width={48}
            height={48}
            priority
            className="h-10 w-auto object-contain"
          />
          <span className="flex flex-col leading-[1.1]">
            <span className="font-serif text-[clamp(1rem,2vw,1.2rem)] font-medium tracking-[0.03em] text-black">
              The Alpine Homestay
            </span>
            <span className="text-[0.55rem] tracking-[0.22em] uppercase font-light font-sans text-black/50">
              Jakhol · Uttarkashi · Uttarakhand
            </span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-[clamp(1.2rem,2.5vw,2.2rem)] items-center" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => handleNavClick(href)}
                className={cn(
                  'text-[0.7rem] tracking-[0.13em] uppercase font-normal text-black/70',
                  'relative pb-[2px] whitespace-nowrap transition-colors duration-[280ms] hover:text-black',
                  'after:absolute after:bottom-0 after:left-0 after:right-full after:h-px after:bg-gold after:transition-[right] after:duration-[250ms]',
                  'hover:after:right-0'
                )}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Book CTA */}
        <button
          onClick={handleBookClick}
          className="hidden lg:block text-[0.68rem] tracking-[0.13em] uppercase px-[1.4rem] py-[0.6rem] rounded-brand border border-black/30 text-black hover:bg-black hover:text-white flex-shrink-0 transition-all duration-[280ms] whitespace-nowrap"
        >
          Book a Stay
        </button>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2 bg-none border-none cursor-pointer z-[1001]"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobileMenu"
        >
          <span className={cn('block w-[22px] h-[1.5px] rounded-sm bg-black transition-all duration-[280ms]', menuOpen && 'translate-y-[6.5px] rotate-45')} />
          <span className={cn('block w-[22px] h-[1.5px] rounded-sm bg-black transition-all duration-[280ms]', menuOpen && 'opacity-0')} />
          <span className={cn('block w-[22px] h-[1.5px] rounded-sm bg-black transition-all duration-[280ms]', menuOpen && '-translate-y-[6.5px] -rotate-45')} />
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobileMenu"
            role="dialog"
            aria-label="Mobile navigation"
            aria-modal="true"
            variants={mobileMenu}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden fixed inset-0 z-[999] bg-white flex flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleNavClick(href)}
                className="font-serif text-[clamp(1.8rem,5vw,2.4rem)] font-normal text-black tracking-[0.03em] transition-colors duration-[280ms] hover:text-gold"
              >
                {label}
              </button>
            ))}
            <button
              onClick={handleBookClick}
              className="mt-4 text-[0.75rem] tracking-[0.13em] uppercase px-6 py-3 rounded-brand border border-black/30 text-black hover:bg-black hover:text-white transition-all duration-[280ms]"
            >
              Book a Stay
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
