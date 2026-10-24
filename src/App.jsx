import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
const About = lazy(() => import('./pages/About'))
const Booking = lazy(() => import('./pages/Booking'))
const Contact = lazy(() => import('./pages/Contact'))
const CustomIvDrips = lazy(() => import('./pages/CustomIvDrips'))
const Faq = lazy(() => import('./pages/Faq'))
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'))
const Services = lazy(() => import('./pages/Services'))
const AgedCareNdis = lazy(() => import('./pages/AgedCareNdis'))
const BloodCollection = lazy(() => import('./pages/BloodCollection'))
const CorporateHealth = lazy(() => import('./pages/CorporateHealth'))
const HealthAssessments = lazy(() => import('./pages/HealthAssessments'))
const IvInfusions = lazy(() => import('./pages/IvInfusions'))
const PreventativeHealth = lazy(() => import('./pages/PreventativeHealth'))
const TeethWhitening = lazy(() => import('./pages/TeethWhitening'))
const Training = lazy(() => import('./pages/Training'))
const ComingSoon = lazy(() => import('./pages/ComingSoon'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<main className="min-h-screen bg-white" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/custom-iv-drips" element={<CustomIvDrips />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/aged-care-ndis" element={<AgedCareNdis />} />
          <Route path="/services/blood-collection" element={<BloodCollection />} />
          <Route path="/services/corporate-health" element={<CorporateHealth />} />
          <Route path="/services/health-assessments" element={<HealthAssessments />} />
          <Route path="/services/iv-infusions" element={<IvInfusions />} />
          <Route path="/services/preventative-health" element={<PreventativeHealth />} />
          <Route path="/services/teeth-whitening" element={<TeethWhitening />} />
          <Route path="/training" element={<Training />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}
