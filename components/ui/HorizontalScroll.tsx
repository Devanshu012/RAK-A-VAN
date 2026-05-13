'use client'
import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Props {
  children: React.ReactNode
}

export default function HorizontalScroll({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd,   setAtEnd]   = useState(false)

  const sync = () => {
    const el = ref.current
    if (!el) return
    setAtStart(el.scrollLeft < 8)
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 8)
  }

  useEffect(() => {
    sync()
    const el = ref.current
    el?.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    return () => {
      el?.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [])

  const pan = (dir: 1 | -1) => {
    const el = ref.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.72, behavior: 'smooth' })
  }

  return (
    <div className="relative -mx-5">
      {/* ── scroll track ── */}
      <div ref={ref} className="overflow-x-auto no-scrollbar px-7 pb-3">
        <div className="flex gap-3 w-max">
          {children}
        </div>
      </div>

      {/* ── left arrow ── */}
      <button
        onClick={() => pan(-1)}
        aria-label="Scroll left"
        className={`
          absolute left-2 top-1/2 -translate-y-1/2 z-20
          w-9 h-9 rounded-full
          bg-black/65 backdrop-blur-sm
          flex items-center justify-center text-white
          shadow-[0_2px_12px_rgba(0,0,0,0.35)]
          transition-all duration-200
          ${atStart ? 'opacity-0 pointer-events-none scale-75' : 'opacity-100 scale-100'}
        `}
      >
        <ChevronLeft size={17} strokeWidth={2.5} />
      </button>

      {/* ── right arrow ── */}
      <button
        onClick={() => pan(1)}
        aria-label="Scroll right"
        className={`
          absolute right-2 top-1/2 -translate-y-1/2 z-20
          w-9 h-9 rounded-full
          bg-black/65 backdrop-blur-sm
          flex items-center justify-center text-white
          shadow-[0_2px_12px_rgba(0,0,0,0.35)]
          transition-all duration-200
          ${atEnd ? 'opacity-0 pointer-events-none scale-75' : 'opacity-100 scale-100'}
        `}
      >
        <ChevronRight size={17} strokeWidth={2.5} />
      </button>
    </div>
  )
}
