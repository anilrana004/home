import { Reveal } from './MotionWrapper'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface SectionHeaderProps {
  id?: string
  tag: string
  title: ReactNode // allows <em> inside
  tagVariant?: 'gold' | 'white' | 'moss'
  titleVariant?: 'dark' | 'white'
  centered?: boolean
  body?: string
  className?: string
}

const TAG_VARIANTS = {
  gold: 'text-gold',
  white: 'text-gold-light',
  moss: 'text-moss-light',
}
const TITLE_VARIANTS = {
  dark: 'text-bark',
  white: 'text-white',
}

export default function SectionHeader({
  id,
  tag,
  title,
  tagVariant = 'gold',
  titleVariant = 'dark',
  centered = false,
  body,
  className,
}: SectionHeaderProps) {
  return (
    <div id={id} className={cn(centered && 'text-center', className)}>
      <Reveal>
        <span className={cn('tag', TAG_VARIANTS[tagVariant])}>{tag}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn('h1', TITLE_VARIANTS[titleVariant])}
          dangerouslySetInnerHTML={{ __html: String(title) }}
        />
      </Reveal>
      <Reveal delay={0.08}>
        <div className={cn('dv', centered && 'dvc')} />
      </Reveal>
      {body && (
        <Reveal delay={0.16}>
          <p className={cn('body-txt', centered && 'max-w-xl mx-auto')}>{body}</p>
        </Reveal>
      )}
    </div>
  )
}
