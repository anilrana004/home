'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { GALLERY_IMAGES } from '@/data/site'

const PREVIEW_COUNT = 6

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const openLb = useCallback((index: number) => {
    setLightboxIndex(index)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLb = useCallback(() => {
    setLightboxIndex(null)
    document.body.style.overflow = ''
  }, [])

  const nextLb = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return 0
      return (prev + 1) % GALLERY_IMAGES.length
    })
  }, [])

  const prevLb = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return GALLERY_IMAGES.length - 1
      return (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
    })
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') closeLb()
      if (e.key === 'ArrowRight') nextLb()
      if (e.key === 'ArrowLeft') prevLb()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [closeLb, lightboxIndex, nextLb, prevLb])

  useEffect(() => {
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const activeImage = lightboxIndex === null ? null : GALLERY_IMAGES[lightboxIndex]
  const previewImages = GALLERY_IMAGES.slice(0, PREVIEW_COUNT)

  if (!isMounted) {
    return (
      <section
        id="gallery"
        className="bg-bark pt-[clamp(4rem,8vw,7rem)] pb-[clamp(4rem,8vw,7rem)]"
        aria-labelledby="gallery-heading"
      >
        <div className="px-[clamp(1.25rem,5vw,5rem)] mb-10">
          <SectionHeader
            tag="Visual Story"
            title='Life at <em class="italic text-gold-light">The Alpine</em>'
            tagVariant="white"
            titleVariant="white"
            id="gallery-heading"
          />
        </div>
      </section>
    )
  }

  return (
    <>
      <section id="gallery" className="bg-bark pt-[clamp(4rem,8vw,7rem)] pb-[clamp(4rem,8vw,7rem)]" aria-labelledby="gallery-heading">
        {/* Header */}
        <div className="px-[clamp(1.25rem,5vw,5rem)] mb-10">
          <SectionHeader
            tag="Visual Story"
            title='Life at <em class="italic text-gold-light">The Alpine</em>'
            tagVariant="white"
            titleVariant="white"
            id="gallery-heading"
          />
        </div>

        {/* Masonry grid */}
        <div
          className="grid gap-[4px] px-[clamp(1.25rem,5vw,5rem)] md:px-0 md:grid-cols-3 auto-rows-[180px] sm:auto-rows-[220px] md:auto-rows-[280px]"
          role="list"
          aria-label="Photo gallery"
        >
          {previewImages.map((img, i) => (
            <div
              key={i}
              role="listitem"
              className={`overflow-hidden cursor-pointer relative group ${i === 0 ? 'md:row-span-2 md:col-span-1 col-span-full' : ''}`}
              tabIndex={0}
              aria-label={`Open full size: ${img.alt}`}
              onClick={() => openLb(i)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLb(i) } }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                sizes={i === 0 ? '(max-width: 768px) 100vw, 42vw' : '(max-width: 768px) 100vw, 21vw'}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-[rgba(20,10,5,0)] group-hover:bg-[rgba(20,10,5,0.34)] transition-colors duration-[320ms] flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border-[1.5px] border-white flex items-center justify-center text-white opacity-0 scale-[0.85] group-hover:opacity-100 group-hover:scale-100 transition-all duration-[250ms]">
                  +
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Caption row */}
        <div className="px-[clamp(1.25rem,5vw,5rem)] mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span className="text-[0.72rem] text-white/35 font-light">
            Photography from Jakhol village and Govind Wildlife Sanctuary, Uttarkashi
          </span>
          <button
            onClick={() => openLb(0)}
            className="text-[0.68rem] tracking-[0.14em] uppercase text-gold-light border-b border-gold-light pb-[1px] hover:opacity-75 transition-opacity"
            aria-label="Open full gallery lightbox"
          >
            View Full Gallery →
          </button>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] bg-[rgba(10,5,2,0.94)] flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
            onClick={closeLb}
          >
            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 text-white/78 text-[0.68rem] tracking-[0.14em] uppercase z-30">
              Visual Story
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); prevLb() }}
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/14 border border-white/30 text-white flex items-center justify-center hover:bg-gold hover:border-gold transition-colors duration-[280ms] z-30"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); closeLb() }}
              className="absolute top-3 right-3 sm:top-5 sm:right-5 w-11 h-11 rounded-full bg-white/14 border border-white/30 text-white flex items-center justify-center hover:bg-gold hover:border-gold transition-colors duration-[280ms] z-30"
              aria-label="Close lightbox"
            >
              ✕
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextLb() }}
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/14 border border-white/30 text-white flex items-center justify-center hover:bg-gold hover:border-gold transition-colors duration-[280ms] z-30"
              aria-label="Next image"
            >
              ›
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[0.66rem] tracking-[0.14em] uppercase text-white/70 z-30">
              {lightboxIndex !== null ? `${lightboxIndex + 1} / ${GALLERY_IMAGES.length}` : ''}
            </div>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 w-[min(1200px,92vw)] h-[min(86vh,760px)]"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
              onTouchEnd={(e) => {
                if (touchStartX.current === null) return
                const dx = e.changedTouches[0].clientX - touchStartX.current
                if (dx > 50) prevLb()
                if (dx < -50) nextLb()
                touchStartX.current = null
              }}
            >
              <Image
                src={activeImage.full}
                alt={activeImage.alt}
                fill
                className="object-contain rounded-brand"
                sizes="92vw"
              />
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[min(100%,920px)] px-2 sm:px-4 z-20">
                <div className="flex gap-2 overflow-x-auto no-scrollbar justify-start sm:justify-center py-1">
                  {GALLERY_IMAGES.map((img, i) => (
                    <button
                      key={`${img.src}-${i}`}
                      onClick={() => setLightboxIndex(i)}
                      className={`relative shrink-0 w-14 h-14 rounded-[3px] overflow-hidden border transition-all duration-200 ${i === lightboxIndex ? 'border-gold scale-105' : 'border-white/30 hover:border-white/70'}`}
                      aria-label={`Open image ${i + 1}`}
                    >
                      <Image src={img.src} alt={img.alt} fill sizes="56px" className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
