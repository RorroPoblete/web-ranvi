import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

interface SolutionCardProps {
  title: string
  description: string
  href: string
  icon?: React.ReactNode
  imageSrc?: string
  imageAlt?: string
}

export default function SolutionCard({ title, description, href, icon, imageSrc, imageAlt }: SolutionCardProps) {
  return (
    <Link 
      href={href}
      className="card group block focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
    >
      <div className="flex items-start justify-between mb-4">
        {imageSrc ? (
          <div className="relative w-20 h-20 flex-shrink-0">
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              fill
              className="object-contain"
            />
          </div>
        ) : icon ? (
          <div className="text-primary-500 group-hover:text-primary-600 transition-colors">
            {icon}
          </div>
        ) : null}
        <ArrowRightIcon className="h-6 w-6 text-navy-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all ml-auto" />
      </div>
      <h3 className="heading-3 mb-3 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      <p className="text-navy-600">
        {description}
      </p>
    </Link>
  )
}
