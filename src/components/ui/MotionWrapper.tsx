'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, fadeIn } from '@/lib/motion'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  fade?: boolean // fade only (no translateY) — for heavy elements
}

export function Reveal({ children, delay = 0, className, fade }: RevealProps) {
  const reduced = useReducedMotion()
  const variants = fade ? fadeIn : fadeUp

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      custom={delay}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

interface StaggerProps {
  children: React.ReactNode
  className?: string
}

export function StaggerReveal({ children, className }: StaggerProps) {
  const reduced = useReducedMotion()
  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const reduced = useReducedMotion()
  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  )
}
