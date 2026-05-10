import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Distributors – RAK A VAN',
  description: 'Find your nearest RAK A VAN distributor across Australia.',
}

const STATES = [
  { state: 'NSW', items: [
    { name: 'RAK A VAN HQ', addr: '1/34–36 Plasser Crescent, Saint Mary\'s NSW 2760', phone: '1300 044 145' },
  ]},
  { state: 'VIC', items: [] },
  { state: 'QLD', items: [] },
  { state: 'WA',  items: [] },
  { state: 'SA',  items: [] },
]

export default function DistributorsPage() {
  return (
    <>
      <section className="bg-white py-14 sm:py-20 border-b border-[#E8E6E1]">
        <div className="w-full px-5">
          <div className="section-divider"><span className="num">001</span><span className="line" /><span className="label">Distributors</span></div>
          <h1 className="font-serif text-[36px] sm:text-[52px] lg:text-[72px] leading-[1.05] text-c-text mb-4">Find Your<br /><em className="not-italic text-c-accent">Local Distributor</em></h1>
          <p className="text-[14px] sm:text-[15px] text-c-muted max-w-md">A growing network of trusted local distributors who understand your trade.</p>
        </div>
      </section>

      <section className="bg-[#F8F7F4] py-16">
        <div className="w-full px-5 flex flex-col gap-10">
          {STATES.map(({ state, items }) => (
            <div key={state}>
              <div className="flex items-center gap-4 mb-4">
                <span className="font-serif text-4xl text-c-accent">{state}</span>
                <div className="flex-1 h-px bg-[#E8E6E1]" />
              </div>
              {items.length > 0 ? (
                <div className="grid md:grid-cols-3 gap-4">
                  {items.map(d => (
                    <div key={d.name} className="c-card bg-white flex flex-col gap-3">
                      <h3 className="font-semibold text-[15px] text-c-text">{d.name}</h3>
                      <p className="flex items-start gap-2 text-[13px] text-c-muted"><MapPin size={13} className="text-c-accent shrink-0 mt-0.5" />{d.addr}</p>
                      <a href={`tel:${d.phone.replace(/\s/g,'')}`} className="flex items-center gap-2 text-[13px] text-c-muted hover:text-c-accent transition-colors">
                        <Phone size={13} className="text-c-accent" />{d.phone}
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="c-card bg-white border-dashed text-[14px] text-c-muted">
                  Distributor enquiries welcome — <Link href="/contact" className="text-c-accent hover:underline">contact us</Link> to partner with us in {state}.
                </div>
              )}
            </div>
          ))}

          {/* Become a distributor */}
          <div className="bg-[#0D0D0D] rounded-3xl p-7 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-widest text-[#6B6860] mb-2">Join Our Network</p>
              <h2 className="font-serif text-[28px] sm:text-4xl text-white">Become a Distributor</h2>
              <p className="text-[#9B9890] text-sm mt-2">Interested in partnering with RAK A VAN in your area?</p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0 w-full md:w-auto justify-center">
              Get in Touch <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
