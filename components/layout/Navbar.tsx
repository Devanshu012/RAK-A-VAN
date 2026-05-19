'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Phone, User, Search, ChevronRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LoginModal from '@/components/ui/LoginModal'

gsap.registerPlugin(ScrollTrigger)

/* ─── Mega-menu data ──────────────────────────────────────────────── */
const MEGA_COLUMNS = [
  {
    heading: 'Trade Kits',
    href: '/shop/trade-kits',
    items: [
      { label: 'General Services', href: '/shop/trade-kits/general-services' },
      { label: 'Builders', href: '/shop/trade-kits/builders' },
      { label: 'Electricians', href: '/shop/trade-kits/electricians' },
      { label: 'Plumbers', href: '/shop/trade-kits/plumbers' },
      { label: 'Painters', href: '/shop/trade-kits/painters' },
      { label: 'Strata Cleaning', href: '/shop/trade-kits/strata-cleaning' },
    ],
  },
  {
    heading: 'Frames',
    href: '/shop/frames',
    items: [
      { label: '420mm Frame Kits', href: '/shop/frames/420mm' },
      { label: '830mm Frame Kits', href: '/shop/frames/830mm' },
      { label: '1040mm Frame Kits', href: '/shop/frames/1040mm' },
      { label: 'Double Frame Kits', href: '/shop/frames/double' },
      { label: 'Fixing Kits/Brackets/Components', href: '/shop/frames/fixing-kits' },
    ],
  },
  {
    heading: 'Bins/Trays/Accessories',
    href: '/shop/accessories',
    items: [
      { label: 'Aluminium Folding Ramp', href: '/shop/accessories/ramp' },
      { label: 'Vapour Barriers', href: '/shop/accessories/vapour-barriers' },
      { label: 'Cable Trays', href: '/shop/accessories/cable-trays' },
      { label: 'Plastic Bins', href: '/shop/accessories/plastic-bins' },
      { label: 'Shelf Trays', href: '/shop/accessories/shelf-trays' },
      { label: 'Spare Parts Trays', href: '/shop/accessories/spare-parts-trays' },
      { label: 'Accessories', href: '/shop/accessories' },
    ],
  },
  {
    heading: 'StorageTek',
    href: '/shop/storagetek',
    items: [
      { label: 'ABS Cases', href: '/shop/storagetek/abs-cases' },
      { label: 'Cabinets', href: '/shop/storagetek/cabinets' },
      { label: 'Case Frames', href: '/shop/storagetek/case-frames' },
      { label: 'Stackable Bins and Louvered Panels', href: '/shop/storagetek/louvered-panels' },
    ],
  },
]

/* ─── Simple nav links (no mega) ─────────────────────────────────── */
const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Distributors', href: '/distributors' },
  { label: 'Contact', href: '/contact' },
]

/* ─── Search data ────────────────────────────────────────────────── */
const SEARCH_PRODUCTS = [
  { title: 'Frame Kits', tags: ['420mm', '830mm', '1040mm', 'Double Frames'], href: '/shop/frames' },
  { title: 'Bins & Accessories', tags: ['Plastic Bins', 'Shelf Trays', 'Cable Trays', 'Ramps'], href: '/shop/accessories' },
  { title: 'StorageTek', tags: ['ABS Cases', 'Cabinets', 'Case Frames', 'Louvered Panels'], href: '/shop/storagetek' },
  { title: 'Vapour Barriers', tags: ['Protection', 'Custom Fit', 'Van Interior'], href: '/shop/accessories/vapour-barriers' },
  { title: 'Trade Kits', tags: ['Electricians', 'Builders', 'Plumbers', 'Painters'], href: '/shop/trade-kits' },
]


export default function Navbar() {
  const headerRef = useRef<HTMLElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)
  const megaRef = useRef<HTMLDivElement>(null)

  const [open, setOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileRange, setMobileRange] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [user, setUser] = useState<any>(null)
