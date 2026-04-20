'use client'
import { motion } from 'framer-motion'
import { StaggerReveal, RevealItem } from '@/components/ui/MotionWrapper'
import SectionHeader from '@/components/ui/SectionHeader'
import { WHY_CARDS } from '@/data/site'
import { cardHover } from '@/lib/motion'

export default function WhyBest() {
  return (
    <section id="best" className="sec bg-white" aria-labelledby="best-heading">
      <SectionHeader
        tag="Why The Alpine Homestay"
        title='What makes this place <em class="italic text-moss">extraordinary</em>'
        centered
        body="There are many places to stay in the Himalayas. Here is why The Alpine Homestay stands apart — and why guests return."
        className="mb-12"
      />

      <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.4rem]">
        {WHY_CARDS.map((card) => (
          <RevealItem key={card.title}>
            <motion.article
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              className="p-8 bg-cream rounded-brand border-t-[3px] border-gold cursor-default group transition-colors duration-[280ms] hover:bg-bark"
            >
              <span className="text-[1.5rem] mb-[0.9rem] block" aria-hidden="true">
                {card.icon}
              </span>
              <h3 className="text-[0.78rem] font-medium text-bark tracking-[0.06em] uppercase mb-[0.55rem] transition-colors duration-[280ms] group-hover:text-white">
                {card.title}
              </h3>
              <p className="text-[0.76rem] leading-[1.7] text-text-muted font-light transition-colors duration-[280ms] group-hover:text-white">
                {card.body}
              </p>
            </motion.article>
          </RevealItem>
        ))}
      </StaggerReveal>
    </section>
  )
}
