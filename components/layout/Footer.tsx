import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

const LINKS = {
  'Our Range': [
    { label: 'Trade Kits',       href: '/shop/trade-kits' },
    { label: 'Frame Kits',       href: '/shop/frames' },
    { label: 'Bins & Accessories', href: '/shop/accessories' },
    { label: 'StorageTek',       href: '/shop/storagetek' },
  ],
  'Company': [
    { label: 'About Us',         href: '/about' },
    { label: 'Distributors',     href: '/distributors' },
    { label: 'Contact Us',       href: '/contact' },
  ],
  'Resources': [
    { label: 'Quick Reference Guide', href: '/documents/quick-reference-guide' },
    { label: 'Fitting Instructions',  href: '/documents/fitting-instructions' },
    { label: 'Terms of Service',      href: '/documents/terms-of-service' },
    { label: 'Privacy Policy',        href: '/documents/privacy-policy' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] border-t border-[#EAEAEA]">
      <div className="w-full px-5 py-16 lg:py-20">

        {/* Links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand column */}
          <div>
            <Link href="/" className="inline-flex mb-5">
              <Image
                src="/logo.png/icon.png"
                alt="RAK A VAN"
                width={130} height={38}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-[13px] text-gray-500 leading-relaxed mb-6">
              Australia&apos;s first van shelving company, trusted by thousands of tradespeople since 2012.
            </p>
            <div className="flex flex-col gap-2.5">
              <a href="tel:1300044145"
                className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-red-600 transition-colors">
                <Phone size={13} className="text-red-600 shrink-0" /> 1300 044 145
              </a>
              <a href="mailto:sales@rakavan.com.au"
                className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-red-600 transition-colors">
                <Mail size={13} className="text-red-600 shrink-0" /> sales@rakavan.com.au
              </a>
              <p className="flex items-start gap-2 text-[13px] text-gray-500">
                <MapPin size={13} className="text-red-600 mt-0.5 shrink-0" />
                1/34–36 Plasser Cres, Saint Mary&apos;s NSW 2760
              </p>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-4">{section}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map(l => (
                  <li key={l.label}>
                    <Link href={l.href}
                      className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-[#EAEAEA] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-gray-400">
            © {new Date().getFullYear()} RAK A VAN Pty Ltd. All rights reserved. Est. 2012.
          </p>
          <div className="flex gap-2">
            {[
              { Icon: Facebook,  href: '#', label: 'Facebook' },
              { Icon: Instagram, href: '#', label: 'Instagram' },
              { Icon: Linkedin,  href: '#', label: 'LinkedIn' },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} aria-label={label}
                className="w-8 h-8 rounded-full bg-white border border-[#EAEAEA] flex items-center justify-center text-gray-400 hover:text-red-600 hover:border-red-200 transition-colors">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
