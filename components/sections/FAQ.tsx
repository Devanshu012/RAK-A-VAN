'use client'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  { q: 'What types of vans are compatible?', a: 'Our systems fit Ford Transit, Mercedes Sprinter, VW Transporter, Renault Trafic, Fiat Ducato and most common trade vans. Contact us with your van model for a specific recommendation.' },
  { q: 'Can I install the system myself?',   a: 'Yes. RAK A VAN systems are designed for self-installation. Every kit includes step-by-step fitting instructions. Most installs take a few hours with basic tools. You can also download our fitting guide from the documents section.' },
  { q: 'How long does delivery take?',       a: 'We ship nationwide across Australia. Standard delivery is 3–7 business days depending on location. Express options are available for urgent orders.' },
  { q: 'Can I customise my kit later?',      a: 'Absolutely. The system is fully modular. Buy additional frames, bins, trays and accessories any time to expand or reconfigure your setup as your business grows.' },
  { q: 'Do you have local distributors?',   a: 'Yes, we have a growing network across Australia. Visit our Distributors page to find your nearest location, or call us on 1300 044 145.' },
  { q: 'Are replacement parts available?',  a: 'Yes — we stock a full range of spare parts, fixing kits and individual components. Contact us and our team will source exactly what you need.' },
  { q: 'What trade-specific kits do you offer?', a: 'We offer kits for Electricians, Builders, Plumbers, Painters, Strata Cleaners and General Services. Each is purpose-built for the tools and workflow of that specific trade.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-white py-14 sm:py-24">
      <div className="w-full px-5">

        <div className="section-divider">
          <span className="num">007</span>
          <span className="line" />
          <span className="label">FAQs</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16">
          {/* Left */}
          <div>
            <h2 className="font-serif text-[30px] sm:text-[40px] lg:text-5xl text-c-text leading-tight mb-4">Common Questions</h2>
            <p className="text-[14px] text-c-muted leading-relaxed mb-8">
              Can't find what you're looking for? Call us directly — our team knows the products inside out.
            </p>
            <a href="tel:1300044145" className="btn-primary">
              Call 1300 044 145
            </a>
          </div>

          {/* Right — accordion */}
          <div className="flex flex-col divide-y divide-[#E8E6E1]">
            {FAQS.map((faq, i) => (
              <div key={i} className="py-4">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left"
                >
                  <span className={`text-[15px] font-medium transition-colors ${open === i ? 'text-c-accent' : 'text-c-text'}`}>
                    {faq.q}
                  </span>
                  <div className="w-7 h-7 rounded-full border border-[#E8E6E1] flex items-center justify-center shrink-0 transition-colors" style={open === i ? { borderColor: '#E8540A', background: '#FDF0EA' } : {}}>
                    {open === i
                      ? <Minus size={12} className="text-c-accent" />
                      : <Plus size={12} className="text-c-muted" />
                    }
                  </div>
                </button>
                {open === i && (
                  <p className="mt-3 text-[14px] text-c-muted leading-relaxed pr-12">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
