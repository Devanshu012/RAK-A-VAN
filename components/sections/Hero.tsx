'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Phone } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroGif from '@/components/ui/HeroGif'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

gsap.registerPlugin(ScrollTrigger)

const TRADES = ['Electricians','Builders','Plumbers','Painters','Strata Cleaners','Locksmiths','Technicians','General Services']

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo('.h-image',    { opacity: 0, scale: 1.03 }, { opacity: 1, scale: 1, duration: 1.0 })
        .fromTo('.h-headline', { opacity: 0, y: 32 },       { opacity: 1, y: 0, duration: 0.75 }, '-=0.55')
        .fromTo('.h-body',     { opacity: 0, y: 20 },       { opacity: 1, y: 0, duration: 0.6  }, '-=0.4')
        .fromTo('.h-ctas',     { opacity: 0, y: 16 },       { opacity: 1, y: 0, duration: 0.55 }, '-=0.35')
        .fromTo('.h-stat',     { opacity: 0, y: 18 },       { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, '-=0.2')

      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: 40,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-white overflow-hidden">

      <div className="relative w-full px-5 pt-6 lg:pt-8">

        {/* ── HERO BANNER ── */}
        <div
          className="h-image relative w-full rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.18),0_0_0_1px_rgba(0,0,0,0.05)]"
          style={{ minHeight: 'clamp(400px, 68vh, 720px)', opacity: 0 }}
        >
          {/* Background image — parallax target, scaled up to absorb movement */}
          <div ref={imageRef} className="absolute inset-0 scale-[1.1]">
            <Image
              src="/hero-van/van_storage1.png"
              alt="RAK A VAN van shelving system"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0">
              <HeroGif />
            </div>
          </div>

          {/* Gradient — top-left dark for headline contrast */}
          <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-gray-950/80 via-gray-900/30 to-transparent" />
          {/* Gradient — bottom dark for description contrast */}
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/10 to-transparent" />

          {/* Content layer — fills full banner height */}
          <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-10 lg:p-12">

            {/* TOP ROW — headline + Est. badge */}
            <div className="flex items-start justify-between gap-4">
              <h1
                className="h-headline font-bold leading-[0.92] tracking-[-0.03em] text-white max-w-[75%] lg:max-w-[52%]"
                style={{ fontSize: 'clamp(32px, 4.8vw, 70px)', opacity: 0 }}
              >
                The Van<br />
                Storage<br />
                <span className="bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
                  System Built
                </span><br />
                for Tradies
              </h1>

              <div className="shrink-0 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/20 shadow-sm">
                <p className="text-[12px] font-semibold text-gray-700">Est. 2012</p>
              </div>
            </div>

            {/* BOTTOM ROW — shipping badge + description + CTAs */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-6">

              {/* Shipping badge — bottom-left */}
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.14)] self-start sm:self-end shrink-0">
                <div className="w-8 h-8 shrink-0 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                  <span className="text-white text-[13px] font-bold">✓</span>
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 leading-none mb-0.5">Nationwide shipping</p>
                  <p className="text-[13px] font-semibold text-gray-900 leading-none">All of Australia 🇦🇺</p>
                </div>
              </div>

              {/* Description + CTAs — bottom-right */}
              <div className="sm:text-right max-w-full sm:max-w-[380px]">
                <p
                  className="h-body text-[14px] sm:text-[15px] text-white/85 leading-[1.7] mb-5"
                  style={{ opacity: 0 }}
                >
                  Fully adaptable shelving, racking and storage engineered for every trade.
                  Trusted by 10,000+ Australian professionals since 2012.
                </p>
                <div className="h-ctas flex flex-wrap items-center sm:justify-end gap-3" style={{ opacity: 0 }}>
                  <Link href="/shop" className="btn-grad">
                    Shop Now <ArrowUpRight size={16} strokeWidth={2.5} />
                  </Link>
                  <a href="tel:1300044145" className="btn-ghost">
                    <Phone size={14} /> 1300 044 145
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── STATS — outside banner, below ── */}
        <div className="flex items-stretch justify-center divide-x divide-gray-100 pt-10 pb-2">
          {[
            { end: 10,  suffix: 'K+', label: 'Vans fitted' },
            { end: 12,  suffix: '+',  label: 'Years trusted' },
            { end: 100, suffix: '%',  label: 'Australian' },
          ].map(s => (
            <div key={s.label} className="h-stat flex flex-col items-center gap-1.5 px-4 sm:px-8 lg:px-14 first:pl-0" style={{ opacity: 0 }}>
              <span className="text-[32px] font-bold text-red-600 leading-none tracking-tight">
                <AnimatedCounter end={s.end} suffix={s.suffix} />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-400">{s.label}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Marquee */}
      <div className="mt-10 py-4 overflow-hidden bg-white">
        <div className="marquee-track">
          {[...TRADES, ...TRADES].map((t, i) => (
            <span key={i} className="px-8">
              <span className="text-[16px] font-medium text-gray-400 whitespace-nowrap">{t}</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  )
}
