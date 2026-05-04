import GSAPReveal from '@/components/ui/GSAPReveal'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const BEFORE = [
  'Tools scattered across the van floor every morning',
  'Wasting 20+ minutes searching for equipment on-site',
  'Gear damaged from shifting and rattling in transit',
  'Unprofessional image when clients see inside your van',
  'Starting every single workday stressed and disorganised',
]

const AFTER = [
  'Everything in its exact, labelled place — always',
  'Fully ready to work in under 2 minutes, every time',
  'All tools and gear secure and protected during transit',
  'Professional, impressive setup that wins client confidence',
  'Start every job calm, focused and completely in control',
]

const STATS = [
  { end: 80,  suffix: '%',  label: 'Less time searching for tools' },
  { end: 3,   suffix: '×',  label: 'Faster job preparation' },
  { end: 10,  suffix: 'K+', label: 'Tradies already transformed' },
]

export default function BeforeAfter() {
  return (
    <section className="bg-[#F5F5F5] py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 xl:px-10">

        <GSAPReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div>
              <h2 className="text-[42px] lg:text-[58px] font-bold text-gray-900 leading-[1.0] tracking-[-0.025em]">
                The RAK A VAN<br />Difference
              </h2>
            </div>
            <p className="text-[15px] text-gray-500 leading-[1.7] max-w-[340px]">
              See how our system transforms a chaotic work van into a precision-organised machine that multiplies your output.
            </p>
          </div>
        </GSAPReveal>

        {/* Comparison columns */}
        <div className="grid md:grid-cols-2 gap-5 mb-6">

          <GSAPReveal x={-30} y={0}>
            <div className="rounded-2xl overflow-hidden border border-red-100 h-full">
              <div className="flex items-center gap-3 px-6 py-4 bg-red-50 border-b border-red-100">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400 shadow-[0_0_0_3px_rgba(248,113,113,0.2)]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-red-500">Before RAK A VAN</span>
              </div>
              <div className="p-7 bg-white flex flex-col gap-4">
                {BEFORE.map((item, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-red-400 text-[10px] font-bold leading-none">✕</span>
                    </div>
                    <p className="text-[14px] text-gray-600 leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </GSAPReveal>

          <GSAPReveal x={30} y={0} delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-green-100 h-full">
              <div className="flex items-center gap-3 px-6 py-4 bg-green-50 border-b border-green-100">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_0_3px_rgba(74,222,128,0.2)]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-green-700">After RAK A VAN</span>
              </div>
              <div className="p-7 bg-white flex flex-col gap-4">
                {AFTER.map((item, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-green-50 border border-green-200 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-green-500 text-[10px] font-bold leading-none">✓</span>
                    </div>
                    <p className="text-[14px] text-gray-600 leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </GSAPReveal>
        </div>

        {/* Animated stat bar */}
        <GSAPReveal y={24} delay={0.2}>
          <div className="grid sm:grid-cols-3 gap-4">
            {STATS.map(s => (
              <div key={s.label}
                className="flex flex-col items-center text-center py-8 px-6 bg-white rounded-2xl border border-[#EAEAEA] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <p className="text-[42px] font-bold leading-none text-red-600 mb-2">
                  <AnimatedCounter end={s.end} suffix={s.suffix} />
                </p>
                <p className="text-[11px] text-gray-400 uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </GSAPReveal>

      </div>
    </section>
  )
}
