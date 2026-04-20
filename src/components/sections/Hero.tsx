'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { scrollTo, trackEvent } from '@/lib/utils'

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative flex items-end overflow-hidden"
      style={{ height: '100svh', minHeight: 620, maxHeight: 1000 }}
    >
      {/* Background image — priority LCP */}
      <div className="absolute inset-0 animate-hero-zoom">
        <Image
          src="/back/adventure.webp"
          alt="Himalayan mountain landscape at Jakhol, Uttarkashi"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(20,10,5,0.9) 0%, rgba(20,10,5,0.2) 55%, rgba(20,10,5,0.28) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className="relative z-10 w-full grid gap-8 items-end"
        style={{
          padding: '0 clamp(1.25rem,5vw,5rem) clamp(3rem,6vw,5.5rem)',
          gridTemplateColumns: '1fr auto',
        }}
      >
        <div>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-7 h-px bg-gold-light flex-shrink-0" />
            <span className="text-[0.63rem] tracking-[0.22em] uppercase text-gold-light">
              Best Adventure Tourism Village 2024 — Govt. of India
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif font-light text-white leading-[1.02] tracking-[-0.015em] mb-5"
            style={{ fontSize: 'clamp(3rem,8vw,6.5rem)' }}
          >
            Experience{' '}
            <em className="italic text-gold-light">Peace.</em>
            <br />
            Stay Close to Nature.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/70 font-light max-w-[440px] leading-[1.75] mb-9"
            style={{ fontSize: 'clamp(0.88rem,1.5vw,1rem)' }}
          >
            A wooden mountain retreat in Jakhol, nestled in apple orchards inside
            Govind Wildlife Sanctuary — gateway to Uttarakhand&apos;s greatest
            Himalayan trails.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-3"
          >
            <button
              onClick={() => {
                trackEvent('cta_click', 'hero', 'reserve_your_stay')
                scrollTo('#booking')
              }}
              className="btn-gold"
            >
              Reserve Your Stay
            </button>
            <button onClick={() => scrollTo('#about')} className="btn-ghost">
              Explore Homestay
            </button>
          </motion.div>
        </div>

        {/* Stats panel */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:grid grid-cols-2 gap-px rounded-brand overflow-hidden backdrop-blur-sm min-w-[280px]"
          style={{
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.11)',
          }}
          role="list"
          aria-label="Key statistics"
        >
          {[
            { n: '60', l: 'Rooms' },
            { n: '₹1,600', l: 'Per Person/Night' },
            { n: '3 Meals', l: 'Included Daily' },
            { n: '2024', l: 'Award Village' },
          ].map(({ n, l }) => (
            <div
              key={l}
              role="listitem"
              className="p-5"
              style={{ background: 'rgba(20,10,5,0.32)' }}
            >
              <span className="font-serif text-[2rem] font-light text-gold-light leading-none block">
                {n}
              </span>
              <span className="text-[0.62rem] tracking-[0.12em] uppercase text-white/45 mt-1 block">
                {l}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/42 text-[0.58rem] tracking-[0.2em] uppercase animate-scroll-bounce z-10"
        aria-hidden="true"
      >
        <div className="w-px h-11" style={{ background: 'linear-gradient(rgba(255,255,255,0.42), transparent)' }} />
        <span>Scroll</span>
      </div>
    </section>
  )
}
