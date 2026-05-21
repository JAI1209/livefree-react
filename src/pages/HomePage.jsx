import Hero from '../components/Hero/Hero'
import WhyLiveFree from '../components/WhyLiveFree/WhyLiveFree'
import Stats from '../components/Stats/Stats'
import Destinations from '../components/Destinations/Destinations'
import Rooms from '../components/Rooms/Rooms'
import Guidelines from '../components/Guidelines/Guidelines'
import Testimonials from '../components/Testimonials/Testimonials'
import Social from '../components/Social/Social'
import Awards from '../components/Awards/Awards'
import CTABanner from '../components/CTABanner/CTABanner'

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Why Live Free */}
      <WhyLiveFree />

      {/* 3. Animated Statistics */}
      <Stats />

      {/* 4. Our Destinations */}
      <Destinations />

      {/* 5. Rooms & Experiences */}
      <Rooms />

      {/* 6. House Guidelines */}
      <Guidelines />

      {/* 7. Guest Testimonials */}
      <Testimonials />

      {/* 8. Social Feed */}
      <Social />

      {/* 9. Awards */}
      <Awards />

      {/* 10. CTA / Booking */}
      <CTABanner />
    </>
  )
}
