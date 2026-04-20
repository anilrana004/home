'use client'
import { FOOTER_LINKS } from '@/data/site'
import { scrollTo } from '@/lib/utils'

export default function Footer() {
  return (
    <>
      <footer
        role="contentinfo"
        className="bg-cream-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-[clamp(3rem,6vw,5rem)] px-[clamp(1.25rem,5vw,5rem)] border-t border-[rgba(58,37,24,0.14)]"
      >
        {/* Brand */}
        <div>
          <span className="font-serif text-[1.45rem] font-normal text-bark block tracking-[0.03em] mb-0.5">
            The Alpine Homestay
          </span>
          <span className="text-[0.58rem] tracking-[0.2em] uppercase text-bark/70">
            Jakhol · Uttarkashi · Uttarakhand
          </span>
          <p className="text-[0.78rem] leading-[1.72] text-text font-light max-w-[240px] mt-4">
            A wooden mountain retreat in apple orchards within Govind Wildlife
            Sanctuary — where the Himalayas breathe and time slows down.
          </p>
        </div>

        {/* Navigate */}
        <nav aria-label="Footer navigation — About">
          <div className="text-[0.6rem] tracking-[0.22em] uppercase text-bark/75 mb-[1.1rem] font-medium">
            Navigate
          </div>
          <div className="flex flex-col gap-[0.55rem]">
            {FOOTER_LINKS.navigate.map(({ label, href }, i) => (
              <button
                key={`${href}-${label}-${i}`}
                onClick={() => scrollTo(href)}
                className="text-[0.76rem] text-bark/85 hover:text-gold transition-colors duration-[280ms] text-left"
              >
                {label}
              </button>
            ))}
          </div>
        </nav>

        {/* Experiences */}
        <nav aria-label="Footer navigation — Experiences">
          <div className="text-[0.6rem] tracking-[0.22em] uppercase text-bark/75 mb-[1.1rem] font-medium">
            Experiences
          </div>
          <div className="flex flex-col gap-[0.55rem]">
            {FOOTER_LINKS.experiences.map(({ label, href }, i) => (
              <button
                key={`${href}-${label}-${i}`}
                onClick={() => scrollTo(href)}
                className="text-[0.76rem] text-bark/85 hover:text-gold transition-colors duration-[280ms] text-left"
              >
                {label}
              </button>
            ))}
          </div>
        </nav>

        {/* Reach Us */}
        <div>
          <div className="text-[0.6rem] tracking-[0.22em] uppercase text-bark/75 mb-[1.1rem] font-medium">
            Reach Us
          </div>
          <div className="flex flex-col gap-[0.55rem]">
            {FOOTER_LINKS.reach.map(({ label, href }, i) => (
              <a
                key={`${href}-${label}-${i}`}
                href={href}
                className="text-[0.76rem] text-bark/85 hover:text-gold transition-colors duration-[280ms]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <div className="bg-cream py-[1.1rem] px-[clamp(1.25rem,5vw,5rem)] flex flex-col sm:flex-row items-center justify-between gap-2 text-center border-t border-[rgba(58,37,24,0.12)]">
        <span className="text-[0.65rem] text-bark/80">
          © 2024 The Alpine Homestay, Jakhol. Listed on Homestays of India. All rights reserved.
        </span>
        <span className="text-[0.62rem] text-bark/70">
          Crafted with love for the mountains & people of Jakhol
        </span>
        <span className="text-[0.62rem] text-bark/60">
          Built by{' '}
          <a
            href="https://omnistack.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-bark transition-colors duration-[280ms] underline underline-offset-2"
          >
            omnistack.co.in
          </a>
        </span>
      </div>
    </>
  )
}
