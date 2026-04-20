import Image from 'next/image'
import { Reveal } from '@/components/ui/MotionWrapper'
import SectionHeader from '@/components/ui/SectionHeader'
import { ABOUT_STATS, ABOUT_CHIPS } from '@/data/site'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-cream">
      <div className="grid md:grid-cols-2 min-h-[680px]">
        {/* Visual */}
        <Reveal fade className="relative overflow-hidden min-h-[350px]">
          <Image
            src="/back/view10.webp"
            alt="Mountain landscape surrounding Jakhol village"
            fill
            loading="lazy"
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 hidden md:block"
            style={{ background: 'linear-gradient(to right, rgba(245,240,234,0) 55%, #F5F0EA 100%)' }}
            aria-hidden="true"
          />
          {/* Badge */}
          <div className="absolute bottom-10 left-10 bg-bark text-white p-7 rounded-brand text-center shadow-lg">
            <span className="font-serif text-[2.8rem] font-light block leading-none text-gold-light">
              2024
            </span>
            <div className="text-[0.6rem] tracking-[0.14em] uppercase opacity-60 mt-1.5 leading-[1.5]">
              Best Adventure<br />Tourism Village<br />Govt. of India
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <div className="flex flex-col justify-center px-[clamp(2rem,4vw,5rem)] py-[clamp(3rem,6vw,6rem)]">
          <SectionHeader
            tag="The Homestay"
            title='A home in the <em class="italic text-moss">Himalayas,</em><br>crafted with soul'
            id="about-heading"
          />

          <Reveal delay={0.16}>
            <blockquote className="font-serif text-[clamp(1.1rem,2vw,1.4rem)] font-light leading-[1.65] text-bark-mid italic border-l-2 border-gold pl-5 mb-5">
              &ldquo;Nestled in apple orchards, surrounded by dense pine forest — this is not just a homestay.
              It is the beginning of a story you will keep telling.&rdquo;
            </blockquote>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="body-txt mb-3">
              The Alpine Homestay sits in Jakhol village, deep inside Govind Wildlife Sanctuary, Uttarkashi
              district. Jakhol was awarded the{' '}
              <strong>Best Adventure Tourism Village 2024</strong> by the Government of India.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="body-txt mb-7">
              Built in the centuries-old tradition of <em>Cyprus Wood</em> construction — the same method used
              for the Someshwar Mahadev Temple 750 metres away — this 60-room homestay is a cultural landmark
              and peaceful mountain sanctuary, 300 metres from the road via an orchard footpath.
            </p>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.32}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6" role="list">
              {ABOUT_STATS.map(({ value, label }) => (
                <div key={label} role="listitem" className="p-4 bg-white rounded-brand border-l-[3px] border-gold">
                  <div className="font-serif text-[clamp(1.4rem,2.5vw,1.9rem)] font-normal text-bark leading-none">
                    {value}
                  </div>
                  <div className="text-[0.63rem] tracking-[0.1em] uppercase text-text-muted mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Chips */}
          <Reveal delay={0.4}>
            <div className="flex flex-wrap gap-[0.4rem]" role="list" aria-label="Guest types">
              {ABOUT_CHIPS.map((c) => (
                <span key={c} role="listitem" className="chip">{c}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
