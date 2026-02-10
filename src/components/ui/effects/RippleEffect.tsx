'use client'

import { memo, useEffect, useRef } from 'react'

interface RippleEffectProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export default memo(function RippleEffect({ children, className = '', as = 'div', ...props }: RippleEffectProps) {
  const elementRef = useRef<HTMLElement>(null)
  let Tag = as

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const createRipple = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = event.clientX - rect.left - size / 2
      const y = event.clientY - rect.top - size / 2

      const ripple = document.createElement('span')
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: #8e8e8e90;
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
        z-index: 1000;
      `

      if (!document.querySelector('#ripple-keyframes')) {
        const style = document.createElement('style')
        style.id = 'ripple-keyframes'
        style.textContent = `
          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
        `
        document.head.appendChild(style)
      }

      element.appendChild(ripple)

      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.remove()
        }
      }, 600)
    }

    element.addEventListener('click', createRipple)

    return () => {
      element.removeEventListener('click', createRipple)
    }
  }, [])

  return (
    <Tag ref={elementRef} className={`relative overflow-hidden ${className}`} {...props}>
      {children}
    </Tag>
  )
})
