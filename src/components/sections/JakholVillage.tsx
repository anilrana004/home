'use client'
import Image from 'next/image'
import { Reveal } from '@/components/ui/MotionWrapper'
import SectionHeader from '@/components/ui/SectionHeader'
import { JAKHOL_FACTS } from '@/data/site'

export default function JakholVillage() {
  return (
    <section id="jakhol" aria-labelledby="jakhol-heading" className="bg-cream">
      <div className="grid md:grid-cols-2 min-h-[640px]">

        {/* Photo */}
        <div className="relative min-h-[320px] overflow-hidden order-last md:order-first">
          <Reveal fade className="absolute inset-0">
            <Image
              src="/back/jakhol.webp"
              alt="Jakhol village mountain landscape with pine forests"
              fill
              loading="lazy"
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
          <div
            className="absolute inset-0 hidden md:block pointer-events-none"
            style={{ background: 'linear-gradient(to left, rgba(245,240,234,0) 55%, #F5F0EA 100%)' }}
            aria-hidden="true"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center px-[clamp(2rem,4vw,5rem)] py-[clamp(3rem,6vw,6rem)]">
          <SectionHeader
            tag="Jakhol Village"
            title='A village that <em class="italic text-moss">time preserved</em>'
            id="jakhol-heading"
          />

          <Reveal delay={0.16}>
            <p className="body-txt mb-6">
              Jakhol is a small mountain village in the upper Tons Valley, Mori block, Uttarkashi district —
              22 km from Naitwar (entry to Govind National Park) and 230 km from Dehradun. Surrounded by deodar
              and pine forests, entirely within the protected sanctuary.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="flex flex-col">
              {JAKHOL_FACTS.map((fact, i) => (
                <div
                  key={i}
                  className="grid gap-[0.9rem] items-start py-[1rem] border-b border-[rgba(58,37,24,0.1)] last:border-b-0"
                  style={{ gridTemplateColumns: '38px 1fr' }}
                >
                  <div className="w-[38px] h-[38px] bg-white rounded-full flex items-center justify-center text-[0.9rem] shadow-sm flex-shrink-0 mt-0.5">
                    {fact.icon}
                  </div>
                  <div>
                    <div className="text-[0.8rem] font-medium text-bark mb-[0.18rem]">{fact.title}</div>
                    <div className="text-[0.74rem] text-text-muted leading-[1.62] font-light">{fact.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
