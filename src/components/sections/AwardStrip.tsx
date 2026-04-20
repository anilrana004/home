import { AWARD_ITEMS } from '@/data/site'

export default function AwardStrip() {
  return (
    <div
      id="award"
      role="complementary"
      aria-label="Awards and highlights"
      className="bg-bark py-4 px-[clamp(1.25rem,5vw,5rem)] flex items-center justify-center gap-[clamp(1rem,3vw,2.5rem)] flex-wrap overflow-x-auto no-scrollbar"
    >
      {AWARD_ITEMS.map((item, i) => (
        <div key={i} className="flex items-center gap-3 text-white/70 text-[clamp(0.7rem,1.2vw,0.8rem)] font-light whitespace-nowrap">
          <span aria-hidden="true" className="text-[0.95rem]">{item.icon}</span>
          {item.text}
        </div>
      ))}
    </div>
  )
}
