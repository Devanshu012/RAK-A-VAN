import { Metadata } from 'next'
import ContactSection from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Contact RAK A VAN – Get a Quote',
  description: 'Call 1300 044 145 or send an enquiry. Australia-wide van shelving and storage solutions.',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-white py-14 sm:py-20 border-b border-[#E8E6E1]">
        <div className="w-full px-5">
          <div className="section-divider"><span className="num">001</span><span className="line" /><span className="label">Contact</span></div>
          <h1 className="font-serif text-[36px] sm:text-[52px] lg:text-[72px] leading-[1.05] text-c-text mb-4">
            Let's Get Your<br /><em className="not-italic text-c-accent">Van Sorted</em>
          </h1>
          <p className="text-[14px] sm:text-[15px] text-c-muted max-w-md">Quote, product question or distributor lookup — we're here to help.</p>
        </div>
      </section>
      <ContactSection />
    </>
  )
}
