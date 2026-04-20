import Image from 'next/image'
import { Reveal, StaggerReveal, RevealItem } from '@/components/ui/MotionWrapper'
import SectionHeader from '@/components/ui/SectionHeader'
import { AMENITIES } from '@/data/site'
import viewImage from '../../../public/back/view1.webp'

export default function Amenities() {
  return (
    <section id="amenities" className="sec bg-cream" aria-labelledby="amen-heading">

      {/* Header + photo row */}
      <div className="grid md:grid-cols-2 gap-16 items-center mb-14">
        <div>
          <SectionHeader
            tag="Facilities"
            title='Every comfort, <em class="italic text-moss">every moment</em>'
            id="amen-heading"
          />
          <Reveal delay={0.16}>
            <p className="body-txt mb-3">
              The Alpine Homestay blends family warmth with mountain retreat essentials. From hot water and WiFi
              to bonfire evenings and open mountain seating — every facility is designed to let you arrive,
              breathe, and be fully present.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="body-txt">
              Two washrooms per floor — one Western, one Indian style. Pick and drop service available on a paid
              basis. Solar panels supplement electricity — responsible mountain living.
            </p>
          </Reveal>
        </div>
        <Reveal fade delay={0.1}>
          <div className="relative h-[380px] rounded-brand overflow-hidden">
            <Image
              src={viewImage}
              alt="The Alpine Homestay property view surrounded by pine forest"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={74}
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      {/* Amenity grid */}
      <StaggerReveal className="grid grid-cols-2 lg:grid-cols-4 gap-[1.1rem]">
        {AMENITIES.map((a) => (
          <RevealItem key={a.name}>
            <div className="p-[1.7rem_1.3rem] bg-white rounded-brand text-center border-b-2 border-transparent hover:border-gold hover:shadow-md hover:-translate-y-[3px] transition-all duration-[280ms] group">
              <div className="w-[46px] h-[46px] bg-cream rounded-full flex items-center justify-center text-[1.2rem] mx-auto mb-[0.9rem] transition-colors duration-[280ms] group-hover:bg-[#F5E8C0]">
                {a.icon}
              </div>
              <div className="text-[0.73rem] font-medium text-bark tracking-[0.06em] uppercase mb-[0.32rem]">{a.name}</div>
              <div className="text-[0.7rem] text-text-muted leading-[1.56] font-light">{a.desc}</div>
            </div>
          </RevealItem>
        ))}
      </StaggerReveal>
    </section>
  )
}
