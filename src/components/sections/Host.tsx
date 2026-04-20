import Image from 'next/image'
import { Reveal } from '@/components/ui/MotionWrapper'
import SectionHeader from '@/components/ui/SectionHeader'
import rajnathImage from '../../../public/back/rajnath.webp'

export default function Host() {
  return (
    <section id="host" className="sec bg-cream" aria-labelledby="host-heading">
      <div className="text-center mb-14">
        <SectionHeader
          tag="Know Your Host"
          title='A native of <em class="italic text-moss">Jakhol Gaon</em>'
          centered
          id="host-heading"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-20 items-center max-w-[980px] mx-auto">

        {/* Photo */}
        <Reveal fade className="relative">
          <div className="relative aspect-[4/5] rounded-brand overflow-hidden">
            <Image
              src={rajnathImage}
              alt="Rajnath Singh Rawat, host of The Alpine Homestay"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 92vw, (max-width: 1280px) 44vw, 420px"
              quality={72}
              placeholder="blur"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 bg-gold text-white p-5 rounded-brand text-center shadow-[0_8px_22px_rgba(184,134,30,0.3)]">
            <span className="text-[1.2rem] block mb-[0.18rem]" aria-hidden="true">🏔</span>
            <span className="text-[0.58rem] tracking-[0.12em] uppercase leading-[1.45]">Trek Guide<br />&amp; Host</span>
          </div>
        </Reveal>

        {/* Content */}
        <div>
          <Reveal delay={0.12}>
            <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.5rem)] font-normal text-bark mb-[0.22rem]">
              Rajnath Singh Rawat
            </h2>
            <div className="text-[0.68rem] tracking-[0.18em] uppercase text-gold mb-5">
              Founder &amp; Host · Jakhol, Uttarkashi
            </div>
            <p className="body-txt mb-3">
              Rajnath Singh Rawat was born and raised in Jakhol Gaon — a village he knows not as a postcard but
              as a home. He is currently pursuing his postgraduate degree from D.A.V.P.G. College, and brings to
              the homestay not just hospitality but the deep rootedness of someone who has lived this landscape
              his entire life.
            </p>
            <p className="body-txt mb-3">
              With over 5 years of expertise managing apple orchards — a specialised discipline in Uttarkashi —
              Rajnath has an uncommon understanding of the seasonal rhythms of the Tons Valley. He personally
              arranges treks through a handpicked team of experienced local youth guides.
            </p>
            <p className="body-txt mb-6">
              He lives here with his family. Together they collectively manage every aspect of the homestay —
              from preparing traditional Garhwali meals to welcoming guests as extended family.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="grid grid-cols-3 gap-3" role="list">
              {[
                { val: '5+', key: 'Years Orcharding' },
                { val: '10+', key: 'Treks Guided' },
                { val: 'Native', key: 'Born in Jakhol' },
              ].map(({ val, key }) => (
                <div key={key} role="listitem" className="p-4 bg-white rounded-brand text-center">
                  <div className="font-serif text-[1.7rem] font-normal text-bark">{val}</div>
                  <div className="text-[0.62rem] tracking-[0.1em] uppercase text-text-muted mt-[0.18rem]">{key}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
