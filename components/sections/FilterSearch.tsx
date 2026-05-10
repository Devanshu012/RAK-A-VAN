'use client'
import { useState, useId } from 'react'
import Image from 'next/image'
import { ChevronDown, ArrowRight } from 'lucide-react'
import GSAPReveal from '@/components/ui/GSAPReveal'

/* ── data ── */
const VEHICLE_MAKES: Record<string, string[]> = {
  Ford:       ['Transit', 'Transit Custom', 'Ranger'],
  Toyota:     ['HiAce', 'LandCruiser 70', 'Hilux'],
  Mercedes:   ['Sprinter', 'Vito', 'Viano'],
  Volkswagen: ['Transporter', 'Crafter', 'Caddy'],
  Renault:    ['Master', 'Trafic', 'Kangoo'],
  Iveco:      ['Daily', 'Eurocargo'],
  Fiat:       ['Ducato', 'Doblo'],
  Nissan:     ['NV200', 'NV300', 'Urvan'],
}

const TRADES = [
  'Electrician',
  'Plumber',
  'Carpenter / Builder',
  'Painter & Decorator',
  'HVAC Technician',
  'Landscaper',
  'Strata Cleaner',
  'Locksmith',
  'General Services',
]

const PRODUCTS = [
  'Shelving Systems',
  'Drawer Units',
  'Bin Storage',
  'Racking & Rails',
  'Van Liners',
  'Cargo Barriers',
  'Floor Protection',
  'Lighting & Power',
]

