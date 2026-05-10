'use client'
import { useState } from 'react'
import { Send } from 'lucide-react'

export default function EnquiryForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', trade: '', message: '' })

  return (
    <div className="bg-white rounded-2xl border border-[#EAEAEA] shadow-sm p-8 lg:p-10">
      {sent ? (
        <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
          <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center text-2xl">✓</div>
          <h3 className="font-semibold text-[20px] text-gray-900">Message Sent!</h3>
          <p className="text-[14px] text-gray-500">We'll get back to you within one business day.</p>
        </div>
      ) : (
        <form onSubmit={e => { e.preventDefault(); setSent(true) }} className="flex flex-col gap-5">
          <h3 className="font-bold text-[22px] text-gray-900">Send an Enquiry</h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { id: 'name',  label: 'Full Name',    type: 'text', ph: 'Your name',  req: true  },
              { id: 'phone', label: 'Phone Number', type: 'tel',  ph: 'Your phone', req: false },
            ].map(f => (
              <div key={f.id}>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">{f.label}</label>
                <input
                  type={f.type}
                  required={f.req}
                  placeholder={f.ph}
                  value={(form as any)[f.id]}
                  onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                  className="w-full border border-[#E8E6E1] rounded-xl px-4 py-3 text-[14px] text-gray-900 placeholder-gray-300 focus:outline-none focus:border-red-400 transition-colors bg-white"
                />
              </div>
            ))}
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">Email Address</label>
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full border border-[#E8E6E1] rounded-xl px-4 py-3 text-[14px] text-gray-900 placeholder-gray-300 focus:outline-none focus:border-red-400 transition-colors bg-white"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">Your Trade</label>
            <select
              value={form.trade}
              onChange={e => setForm({ ...form, trade: e.target.value })}
              className="w-full border border-[#E8E6E1] rounded-xl px-4 py-3 text-[14px] text-gray-900 focus:outline-none focus:border-red-400 transition-colors bg-white appearance-none"
            >
              <option value="">Select your trade...</option>
              {['Electrician', 'Builder', 'Plumber', 'Painter', 'Strata Cleaning', 'General Services', 'Other'].map(t => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">Message</label>
            <textarea
              rows={4}
              required
              placeholder="Tell us about your van and what you need..."
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              className="w-full border border-[#E8E6E1] rounded-xl px-4 py-3 text-[14px] text-gray-900 placeholder-gray-300 focus:outline-none focus:border-red-400 transition-colors bg-white resize-none"
            />
          </div>

          <button type="submit" className="btn-primary justify-center gap-2 w-full py-3.5">
            <Send size={15} /> Send Enquiry
          </button>
        </form>
      )}
    </div>
  )
}
