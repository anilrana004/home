'use client'
import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from '@/components/ui/MotionWrapper'
import SectionHeader from '@/components/ui/SectionHeader'
import { REGION_TABS } from '@/data/site'
import { cn } from '@/lib/utils'

export default function RegionTabs() {
  const [active, setActive] = useState(0)
  const tab = REGION_TABS[active]

  return (
    <section id="mori" className="sec bg-white" aria-labelledby="mori-heading">
      {/* Header */}
      <div className="max-w-[640px] mx-auto text-center mb-12">
        <SectionHeader
          tag="The Region"
          title='Naitwar, Mori &amp; the <em class="italic text-moss">Tons Valley</em>'
          centered
          body="The landscape around The Alpine Homestay is one of the most scenically rich and culturally layered in the entire Himalayan range."
          id="mori-heading"
        />
      </div>

      {/* Two-column grid */}
      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* Image */}
        <Reveal fade className="relative h-[340px] sm:h-[480px]">
          <div className="absolute inset-0 rounded-brand overflow-hidden shadow-md">
            <Image
              src="/temp/temp1.webp"
              alt="The Region – Naitwar, Mori and Tons Valley"
              fill loading="lazy" sizes="50vw" className="object-cover"
            />
          </div>
          <div className="absolute bottom-6 left-6 bg-gold text-white p-4 rounded-brand z-10 shadow-[0_6px_18px_rgba(184,134,30,0.35)]">
            <div className="font-serif text-[2rem] font-light leading-none">Tons</div>
            <div className="text-[0.58rem] tracking-[0.15em] uppercase opacity-88 mt-0.5">Valley Gateway</div>
          </div>
        </Reveal>

        {/* Tab content */}
        <Reveal delay={0.16}>
          {/* Tab buttons */}
          <div
            role="tablist"
            aria-label="Region information"
            className="flex overflow-x-auto no-scrollbar border-b border-[rgba(58,37,24,0.1)] mb-7"
          >
            {REGION_TABS.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={i === active}
                aria-controls={`tab-${t.id}`}
                onClick={() => setActive(i)}
                className={cn(
                  'px-5 py-[0.62rem] text-[0.68rem] tracking-[0.1em] uppercase whitespace-nowrap flex-shrink-0',
                  'border-b-2 -mb-px transition-all duration-[280ms] bg-none border-l-0 border-r-0 border-t-0',
                  i === active
                    ? 'text-bark border-gold font-medium'
                    : 'text-text-muted border-transparent hover:text-bark'
                )}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              id={`tab-${tab.id}`}
              role="tabpanel"
              aria-labelledby={`btn-${tab.id}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
            >
              {/* Facts */}
              <div className="flex flex-col">
                {tab.facts.map((fact, i) => (
                  <div
                    key={i}
                    className="grid gap-[0.9rem] items-start py-[0.95rem] border-b border-[rgba(58,37,24,0.1)] last:border-b-0"
                    style={{ gridTemplateColumns: '32px 1fr' }}
                  >
                    <div className="w-8 h-8 bg-cream rounded-full flex items-center justify-center text-[0.8rem] flex-shrink-0 mt-0.5">
                      {fact.icon}
                    </div>
                    <div>
                      <div className="text-[0.78rem] font-medium text-bark mb-[0.18rem]">{fact.title}</div>
                      <div className="text-[0.73rem] text-text-muted leading-[1.6] font-light">{fact.body}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pills */}
              {tab.pills.length > 0 && (
                <div className="flex flex-wrap gap-[0.45rem] mt-[1.1rem]">
                  {tab.pills.map((p) => (
                    <span key={p} className="hpill">{p}</span>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
