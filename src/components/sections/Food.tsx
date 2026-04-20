import Image from 'next/image'
import { Reveal } from '@/components/ui/MotionWrapper'
import SectionHeader from '@/components/ui/SectionHeader'
import { DISHES } from '@/data/site'
import foodImage from '../../../public/back/food.webp'

export default function Food() {
  return (
    <section id="food" className="sec bg-white" aria-labelledby="food-heading">
      <div className="grid md:grid-cols-2 gap-20 items-center">

        {/* Text */}
        <div>
          <SectionHeader
            tag="Local Flavours"
            title='Taste the <em class="italic text-moss">mountains</em>'
            id="food-heading"
          />

          <Reveal delay={0.16}>
            <p className="font-serif text-[clamp(1.1rem,1.8vw,1.2rem)] italic text-bark-mid leading-[1.65] mb-4">
              &ldquo;Every dish tells the story of the Garhwal hills — grown here, cooked here, eaten here.&rdquo;
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="body-txt mb-3">
              The host has appointed a local chef who prepares freshly cooked Garhwali and Kumaoni regional cuisine
              for every meal. Both vegetarian and non-vegetarian meals available with prior notice. Special dietary
              preferences accommodated with advance notice.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="body-txt mb-6">
              All three meals — breakfast, lunch, dinner — are included in the ₹1,600 tariff. Menus rotate
              seasonally with local produce from the orchard, village farms, and regional markets.
            </p>
          </Reveal>

          {/* Dishes */}
          <Reveal delay={0.28}>
            <div className="text-[0.6rem] tracking-[0.2em] uppercase text-text-light mb-[0.65rem]">
              Traditional Garhwali Delicacies
            </div>
            <div className="flex flex-wrap gap-[0.42rem]" role="list">
              {DISHES.map((d) => (
                <span key={d} role="listitem" className="chip">{d}</span>
              ))}
            </div>
          </Reveal>

          {/* Meal badges */}
          <Reveal delay={0.34}>
            <div className="grid grid-cols-3 gap-3 mt-5" role="list" aria-label="Meals included">
              {[
                { icon: '🌅', name: 'Breakfast', tag: 'Included' },
                { icon: '☀️', name: 'Lunch',     tag: 'Included' },
                { icon: '🌙', name: 'Dinner',    tag: 'Included' },
              ].map(({ icon, name, tag }) => (
                <div key={name} role="listitem" className="p-[0.85rem] bg-cream rounded-brand text-center">
                  <div className="text-[1rem] mb-[0.28rem]" aria-hidden="true">{icon}</div>
                  <div className="text-[0.65rem] font-medium text-bark uppercase tracking-[0.08em]">{name}</div>
                  <div className="text-[0.6rem] text-moss-light mt-[0.08rem]">{tag}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Image stack */}
        <Reveal fade delay={0.1} className="relative h-[320px] sm:h-[520px]">
          <div className="absolute top-0 right-0 w-[70%] h-[74%] rounded-brand overflow-hidden">
            <Image
              src={foodImage}
              alt="Fresh daily Garhwali cuisine served at the homestay"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 70vw, 35vw"
              quality={72}
              placeholder="blur"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-[52%] h-[50%] rounded-brand overflow-hidden border-4 border-white shadow-md z-10 bg-cream">
            <Image
              src="/back/food2.webp"
              alt="Garhwali cuisine dishes"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 52vw, 26vw"
              quality={85}
              className="object-cover object-center"
            />
          </div>
          <div className="absolute top-5 left-5 bg-bark text-white p-4 rounded-brand z-20">
            <div className="text-[0.58rem] tracking-[0.14em] uppercase opacity-56 mb-[0.18rem]">Fresh Daily</div>
            <div className="font-serif text-[1.4rem] font-normal text-gold-light leading-[1.2]">Garhwali<br />Cuisine</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
