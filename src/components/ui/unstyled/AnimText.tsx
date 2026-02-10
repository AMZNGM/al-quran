'use client'

import { isValidElement, useMemo } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from '@/translations/useTranslation'

export default function AnimText({
  children,
  className = '',
  as = 'div',
  delay = 0,
  stagger = 0.008,
  ...props
}: {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  delay?: number
  stagger?: number
  [key: string]: any
}) {
  const prefersReducedMotion = useReducedMotion()
  const { t } = useTranslation()
  const isStrOrNum = typeof children === 'string' || typeof children === 'number'
  const isTText = isValidElement(children) && 'tKey' in (children.props as object)

  if (!isStrOrNum && !isTText) {
    const Tag = as
    return (
      <Tag className={`relative overflow-hidden leading-[1.05] ${className}`} {...props} style={{ ...props.style, position: 'relative' }}>
        <motion.span
          variants={{
            hidden: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: '1em' },
            visible: { opacity: 1, y: '0em' },
          }}
          transition={{
            duration: 0.5,
            ease: [0.2, 0.65, 0.3, 0.9],
            delay: Number(delay),
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-block relative [direction:inherit]"
          style={{ position: 'relative' }}
        >
          {children}
        </motion.span>
      </Tag>
    )
  }

  let text = ''

  if (isTText) {
    text = t((children.props as { tKey: string }).tKey)
  } else {
    text = String(children)
  }

  // legacy legacy check, theoretically text is always string here
  if (Array.isArray(text)) {
    text = (text as any[]).join(' ')
  }

  const Tag = as
  const words = useMemo(() => text.split(/(\s+)/), [text])

  return (
    <Tag style={{ ...props.style, position: 'relative' }} className={`relative overflow-hidden leading-[1.05] ${className}`} {...props}>
      <motion.span
        variants={{ visible: { transition: { delayChildren: delay, staggerChildren: stagger } } }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ position: 'relative' }}
        className="inline-block relative [direction:inherit]"
      >
        {words.map((word, i) => {
          if (word.trim() === '') {
            return <span key={i}>{word}</span>
          }

          return (
            <span key={i} className="inline-block ltr:overflow-hidden">
              <motion.span
                variants={{
                  hidden: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: '1em' },
                  visible: { opacity: 1, y: '0em' },
                }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          )
        })}
      </motion.span>
    </Tag>
  )
}
