'use client'
import { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

export default function ContactSection() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', trade: '', message: '' })

  return (
    <section className="bg-[#F2F1EE] py-14 sm:py-24">
      <div className="w-full px-5">

        {/* Conicorn big CTA heading */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-[11px] font-medium uppercase tracking-widest text-c-subtle mb-3">Your Competitors Are Already Organised. Are You?</p>
          <h2 className="font-serif text-[36px] sm:text-5xl md:text-6xl lg:text-7xl text-c-text leading-none mb-4">
            RAK Your Van <em className="not-italic text-c-accent">Today</em>
          </h2>
          <p className="text-[14px] sm:text-[15px] text-c-muted">Stop wasting time hunting for tools. Start working smarter.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Form */}
          <div id="enquiry" className="c-card bg-white">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                <div className="w-14 h-14 rounded-full bg-c-accent-lt flex items-center justify-center text-2xl">✓</div>
                <h3 className="font-serif text-2xl text-c-text">Message Sent!</h3>
                <p className="text-[14px] text-c-muted">We'll get back to you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true) }} className="flex flex-col gap-4">
                <h3 className="font-semibold text-[16px] text-c-text mb-2">Send an Enquiry</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { id: 'name',  label: 'Full Name',    type: 'text',  ph: 'Your name',     req: true },
                    { id: 'phone', label: 'Phone Number', type: 'tel',   ph: 'Your phone',    req: false },
                  ].map(f => (
                    <div key={f.id}>
                      <label className="block text-[11px] uppercase tracking-widest text-c-subtle mb-1.5">{f.label}</label>
                      <input
                        type={f.type} required={f.req} placeholder={f.ph}
                        value={(form as any)[f.id]}
                        onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                        className="w-full border border-[#E8E6E1] rounded-xl px-4 py-3 text-[14px] text-c-text placeholder-c-subtle focus:outline-none focus:border-c-accent transition-colors bg-white"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-widest text-c-subtle mb-1.5">Email Address</label>
                  <input type="email" required placeholder="your@email.com"
                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-[#E8E6E1] rounded-xl px-4 py-3 text-[14px] text-c-text placeholder-c-subtle focus:outline-none focus:border-c-accent transition-colors bg-white" />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-widest text-c-subtle mb-1.5">Your Trade</label>
                  <select value={form.trade} onChange={e => setForm({ ...form, trade: e.target.value })}
                    className="w-full border border-[#E8E6E1] rounded-xl px-4 py-3 text-[14px] text-c-text focus:outline-none focus:border-c-accent transition-colors bg-white appearance-none">
                    <option value="">Select your trade...</option>
                    {['Electrician','Builder','Plumber','Painter','Strata Cleaning','General Services','Other'].map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-widest text-c-subtle mb-1.5">Message</label>
                  <textarea rows={4} required placeholder="Tell us about your van and what you need..."
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-[#E8E6E1] rounded-xl px-4 py-3 text-[14px] text-c-text placeholder-c-subtle focus:outline-none focus:border-c-accent transition-colors bg-white resize-none" />
                </div>

                <button type="submit" className="btn-primary justify-center gap-2 w-full py-3.5">
                  <Send size={15} /> Send Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-4">
            {[
              { icon: Phone,  label: 'Call Us',    val: '1300 044 145',           href: 'tel:1300044145' },
              { icon: Mail,   label: 'Email Us',   val: 'sales@rakavan.com.au',   href: 'mailto:sales@rakavan.com.au' },
              { icon: MapPin, label: 'Visit Us',   val: '1/34–36 Plasser Crescent, Saint Mary\'s NSW 2760', href: '#' },
            ].map(item => (
              <a key={item.label} href={item.href}
                className="c-card bg-white flex items-center gap-5 cursor-pointer group">
                <div className="w-12 h-12 rounded-xl bg-c-accent-lt flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-c-accent" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-c-subtle mb-0.5">{item.label}</p>
                  <p className="font-medium text-[15px] text-c-text group-hover:text-c-accent transition-colors">{item.val}</p>
                </div>
              </a>
            ))}

            {/* Trade selector quick links */}
            <div className="c-card bg-white">
              <p className="text-[11px] uppercase tracking-widest text-c-subtle mb-3">Shop by Trade</p>
              <div className="flex flex-wrap gap-2">
                {['Electrician', 'Builder', 'Plumber', 'Painter', 'Strata Cleaning', 'General Services'].map(t => (
                  <a key={t} href={`/shop/trade-kits/${t.toLowerCase().replace(' ', '-')}`}
                    className="tag hover:border-c-accent hover:text-c-accent-tx transition-colors cursor-pointer">
                    {t}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
