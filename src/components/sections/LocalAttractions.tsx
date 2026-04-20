import { StaggerReveal, RevealItem } from '@/components/ui/MotionWrapper'
import SectionHeader from '@/components/ui/SectionHeader'
import { LOCAL_ATTRACTIONS } from '@/data/site'

export default function LocalAttractions() {
  return (
    <section id="local" className="sec bg-white" aria-labelledby="local-heading">
      <div className="max-w-[640px] mx-auto text-center mb-10">
        <SectionHeader
          tag="Day Excursions"
          title='Beyond the <em class="italic text-moss">homestay</em>'
          centered
          body="From sacred temples and alpine lakes to ancient apple orchards — the region around Jakhol offers extraordinary depth for curious travellers."
          id="local-heading"
        />
      </div>

      <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1rem]">
        {LOCAL_ATTRACTIONS.map((item) => (
          <RevealItem key={item.name}>
            <div className="p-5 border border-[rgba(58,37,24,0.1)] rounded-brand hover:border-gold hover:shadow-[0_4px_16px_rgba(184,134,30,0.1)] transition-all duration-[280ms] grid gap-[0.85rem] items-start group" style={{ gridTemplateColumns: '36px 1fr' }}>
              <div className="w-9 h-9 bg-cream rounded-full flex items-center justify-center text-[0.88rem] flex-shrink-0 mt-0.5 transition-colors duration-[280ms] group-hover:bg-[#F5E8C0]">
                {item.icon}
              </div>
              <div>
                <div className="text-[0.78rem] font-medium text-bark mb-[0.18rem]">{item.name}</div>
                <div className="text-[0.65rem] text-gold mb-[0.15rem]">{item.dist}</div>
                <div className="text-[0.7rem] text-text-muted leading-[1.56] font-light">{item.desc}</div>
              </div>
            </div>
          </RevealItem>
        ))}
      </StaggerReveal>
    </section>
  )
}
