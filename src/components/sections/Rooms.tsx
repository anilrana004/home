'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Reveal, StaggerReveal, RevealItem } from '@/components/ui/MotionWrapper'
import SectionHeader from '@/components/ui/SectionHeader'
import { ROOMS, TARIFF_INCLUDES } from '@/data/site'
import { scrollTo, trackEvent } from '@/lib/utils'
import { cardHover } from '@/lib/motion'

export default function Rooms() {
  return (
    <section id="rooms" className="sec bg-white" aria-labelledby="rooms-heading">

      {/* Lead row */}
      <div className="grid md:grid-cols-2 gap-14 mb-12 items-end">
        <div>
          <SectionHeader
            tag="Accommodation"
            title='Rest well, <em class="italic text-moss">dream deeper</em>'
            id="rooms-heading"
          />
          <Reveal delay={0.16}>
            <p className="body-txt mb-5">
              60 rooms thoughtfully arranged in a traditional Cyprus Wood framework — across multiple floors,
              each offering majestic views of forest and mountains. Every room accommodates 3–4 guests with two
              washrooms per floor (Western and Indian style). 300m from the motorable road.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="flex items-start gap-[0.85rem] bg-cream p-4 rounded-brand border-l-[3px] border-gold">
              <span className="text-[1rem] mt-0.5 flex-shrink-0" aria-hidden="true">ℹ️</span>
              <p className="text-[0.74rem] leading-[1.62] text-text-muted">
                ₹1,600 per person includes all meals. Children 0–6 free. Children 7–12 at 50%.
                Tariff varies on public holidays and festivals.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Tariff box */}
        <Reveal delay={0.16}>
          <div className="bg-bark text-white p-8 rounded-brand">
            <div className="font-serif text-[clamp(2.5rem,5vw,3.4rem)] font-light text-gold-light leading-none">
              ₹1,600
            </div>
            <div className="text-[0.65rem] tracking-[0.12em] uppercase opacity-50 mt-[0.28rem] mb-5">
              Per person · per night · all meals
            </div>
            <div className="flex flex-col gap-[0.4rem]">
              {TARIFF_INCLUDES.map((item) => (
                <div key={item} className="text-[0.75rem] text-white/66 flex items-center gap-2">
                  <span className="text-gold-light text-[0.7rem]" aria-hidden="true">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Room cards */}
      <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.6rem] mb-8">
        {ROOMS.map((room) => (
          <RevealItem key={room.id}>
            <motion.article
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              className="bg-cream rounded-brand overflow-hidden flex flex-col cursor-default"
            >
              {/* Image */}
              <div className="relative h-[240px] overflow-hidden flex-shrink-0">
                <Image
                  src={room.image}
                  alt={room.imageAlt}
                  fill
                  loading="lazy"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3.5 left-3.5 bg-black/62 backdrop-blur-md text-white text-[0.58rem] tracking-[0.14em] uppercase px-[0.68rem] py-[0.28rem] rounded-full">
                  {room.floor}
                </span>
                <span className="absolute bottom-3.5 right-3.5 bg-gold text-white text-[0.58rem] tracking-[0.1em] uppercase px-[0.68rem] py-[0.28rem] rounded-full">
                  {room.capacity}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-[1.45rem] font-normal text-bark mb-[0.3rem]">{room.name}</h3>
                <p className="text-[0.78rem] leading-[1.72] text-text-muted font-light mb-4 flex-1">{room.desc}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-[0.38rem] mb-[0.95rem]">
                  {room.features.map((f) => (
                    <span key={f} className="text-[0.64rem] text-moss bg-moss/8 px-[0.65rem] py-[0.25rem] rounded-full">
                      {f}
                    </span>
                  ))}
                </div>

                {/* Amenities */}
                <div className="grid grid-cols-2 gap-[0.3rem] mb-[1.1rem]">
                  {room.amenities.map((a) => (
                    <span key={a} className="text-[0.68rem] text-text-muted flex items-center gap-[0.35rem]">{a}</span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-[rgba(58,37,24,0.1)] mt-auto">
                  <div>
                    <div className="font-serif text-[1.55rem] font-normal text-bark leading-none">₹1,600</div>
                    <div className="text-[0.65rem] text-text-muted font-light tracking-[0.04em]">/ person / night</div>
                  </div>
                  <button
                    onClick={() => { trackEvent('cta_click', 'room_card', room.name); scrollTo('#booking') }}
                    className="btn-bark"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.article>
          </RevealItem>
        ))}
      </StaggerReveal>

      {/* Policy row */}
      <Reveal delay={0.1}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { title: 'Standard Tariff', body: '₹1,600 per person per night with all three meals included. Applies on standard weekdays year-round.' },
            { title: 'Festival & Holiday Policy', body: 'Tariff varies during Indian festivals, public holidays, and peak season. Confirm rates at time of booking.' },
            { title: 'Group Bookings', body: 'With 60 rooms, ideal for group treks, corporate retreats, school expeditions, and large family gatherings.' },
          ].map(({ title, body }) => (
            <div key={title} className="p-5 bg-cream rounded-brand border-t-2 border-gold">
              <div className="text-[0.7rem] font-medium text-bark uppercase tracking-[0.07em] mb-[0.4rem]">{title}</div>
              <div className="text-[0.74rem] text-text-muted leading-[1.62] font-light">{body}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
