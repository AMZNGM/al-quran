'use client'

import Link from 'next/link'
import { memo, ButtonHTMLAttributes } from 'react'
import { useTranslation } from '@/translations/useTranslation'
import LetterSwap from '@/components/ui/text/LetterSwap'
import RippleEffect from '@/components/ui/effects/RippleEffect'

interface MainBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  className?: string
  to?: string
  href?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  look?: 'main' | 'outline' | 'ghost' | 'dark' | 'mono' | 'wideMono' | 'wideMonoDark'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  disabled?: boolean
  icon?: React.ElementType
  iconPosition?: 'left' | 'right'
  iconClassName?: string
  tKey?: string
}

export default memo(function MainBtn({
  children,
  className = '',
  tKey,

  to,
  href,
  onClick,

  look = 'main',
  size = 'md',
  fullWidth = false,
  disabled = false,

  icon: Icon,
  iconPosition = 'right',
  iconClassName = '',

  ...props
}: MainBtnProps) {
  const { t } = useTranslation()
  const content = tKey ? t(tKey) : children

  const baseStyles =
    'relative inline-flex items-center justify-center text-center gap-2 font-medium uppercase rounded-lg transition-colors duration-300 outline-none'

  const looks = {
    main: 'bg-text text-bg border-main hover:bg-main/50',
    outline: 'bg-transparent text-main border border-bg! hover:bg-bg/50 hover:text-text',
    ghost: 'bg-transparent text-text border-transparent hover:bg-main/10',
    dark: 'bg-bg text-text hover:bg-current/20 text-current',
    mono: 'bg-current/10 hover:bg-current/20 text-current',
    wideMono: 'bg-current/10 hover:bg-current/20 text-current font-semibold! tracking-[0.4em] whitespace-nowrap px-6 py-3',
    wideMonoDark: 'bg-bg text-text hover:bg-current/20 text-current font-semibold! tracking-[0.4em] whitespace-nowrap px-6 py-3',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const styles = `
    ${baseStyles}
    ${looks[look] || looks.main}
    ${sizes[size] || sizes.md}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ')

  const commonProps = {
    className: styles,
    ['aria-disabled']: disabled,
    ...props,
  }

  const InnerContent = () => (
    <>
      {Icon && iconPosition === 'left' && <Icon size={20} className={`fill-current ${iconClassName}`} />}
      <LetterSwap text={content} />
      {Icon && iconPosition === 'right' && <Icon size={20} className={`fill-current ${iconClassName}`} />}
    </>
  )

  if (to) {
    return (
      <Link href={to} {...(commonProps as any)}>
        <InnerContent />
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} {...(commonProps as any)} target="_blank" rel="noopener noreferrer">
        <InnerContent />
      </a>
    )
  }

  return (
    <RippleEffect className="relative w-fit flex rounded-lg">
      <button type="button" onClick={onClick} disabled={disabled} {...commonProps}>
        <InnerContent />
      </button>
    </RippleEffect>
  )
})