/* ── Select input ── */
function FilterSelect({
  id,
  value,
  onChange,
  placeholder,
  options,
  disabled = false,
}: {
  id: string
  value: string
  onChange: (v: string) => void
  placeholder: string
  options: string[]
  disabled?: boolean
}) {
  const active = !!value && !disabled
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={e => onChange(e.target.value)}
        disabled={disabled}
        aria-label={placeholder}
        className={`
          w-full appearance-none rounded-xl border-2 px-4 py-3.5 pr-11
          text-[14px] font-semibold bg-white outline-none
          transition-all duration-200
          ${disabled
            ? 'border-gray-100 text-gray-300 cursor-not-allowed bg-gray-50'
            : active
              ? 'border-red-500 text-gray-900 shadow-[0_0_0_4px_rgba(229,57,53,0.10)]'
              : 'border-gray-200 text-gray-400 hover:border-gray-400 cursor-pointer'
          }
        `}
      >
        <option value="">{placeholder}</option>
        {options.map(o => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <ChevronDown
        size={16}
        strokeWidth={2.5}
        className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 transition-colors duration-200
          ${disabled ? 'text-gray-200' : active ? 'text-red-500' : 'text-gray-400'}`}
      />
    </div>
  )
}

/* ── Card ── */
interface CardProps {
  step: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  active: boolean
  children: React.ReactNode
}

function FilterCard({ step, title, description, imageSrc, imageAlt, active, children }: CardProps) {
  return (
    <div
      className={`
        group relative flex flex-col bg-white rounded-2xl overflow-hidden
        border-2 transition-all duration-300 cursor-default
        ${active
          ? 'border-red-500 shadow-[0_16px_48px_rgba(229,57,53,0.18)] -translate-y-2'
          : 'border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.13)] hover:border-gray-200'
        }
      `}
    >
      {/* top accent bar */}
      <div
        className={`h-1 w-full transition-all duration-300
          ${active ? 'bg-red-500' : 'bg-gray-100 group-hover:bg-red-400'}`}
      />

      <div className="flex flex-col flex-1 p-7">
        {/* step + title */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-[22px] font-bold text-gray-900 leading-tight">{title}</h3>
          </div>
          {/* active indicator dot */}
          <div className={`w-2.5 h-2.5 rounded-full mt-1 shrink-0 transition-all duration-300
            ${active ? 'bg-red-500 shadow-[0_0_0_4px_rgba(229,57,53,0.15)]' : 'bg-gray-200'}`}
          />
        </div>

        <p className="text-[13px] text-gray-400 leading-relaxed mb-5">{description}</p>

        {/* image */}
        <div className="relative w-full h-[200px] rounded-xl overflow-hidden bg-gray-50 mb-6 flex-shrink-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* selects */}
        <div className="flex flex-col gap-3 mt-auto">
          {children}
        </div>
      </div>
    </div>
  )
}

/* ── main component ── */
export default function FilterSearch() {
  const uid = useId()
  const [make, setMake]       = useState('')
  const [model, setModel]     = useState('')
  const [trade, setTrade]     = useState('')
  const [product, setProduct] = useState('')

  const hasSelection = !!(make || trade || product)
  const models = make ? (VEHICLE_MAKES[make] ?? []) : []

  function handleMakeChange(v: string) {
    setMake(v)
    setModel('')
  }

  function handleSearch() {
    if (!hasSelection) return
    const params = new URLSearchParams()
    if (make)    params.set('make', make)
    if (model)   params.set('model', model)
    if (trade)   params.set('trade', trade)
    if (product) params.set('product', product)
    window.location.href = `/shop?${params.toString()}`
  }

  return (
    <section className="bg-transparent py-12 lg:py-16">
      <div className="w-full px-5">

        {/* ── header ── */}
        <GSAPReveal>
          <div className="text-center mb-14">
            <h2 className="text-[28px] sm:text-[38px] lg:text-[54px] font-bold text-gray-900 leading-[1.1] tracking-[-0.03em] mb-4">
              Find Your Perfect
              <span className="text-red-600"> Van Setup</span>
            </h2>
          </div>
        </GSAPReveal>

        {/* ── 3 cards ── */}
        <GSAPReveal delay={0.1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

            {/* BY VEHICLE */}
            <FilterCard
              step="01"
              title="By Vehicle"
              description="Precision-fitted storage for your exact van make and model."
              imageSrc="/products/By_Vehicle.png"
              imageAlt="Van storage by vehicle"
              active={!!(make || model)}
            >
              <div>
                <label htmlFor={`${uid}-make`} className="block text-[11px] font-bold text-gray-500 uppercase tracking-[0.12em] mb-2">
                  Make
                </label>
                <FilterSelect
                  id={`${uid}-make`}
                  value={make}
                  onChange={handleMakeChange}
                  placeholder="Select a Make"
                  options={Object.keys(VEHICLE_MAKES)}
                />
              </div>
              <div>
                <label htmlFor={`${uid}-model`} className="block text-[11px] font-bold text-gray-500 uppercase tracking-[0.12em] mb-2">
                  Model
                </label>
                <FilterSelect
                  id={`${uid}-model`}
                  value={model}
                  onChange={setModel}
                  placeholder={make ? 'Select a Model' : 'Select make first'}
                  options={models}
                  disabled={!make}
                />
              </div>
            </FilterCard>

            {/* BY TRADE */}
            <FilterCard
              step="02"
              title="By Trade"
              description="Kits engineered around how your trade actually works."
              imageSrc="/products/By_Trade.png"
              imageAlt="Van storage by trade"
              active={!!trade}
            >
              <div>
                <label htmlFor={`${uid}-trade`} className="block text-[11px] font-bold text-gray-500 uppercase tracking-[0.12em] mb-2">
                  Profession
                </label>
                <FilterSelect
                  id={`${uid}-trade`}
                  value={trade}
                  onChange={setTrade}
                  placeholder="Select a Trade"
                  options={TRADES}
                />
              </div>
            </FilterCard>

            {/* BY PRODUCT */}
            <FilterCard
              step="03"
              title="By Product"
              description="Browse our full modular range by storage category."
              imageSrc="/products/By_Product.jpeg"
              imageAlt="Van storage products"
              active={!!product}
            >
              <div>
                <label htmlFor={`${uid}-product`} className="block text-[11px] font-bold text-gray-500 uppercase tracking-[0.12em] mb-2">
                  Type
                </label>
                <FilterSelect
                  id={`${uid}-product`}
                  value={product}
                  onChange={setProduct}
                  placeholder="Select a Type"
                  options={PRODUCTS}
                />
              </div>
            </FilterCard>

          </div>
        </GSAPReveal>

        {/* ── CTA ── */}
        <GSAPReveal delay={0.2}>
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={handleSearch}
              disabled={!hasSelection}
              aria-label="Begin product search"
              className={`
                group inline-flex items-center gap-3
                px-12 py-4 rounded-full
                text-[15px] font-bold tracking-[0.04em] uppercase
                transition-all duration-300
                ${hasSelection
                  ? 'bg-red-600 text-white shadow-[0_8px_32px_rgba(229,57,53,0.40)] hover:bg-red-700 hover:shadow-[0_12px_40px_rgba(229,57,53,0.50)] hover:scale-[1.03] active:scale-[0.97] cursor-pointer'
                  : 'bg-gray-100 text-gray-300 cursor-not-allowed'
                }
              `}
            >
              Begin Search
              <ArrowRight
                size={18}
                strokeWidth={2.5}
                className={`transition-transform duration-200 ${hasSelection ? 'group-hover:translate-x-1' : ''}`}
              />
            </button>

            <p className={`text-[12px] font-medium transition-all duration-300 ${hasSelection ? 'text-red-400' : 'text-red-500'}`}>
              {hasSelection
                ? `${[make, trade, product].filter(Boolean).length} filter${[make, trade, product].filter(Boolean).length > 1 ? 's' : ''} selected — ready to search`
                : 'Select at least one option above to search'
              }
            </p>
          </div>
        </GSAPReveal>

      </div>
    </section>
  )
}
