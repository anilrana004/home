import { clsx, type ClassValue } from 'clsx'

/** Merge Tailwind classes safely */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

/** Smooth scroll to section with nav offset */
export function scrollTo(id: string) {
  const el = document.getElementById(id.replace('#', ''))
  if (!el) return
  const navH = 72
  const top = el.getBoundingClientRect().top + window.scrollY - navH
  window.scrollTo({ top, behavior: 'smooth' })
}

/** Track GA4 event */
export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window === 'undefined') return
  const w = window as Window & { gtag?: (...args: unknown[]) => void }
  w.gtag?.('event', action, { event_category: category, event_label: label, value })
}

/** Trek difficulty map */
export const DIFF_CLASS: Record<string, string> = {
  mod: 'diff-mod',
  hard: 'diff-hard',
  exp: 'diff-exp',
}
export const DIFF_LABEL: Record<string, string> = {
  mod: 'Moderate',
  hard: 'Hard',
  exp: 'Expert',
}
