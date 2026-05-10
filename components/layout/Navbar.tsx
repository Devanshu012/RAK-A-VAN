'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Phone, User } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LoginModal from '@/components/ui/LoginModal'

gsap.registerPlugin(ScrollTrigger)

const NAV = [
  {
    label: 'Our Range', href: '/shop',
    children: [
      { label: 'Trade Kits',        href: '/shop/trade-kits',    sub: 'Built for your industry' },
      { label: 'Frame Kits',        href: '/shop/frames',        sub: '420mm · 830mm · 1040mm' },
      { label: 'Bins & Accessories',href: '/shop/accessories',   sub: 'Trays, bins, ramps & more' },
      { label: 'StorageTek',        href: '/shop/storagetek',    sub: 'Cases & cabinets' },
    ],
  },
  { label: 'About',        href: '/about' },
  { label: 'Distributors', href: '/distributors' },
  { label: 'Contact',      href: '/contact' },
]

export default function Navbar() {
  const headerRef  = useRef<HTMLElement>(null)
  const [open, setOpen]         = useState(false)
  const [drop, setDrop]         = useState<string | null>(null)
  const [loginOpen, setLoginOpen] = useState(false)

  /* GSAP scroll shadow */
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -40',
        end: 99999,
        onToggle: self => {
          if (!headerRef.current) return
          gsap.to(headerRef.current, {
            boxShadow: self.isActive
              ? '0 1px 0 #EAEAEA, 0 4px 20px rgba(0,0,0,0.06)'
              : '0 1px 0 #EAEAEA',
            backgroundColor: self.isActive ? 'rgba(255,255,255,0.97)' : '#ffffff',
            duration: 0.3,
            ease: 'power2.out',
          })
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white border-b border-[#EAEAEA]"
      style={{ backdropFilter: 'blur(12px)' }}
    >
      <div className="w-full px-5 h-16 flex items-center justify-between gap-8">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png/icon.png"
            alt="RAK A VAN"
            width={140} height={40} priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV.map(link => (
            <div key={link.label} className="relative"
              onMouseEnter={() => link.children && setDrop(link.label)}
              onMouseLeave={() => setDrop(null)}
            >
              <Link href={link.href}
                className="flex items-center gap-1 px-3.5 py-2 text-[14px] text-gray-600 hover:text-gray-900 rounded-full hover:bg-[#F5F5F5] transition-colors font-medium">
                {link.label}
                {link.children && (
                  <ChevronDown size={13} className={`transition-transform duration-200 ${drop === link.label ? 'rotate-180' : ''}`} />
                )}
              </Link>

              {link.children && drop === link.label && (
                <div className="absolute top-[calc(100%+6px)] left-0 w-60 bg-white border border-[#EAEAEA] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.10)] overflow-hidden py-2 z-50">
                  {link.children.map(child => (
                    <Link key={child.label} href={child.href}
                      className="flex flex-col px-4 py-3 hover:bg-[#F5F5F5] transition-colors">
                      <span className="text-[13px] font-semibold text-gray-900">{child.label}</span>
                      <span className="text-[11px] text-gray-400 mt-0.5">{child.sub}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <a href="tel:1300044145"
            className="flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-gray-900 transition-colors font-medium">
            <Phone size={13} /> 1300 044 145
          </a>
          <button
            onClick={() => setLoginOpen(true)}
            className="flex items-center gap-1.5 text-[13px] text-gray-600 border border-[#EAEAEA] rounded-full px-4 py-2 hover:bg-[#F5F5F5] hover:border-gray-300 transition-all font-medium">
            <User size={13} /> Sign In
          </button>
          <Link href="/shop" className="btn-grad text-[13px] py-2.5 px-5">
            Shop Now
          </Link>
        </div>

        {/* Hamburger */}
        <button className="lg:hidden p-1.5 text-gray-500 rounded-lg hover:bg-[#F5F5F5] transition-colors"
          onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-[#EAEAEA] bg-white">
          <nav className="w-full px-5 py-4 flex flex-col gap-1">
            {NAV.map(link => (
              <div key={link.label}>
                <Link href={link.href} onClick={() => setOpen(false)}
                  className="block py-3 text-[14px] font-semibold text-gray-900 border-b border-[#F5F5F5]">
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 py-1 flex flex-col gap-0.5">
                    {link.children.map(c => (
                      <Link key={c.label} href={c.href} onClick={() => setOpen(false)}
                        className="py-2 text-[13px] text-gray-500 hover:text-red-600 transition-colors">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/shop" onClick={() => setOpen(false)} className="btn-grad mt-3 justify-center">
              Shop Now
            </Link>
            <button onClick={() => { setOpen(false); setLoginOpen(true) }}
              className="flex items-center justify-center gap-2 border border-[#EAEAEA] rounded-full py-2.5 text-[14px] text-gray-600 hover:bg-[#F5F5F5] transition-colors mt-1">
              <User size={14} /> Sign In
            </button>
          </nav>
        </div>
      )}

      {loginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}
    </header>
  )
}
