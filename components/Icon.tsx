import {
  HeartIcon,
  CpuChipIcon,
  LifebuoyIcon,
  PuzzlePieceIcon,
  QueueListIcon,
  CreditCardIcon,
} from '@heroicons/react/24/outline'

interface IconProps {
  name: string
  className?: string
}

export default function Icon({ name, className = 'h-8 w-8' }: IconProps) {
  const icons: Record<string, React.ReactNode> = {
    health: <HeartIcon className={className} />,
    tech: <CpuChipIcon className={className} />,
    support: <LifebuoyIcon className={className} />,
    integration: <PuzzlePieceIcon className={className} />,
    queue: <QueueListIcon className={className} />,
    payment: <CreditCardIcon className={className} />,
  }

  return <>{icons[name] || null}</>
}
