'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GSAPReveal from '@/components/ui/GSAPReveal'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  { n: '01', title: 'Choose Your Trade Kit',  desc: 'Browse our industry-specific kits, each tailored with everything for a complete professional setup — no guesswork required.' },
  { n: '02', title: 'Customise Your Setup',   desc: 'Add frames, bins, trays and accessories to create the perfect storage configuration for your exact van and workflow.' },
  { n: '03', title: 'Order & We Deliver',     desc: 'Place your order online or via a local distributor. Fast, tracked delivery to any address across all of Australia.' },
  { n: '04', title: 'Fit in a Few Hours',     desc: 'Follow step-by-step instructions. Most installations are done within a single day with basic tools — no specialist needed.' },
  { n: '05', title: 'Work Smarter Every Day', desc: 'Everything in its place. Save time on every job, project a professional image and grow your business with a van that works.' },
]

const HIGHLIGHTS = [
  { val: 'Same Day', label: 'Order processing' },
  { val: '3–7 Days', label: 'Nationwide delivery' },
  { val: '1 Day',    label: 'Average installation time' },
]

export default function Process() {
  const lineRef  = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Animate connecting line drawing across */
      if (lineRef.current) {
        gsap.fromTo(lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: 'power2.inOut',
            transformOrigin: 'left center',
            scrollTrigger: { trigger: lineRef.current, start: 'top 82%', once: true },
          }
        )
      }

      /* Step circles + text stagger */
      if (stepsRef.current) {
        const circles = stepsRef.current.querySelectorAll('.step-circle')
        const texts   = stepsRef.current.querySelectorAll('.step-text')

        gsap.fromTo(circles,
          { opacity: 0, scale: 0.4 },
          { opacity: 1, scale: 1, duration: 0.5, stagger: 0.15, ease: 'back.out(1.7)',
            scrollTrigger: { trigger: stepsRef.current, start: 'top 82%', once: true } }
        )
        gsap.fromTo(texts,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out', delay: 0.2,
            scrollTrigger: { trigger: stepsRef.current, start: 'top 82%', once: true } }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="bg-transparent py-14 lg:py-20">
      <div className="w-full px-5">

        <GSAPReveal>
          <div className="flex flex-col items-center mb-16 lg:mb-20">
            <h2 className="text-[28px] sm:text-[42px] lg:text-[58px] font-bold text-gray-900 leading-[1.05] tracking-[-0.025em] text-center">
              From Order to Organised
            </h2>
          </div>
        </GSAPReveal>

        {/* Desktop timeline */}
        <div className="hidden lg:block relative mb-16">
          {/* Animated connecting line */}
          <div ref={lineRef} className="absolute top-[22px] left-[calc(10%+22px)] right-[calc(10%+22px)] h-px bg-gray-200 origin-left" />

          <div ref={stepsRef} className="grid grid-cols-5 gap-4">
            {STEPS.map((step, i) => (
              <div key={step.n} className="flex flex-col items-center text-center px-2 relative z-10">
                <div className="step-circle w-11 h-11 rounded-full bg-red-600 text-white font-bold text-[13px] flex items-center justify-center mb-6 shadow-[0_0_0_4px_#F5F5F5,0_0_0_8px_rgba(220,38,38,0.2)]">
                  {step.n}
                </div>
                <div className="step-text">
                  <button className="px-5 py-2.5 rounded-full bg-red-600 text-white font-semibold text-[15px] shadow-md hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer whitespace-nowrap">
                    {step.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden flex flex-col mb-12">
          {STEPS.map((step, i) => (
            <div key={step.n} className="flex gap-4">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-9 h-9 rounded-full bg-red-600 text-white font-bold text-[12px] flex items-center justify-center shadow-[0_0_0_3px_#F5F5F5,0_0_0_6px_rgba(220,38,38,0.2)]">
                  {step.n}
                </div>
                {i < STEPS.length - 1 && <div className="w-px flex-1 bg-gray-200 my-2 min-h-[32px]" />}
              </div>
              <div className="pb-8 mt-1 flex-1 min-w-0">
                <p className="px-4 py-2.5 rounded-full bg-red-600 text-white font-semibold text-[14px] shadow-md inline-block">
                  {step.title}
                </p>
                <p className="text-[12px] text-gray-400 leading-relaxed mt-2 pr-2">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights row */}
        <GSAPReveal y={24}>
          <div className="grid sm:grid-cols-3 gap-4">
            {HIGHLIGHTS.map(h => (
              <div key={h.label} className="flex items-center gap-4 px-6 py-5 bg-white rounded-2xl border border-[#EAEAEA] shadow-sm">
                <div className="w-1.5 h-9 rounded-full bg-gradient-to-b from-red-500 to-red-700 shrink-0" />
                <div>
                  <p className="font-bold text-[18px] text-gray-900 leading-none mb-1">{h.val}</p>
                  <p className="text-[11px] text-gray-400 uppercase tracking-widest">{h.label}</p>
                </div>
              </div>
            ))}
          </div>
        </GSAPReveal>

      </div>
    </section>
  )
}
