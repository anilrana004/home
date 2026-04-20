import dynamic from 'next/dynamic'
import NavbarClient from '@/components/layout/NavbarClient'
import Hero from '@/components/sections/Hero'
import AwardStrip from '@/components/sections/AwardStrip'
import About from '@/components/sections/About'

// ── Lazy-load all below-fold sections ──────────────────────────────────────
const WhyBest         = dynamic(() => import('@/components/sections/WhyBest'))
const JakholVillage   = dynamic(() => import('@/components/sections/JakholVillage'))
const RegionTabs      = dynamic(() => import('@/components/sections/RegionTabs'))
const Uttarkashi      = dynamic(() => import('@/components/sections/Uttarkashi'))
const Rooms           = dynamic(() => import('@/components/sections/Rooms'))
const Amenities       = dynamic(() => import('@/components/sections/Amenities'))
const Gallery         = dynamic(() => import('@/components/sections/Gallery'))
const Activities      = dynamic(() => import('@/components/sections/Activities'))
const Food            = dynamic(() => import('@/components/sections/Food'))
const Treks           = dynamic(() => import('@/components/sections/Treks'))
const LocalAttractions = dynamic(() => import('@/components/sections/LocalAttractions'))
const Testimonials    = dynamic(() => import('@/components/sections/Testimonials'))
const Location        = dynamic(() => import('@/components/sections/Location'))
const Host            = dynamic(() => import('@/components/sections/Host'))
const Booking         = dynamic(() => import('@/components/sections/Booking'))
const Footer          = dynamic(() => import('@/components/layout/Footer'))
const BackToTop       = dynamic(() => import('@/components/ui/BackToTop'))

export default function HomePage() {
  return (
    <>
      <NavbarClient />
      <main id="main">
        <Hero />
        <AwardStrip />
        <About />
        <WhyBest />
        <JakholVillage />
        <RegionTabs />
        <Uttarkashi />
        <Rooms />
        <Amenities />
        <Gallery />
        <Activities />
        <Food />
        <Treks />
        <LocalAttractions />
        <Testimonials />
        <Location />
        <Host />
        <Booking />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
