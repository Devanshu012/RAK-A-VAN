import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import GSAPReveal from '@/components/ui/GSAPReveal'
import GSAPStagger from '@/components/ui/GSAPStagger'

const SETUPS = [
  {
    trade:  'Electrician',
    title:  'Complete Fit-Out for Response Electrical',
    desc:   'Full frame system with cable trays, plastic bins and tool holders. A messy work van transformed into a fully organised professional operation.',
    stats:  [{ val: '30+', label: 'hrs saved/wk' }, { val: '3×', label: 'faster prep' }, { val: '100%', label: 'satisfied' }],
    image:  '/hero-van/van_storage1.png',
    href:   '/shop/trade-kits/electricians',
    accent: '#F97316',
  },
  {
    trade:  'Builder',
    title:  'Heavy-Duty Storage for ProBuild NSW',
    desc:   'Double frame kit with heavy shelving and secure accessory mounts. Designed to handle tools, fixings and hardware on the busiest construction sites.',
    stats:  [{ val: '+38%', label: 'faster prep' }, { val: '−50%', label: 'lost tools' }, { val: '4×', label: 'efficiency' }],
    image:  '/hero-van/van_storage2.png',
    href:   '/shop/trade-kits/builders',
    accent: '#16A34A',
  },
  {
    trade:  'Plumber',
    title:  'Organised Fit-Out for Blue Line Plumbing',
    desc:   'Dedicated fittings trays, pipe holders and tool bins. Every part in its place, every job started faster with zero time wasted searching.',
    stats:  [{ val: '3×', label: 'lead response' }, { val: '+40%', label: 'jobs/week' }, { val: '24/7', label: 'readiness' }],
    image:  '/hero-van/backround1.png',
    href:   '/shop/trade-kits/plumbers',
    accent: '#2563EB',
  },
]

export default function CaseStudies() {
  return (
    <section className="bg-transparent py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 xl:px-10">

        <GSAPReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div>
              <h2 className="text-[42px] lg:text-[58px] font-bold text-gray-900 leading-[1.0] tracking-[-0.025em]">
                Featured<br />Van Setups
              </h2>
            </div>
            <Link href="/shop" className="btn-ghost self-start lg:self-auto">
              Browse All Products <ArrowUpRight size={14} />
            </Link>
          </div>
        </GSAPReveal>

        <GSAPStagger className="grid md:grid-cols-3 gap-5" stagger={0.12}>
          {SETUPS.map(s => (
            <Link key={s.trade} href={s.href}
              className="group flex flex-col bg-white rounded-2xl border border-[#EAEAEA] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Trade badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest text-white"
                  style={{ background: s.accent }}>
                  {s.trade}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-6 flex-1">
                <h3 className="font-semibold text-[16px] text-gray-900 leading-snug group-hover:text-red-600 transition-colors">
                  {s.title}
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed flex-1">{s.desc}</p>

                {/* Stat row */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#F5F5F5]">
                  {s.stats.map(st => (
                    <div key={st.label} className="flex flex-col">
                      <span className="font-bold text-[18px] text-red-600 leading-none">{st.val}</span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{st.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-[13px] font-semibold text-red-600 group-hover:gap-3 transition-all duration-200 pt-1">
                  Shop This Kit <ArrowUpRight size={13} />
                </div>
              </div>
            </Link>
          ))}
        </GSAPStagger>

      </div>
    </section>
  )
}
