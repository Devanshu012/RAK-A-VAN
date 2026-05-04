import Hero           from '@/components/sections/Hero'
import FilterSearch   from '@/components/sections/FilterSearch'
import Products       from '@/components/sections/Products'
import Process        from '@/components/sections/Process'
import Values         from '@/components/sections/Values'
import ShowcaseImage  from '@/components/sections/ShowcaseImage'
import Testimonials   from '@/components/sections/Testimonials'
import CaseStudies    from '@/components/sections/CaseStudies'
import CTABanner      from '@/components/sections/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FilterSearch />
      <Products />
      <Process />
      <Values />
      <ShowcaseImage />
      <Testimonials />
      <CaseStudies />
      <CTABanner />
    </>
  )
}
