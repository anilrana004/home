import { Reveal } from '@/components/ui/MotionWrapper'
import SectionHeader from '@/components/ui/SectionHeader'
import { TREKS, TREK_HIGHLIGHTS } from '@/data/site'
import { DIFF_CLASS, DIFF_LABEL } from '@/lib/utils'

export default function Treks() {
  return (
    <section id="treks" className="sec bg-cream" aria-labelledby="treks-heading">
      {/* Header */}
      <div className="max-w-[640px] mx-auto text-center mb-12">
        <SectionHeader
          tag="Himalayan Trails"
          title='Treks from <em class="italic text-moss">your doorstep</em>'
          centered
          body="Jakhol is the gateway to some of Uttarakhand's most spectacular and least-crowded trekking routes. Rajnath arranges guided treks with local youth guides who know every trail by heart."
          id="treks-heading"
        />
      </div>

      {/* Two columns */}
      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* Trek table */}
        <Reveal delay={0.1}>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full border-collapse" role="table" aria-label="Available treks with difficulty levels">
              <thead>
                <tr>
                  {['Trek Name', 'Difficulty', 'Base'].map((h) => (
                    <th
                      key={h}
                      scope="col"
                      className="text-[0.6rem] tracking-[0.18em] uppercase text-text-light px-[0.9rem] py-[0.5rem] text-left border-b border-[rgba(58,37,24,0.18)]"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TREKS.map((t) => (
                  <tr key={t.name} className="border-b border-[rgba(58,37,24,0.1)] hover:bg-white transition-colors duration-[200ms]">
                    <td className="px-[0.9rem] py-[0.78rem] text-[0.78rem] font-normal text-bark">{t.name}</td>
                    <td className="px-[0.9rem] py-[0.78rem]">
                      <span className={DIFF_CLASS[t.diff]}>{DIFF_LABEL[t.diff]}</span>
                    </td>
                    <td className="px-[0.9rem] py-[0.78rem] text-[0.78rem] text-text-mid">{t.base}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pills */}
          <div className="mt-6">
            <div className="text-[0.6rem] tracking-[0.2em] uppercase text-text-light mb-[0.65rem]">
              All trekking experiences
            </div>
            <div className="flex flex-wrap gap-[0.42rem]" role="list">
              {TREKS.map((t) => (
                <span key={t.name} role="listitem" className="tpill">{t.name}</span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Highlights */}
        <div>
          <Reveal delay={0.1}>
            <span className="tag">Trek Highlights</span>
          </Reveal>
          <Reveal delay={0.18}>
            <h2 className="h2 mb-[0.75rem]">
              Why these trails <em>are legendary</em>
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="dv" />
          </Reveal>
          <Reveal delay={0.24}>
            <p className="body-txt mb-5">
              Uttarkashi contains some of North India&apos;s finest and least commercial trekking routes. Unlike
              overcrowded Roopkund trails, these valleys see far fewer visitors — making the experience genuinely
              wild and profoundly peaceful.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col">
              {TREK_HIGHLIGHTS.map((h, i) => (
                <div
                  key={i}
                  className="grid gap-[0.9rem] items-start py-[0.95rem] border-b border-[rgba(58,37,24,0.1)] last:border-b-0"
                  style={{ gridTemplateColumns: '32px 1fr' }}
                >
                  <div className="w-8 h-8 bg-cream rounded-full flex items-center justify-center text-[0.8rem] flex-shrink-0 mt-0.5">
                    {h.icon}
                  </div>
                  <div>
                    <div className="text-[0.78rem] font-medium text-bark mb-[0.18rem]">{h.title}</div>
                    <div className="text-[0.73rem] text-text-muted leading-[1.6] font-light">{h.body}</div>
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
