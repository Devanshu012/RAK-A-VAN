'use client'
import { useEffect, useRef } from 'react'

export default function HeroGif() {
  const imgRef = useRef<HTMLImageElement>(null)

  // Restart the GIF from frame 1 on every page mount
  useEffect(() => {
    const img = imgRef.current
    if (!img) return
    const src = img.src.split('?')[0]
    img.src = ''
    img.src = `${src}?t=${Date.now()}`
  }, [])

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src="/hero-van/hero.gif"
      alt="RAK A VAN in action"
      className="w-full h-full object-cover"
    />
  )
}