useEffect(() => {
  const storedUser = localStorage.getItem('user')

  if (storedUser) {
    setUser(JSON.parse(storedUser))
  }
}, [])

  const searchResults = searchQuery.trim().length > 0
    ? SEARCH_PRODUCTS.filter(p =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    : []

  function toggleSearch() {
    setSearchOpen(prev => {
      if (!prev) setTimeout(() => searchRef.current?.focus(), 50)
      else setSearchQuery('')
      return !prev
    })
  }

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
      {/* ── Main bar ─────────────────────────────────────────────── */}
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

          {/* Our Range — triggers mega menu */}
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <Link
              href="/shop"
              className={`flex items-center gap-1 px-3.5 py-2 text-[14px] rounded-full transition-colors font-medium ${megaOpen ? 'text-red-600 bg-red-50' : 'text-gray-600 hover:text-gray-900 hover:bg-[#F5F5F5]'
                }`}
            >
              Our Range
              <ChevronDown size={13} className={`transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} />
            </Link>
          </div>

          {/* Simple links */}
          {NAV_LINKS.map(link => (
            <Link key={link.label} href={link.href}
              className="flex items-center gap-1 px-3.5 py-2 text-[14px] text-gray-600 hover:text-gray-900 rounded-full hover:bg-[#F5F5F5] transition-colors font-medium">
              {link.label}
            </Link>
          ))}

          {/* Search icon */}
          <button
            onClick={toggleSearch}
            aria-label="Search products"
            className={`p-2 rounded-full transition-colors ${searchOpen ? 'bg-red-50 text-red-600' : 'text-gray-500 hover:text-gray-900 hover:bg-[#F5F5F5]'}`}
          >
            <Search size={16} />
          </button>
        </nav>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <a href="tel:1300044145"
            className="flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-gray-900 transition-colors font-medium">
            <Phone size={13} /> 1300 044 145
          </a>
          {user ? (
            <div className="flex items-center gap-2 border border-[#EAEAEA] rounded-full px-4 py-2">
              <User size={13} />
              <span className="text-[13px] font-medium">
                {user.name}
              </span>
            </div>
          ) : (
            <button
              onClick={() => setLoginOpen(true)}
              className="flex items-center gap-1.5 text-[13px] text-gray-600 border border-[#EAEAEA] rounded-full px-4 py-2 hover:bg-[#F5F5F5] hover:border-gray-300 transition-all font-medium">
              <User size={13} /> Sign In
            </button>
          )}
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

      {/* ── Mega menu panel (desktop) ────────────────────────────── */}
      {megaOpen && (
        <div
          ref={megaRef}
          className="hidden lg:block absolute left-0 right-0 top-full bg-[#F8F8F8] border-t border-b border-[#EAEAEA] shadow-[0_8px_32px_rgba(0,0,0,0.08)] z-40"
          onMouseEnter={() => setMegaOpen(true)}
          onMouseLeave={() => setMegaOpen(false)}
        >
          <div className="w-full grid grid-cols-4 divide-x divide-[#E2E2E2]">
            {MEGA_COLUMNS.map(col => (
              <div key={col.heading} className="py-6 px-8">
                {/* Column heading */}
                <Link
                  href={col.href}
                  className="block text-[12px] font-medium text-gray-400 tracking-wide uppercase mb-4 hover:text-red-600 transition-colors"
                >
                  {col.heading}
                </Link>

                {/* Items */}
                <ul className="flex flex-col">
                  {col.items.map(item => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setMegaOpen(false)}
                        className="flex items-center justify-between py-3 text-[13px] font-semibold text-gray-800 border-b border-[#E8E8E8] last:border-0 hover:text-red-600 transition-colors group"
                      >
                        {item.label}
                        <ChevronRight size={12} className="text-gray-300 group-hover:text-red-400 transition-colors shrink-0 ml-2" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Search bar drop-down ─────────────────────────────────── */}
      {searchOpen && (
        <div className="hidden lg:block border-t border-[#EAEAEA] bg-white px-5 py-4">
          <div className="relative max-w-xl mx-auto">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              ref={searchRef}
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search products, kits, accessories…"
              className="w-full pl-9 pr-9 py-2.5 text-[13px] border border-[#EAEAEA] rounded-xl focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700">
                <X size={14} />
              </button>
            )}
            {searchQuery.trim().length > 0 && (
              <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white border border-[#EAEAEA] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.10)] overflow-hidden z-50">
                {searchResults.length > 0 ? searchResults.map(p => (
                  <Link key={p.href + p.title} href={p.href}
                    onClick={() => { setSearchOpen(false); setSearchQuery('') }}
                    className="flex flex-col px-4 py-3 hover:bg-[#F5F5F5] transition-colors border-b border-[#F5F5F5] last:border-0">
                    <span className="text-[13px] font-semibold text-gray-900">{p.title}</span>
                    <span className="text-[11px] text-gray-400 mt-0.5">{p.tags.join(' · ')}</span>
                  </Link>
                )) : (
                  <div className="px-4 py-4 text-[13px] text-gray-400">No products found for &ldquo;{searchQuery}&rdquo;</div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Mobile drawer ────────────────────────────────────────── */}
      {open && (
        <div className="lg:hidden border-t border-[#EAEAEA] bg-white">
          <nav className="w-full px-5 py-4 flex flex-col gap-1">

            {/* Mobile search */}
            <div className="relative mb-2">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search products…"
                className="w-full pl-8 pr-8 py-2.5 text-[13px] border border-[#EAEAEA] rounded-xl focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700">
                  <X size={13} />
                </button>
              )}
            </div>
            {searchQuery.trim().length > 0 && (
              <div className="mb-2 border border-[#EAEAEA] rounded-xl overflow-hidden">
                {searchResults.length > 0 ? searchResults.map(p => (
                  <Link key={p.href + p.title} href={p.href}
                    onClick={() => { setOpen(false); setSearchQuery('') }}
                    className="flex flex-col px-4 py-3 hover:bg-[#F5F5F5] transition-colors border-b border-[#F5F5F5] last:border-0">
                    <span className="text-[13px] font-semibold text-gray-900">{p.title}</span>
                    <span className="text-[11px] text-gray-400 mt-0.5">{p.tags.join(' · ')}</span>
                  </Link>
                )) : (
                  <div className="px-4 py-3 text-[13px] text-gray-400">No products found.</div>
                )}
              </div>
            )}

            {/* Our Range accordion */}
            <div>
              <button
                onClick={() => setMobileRange(v => !v)}
                className="w-full flex items-center justify-between py-3 text-[14px] font-semibold text-gray-900 border-b border-[#F5F5F5]"
              >
                Our Range
                <ChevronDown size={15} className={`transition-transform duration-200 ${mobileRange ? 'rotate-180' : ''}`} />
              </button>
              {mobileRange && (
                <div className="pl-3 py-2 flex flex-col gap-0">
                  {MEGA_COLUMNS.map(col => (
                    <div key={col.heading} className="mb-3">
                      <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wide px-1 mb-1">{col.heading}</span>
                      {col.items.map(item => (
                        <Link key={item.label} href={item.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 px-1 text-[13px] text-gray-700 hover:text-red-600 border-b border-[#F5F5F5] last:border-0 transition-colors">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Other links */}
            {NAV_LINKS.map(link => (
              <Link key={link.label} href={link.href} onClick={() => setOpen(false)}
                className="block py-3 text-[14px] font-semibold text-gray-900 border-b border-[#F5F5F5]">
                {link.label}
              </Link>
            ))}

            <Link href="/shop" onClick={() => setOpen(false)} className="btn-grad mt-3 justify-center">
              Shop Now
            </Link>
            {user ? (
              <div className="flex items-center justify-center gap-2 border border-[#EAEAEA] rounded-full py-2.5 text-[14px] text-gray-700 mt-1">
                <User size={14} />
                {user.name}
              </div>
            ) : (
              <button
                onClick={() => { setOpen(false); setLoginOpen(true) }}
                className="flex items-center justify-center gap-2 border border-[#EAEAEA] rounded-full py-2.5 text-[14px] text-gray-600 hover:bg-[#F5F5F5] transition-colors mt-1">
                <User size={14} /> Sign In
              </button>
            )}
          </nav>
        </div>
      )}

      {loginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}
    </header>
  )
}