import Image from 'next/image'

interface PartnerBadgeProps {
  name: string
  role: string
  logo?: string
  logoAlt?: string
}

export default function PartnerBadge({ name, role, logo, logoAlt }: PartnerBadgeProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-navy-200 hover:shadow-md transition-shadow">
      {logo ? (
        <div className="relative w-32 h-20 mb-4">
          <Image
            src={logo}
            alt={logoAlt || `${name} logo`}
            fill
            className="object-contain"
          />
        </div>
      ) : (
        <div className="w-32 h-20 mb-4 bg-gradient-to-br from-primary-100 to-primary-200 rounded flex items-center justify-center">
          <span className="text-primary-600 font-semibold text-sm text-center px-2">
            {name}
          </span>
        </div>
      )}
      <p className="text-sm text-navy-500 mb-1">{role}</p>
      <p className="font-semibold text-navy-900">{name}</p>
    </div>
  )
}
