'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  children: React.ReactNode
  className?: string
  stagger?: number
  duration?: number
  y?: number
  start?: string
}

export default function GSAPStagger({
  children,
  className = '',
  stagger = 0.12,
  duration = 0.75,
  y = 40,
  start = 'top 85%',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const items = container.querySelectorAll(':scope > *')

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start,
            once: true,
          },
        }
      )
    })

    return () => ctx.revert()
  }, [stagger, duration, y, start])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
