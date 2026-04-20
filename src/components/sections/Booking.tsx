'use client'
import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TARIFF_INCLUDES, CHILD_POLICY, SITE } from '@/data/site'
import { trackEvent } from '@/lib/utils'

interface FormState {
  name: string
  email: string
  phone: string
  city: string
  adults: string
  rooms: string
  child1: string
  child2: string
  checkin: string
  checkout: string
  message: string
}

const INIT: FormState = {
  name: '', email: '', phone: '', city: '',
  adults: '', rooms: '', child1: '', child2: '',
  checkin: '', checkout: '', message: '',
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

const today = new Date().toISOString().split('T')[0]

export default function Booking() {
  const [form, setForm] = useState<FormState>(INIT)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [status, setStatus] = useState<Status>('idle')

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: '' }))
  }

  const validate = useCallback(() => {
    const errs: Partial<FormState> = {}
    if (!form.name.trim())  errs.name  = 'Please enter your name'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Please enter a valid email'
    if (!form.phone.trim()) errs.phone = 'Please enter your mobile number'
    if (!form.checkin)      errs.checkin = 'Please select a check-in date'
    if (!form.checkout)     errs.checkout = 'Please select a check-out date'
    if (form.checkin && form.checkout && form.checkin >= form.checkout) {
      errs.checkout = 'Check-out must be after check-in'
    }
    return errs
  }, [form])

  const handleSubmit = useCallback(async () => {
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }

    setStatus('submitting')
    trackEvent('form_submit', 'booking', 'booking_request', 1)

    try {
      const res = await fetch(`https://formspree.io/f/${SITE.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: 'New Booking Request — The Alpine Homestay Jakhol',
          ...form,
        }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }, [form, validate])

  const inputClass = (k: keyof FormState) =>
    `w-full px-4 py-[0.78rem] border rounded-brand text-[0.82rem] text-text font-sans bg-white outline-none transition-all duration-[200ms] focus:border-gold focus:shadow-[0_0_0_3px_rgba(184,134,30,0.1)] ${errors[k] ? 'border-red-500' : 'border-[rgba(58,37,24,0.14)]'}`

  return (
    <section
      id="booking"
      className="relative bg-cream border-t border-[rgba(58,37,24,0.1)] overflow-hidden py-[clamp(4rem,8vw,7rem)] px-[clamp(1.25rem,5vw,5rem)]"
      aria-labelledby="booking-heading"
    >
      {/* Decorative glows — tuned for cream (matches moss / gold accents sitewide) */}
      <div
        className="absolute -top-36 -right-36 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(184,134,30,0.12), transparent 65%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(62,82,53,0.12), transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 grid md:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">

        {/* Left info — bark card aligns with buttons / footer palette */}
        <div className="bg-bark rounded-brand p-8 md:p-10 shadow-md border border-white/8 text-white">
          <span className="inline-block text-[0.65rem] tracking-[0.25em] uppercase font-medium mb-[0.85rem]">
            Reserve Your Stay
          </span>
          <h2 className="h1 h1-w mb-4" id="booking-heading">
            Begin your<br /><em>Himalayan journey</em>
          </h2>
          <div className="w-10 h-px mb-6 bg-white" />
          <p className="text-[0.87rem] leading-[1.84] font-light mb-8">
            Fill in your details and Rajnath will personally confirm your booking within 24 hours.
            Every guest is welcomed personally — whether solo trekker, family, or group expedition.
          </p>

          {/* Tariff card */}
          <div className="bg-white/5 border border-white/10 rounded-brand p-7 mb-5">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-serif text-[clamp(2.8rem,5vw,3.5rem)] font-light text-gold-light leading-none">₹1,600</span>
              <span className="text-[0.68rem] tracking-[0.1em] uppercase">/ person / night</span>
            </div>
            <div className="flex flex-col gap-[0.42rem] mt-4">
              {TARIFF_INCLUDES.map((item) => (
                <div key={item} className="text-[0.76rem] flex items-center gap-[0.55rem]">
                  <span className="text-gold-light text-[0.7rem]" aria-hidden="true">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Child policy */}
          <div className="bg-white/4 border border-white/8 rounded-brand p-5">
            <div className="text-[0.62rem] tracking-[0.15em] uppercase mb-[0.62rem]">Child Policy</div>
            {CHILD_POLICY.map((row) => (
              <div key={row} className="text-[0.75rem] mb-[0.28rem]">{row}</div>
            ))}
          </div>
          <p className="text-[0.65rem] mt-3 italic leading-[1.62]">
            *Tariff does not apply during festivals &amp; peak season. What you pay brings direct socio-economic
            benefit to locals. Be proud by not asking for a discount.
          </p>
        </div>

        {/* Form */}
        <div className="bg-warm rounded-brand p-[clamp(1.8rem,4vw,3rem)] shadow-md border border-[rgba(58,37,24,0.08)]">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
                role="alert"
                aria-live="polite"
              >
                <div className="text-[2.4rem] mb-3">🏔</div>
                <h3 className="font-serif text-[1.75rem] text-bark mb-2">Request Received!</h3>
                <p className="text-[0.82rem] text-text-muted leading-[1.68]">
                  Thank you for choosing The Alpine Homestay, Jakhol. Rajnath and the family will personally
                  confirm your booking within 24 hours. We look forward to welcoming you to the mountains.
                </p>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h3 className="font-serif text-[1.75rem] font-normal text-bark mb-1">Booking Request</h3>
                <p className="text-[0.74rem] text-text-muted mb-7 font-light">
                  We respond to every booking personally — usually within 24 hours.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-[0.35rem]">
                    <label htmlFor="f-name" className="text-[0.6rem] tracking-[0.14em] uppercase text-text-muted font-medium">
                      Full Name *
                    </label>
                    <input id="f-name" type="text" className={inputClass('name')} value={form.name} onChange={set('name')} placeholder="Your full name" autoComplete="name" required />
                    {errors.name && <span className="text-[0.65rem] text-red-600">{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-[0.35rem]">
                    <label htmlFor="f-email" className="text-[0.6rem] tracking-[0.14em] uppercase text-text-muted font-medium">
                      Email Address *
                    </label>
                    <input id="f-email" type="email" className={inputClass('email')} value={form.email} onChange={set('email')} placeholder="you@email.com" autoComplete="email" required />
                    {errors.email && <span className="text-[0.65rem] text-red-600">{errors.email}</span>}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-[0.35rem]">
                    <label htmlFor="f-phone" className="text-[0.6rem] tracking-[0.14em] uppercase text-text-muted font-medium">
                      Mobile Number *
                    </label>
                    <input id="f-phone" type="tel" className={inputClass('phone')} value={form.phone} onChange={set('phone')} placeholder="+91 XXXXX XXXXX" autoComplete="tel" required />
                    {errors.phone && <span className="text-[0.65rem] text-red-600">{errors.phone}</span>}
                  </div>

                  {/* City */}
                  <div className="flex flex-col gap-[0.35rem]">
                    <label htmlFor="f-city" className="text-[0.6rem] tracking-[0.14em] uppercase text-text-muted font-medium">
                      City / Town
                    </label>
                    <input id="f-city" type="text" className={inputClass('city')} value={form.city} onChange={set('city')} placeholder="e.g. Delhi, Mumbai" autoComplete="address-level2" />
                  </div>

                  {/* Adults */}
                  <SelectField id="f-adults" label="Adults" value={form.adults} onChange={set('adults')} options={['1','2','3','4','5','6','7+']} />

                  {/* Rooms */}
                  <SelectField id="f-rooms" label="Number of Rooms" value={form.rooms} onChange={set('rooms')} options={['1','2','3','4','5','6','7+']} />

                  {/* Child 0-6 */}
                  <SelectField id="f-child1" label="Children (0–6 yrs) — Free" value={form.child1} onChange={set('child1')} options={['0','1','2','3','4']} />

                  {/* Child 7-12 */}
                  <SelectField id="f-child2" label="Children (7–12 yrs) — 50%" value={form.child2} onChange={set('child2')} options={['0','1','2','3','4']} />

                  {/* Check-in */}
                  <div className="flex flex-col gap-[0.35rem]">
                    <label htmlFor="f-checkin" className="text-[0.6rem] tracking-[0.14em] uppercase text-text-muted font-medium">
                      Check-in Date *
                    </label>
                    <input id="f-checkin" type="date" className={inputClass('checkin')} value={form.checkin} onChange={set('checkin')} min={today} required />
                    {errors.checkin && <span className="text-[0.65rem] text-red-600">{errors.checkin}</span>}
                  </div>

                  {/* Check-out */}
                  <div className="flex flex-col gap-[0.35rem]">
                    <label htmlFor="f-checkout" className="text-[0.6rem] tracking-[0.14em] uppercase text-text-muted font-medium">
                      Check-out Date *
                    </label>
                    <input id="f-checkout" type="date" className={inputClass('checkout')} value={form.checkout} onChange={set('checkout')} min={form.checkin || today} required />
                    {errors.checkout && <span className="text-[0.65rem] text-red-600">{errors.checkout}</span>}
                  </div>

                  {/* Message — full width */}
                  <div className="sm:col-span-2 flex flex-col gap-[0.35rem]">
                    <label htmlFor="f-msg" className="text-[0.6rem] tracking-[0.14em] uppercase text-text-muted font-medium">
                      Message / Special Requests
                    </label>
                    <textarea
                      id="f-msg"
                      rows={3}
                      className="w-full px-4 py-[0.78rem] border border-[rgba(58,37,24,0.14)] rounded-brand text-[0.82rem] text-text font-sans bg-white outline-none resize-y focus:border-gold focus:shadow-[0_0_0_3px_rgba(184,134,30,0.1)] transition-all duration-[200ms] leading-[1.58]"
                      value={form.message}
                      onChange={set('message')}
                      placeholder="Trek arrangements, dietary needs, group requirements, accessibility needs..."
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={status === 'submitting'}
                  className="mt-5 w-full bg-bark text-white py-4 text-[0.7rem] tracking-[0.16em] uppercase rounded-brand font-medium font-sans transition-all duration-[280ms] hover:bg-gold hover:-translate-y-px hover:shadow-[0_6px_18px_rgba(184,134,30,0.28)] disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Booking Request →'}
                </button>

                {status === 'error' && (
                  <p className="text-center text-[0.72rem] text-red-500 mt-3">
                    Something went wrong. Please try again or contact us directly.
                  </p>
                )}

                <p className="text-[0.64rem] text-text-muted text-center mt-3 italic leading-[1.58]">
                  What you pay brings direct socio-economic benefit to the local community of Jakhol. Please be proud by not asking for a discount.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Contact details below form card — visible on mobile too */}
        <div className="md:col-start-2 flex flex-col sm:flex-row gap-4 mt-2">
          <a
            href="tel:+919528323602"
            className="flex items-center gap-3 flex-1 bg-white border border-[rgba(58,37,24,0.1)] rounded-brand px-5 py-4 hover:border-gold hover:shadow-sm transition-all duration-[280ms] group"
          >
            <span className="text-[1.1rem]" aria-hidden="true">📞</span>
            <div>
              <div className="text-[0.58rem] tracking-[0.14em] uppercase text-text-muted mb-[0.1rem]">Call / WhatsApp</div>
              <div className="text-[0.82rem] font-medium text-bark group-hover:text-gold transition-colors duration-[280ms]">
                +91 95283 23602
              </div>
            </div>
          </a>
          <a
            href="mailto:alpinehomestay52@gmail.com"
            className="flex items-center gap-3 flex-1 bg-white border border-[rgba(58,37,24,0.1)] rounded-brand px-5 py-4 hover:border-gold hover:shadow-sm transition-all duration-[280ms] group"
          >
            <span className="text-[1.1rem]" aria-hidden="true">✉️</span>
            <div>
              <div className="text-[0.58rem] tracking-[0.14em] uppercase text-text-muted mb-[0.1rem]">Email Us</div>
              <div className="text-[0.82rem] font-medium text-bark group-hover:text-gold transition-colors duration-[280ms]">
                alpinehomestay52@gmail.com
              </div>
            </div>
          </a>
        </div>
    </section>
  )
}

// ── Reusable select ──────────────────────────────────────────────────────────
function SelectField({
  id, label, value, onChange, options,
}: {
  id: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: string[]
}) {
  return (
    <div className="flex flex-col gap-[0.35rem]">
      <label htmlFor={id} className="text-[0.6rem] tracking-[0.14em] uppercase text-text-muted font-medium">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-[0.78rem] border border-[rgba(58,37,24,0.14)] rounded-brand text-[0.82rem] text-text font-sans bg-white outline-none cursor-pointer focus:border-gold focus:shadow-[0_0_0_3px_rgba(184,134,30,0.1)] transition-all duration-[200ms] appearance-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='7'%3E%3Cpath d='M1 1l4.5 4.5L10 1' stroke='%237A6E67' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 1rem center',
          paddingRight: '2.5rem',
        }}
      >
        <option value="">Select</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  )
}
