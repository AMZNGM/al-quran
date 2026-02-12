'use client'

import Image from 'next/image'
import { motion, HTMLMotionProps } from 'motion/react'

interface ImageInProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  src: string
  alt: string
  sizes?: string
  className?: string
  divClassName?: string
  duration?: number
  delay?: number | string
  priority?: boolean
}

export default function ImageIn({
  src = '',
  alt = 'Image',
  sizes = '(max-width: 768px) 60vw, (max-width: 1024px) 40vw, 35vw',
  className = '',
  divClassName = '',
  duration = 0.3,
  delay = 0.3,
  priority = false,
  ...props
}: ImageInProps) {
  return (
    <motion.div
      {...props}
      initial={{ filter: 'blur(4px)' }}
      whileInView={{ filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration, delay: Number(delay) }}
      className={`relative ${divClassName} h-full bg-bg`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-center object-cover hover:scale-105 transition-transform duration-700 ${className}`}
      />
    </motion.div>
  )
}
