'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  children: React.ReactNode
  delay?: number
  duration?: number
  y?: number
  x?: number
  className?: string
}

export default function GSAPReveal({
  children,
  delay = 0,
  duration = 0.8,
  y = 40,
  x = 0,
  className = '',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y, x },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        }
      )
    })

    return () => ctx.revert()
  }, [delay, duration, y, x])

  return (
    <div ref={ref} style={{ opacity: 0 }} className={className}>
      {children}
    </div>
  )
}
