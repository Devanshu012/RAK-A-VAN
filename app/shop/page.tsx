import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shop – RAK A VAN | Van Shelving & Storage Systems',
  description: "Browse RAK A VAN's full range of van shelving, trade kits, frames, bins and StorageTek.",
}

const CATS = [
  { title: 'Trade Kits', href: '/shop/trade-kits', bg: '#FDF0EA', emoji: '🔌', badge: 'Most Popular',
    desc: 'Complete industry-specific kits for Electricians, Builders, Plumbers, Painters, Strata Cleaners and General Services.',
    subs: ['General Services','Builders','Electricians','Plumbers','Painters','Strata Cleaning'] },
  { title: 'Frame Kits', href: '/shop/frames', bg: '#EAF3DE', emoji: '🔩', badge: 'Core System',
    desc: 'The structural backbone of every RAK A VAN system. 420mm, 830mm, 1040mm and double frame options.',
    subs: ['420mm Frames','830mm Frames','1040mm Frames','Double Frames','Brackets & Fixings'] },
  { title: 'Bins & Accessories', href: '/shop/accessories', bg: '#E6F1FB', emoji: '📦', badge: 'Complete Your Kit',
    desc: 'Plastic bins, shelf trays, cable trays, spare parts trays, aluminium folding ramps, vapour barriers.',
    subs: ['Plastic Bins','Shelf Trays','Cable Trays','Spare Parts Trays','Ramps','Vapour Barriers'] },
  { title: 'StorageTek', href: '/shop/storagetek', bg: '#EEEDFE', emoji: '🗄️', badge: 'Premium',
    desc: 'Premium ABS cases, security cabinets, case frames and stackable bin panels for the ultimate setup.',
    subs: ['ABS Cases','Cabinets','Case Frames','Stackable Bins','Louvered Panels'] },
]

export default function ShopPage() {
  return (
    <>
      <section className="bg-white py-14 sm:py-20 border-b border-[#E8E6E1]">
        <div className="w-full px-5">
          <div className="section-divider"><span className="num">001</span><span className="line" /><span className="label">Shop</span></div>
          <h1 className="font-serif text-[36px] sm:text-[52px] lg:text-[72px] leading-[1.05] text-c-text mb-4">Our Full Range</h1>
          <p className="text-[14px] sm:text-[15px] text-c-muted max-w-md">Complete van storage solutions for every trade. Nationwide shipping across Australia.</p>
        </div>
      </section>

      <section className="bg-[#F8F7F4] py-16">
        <div className="w-full px-5 flex flex-col gap-4">
          {CATS.map(cat => (
            <div key={cat.title} className="c-card bg-white flex flex-col sm:flex-row gap-5 sm:gap-6">
              <div className="w-full sm:w-40 h-28 sm:h-36 rounded-xl flex items-center justify-center text-5xl shrink-0" style={{ background: cat.bg }}>
                {cat.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="tag-accent">{cat.badge}</span>
                </div>
                <h2 className="font-serif text-[24px] sm:text-3xl text-c-text mb-2">{cat.title}</h2>
                <p className="text-[13px] sm:text-[14px] text-c-muted mb-4 leading-relaxed">{cat.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cat.subs.map(s => <span key={s} className="tag">{s}</span>)}
                </div>
                <Link href={cat.href} className="btn-primary inline-flex w-full sm:w-auto justify-center sm:justify-start">
                  Shop {cat.title} <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
