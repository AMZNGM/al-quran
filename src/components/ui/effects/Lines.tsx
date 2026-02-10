'use client'

import { motion } from 'motion/react'

export function MotionLine({
  className = '',
  delay = 0.3,
  from = 'right',
  once = true,
  useWidth = false,
  style,
  ...props
}: {
  className?: string
  delay?: number
  from?: 'left' | 'right' | 'center'
  once?: boolean
  useWidth?: boolean
} & Omit<React.ComponentProps<typeof motion.div>, 'className' | 'initial' | 'whileInView' | 'transition' | 'viewport'>) {
  const originX = from === 'left' ? 0 : from === 'right' ? 1 : 0.5

  return (
    <motion.div
      initial={useWidth ? { width: '0%' } : { scaleX: 0 }}
      whileInView={useWidth ? { width: '100%' } : { scaleX: 1 }}
      transition={{ duration: 0.9, delay, ease: [0.36, 0.34, 0.69, 1.01] }}
      viewport={{ once }}
      style={{ originX, ...style }}
      className={`relative h-0.5 bg-main my-2 mix-blend-difference ${className}`}
      {...props}
    />
  )
}

export function SoftLine({ className = '', delay = 0.3 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 1, delay }}
      viewport={{ once: true }}
      className={`relative w-full h-px bg-linear-to-r from-transparent via-main to-transparent my-8 ${className}`}
    />
  )
}
