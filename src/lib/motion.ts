import type { Variants } from 'framer-motion'

/** Standard fade-up for section elements */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

/** Fade only (for images, heavy elements) */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut', delay },
  }),
}

/** Stagger container */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

/** Card lift on hover */
export const cardHover = {
  rest: { y: 0, boxShadow: '0 2px 12px rgba(58,37,24,0.06)' },
  hover: {
    y: -5,
    boxShadow: '0 20px 60px rgba(58,37,24,0.14)',
    transition: { duration: 0.28, ease: 'easeOut' },
  },
}

/** Scale on hover (buttons) */
export const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.2 } },
  tap: { scale: 0.98 },
}

/** Slide-in for mobile menu */
export const mobileMenu: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}
