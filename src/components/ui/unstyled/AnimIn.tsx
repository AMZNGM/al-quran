'use client'

import { ElementType, ReactNode, useMemo } from 'react'
import { AnimatePresence, motion, HTMLMotionProps, useReducedMotion } from 'motion/react'

interface AnimInProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children?: ReactNode
  as?: ElementType
  className?: string
  delay?: number | string
  duration?: number | string
  exitDuration?: number | string
  once?: boolean
  spring?: boolean
  toDown?: boolean
  center?: boolean
  blur?: boolean
  reAnim?: any
}

export default function AnimIn({
  children,
  as = 'div',
  className = '',
  delay = 0.1,
  duration = 0.75,
  exitDuration,
  once = true,
  spring = false,
  toDown = false,
  center = false,
  blur = false,
  reAnim = true,
  ...props
}: AnimInProps) {
  const Tag = motion.create(as as any)
  const shouldReduceMotion = useReducedMotion()

  const animationConfig = useMemo(() => {
    const isReduced = !!shouldReduceMotion

    const baseTransition = {
      duration: Number(duration),
      delay: Number(delay),
      filter: { type: 'spring', stiffness: 90, damping: 15 },
      ...(spring ? { type: 'spring', stiffness: 300, damping: 20 } : {}),
    }

    return {
      transition: isReduced ? { duration: 0.3, delay: Number(delay) } : baseTransition,
      variants: {
        hidden: {
          opacity: 0,
          y: isReduced || center ? 0 : toDown ? -40 : 40,
          filter: !isReduced && blur ? 'blur(8px)' : 'blur(0px)',
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
        },
      },
    }
  }, [duration, delay, spring, center, toDown, blur, shouldReduceMotion])

  const animationKey = typeof reAnim === 'boolean' ? undefined : JSON.stringify(reAnim)

  return (
    <AnimatePresence mode="wait">
      {reAnim && (
        <Tag
          key={animationKey}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          variants={animationConfig.variants}
          transition={animationConfig.transition}
          viewport={{ once }}
          className={`relative ${className}`}
          style={{ position: 'relative', ...props.style }}
          {...props}
        >
          {children}
        </Tag>
      )}
    </AnimatePresence>
  )
}
