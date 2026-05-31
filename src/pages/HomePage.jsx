import Hero from '../components/Hero/Hero'
import WhyLiveFree from '../components/WhyLiveFree/WhyLiveFree'
import Stats from '../components/Stats/Stats'
import Destinations from '../components/Destinations/Destinations'
import Testimonials from '../components/Testimonials/Testimonials'
import Social from '../components/Social/Social'
import Awards from '../components/Awards/Awards'
import CTABanner from '../components/CTABanner/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyLiveFree />
      <Stats />
      <Destinations />
      <Testimonials />
      <Social />
      <Awards />
      <CTABanner />
    </>
  )
}
