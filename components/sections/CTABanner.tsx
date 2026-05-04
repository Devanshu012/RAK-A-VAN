import Link from 'next/link'
import { ArrowUpRight, Phone } from 'lucide-react'
import GSAPReveal from '@/components/ui/GSAPReveal'

export default function CTABanner() {
  return (
    <section className="bg-transparent py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-6 xl:px-10">
        <GSAPReveal y={30}>
          <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-10 lg:px-20 py-16 lg:py-24 text-center">

            {/* Ambient glow */}
            <div aria-hidden className="pointer-events-none absolute inset-0"
              style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(220,38,38,0.22) 0%, transparent 55%)' }} />

            {/* Subtle grid texture */}
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }} />

            <div className="relative">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/30 mb-5">
                Your Competitors Are Already Organised
              </p>

              <h2 className="font-bold text-[48px] lg:text-[68px] text-white leading-[0.95] tracking-[-0.03em] mb-5">
                RAK Your Van<br />
                <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                  Today
                </span>
              </h2>

              <p className="text-[15px] text-white/45 max-w-md mx-auto mb-10 leading-[1.7]">
                Stop wasting time hunting for tools. Join 10,000+ Australian tradies who already work smarter every single day.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link href="/shop" className="btn-grad">
                  Shop Now <ArrowUpRight size={16} strokeWidth={2.5} />
                </Link>
                <a href="tel:1300044145"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 text-white/65 text-[14px] font-medium hover:border-white/30 hover:text-white/90 transition-all duration-200">
                  <Phone size={14} /> 1300 044 145
                </a>
              </div>

              {/* Trust strip */}
              <div className="flex flex-wrap justify-center items-center gap-6 mt-10 pt-10 border-t border-white/[0.08]">
                {['10K+ Vans Fitted', 'Est. 2012', '100% Australian', 'Nationwide Delivery', 'Free Fitting Instructions'].map(item => (
                  <span key={item} className="text-[12px] font-medium text-white/30 tracking-wide">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </GSAPReveal>
      </div>
    </section>
  )
}
