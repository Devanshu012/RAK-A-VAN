import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Phone, Plus } from 'lucide-react'
import GSAPReveal from '@/components/ui/GSAPReveal'
import GSAPStagger from '@/components/ui/GSAPStagger'

const PRODUCTS = [
  {
    title: 'Frame Kits',
    desc: 'The structural backbone of every RAK A VAN system. Available in 420mm, 830mm, 1040mm and double-frame configurations with full fixing kits and mounting brackets.',
    tags: ['420mm', '830mm', '1040mm', 'Double Frames'],
    href: '/shop/frames',
    accent: '#16A34A',
    tagBg: 'bg-[#F0FDF4] border-green-200 text-green-700',
    image: '/hero-van/van_storage1.png',
  },
  {
    title: 'Bins & Accessories',
    desc: 'Plastic bins, shelf trays, cable trays, spare-parts trays, aluminium folding ramps and vapour barriers. Everything to complete your van setup to the very last detail.',
    tags: ['Plastic Bins', 'Shelf Trays', 'Cable Trays', 'Ramps'],
    href: '/shop/accessories',
    accent: '#2563EB',
    tagBg: 'bg-[#EFF6FF] border-blue-200 text-blue-700',
    image: '/hero-van/van_storage2.png',
  },
  {
    title: 'StorageTek',
    desc: 'Premium ABS cases, security cabinets, case frames and stackable louvered bin panels — the ultimate upgrade for serious professional operators.',
    tags: ['ABS Cases', 'Cabinets', 'Case Frames', 'Louvered Panels'],
    href: '/shop/storagetek',
    accent: '#7C3AED',
    tagBg: 'bg-[#F5F3FF] border-purple-200 text-purple-700',
    image: '/hero-van/backround3.png',
  },
  {
    title: 'Vapour Barriers',
    desc: 'Protect your van interior from condensation with custom-sized vapour barriers precision-engineered to fit RAK A VAN frame configurations exactly.',
    tags: ['Protection', 'Custom Fit', 'Van Interior'],
    href: '/shop/accessories',
    accent: '#D97706',
    tagBg: 'bg-[#FFFBEB] border-amber-200 text-amber-700',
    image: '/hero-van/By3.png',
  },
  {
    title: 'Trade Kits',
    desc: 'Industry-specific complete kits for every trade. Electricians, Builders, Plumbers, Painters, Strata Cleaners and General Services — everything to install, nothing to figure out.',
    tags: ['Electricians', 'Builders', 'Plumbers', 'Painters'],
    href: '/shop/trade-kits',
    accent: '#F97316',
    tagBg: 'bg-[#FFF7ED] border-orange-200 text-orange-700',
    image: '/hero-van/backround1.png',
  },
]

export default function Products() {
  return (
    <section className="bg-transparent py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 xl:px-10">

        <GSAPReveal>
          <div className="flex flex-col items-center gap-6 mb-14">
            <h2 className="text-[42px] lg:text-[58px] font-bold text-gray-900 leading-[1.0] tracking-[-0.025em] text-center whitespace-nowrap">
              Everything You Need for <span className="text-red-600">Your Van</span>
            </h2>
            <Link href="/shop" className="btn-ghost">
              Browse All <ArrowUpRight size={14} />
            </Link>
          </div>
        </GSAPReveal>

        <GSAPStagger className="flex flex-col gap-4" stagger={0.09}>
          {PRODUCTS.map(p => (
            <Link
              key={p.title}
              href={p.href}
              className="group flex flex-col md:flex-row bg-white rounded-2xl border border-[#EAEAEA] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Left — image (60%) */}
              <div className="relative md:w-[60%] h-56 md:h-64 overflow-hidden" style={{ background: '#F5F5F5' }}>
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>

              {/* Accent divider */}
              <div className="h-[3px] md:h-auto md:w-[3px] shrink-0" style={{ background: p.accent }} />

              {/* Right — content (40%) */}
              <div className="flex flex-col justify-between gap-5 p-7 md:p-10 md:w-[40%]">
                <div className="flex flex-col gap-3">
                  <h3 className="font-bold text-[22px] text-gray-900 group-hover:text-red-600 transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{p.desc}</p>
                </div>

                {/* Tag pills */}
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(tag => (
                    <span
                      key={tag}
                      className={`px-3 py-1.5 rounded-full border text-[12px] font-semibold ${p.tagBg}`}
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="w-8 h-8 rounded-full bg-gray-100 border border-[#EAEAEA] flex items-center justify-center text-gray-400 hover:bg-gray-200 transition-colors">
                    <Plus size={14} strokeWidth={2.5} />
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[13px] font-semibold text-red-600 group-hover:gap-3 transition-all duration-200 pt-4 border-t border-[#F5F5F5]">
                  View Range <ArrowUpRight size={13} />
                </div>
              </div>
            </Link>
          ))}

          {/* Helper card */}
          <div className="flex flex-col md:flex-row items-center gap-6 p-7 md:p-10 bg-red-50 rounded-2xl border border-red-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center text-3xl shrink-0">🤔</div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-semibold text-[16px] text-gray-900 mb-1">Not sure what fits your van?</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">Call us and our team will recommend the perfect setup for your trade and vehicle — free advice, no pressure.</p>
            </div>
            <a href="tel:1300044145" className="btn-grad shrink-0 text-[13px] py-3 px-5">
              <Phone size={14} /> Call Us Free
            </a>
          </div>
        </GSAPStagger>

      </div>
    </section>
  )
}
