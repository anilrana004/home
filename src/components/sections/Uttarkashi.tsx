import Image from 'next/image'
import { Reveal } from '@/components/ui/MotionWrapper'
import SectionHeader from '@/components/ui/SectionHeader'
import { SEASONS } from '@/data/site'

export default function Uttarkashi() {
  return (
    <section id="uttarkashi" className="sec bg-cream" aria-labelledby="uk-heading">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Image collage */}
        <Reveal fade>
          <div className="grid grid-cols-2 gap-[6px] rounded-brand overflow-hidden">
            {/* Large left spanning 2 rows */}
            <div className="row-span-2 relative h-[230px] sm:h-[480px] overflow-hidden">
              <Image
                src="/temp/tempe2.webp"
                alt="Himalayan peaks of Uttarkashi district"
                fill loading="lazy" sizes="25vw" className="object-cover"
              />
            </div>
            <div className="relative h-[115px] sm:h-[236px] overflow-hidden">
              <Image
                src="/temp/temp1.webp"
                alt="Uttarkashi district landscape"
                fill loading="lazy" sizes="20vw" className="object-cover"
              />
            </div>
            <div className="relative h-[115px] sm:h-[236px] overflow-hidden">
              <Image
                src="/temp/temp3.webp"
                alt="Trekking trail in Uttarkashi"
                fill loading="lazy" sizes="20vw" className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <div>
          <SectionHeader
            tag="Uttarkashi District"
            title='Devbhoomi — the <em class="italic text-moss">Land of Gods</em>'
            id="uk-heading"
          />

          <Reveal delay={0.16}>
            <p className="body-txt mb-3">
              Uttarkashi — meaning <em>&ldquo;Kashi of the North&rdquo;</em>, also called{' '}
              <em>Somya Kashi</em> — is the largest district of Uttarakhand, in the heart of the Garhwal Himalayas
              at 1,158 metres. Base for Gangotri, Yamunotri Dham, the Nehru Institute of Mountaineering, and
              legendary treks.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="body-txt mb-8">
              The district&apos;s terrain ranges from subtropical river valleys to permanent glaciers — one of
              Asia&apos;s most ecologically diverse landscapes. Home to the sacred Vishwanath Temple, Harsil
              Valley, Dayara Bugyal, and the ancient Gartang Gali bridge on the old Indo-Tibet trade route.
            </p>
          </Reveal>

          {/* Seasons */}
          <Reveal delay={0.28}>
            <div className="grid grid-cols-2 gap-[0.9rem]">
              {SEASONS.map((s) => (
                <div
                  key={s.title}
                  className="p-[1.3rem] bg-white rounded-brand border-t-2 border-transparent hover:border-gold hover:shadow-sm transition-all duration-[280ms]"
                >
                  <div className="text-[1.1rem] mb-1.5" aria-hidden="true">{s.icon}</div>
                  <div className="text-[0.72rem] font-medium uppercase tracking-[0.07em] text-bark mb-[0.3rem]">{s.title}</div>
                  <div className="text-[0.72rem] text-text-muted leading-[1.58] font-light">{s.body}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
