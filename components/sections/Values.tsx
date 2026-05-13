import { Award, Wrench, Zap, Shield, Truck, Users } from 'lucide-react'
import GSAPReveal from '@/components/ui/GSAPReveal'
import GSAPStagger from '@/components/ui/GSAPStagger'
import HorizontalScroll from '@/components/ui/HorizontalScroll'

const VALUES = [
  { Icon: Award,  title: 'Industry Pioneer',      desc: "Australia's first van shelving company since 2012 — setting the standard for the entire trade storage industry." },
  { Icon: Wrench, title: 'Trade-Specific Design', desc: 'Every kit is precision-engineered for your exact trade. No generic compromises — just solutions that work for you.' },
  { Icon: Zap,    title: 'Fully Modular System',  desc: 'Rearrange, expand or reduce your configuration any time. The system evolves and grows alongside your business.' },
  { Icon: Shield, title: 'Built to Last',         desc: 'Industrial-grade materials rated for Australian conditions and the toughest professional daily use, year after year.' },
  { Icon: Truck,  title: 'Nationwide Delivery',   desc: 'Fast, reliable tracked delivery to any address across all of Australia. Order today, on the road in days.' },
  { Icon: Users,  title: 'Distributor Network',   desc: 'A growing network of trusted local distributors who know your trade and provide expert on-the-ground support.' },
]

export default function Values() {
  return (
    <section className="bg-transparent py-14 lg:py-20">
      <div className="w-full px-5">

        <GSAPReveal>
          <div className="flex flex-col items-center mb-14">
            <h2 className="text-[26px] sm:text-[38px] lg:text-[58px] font-bold text-gray-900 leading-[1.1] tracking-[-0.025em] text-center">
              Why 10,000+ Tradies Trust Us
            </h2>
          </div>
        </GSAPReveal>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden">
          <HorizontalScroll>
            {VALUES.map(({ Icon, title, desc }) => (
              <div
                key={title}
                style={{ scrollSnapAlign: 'center', width: 'calc(100vw - 56px)' }}
                className="group flex flex-col gap-4 p-5 bg-white rounded-2xl border border-[#EAEAEA] shadow-sm flex-shrink-0"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                  <Icon size={17} className="text-red-500" strokeWidth={1.75} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-semibold text-[14px] text-gray-900">{title}</h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </HorizontalScroll>
        </div>

        {/* md+: original grid */}
        <GSAPStagger className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.1}>
          {VALUES.map(({ Icon, title, desc }) => (
            <div key={title}
              className="group flex flex-col gap-4 p-7 bg-white rounded-2xl border border-[#EAEAEA] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center transition-all duration-300 group-hover:bg-red-100 group-hover:scale-110">
                <Icon size={18} className="text-red-500" strokeWidth={1.75} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-[15px] text-gray-900">{title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </GSAPStagger>

      </div>
    </section>
  )
}
