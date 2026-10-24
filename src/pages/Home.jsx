import Hero from '../components/home/Hero'
import Stats from '../components/home/Stats'
import PayLater from '../components/home/PayLater'
import WhatWeDo from '../components/home/WhatWeDo'
import CareCards from '../components/home/CareCards'
import OurServices from '../components/home/OurServices'
import IVTherapy from '../components/home/IVTherapy'
import Training from '../components/home/Training'
import WhyIV from '../components/home/WhyIV'
import TeethWhitening from '../components/home/TeethWhitening'
import OnlineBooking from '../components/home/OnlineBooking'
import Newsletter from '../components/home/Newsletter'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Hero />
      <Stats />
      <PayLater />
      <WhatWeDo />
      <CareCards />
      <OurServices />
      <IVTherapy />
      <Training />
      <WhyIV />
      <TeethWhitening />
      <OnlineBooking />
      <Newsletter />
    </main>
  )
}
