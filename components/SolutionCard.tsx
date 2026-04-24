import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

type Variant = 'light' | 'dark' | 'primary' | 'teal'

interface SolutionCardProps {
  eyebrow?: string
  title: string
  lead?: string
  description?: string
  href: string
  cta?: string
  icon?: React.ReactNode
  variant?: Variant
  size?: 'sm' | 'md' | 'lg'
}

const variantClass: Record<Variant, string> = {
  light: 'tile',
  dark: 'tile-dark',
  primary: 'tile-primary',
  teal: 'tile-teal',
}

const sizeClass: Record<NonNullable<SolutionCardProps['size']>, string> = {
  sm: 'min-h-[280px]',
  md: 'min-h-[360px]',
  lg: 'min-h-[480px]',
}

export default function SolutionCard({
  eyebrow,
  title,
  lead,
  description,
  href,
  cta = 'Conocer más',
  icon,
  variant = 'light',
  size = 'md',
}: SolutionCardProps) {
  const dark = variant !== 'light'
  return (
    <Link
      href={href}
      className={`group block ${variantClass[variant]} ${sizeClass[size]} flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2`}
    >
      <div>
        {eyebrow && <p className="tile-eyebrow">{eyebrow}</p>}
        <h3 className="tile-title">{title}</h3>
        {lead && <p className={`tile-lead ${dark ? 'text-white/90' : 'text-ink-600'}`}>{lead}</p>}
        {description && (
          <p className={`mt-4 text-[15px] leading-relaxed ${dark ? 'text-white/80' : 'text-ink-500'}`}>
            {description}
          </p>
        )}
      </div>
      <div className="flex items-center justify-between mt-8">
        <span
          className={`inline-flex items-center gap-1.5 font-medium text-[14px] ${
            dark ? 'text-white' : 'text-primary-500 group-hover:text-primary-600'
          } transition-colors`}
        >
          {cta}
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
        {icon && (
          <div className={`${dark ? 'text-white/80' : 'text-ink-300'}`}>
            {icon}
          </div>
        )}
      </div>
    </Link>
  )
}
