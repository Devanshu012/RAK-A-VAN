export default function AboutStrip() {
  return (
    <section className="bg-white py-14 sm:py-24">
      <div className="w-full px-5">

        {/* Section divider — exactly Conicorn style */}
        <div className="section-divider">
          <span className="num">001</span>
          <span className="line" />
          <span className="label">Who We Are</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-5xl text-c-text leading-tight mb-6">
              Australia's original van shelving experts
            </h2>
            <p className="text-[14px] sm:text-[15px] text-c-muted leading-relaxed mb-4">
              RAK A VAN helps builders, electricians, plumbers, painters, strata cleaners and technicians design and deploy intelligent storage systems that streamline operations and boost on-the-job performance.
            </p>
            <p className="text-[14px] sm:text-[15px] text-c-muted leading-relaxed">
              Our unique modular design and extensive product range allow us to offer an endless variety of efficient, fully adaptable storage solutions — for any type of trade, any type of vehicle.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6">
            {[
              { val: '10K+', label: 'Vans fitted' },
              { val: '80%', label: 'Time saved on site' },
              { val: '5x', label: 'Faster setup' },
            ].map(s => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="font-serif text-[32px] sm:text-5xl text-c-text">{s.val}</span>
                <span className="text-[11px] uppercase tracking-widest text-c-subtle">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling repeating stat — Conicorn has a horizontal scrolling bar */}
        <div className="mt-16 border border-[#E8E6E1] rounded-2xl overflow-hidden bg-[#FAFAF9]">
          <div className="marquee-track py-4">
            {[
              '10K+ Vans Fitted', 'Est. 2012', '80% More Efficient', 'Nationwide Delivery',
              '100% Australian', 'Free Fitting Instructions', 'Trade Specialist', '10,000+ Happy Tradies',
              '10K+ Vans Fitted', 'Est. 2012', '80% More Efficient', 'Nationwide Delivery',
              '100% Australian', 'Free Fitting Instructions', 'Trade Specialist', '10,000+ Happy Tradies',
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-5 px-5">
                <span className="text-[13px] font-medium text-c-muted whitespace-nowrap">{item}</span>
                <span className="text-c-accent">✦</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
