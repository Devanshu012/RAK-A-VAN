import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: "About RAK A VAN – Australia's First Van Shelving Company",
  description: "Our story, values and commitment to Australian tradespeople since 2012.",
}

const MILESTONES = [
  { year: '2012', text: "RAK A VAN founded — Australia's first dedicated van shelving company." },
  { year: '2015', text: 'National distributor network established across all major Australian cities.' },
  { year: '2018', text: 'Launched the StorageTek range of premium ABS cases and cabinets.' },
  { year: '2021', text: 'Expanded trade-specific kit range to cover six major trade categories.' },
  { year: '2024', text: 'Over 10,000 vans fitted across Australia. Still growing every week.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 border-b border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-divider"><span className="num">001</span><span className="line" /><span className="label">About Us</span></div>
          <h1 className="font-serif text-[72px] leading-none text-c-text mb-6">
            Australia's First<br /><em className="not-italic text-c-accent">Van Shelving</em> Company
          </h1>
          <p className="text-[16px] text-c-muted max-w-xl leading-relaxed">
            Since 2012, RAK A VAN has been the go-to choice for Australian tradespeople who demand professional, durable and adaptable van storage. We didn't just enter the market — we created it.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#F8F7F4] py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="section-divider"><span className="num">002</span><span className="line" /><span className="label">Our Story</span></div>
            <h2 className="font-serif text-4xl text-c-text mb-6 leading-tight">Born from a tradie's need</h2>
            <div className="flex flex-col gap-4 text-[14px] text-c-muted leading-relaxed">
              <p>RAK A VAN was founded with a simple mission: give Australian tradespeople the van storage system they actually need. Before us, there was no dedicated solution built for the rigours of Australian trade work.</p>
              <p>Our unique modular design and extensive range of van shelving, van racking and accessories allow us to offer an endless variety of efficient, fully adaptable storage solutions for any type of trade and any type of vehicle.</p>
              <p>Thousands of builders, plumbers, electricians, locksmiths and technicians around Australia have chosen the unmatched durability and adaptability of the RAK A VAN system.</p>
            </div>
          </div>
          <div className="c-card bg-white">
            <h3 className="font-semibold text-[16px] text-c-text mb-5">Our Commitments</h3>
            <div className="flex flex-col gap-3">
              {[
                'Quality materials built for Australian conditions',
                'Trade-specific designs based on real tradesperson feedback',
                'Fully modular and adaptable systems',
                'Nationwide delivery and distributor support',
                'Step-by-step fitting instructions included',
                'Ongoing spare parts availability',
                'Responsive Australian-based customer service',
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="text-c-accent shrink-0 mt-0.5" />
                  <span className="text-[14px] text-c-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-divider"><span className="num">003</span><span className="line" /><span className="label">Our Journey</span></div>
          <h2 className="font-serif text-4xl text-c-text mb-10">12+ Years of Innovation</h2>
          <div className="flex flex-col gap-3">
            {MILESTONES.map(m => (
              <div key={m.year} className="c-card bg-[#F8F7F4] flex items-center gap-8 border-[#E8E6E1]">
                <span className="font-serif text-4xl text-c-accent shrink-0 w-20">{m.year}</span>
                <div className="w-px h-10 bg-[#E8E6E1] shrink-0" />
                <p className="text-[14px] text-c-muted">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0D0D0D] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif text-5xl text-white mb-4">Ready to Get Organised?</h2>
          <p className="text-[#6B6860] mb-8">Join thousands of Australian tradies who trust RAK A VAN.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/shop" className="btn-primary">Shop Now <ArrowUpRight size={15} /></Link>
            <Link href="/contact" className="flex items-center gap-2 px-6 py-3 rounded-pill border border-[#3a3a3a] text-white text-sm font-medium hover:border-[#666] transition-colors">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
