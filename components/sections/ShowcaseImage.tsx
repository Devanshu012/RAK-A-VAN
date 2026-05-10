'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ShowcaseImage() {
  const imgRef     = useRef<HTMLDivElement>(null)
  const shimmerRef = useRef<HTMLDivElement>(null)
  const glowRef    = useRef<HTMLDivElement>(null)
  const cardRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Card slides up */
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: cardRef.current, start: 'top 90%', once: true },
        }
      )

      /* Image scales subtly */
      gsap.fromTo(
        imgRef.current,
        { scale: 1.06 },
        {
          scale: 1, duration: 1.4, ease: 'power2.out',
          scrollTrigger: { trigger: cardRef.current, start: 'top 90%', once: true },
        }
      )

      /* Shimmer sweeps across once */
      gsap.fromTo(
        shimmerRef.current,
        { x: '-100%' },
        {
          x: '200%', duration: 1.2, ease: 'power2.inOut', delay: 0.4,
          scrollTrigger: { trigger: cardRef.current, start: 'top 90%', once: true },
        }
      )

      /* Glow breathes on loop */
      gsap.to(glowRef.current, {
        opacity: 0.55, duration: 2.5, ease: 'sine.inOut', repeat: -1, yoyo: true,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="bg-transparent py-14 lg:py-20 overflow-hidden">
      <div className="w-full px-5">

        <h2 className="text-[28px] sm:text-[42px] lg:text-[58px] font-bold text-gray-900 leading-[1.05] tracking-[-0.025em] text-center mb-8 sm:mb-10">
          The Big Announcement
        </h2>

        <div ref={cardRef} className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#EAEAEA]">

          {/* Ambient glow */}
          <div
            ref={glowRef}
            aria-hidden
            className="pointer-events-none absolute -inset-6 opacity-30 blur-3xl z-0"
            style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(220,38,38,0.25) 0%, transparent 70%)' }}
          />

          {/* Image */}
          <div ref={imgRef} className="relative w-full z-10">
            <Image
              src="/hero-van/Screenshot 2026-05-05 011103.png"
              alt="RAK A VAN showcase"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Shimmer sweep */}
          <div
            ref={shimmerRef}
            aria-hidden
            className="pointer-events-none absolute inset-0 z-20"
            style={{
              background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.28) 50%, transparent 60%)',
              transform: 'translateX(-100%)',
            }}
          />

          {/* Vignette edges */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-20 rounded-3xl"
            style={{ boxShadow: 'inset 0 0 60px rgba(0,0,0,0.08)' }}
          />
        </div>

      </div>
    </section>
  )
}
