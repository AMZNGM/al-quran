import { X } from 'lucide-react'
import RippleEffect from '@/components/ui/effects/RippleEffect'

export default function CloseBtn({ onClick, className = '' }: { onClick?: () => void; className?: string }) {
  return (
    <RippleEffect
      onClick={onClick}
      aria-label="Close button"
      className={`group relative overflow-hidden justify-center items-center grid bg-current/10 hover:bg-current/20 rounded-lg text-current transition-colors duration-300 p-2 cursor-pointer ${className}`}
    >
      <X size={20} className="group-hover:rotate-90 transition-transform duration-300 ease-out" />
    </RippleEffect>
  )
}
