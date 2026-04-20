import Image from 'next/image'
import { Reveal } from '@/components/ui/MotionWrapper'
import SectionHeader from '@/components/ui/SectionHeader'
import { ACTIVITIES } from '@/data/site'
import adventureImage from '../../../public/back/adventure.webp'

export default function Activities() {
  return (
    <section id="activities" aria-labelledby="act-heading" className="bg-cream">
      <div className="grid md:grid-cols-2">

        {/* Photo */}
        <div className="relative min-h-[300px] md:min-h-[640px] overflow-hidden order-last md:order-first">
          <Image
            src={adventureImage}
            alt="Mountain trekking activity in Uttarakhand"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={74}
            placeholder="blur"
            className="object-cover"
          />
          <div
            className="absolute inset-0 hidden md:block"
            style={{ background: 'linear-gradient(to right, transparent 68%, #F5F0EA 100%)' }}
            aria-hidden="true"
          />
        </div>

        {/* List */}
        <div className="flex flex-col justify-center px-[clamp(2rem,4vw,5rem)] py-[clamp(3rem,6vw,6rem)]">
          <SectionHeader
            tag="Things To Do"
            title='Adventure lives <em class="italic text-moss">at every turn</em>'
            tagVariant="moss"
            id="act-heading"
          />
          <Reveal delay={0.16}>
            <p className="body-txt mb-6">
              From sunrise bird-watching to meditation in pine-scented clearings, from Mahabharata temple walks
              to week-long Himalayan treks — Jakhol offers experiences for every kind of traveller.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div>
              {ACTIVITIES.map((act, i) => (
                <div
                  key={i}
                  className="grid items-center gap-4 py-[0.9rem] border-b border-[rgba(58,37,24,0.1)] last:border-b-0 group cursor-default"
                  style={{ gridTemplateColumns: '38px 1fr auto' }}
                >
                  <div className="w-[38px] h-[38px] bg-white rounded-full flex items-center justify-center text-[1rem] flex-shrink-0 shadow-sm group-hover:bg-[#F5E8C0] transition-colors duration-[280ms]">
                    {act.icon}
                  </div>
                  <div>
                    <div className="text-[0.84rem] font-normal text-bark group-hover:text-gold transition-colors duration-[280ms]">
                      {act.name}
                    </div>
                    <div className="text-[0.7rem] text-text-muted font-light mt-[0.12rem]">{act.detail}</div>
                  </div>
                  <span className="text-text-light text-[0.75rem] group-hover:translate-x-[3px] transition-transform duration-[280ms]" aria-hidden="true">
                    →
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
