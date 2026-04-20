import { Reveal } from '@/components/ui/MotionWrapper'
import SectionHeader from '@/components/ui/SectionHeader'
import { REACH_ITEMS, DISTANCE_STATS } from '@/data/site'

export default function Location() {
  return (
    <section id="location" aria-labelledby="loc-heading" className="bg-white">
      {/* Split */}
      <div className="grid md:grid-cols-2">

        {/* Info */}
        <div className="flex flex-col justify-center px-[clamp(2rem,4vw,5rem)] py-[clamp(3rem,6vw,6.5rem)]">
          <SectionHeader
            tag="How to Reach"
            title='Find your way <em class="italic text-moss">here</em>'
            id="loc-heading"
          />
          <Reveal delay={0.16}>
            <p className="body-txt mb-6">
              The drive to Jakhol is part of the experience — through pine forests and alongside the Tons River.
              The road passes through Mori before climbing into the upper valley. Homestay is 300m from the road
              via an orchard footpath.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div>
              {REACH_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-4 items-start py-[1.1rem] border-b border-[rgba(58,37,24,0.1)] first:pt-0"
                  style={{ gridTemplateColumns: '40px 1fr' }}
                >
                  <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center text-[1rem] flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[0.6rem] tracking-[0.15em] uppercase text-text-light mb-[0.26rem]">{item.label}</div>
                    <div className="text-[0.84rem] text-bark font-normal leading-[1.5]">{item.val}</div>
                    <div className="text-[0.72rem] text-text-muted font-light mt-[0.16rem]">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal fade className="relative min-h-[400px] md:min-h-[560px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14259.5!2d78.098!3d31.016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3906f0ecb0c2e3f1%3A0x5e2a3e3a3b3b3b3b!2sJakhol%2C+Uttarkashi%2C+Uttarakhand!5e0!3m2!1sen!2sin!4v1620000000000"
            title="The Alpine Homestay location on Google Maps"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full border-0"
          />
        </Reveal>
      </div>

      {/* Distance strip */}
      <div
        className="bg-cream grid grid-cols-2 sm:grid-cols-4 gap-8 py-7 px-[clamp(1.25rem,5vw,5rem)] border-t border-[rgba(58,37,24,0.1)]"
        role="list"
        aria-label="Distance information"
      >
        {DISTANCE_STATS.map(({ n, l }) => (
          <div key={l} role="listitem" className="text-center">
            <div className="font-serif text-[1.8rem] font-normal text-bark">{n}</div>
            <div className="text-[0.62rem] tracking-[0.1em] uppercase text-text-muted mt-[0.18rem]">{l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
