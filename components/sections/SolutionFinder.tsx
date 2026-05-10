import Link from 'next/link'
import { ArrowUpRight, Zap, HardHat, Droplets, PaintBucket, Sparkles, Wrench } from 'lucide-react'
import GSAPReveal from '@/components/ui/GSAPReveal'
import GSAPStagger from '@/components/ui/GSAPStagger'

const TRADES = [
  { Icon: Zap,         label: 'Electrician',     desc: 'Cable trays, conduit holders, bin systems and precision tool mounts built around your daily kit.',      href: '/shop/trade-kits/electricians', bg: '#FEF3C7', color: '#D97706' },
  { Icon: HardHat,     label: 'Builder',          desc: 'Heavy-duty shelving, hardware bins and secure bracket mounts that handle a full builder\'s load.',       href: '/shop/trade-kits/builders',     bg: '#D1FAE5', color: '#059669' },
  { Icon: Droplets,    label: 'Plumber',          desc: 'Pipe holders, fittings trays, sealant storage and dedicated tool zones for faster on-site response.',    href: '/shop/trade-kits/plumbers',     bg: '#DBEAFE', color: '#2563EB' },
  { Icon: PaintBucket, label: 'Painter',          desc: 'Roller holders, paint-can trays, brush storage and drop-sheet compartments — perfectly placed.',         href: '/shop/trade-kits/painters',     bg: '#FCE7F3', color: '#DB2777' },
  { Icon: Sparkles,    label: 'Strata Cleaner',   desc: 'Chemical trays, mop and broom holders, equipment bins and secure dividers for every product you carry.', href: '/shop/trade-kits/strata',       bg: '#EDE9FE', color: '#7C3AED' },
  { Icon: Wrench,      label: 'General Services', desc: 'Fully modular, versatile kits that adapt to any trade or vehicle — the ultimate flexible foundation.',    href: '/shop/trade-kits/general',      bg: '#FFF7ED', color: '#EA580C' },
]

export default function SolutionFinder() {
  return (
    <section className="bg-[#F5F5F5] py-14 lg:py-20">
      <div className="w-full px-5">

        <GSAPReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div>
              <h2 className="text-[30px] sm:text-[42px] lg:text-[58px] font-bold text-gray-900 leading-[1.05] tracking-[-0.025em]">
                Built for<br />Your Trade
              </h2>
            </div>
            <p className="text-[15px] text-gray-500 leading-[1.7] max-w-[340px]">
              Pick your industry and discover the exact van storage setup engineered around your tools and workflow — no guesswork.
            </p>
          </div>
        </GSAPReveal>

        <GSAPStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.1}>
          {TRADES.map(({ Icon, label, desc, href, bg, color }) => (
            <Link
              key={label}
              href={href}
              className="group flex flex-col gap-5 p-7 bg-white rounded-2xl border border-[#EAEAEA] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: bg }}>
                <Icon size={20} style={{ color }} strokeWidth={1.75} />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="font-semibold text-[16px] text-gray-900">{label}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{desc}</p>
              </div>
              <div className="flex items-center gap-2 text-[13px] font-semibold text-red-600 group-hover:gap-3 transition-all duration-200 mt-auto pt-3 border-t border-gray-50">
                View Kit <ArrowUpRight size={14} />
              </div>
            </Link>
          ))}
        </GSAPStagger>

      </div>
    </section>
  )
}
