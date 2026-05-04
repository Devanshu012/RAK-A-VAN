'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  decimals?: number
}

export default function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 2.2,
  decimals = 0,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState('0')
  const fired = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        if (fired.current) return
        fired.current = true
        const obj = { val: 0 }
        gsap.to(obj, {
          val: end,
          duration,
          ease: 'power2.out',
          onUpdate: () =>
            setDisplay(
              decimals > 0 ? obj.val.toFixed(decimals) : Math.round(obj.val).toString()
            ),
        })
      },
    })

    return () => st.kill()
  }, [end, duration, decimals])

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  )
}
