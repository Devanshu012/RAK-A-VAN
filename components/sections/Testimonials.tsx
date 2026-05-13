import { Star } from 'lucide-react'
import GSAPReveal from '@/components/ui/GSAPReveal'
import GSAPStagger from '@/components/ui/GSAPStagger'

const TESTIMONIALS = [
  { name: 'John R.',   company: 'Response Electrical', trade: 'Electrician',     stars: 5, initials: 'JR', bg: '#FFF7ED', color: '#C2410C',
    text: "From the moment you agreed to meet me on a day during the Christmas break when you weren't officially open to your expeditious quote and fitment — I have been impressed. In business, time is money, and you made sure I was on my way fast." },
  { name: 'Mark T.',   company: 'MT Plumbing Solutions', trade: 'Plumber',       stars: 5, initials: 'MT', bg: '#EFF6FF', color: '#1D4ED8',
    text: "Best investment I've made for my van. Everything has its place now. No more digging around for fittings on job sites. The system pays for itself in time saved every single week." },
  { name: 'Sarah K.',  company: 'ProBuild NSW',          trade: 'Builder',       stars: 5, initials: 'SK', bg: '#F0FDF4', color: '#15803D',
    text: "Incredibly sturdy and well thought out. I've had the system for 3 years and it still looks and works like new. The ability to rearrange it as my work changed was a big bonus." },
  { name: 'David R.',  company: 'Colour Masters',        trade: 'Painter',       stars: 5, initials: 'DR', bg: '#F5F3FF', color: '#6D28D9',
    text: "The painters kit is spot on. Everything fits exactly where you need it. My van looks professional when I open the doors — clients always comment on it. Worth every cent." },
  { name: 'Lisa M.',   company: 'Clean Pro Strata',      trade: 'Strata Cleaning', stars: 5, initials: 'LM', bg: '#FFF7ED', color: '#C2410C',
    text: "Finally a system designed for strata cleaning. All chemicals are secure, equipment is accessible and I can find everything instantly. A complete game changer for my workflow." },
  { name: 'Tom W.',    company: 'Rapid Response Services', trade: 'General',    stars: 5, initials: 'TW', bg: '#FFF1F2', color: '#BE123C',
    text: "The versatility of this system is unreal. I changed my kit around three times as my business grew and it just works every time. The RAK A VAN team was amazing throughout." },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} fill="#EF4444" className="text-red-500" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [featured, ...rest] = TESTIMONIALS

  return (
    <section className="bg-transparent py-14 lg:py-20">
      <div className="w-full px-5">

        <GSAPReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div>
              <h2 className="text-[30px] sm:text-[42px] lg:text-[58px] font-bold text-gray-900 leading-[1.05] tracking-[-0.025em]">
                What They&apos;re<br />Saying
              </h2>
            </div>
            <p className="text-[15px] text-gray-500 leading-[1.7] max-w-[340px]">
              Thousands of Australian tradies trust RAK A VAN to keep their vans organised and their businesses running at full speed.
            </p>
          </div>
        </GSAPReveal>

        {/* Featured large quote */}
        <GSAPReveal y={30} className="mb-5">
          <div className="relative bg-[#F5F5F5] rounded-2xl border border-[#EAEAEA] p-6 sm:p-8 lg:p-12 overflow-hidden">
            {/* Decorative large quote mark */}
            <span
              aria-hidden
              className="absolute top-4 right-8 font-serif text-[120px] leading-none text-gray-100 select-none pointer-events-none"
            >
              &ldquo;
            </span>

            <div className="relative max-w-3xl">
              <Stars count={featured.stars} />
              <p className="text-[15px] sm:text-[18px] lg:text-[22px] text-gray-700 leading-[1.6] italic mt-5 mb-7">
                &ldquo;{featured.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-[13px] shrink-0"
                  style={{ background: featured.bg, color: featured.color }}>
                  {featured.initials}
                </div>
                <div>
                  <p className="font-semibold text-[14px] text-gray-900">{featured.name}</p>
                  <p className="text-[12px] text-gray-400">{featured.company} · {featured.trade}</p>
                </div>
              </div>
            </div>
          </div>
        </GSAPReveal>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden -mx-5 px-5 overflow-x-auto no-scrollbar pb-2">
          <div className="flex flex-row gap-4 w-max">
            {rest.map(t => (
              <div
                key={t.name}
                style={{ scrollSnapAlign: 'start', width: 'min(78vw, 300px)' }}
                className="flex flex-col gap-4 p-5 bg-white rounded-2xl border border-[#EAEAEA] shadow-sm flex-shrink-0"
              >
                <Stars count={t.stars} />
                <p className="text-[12px] text-gray-500 leading-relaxed italic flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-2.5 pt-3 border-t border-[#F5F5F5]">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center font-semibold text-[11px] shrink-0"
                    style={{ background: t.bg, color: t.color }}>
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-[12px] text-gray-900">{t.name}</p>
                    <p className="text-[10px] text-gray-400 truncate">{t.company}</p>
                  </div>
                  <span className="ml-auto shrink-0 text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-100">
                    {t.trade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* md+: original grid */}
        <GSAPStagger className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.1}>
          {rest.map(t => (
            <div key={t.name}
              className="flex flex-col gap-4 p-6 bg-white rounded-2xl border border-[#EAEAEA] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <Stars count={t.stars} />
              <p className="text-[13px] text-gray-500 leading-relaxed italic flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#F5F5F5]">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-semibold text-[12px] shrink-0"
                  style={{ background: t.bg, color: t.color }}>
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-[13px] text-gray-900">{t.name}</p>
                  <p className="text-[11px] text-gray-400 truncate">{t.company}</p>
                </div>
                <span className="ml-auto shrink-0 text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-red-50 text-red-700 border border-red-100">
                  {t.trade}
                </span>
              </div>
            </div>
          ))}
        </GSAPStagger>

      </div>
    </section>
  )
}
