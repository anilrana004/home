import { StaggerReveal, RevealItem } from '@/components/ui/MotionWrapper'
import SectionHeader from '@/components/ui/SectionHeader'
import { TESTIMONIALS } from '@/data/site'

export default function Testimonials() {
  return (
    <section id="testimonials" className="sec bg-cream" aria-labelledby="test-heading">
      <div className="max-w-[640px] mx-auto text-center mb-12">
        <SectionHeader
          tag="Guest Stories"
          title='Words from <em class="italic text-moss">fellow travellers</em>'
          centered
          body="Every visit leaves a story. Here are some from the people who have called The Alpine Homestay their mountain home."
          id="test-heading"
        />
      </div>

      <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]">
        {TESTIMONIALS.map((t) => (
          <RevealItem key={t.name}>
            <article className="bg-white p-[2.2rem] rounded-brand relative hover:shadow-md transition-shadow duration-[280ms]">
              <span className="absolute top-5 right-5 bg-[#F5E8C0] text-gold text-[0.58rem] tracking-[0.12em] uppercase px-[0.58rem] py-[0.2rem] rounded-full">
                Verified Stay
              </span>
              <div className="font-serif text-[4rem] leading-[0.55] text-[#F5E8C0] mb-[1rem]" aria-hidden="true">
                &ldquo;
              </div>
              <div className="text-gold text-[0.75rem] tracking-[0.1em] mb-[0.65rem]" aria-label={`5 out of 5 stars`}>
                ★★★★★
              </div>
              <blockquote className="font-serif text-[1.02rem] italic font-light leading-[1.75] text-text-muted mb-6">
                {t.text}
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-sand flex items-center justify-center text-[0.72rem] font-medium text-bark flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-[0.78rem] font-medium text-bark">{t.name}</div>
                  <div className="text-[0.66rem] text-text-muted">{t.location}</div>
                </div>
              </div>
            </article>
          </RevealItem>
        ))}
      </StaggerReveal>
    </section>
  )
}
