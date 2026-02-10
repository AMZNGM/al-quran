'use client'

import { useId } from 'react'

export default function SwitchBtn({
  checked,
  onChange,
  className = '',
  id,
  ...props
}: {
  checked?: boolean
  onChange?: (checked: boolean) => void
  className?: string
  id?: string
  [key: string]: any
}) {
  const generatedId = useId()
  const filterId = `goo-${generatedId}`
  const inputId = id || `switch-${generatedId}`

  return (
    <div className={`relative inline-block align-middle h-[1.875em] aspect-292/142 ${className}`}>
      <input
        type="checkbox"
        id={inputId}
        className="top-0 left-0 z-10 absolute w-full h-full m-0 appearance-none cursor-pointer"
        checked={checked}
        onChange={(e) => onChange && onChange(e.target.checked)}
        aria-label={props['aria-label'] || 'Toggle mode'}
        {...props}
      />
      <svg viewBox="0 0 292 142" className="w-full h-full overflow-visible">
        <path
          d="M71 142C31.7878 142 0 110.212 0 71C0 31.7878 31.7878 0 71 0C110.212 0 119 30 146 30C173 30 182 0 221 0C260 0 292 31.7878 292 71C292 110.212 260.212 142 221 142C181.788 142 173 112 146 112C119 112 110.212 142 71 142Z"
          className={`transition-[fill] duration-300 fill-bg`}
        />
        <rect rx="6" height="64" width="12" y="39" x="64" className="fill-main transition-[fill] duration-300" />
        <path
          d="M221 91C232.046 91 241 82.0457 241 71C241 59.9543 232.046 51 221 51C209.954 51 201 59.9543 201 71C201 82.0457 209.954 91 221 91ZM221 103C238.673 103 253 88.6731 253 71C253 53.3269 238.673 39 221 39C203.327 39 189 53.3269 189 71C189 88.6731 203.327 103 221 103Z"
          fillRule="evenodd"
          className="fill-main transition-[fill] duration-300"
        />
        <g filter={`url(#${filterId})`}>
          <rect
            fill="#fff"
            rx="29"
            height="58"
            width="116"
            y="42"
            x="13"
            className={`origin-center transition-transform duration-500 ${checked ? 'translate-x-37.5' : 'translate-x-0'}`}
          />
          <rect
            fill="#fff"
            rx="58"
            height="114"
            width="114"
            y="14"
            x="14"
            className={`backface-hidden origin-center transition-transform duration-300 ${checked ? 'scale-0' : 'scale-100'}`}
          />
          <rect
            fill="#fff"
            rx="58"
            height="114"
            width="114"
            y="14"
            x="164"
            className={`backface-hidden origin-center transition-transform duration-300 ${checked ? 'scale-100' : 'scale-0'}`}
          />
        </g>
        <defs>
          <filter id={filterId}>
            <feGaussianBlur stdDeviation="10" result="blur" in="SourceGraphic" />
            <feColorMatrix result="goo" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" mode="matrix" in="blur" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
