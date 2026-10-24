import { Link } from 'react-router-dom'
import { css0 } from './styles/Services.styles'

export default function Services() {
  return (
    <main className="min-h-screen bg-[#fafafa]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style dangerouslySetInnerHTML={{ __html: css0 }} />
      <section className="relative pt-40 pb-20 bg-[#3b3f69] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />
        </div>
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 text-center reveal-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#ca1254] animate-pulse" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] !text-white">
              Our Expertise
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold !text-white mb-6 leading-[1.15] tracking-tight">
            {"Clinical & "}
            <span className="text-[#ca1254] font-semibold">
              Wellness
            </span>
            {" "}
            <br className="hidden md:block" />
            {" Services"}
          </h1>
          <p className="text-lg !text-white w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 leading-relaxed font-light">
            Experience elite healthcare delivered with a personal touch. From clinical assessments to restorative therapies, our services are designed to enhance your vitality.
          </p>
          <div className="mt-10 w-20 h-1 bg-white/10 mx-auto rounded-full overflow-hidden">
            <div className="h-full bg-[#ca1254] w-1/3 animate-[slide_2s_infinite_linear]" />
          </div>
        </div>
      </section>
      <section className="py-24 lg:py-32 bg-[#fafafa] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full md:w-[600px] h-[600px] bg-[#ca1254]/[0.02] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full md:w-[600px] h-[600px] bg-[#3b3f69]/[0.02] rounded-full blur-[100px] pointer-events-none" />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="text-center mb-20 lg:mb-28">
            <div className="service-eyebrow text-[#ca1254]">
              <span className="service-eyebrow-line bg-[#ca1254]/40" />
              Comprehensive Care
              <span className="service-eyebrow-line bg-[#ca1254]/40" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#3b3f69] max-w-4xl mx-auto leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {"Tailored therapies supporting your "}
              <br className="hidden md:block" />
              <span className="italic text-[#ca1254]">
                long-term vitality.
              </span>
            </h2>
          </div>
          <div className="space-y-32 lg:space-y-40">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 group">
              <div className="w-full lg:w-1/2 relative">
                <div className="relative rounded-[2rem] overflow-hidden service-image-card aspect-[4/3] bg-white group-hover:-translate-y-2 transition-transform duration-700">
                  <div className="relative w-full h-full">
                    <img alt="Health Assessments" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent" }} sizes="100vw" src="/images/healthcare.png" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                    <span className="feature-bubble px-4 py-2 rounded-xl text-[11px] font-bold tracking-wide text-gray-800 shadow-sm">
                      Vital Signs Monitoring
                    </span>
                    <span className="feature-bubble px-4 py-2 rounded-xl text-[11px] font-bold tracking-wide text-gray-800 shadow-sm">
                      Cardiovascular Risk
                    </span>
                    <span className="feature-bubble px-4 py-2 rounded-xl text-[11px] font-bold tracking-wide text-gray-800 shadow-sm">
                      Clinical Reporting
                    </span>
                  </div>
                </div>
                <div className="absolute -inset-4 rounded-[2.5rem] blur-2xl -z-10 opacity-0 group-hover:opacity-60 transition-opacity duration-700" style={{ background: "rgba(59,63,105,0.1)" }} />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg" style={{ backgroundColor: "rgba(59,63,105,0.1)", color: "#3b3f69" }}>
                    01
                  </div>
                  <span className="text-[11px] tracking-[0.3em] uppercase font-bold text-gray-400">
                    Clinical Protocol
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-[#3b3f69] mb-6 leading-[1.1]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Health Assessments
                </h3>
                <p className="text-base lg:text-lg text-gray-500 font-light leading-relaxed mb-10 w-full max-w-lg">
                  Comprehensive wellness checks and health & wellness screening for aged care and NDIS clients. Proactive early detection to identify health risks before they escalate.
                </p>
                <div className="pt-2">
                  <Link className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose/20 active:scale-[0.98] cursor-pointer bg-[#ca1254] text-white hover:brightness-110 shadow-sm border-none inline-flex items-center px-8 py-4 bg-[#3b3f69] text-white rounded-full font-semibold text-sm tracking-wide shadow-lg hover:bg-[#2a2d4b] transition-all hover:-translate-y-1 group-hover:bg-[#ca1254]" to="/services/health-assessments">
                    Explore Service
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24 group">
              <div className="w-full lg:w-1/2 relative">
                <div className="relative rounded-[2rem] overflow-hidden service-image-card aspect-[4/3] bg-white group-hover:-translate-y-2 transition-transform duration-700">
                  <div className="relative w-full h-full">
                    <img alt="Integrated Health & Wellness" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent" }} sizes="100vw" src="/images/healthimage.png" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                    <span className="feature-bubble px-4 py-2 rounded-xl text-[11px] font-bold tracking-wide text-gray-800 shadow-sm">
                      Vitamin Support
                    </span>
                    <span className="feature-bubble px-4 py-2 rounded-xl text-[11px] font-bold tracking-wide text-gray-800 shadow-sm">
                      Nutrition Guidance
                    </span>
                    <span className="feature-bubble px-4 py-2 rounded-xl text-[11px] font-bold tracking-wide text-gray-800 shadow-sm">
                      Ongoing Maintenance
                    </span>
                  </div>
                </div>
                <div className="absolute -inset-4 rounded-[2.5rem] blur-2xl -z-10 opacity-0 group-hover:opacity-60 transition-opacity duration-700" style={{ background: "rgba(202,18,84,0.1)" }} />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg" style={{ backgroundColor: "rgba(202,18,84,0.1)", color: "#ca1254" }}>
                    02
                  </div>
                  <span className="text-[11px] tracking-[0.3em] uppercase font-bold text-gray-400">
                    Clinical Protocol
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-[#3b3f69] mb-6 leading-[1.1]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Integrated Health & Wellness
                </h3>
                <p className="text-base lg:text-lg text-gray-500 font-light leading-relaxed mb-10 w-full max-w-lg">
                  A proactive approach targeting specific nutrient deficiencies through professional vitamin therapies, nutrition guidance and bespoke lifestyle consultations.
                </p>
                <div className="pt-2">
                  <Link className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose/20 active:scale-[0.98] cursor-pointer bg-[#ca1254] text-white hover:brightness-110 shadow-sm border-none inline-flex items-center px-8 py-4 bg-[#3b3f69] text-white rounded-full font-semibold text-sm tracking-wide shadow-lg hover:bg-[#2a2d4b] transition-all hover:-translate-y-1 group-hover:bg-[#ca1254]" to="/services/preventative-health">
                    Explore Service
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 group">
              <div className="w-full lg:w-1/2 relative">
                <div className="relative rounded-[2rem] overflow-hidden service-image-card aspect-[4/3] bg-white group-hover:-translate-y-2 transition-transform duration-700">
                  <div className="relative w-full h-full">
                    <img alt="Aged Care & NDIS Nursing" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent" }} sizes="100vw" src="/images/agedcare-nursing.png" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                    <span className="feature-bubble px-4 py-2 rounded-xl text-[11px] font-bold tracking-wide text-gray-800 shadow-sm">
                      Dignified Care
                    </span>
                    <span className="feature-bubble px-4 py-2 rounded-xl text-[11px] font-bold tracking-wide text-gray-800 shadow-sm">
                      Medication Management
                    </span>
                    <span className="feature-bubble px-4 py-2 rounded-xl text-[11px] font-bold tracking-wide text-gray-800 shadow-sm">
                      Wound Care
                    </span>
                  </div>
                </div>
                <div className="absolute -inset-4 rounded-[2.5rem] blur-2xl -z-10 opacity-0 group-hover:opacity-60 transition-opacity duration-700" style={{ background: "rgba(59,63,105,0.1)" }} />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg" style={{ backgroundColor: "rgba(59,63,105,0.1)", color: "#3b3f69" }}>
                    03
                  </div>
                  <span className="text-[11px] tracking-[0.3em] uppercase font-bold text-gray-400">
                    Clinical Protocol
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-[#3b3f69] mb-6 leading-[1.1]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Aged Care & NDIS Nursing
                </h3>
                <p className="text-base lg:text-lg text-gray-500 font-light leading-relaxed mb-10 w-full max-w-lg">
                  Compassionate, professional nursing services delivering evidence-based care tailored to individual requirements, supporting independent living and long-term health.
                </p>
                <div className="pt-2">
                  <Link className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose/20 active:scale-[0.98] cursor-pointer bg-[#ca1254] text-white hover:brightness-110 shadow-sm border-none inline-flex items-center px-8 py-4 bg-[#3b3f69] text-white rounded-full font-semibold text-sm tracking-wide shadow-lg hover:bg-[#2a2d4b] transition-all hover:-translate-y-1 group-hover:bg-[#ca1254]" to="/services/aged-care-ndis">
                    Explore Service
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24 group">
              <div className="w-full lg:w-1/2 relative">
                <div className="relative rounded-[2rem] overflow-hidden service-image-card aspect-[4/3] bg-white group-hover:-translate-y-2 transition-transform duration-700">
                  <div className="relative w-full h-full">
                    <img alt="Custom IV Infusions" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent" }} sizes="100vw" src="/images/iv-nutrient-therapy.png" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                    <span className="feature-bubble px-4 py-2 rounded-xl text-[11px] font-bold tracking-wide text-gray-800 shadow-sm">
                      Fast Absorption
                    </span>
                    <span className="feature-bubble px-4 py-2 rounded-xl text-[11px] font-bold tracking-wide text-gray-800 shadow-sm">
                      Personalised Blends
                    </span>
                    <span className="feature-bubble px-4 py-2 rounded-xl text-[11px] font-bold tracking-wide text-gray-800 shadow-sm">
                      Energy Optimisation
                    </span>
                  </div>
                </div>
                <div className="absolute -inset-4 rounded-[2.5rem] blur-2xl -z-10 opacity-0 group-hover:opacity-60 transition-opacity duration-700" style={{ background: "rgba(202,18,84,0.1)" }} />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg" style={{ backgroundColor: "rgba(202,18,84,0.1)", color: "#ca1254" }}>
                    04
                  </div>
                  <span className="text-[11px] tracking-[0.3em] uppercase font-bold text-gray-400">
                    Clinical Protocol
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-[#3b3f69] mb-6 leading-[1.1]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Custom IV Infusions
                </h3>
                <p className="text-base lg:text-lg text-gray-500 font-light leading-relaxed mb-10 w-full max-w-lg">
                  Targeted intravenous nutrient therapies designed specifically to support energy levels, optimise recovery, and strengthen immune health functions systemically.
                </p>
                <div className="pt-2">
                  <Link className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose/20 active:scale-[0.98] cursor-pointer bg-[#ca1254] text-white hover:brightness-110 shadow-sm border-none inline-flex items-center px-8 py-4 bg-[#3b3f69] text-white rounded-full font-semibold text-sm tracking-wide shadow-lg hover:bg-[#2a2d4b] transition-all hover:-translate-y-1 group-hover:bg-[#ca1254]" to="/services/iv-infusions">
                    Explore Service
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 group">
              <div className="w-full lg:w-1/2 relative">
                <div className="relative rounded-[2rem] overflow-hidden service-image-card aspect-[4/3] bg-white group-hover:-translate-y-2 transition-transform duration-700">
                  <div className="relative w-full h-full">
                    <img alt="Clinical Blood Collection" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent" }} sizes="100vw" src="/images/bloodcollection.png" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                    <span className="feature-bubble px-4 py-2 rounded-xl text-[11px] font-bold tracking-wide text-gray-800 shadow-sm">
                      Pathology Testing
                    </span>
                    <span className="feature-bubble px-4 py-2 rounded-xl text-[11px] font-bold tracking-wide text-gray-800 shadow-sm">
                      Wellness Assessment
                    </span>
                    <span className="feature-bubble px-4 py-2 rounded-xl text-[11px] font-bold tracking-wide text-gray-800 shadow-sm">
                      Clinical Monitoring
                    </span>
                  </div>
                </div>
                <div className="absolute -inset-4 rounded-[2.5rem] blur-2xl -z-10 opacity-0 group-hover:opacity-60 transition-opacity duration-700" style={{ background: "rgba(59,63,105,0.1)" }} />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg" style={{ backgroundColor: "rgba(59,63,105,0.1)", color: "#3b3f69" }}>
                    05
                  </div>
                  <span className="text-[11px] tracking-[0.3em] uppercase font-bold text-gray-400">
                    Clinical Protocol
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-[#3b3f69] mb-6 leading-[1.1]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Clinical Blood Collection
                </h3>
                <p className="text-base lg:text-lg text-gray-500 font-light leading-relaxed mb-10 w-full max-w-lg">
                  Professional blood collection services combined with a mini wellness assessment including blood pressure, heart rate, and oxygen saturation monitoring.
                </p>
                <div className="pt-2">
                  <Link className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose/20 active:scale-[0.98] cursor-pointer bg-[#ca1254] text-white hover:brightness-110 shadow-sm border-none inline-flex items-center px-8 py-4 bg-[#3b3f69] text-white rounded-full font-semibold text-sm tracking-wide shadow-lg hover:bg-[#2a2d4b] transition-all hover:-translate-y-1 group-hover:bg-[#ca1254]" to="/services/blood-collection">
                    Explore Service
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24 group">
              <div className="w-full lg:w-1/2 relative">
                <div className="relative rounded-[2rem] overflow-hidden service-image-card aspect-[4/3] bg-white group-hover:-translate-y-2 transition-transform duration-700">
                  <div className="relative w-full h-full">
                    <img alt="Professional Teeth Whitening" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent" }} sizes="100vw" src="/images/teeth-whitening.png" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                    <span className="feature-bubble px-4 py-2 rounded-xl text-[11px] font-bold tracking-wide text-gray-800 shadow-sm">
                      Ultrasonic Tech
                    </span>
                    <span className="feature-bubble px-4 py-2 rounded-xl text-[11px] font-bold tracking-wide text-gray-800 shadow-sm">
                      Dual LED Heads
                    </span>
                    <span className="feature-bubble px-4 py-2 rounded-xl text-[11px] font-bold tracking-wide text-gray-800 shadow-sm">
                      5-14 Shades Lighter
                    </span>
                  </div>
                </div>
                <div className="absolute -inset-4 rounded-[2.5rem] blur-2xl -z-10 opacity-0 group-hover:opacity-60 transition-opacity duration-700" style={{ background: "rgba(202,18,84,0.1)" }} />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg" style={{ backgroundColor: "rgba(202,18,84,0.1)", color: "#ca1254" }}>
                    06
                  </div>
                  <span className="text-[11px] tracking-[0.3em] uppercase font-bold text-gray-400">
                    Clinical Protocol
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-[#3b3f69] mb-6 leading-[1.1]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Professional Teeth Whitening
                </h3>
                <p className="text-base lg:text-lg text-gray-500 font-light leading-relaxed mb-10 w-full max-w-lg">
                  High-end cosmetic whitening accelerator featuring advanced Ultrasonic technology and dual LED heads. Professional results starting from $250.
                </p>
                <div className="pt-2">
                  <Link className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose/20 active:scale-[0.98] cursor-pointer bg-[#ca1254] text-white hover:brightness-110 shadow-sm border-none inline-flex items-center px-8 py-4 bg-[#3b3f69] text-white rounded-full font-semibold text-sm tracking-wide shadow-lg hover:bg-[#2a2d4b] transition-all hover:-translate-y-1 group-hover:bg-[#ca1254]" to="/services/teeth-whitening">
                    Explore Service
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 group">
              <div className="w-full lg:w-1/2 relative">
                <div className="relative rounded-[2rem] overflow-hidden service-image-card aspect-[4/3] bg-white group-hover:-translate-y-2 transition-transform duration-700">
                  <div className="relative w-full h-full">
                    <img alt="Corporate Health Services" loading="lazy" decoding="async" className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent" }} sizes="100vw" src="/images/coprate.png" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                    <span className="feature-bubble px-4 py-2 rounded-xl text-[11px] font-bold tracking-wide text-gray-800 shadow-sm">
                      Employee Engagement
                    </span>
                    <span className="feature-bubble px-4 py-2 rounded-xl text-[11px] font-bold tracking-wide text-gray-800 shadow-sm">
                      Confidential Screening
                    </span>
                    <span className="feature-bubble px-4 py-2 rounded-xl text-[11px] font-bold tracking-wide text-gray-800 shadow-sm">
                      On-Site Delivery
                    </span>
                  </div>
                </div>
                <div className="absolute -inset-4 rounded-[2.5rem] blur-2xl -z-10 opacity-0 group-hover:opacity-60 transition-opacity duration-700" style={{ background: "rgba(59,63,105,0.1)" }} />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg" style={{ backgroundColor: "rgba(59,63,105,0.1)", color: "#3b3f69" }}>
                    07
                  </div>
                  <span className="text-[11px] tracking-[0.3em] uppercase font-bold text-gray-400">
                    Clinical Protocol
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-[#3b3f69] mb-6 leading-[1.1]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Corporate Health Services
                </h3>
                <p className="text-base lg:text-lg text-gray-500 font-light leading-relaxed mb-10 w-full max-w-lg">
                  Bespoke workplace health checks, professional reporting and corporate IV hydration services strategically designed to optimise teamwork, safety and energy.
                </p>
                <div className="pt-2">
                  <Link className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose/20 active:scale-[0.98] cursor-pointer bg-[#ca1254] text-white hover:brightness-110 shadow-sm border-none inline-flex items-center px-8 py-4 bg-[#3b3f69] text-white rounded-full font-semibold text-sm tracking-wide shadow-lg hover:bg-[#2a2d4b] transition-all hover:-translate-y-1 group-hover:bg-[#ca1254]" to="/services/corporate-health">
                    Explore Service
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent w-full" />
      <div className="bg-white">
        <section className="relative overflow-hidden" style={{ background: "#faf8f5", padding: "80px 0" }}>
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
            <h2 className="text-3xl md:text-[2.6rem] font-semibold leading-tight mb-14" style={{ color: "#3b3f69" }}>
              Why Choose Wellness Vitality
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
              <div className="flex flex-col">
                <div className="mb-5" style={{ color: "#ca1254" }}>
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                  Registered Nurses
                </h3>
                <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                  Every service is delivered by fully qualified, registered nurses.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="mb-5" style={{ color: "#ca1254" }}>
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                  Mobile Delivery
                </h3>
                <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                  Sydney-wide mobile healthcare, we come to your home, office, or facility.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="mb-5" style={{ color: "#ca1254" }}>
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                  Fast & Convenient
                </h3>
                <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                  Easy online booking with same-day availability for most services.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="mb-5" style={{ color: "#ca1254" }}>
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                  Clinically Safe
                </h3>
                <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                  Strict adherence to Australian healthcare standards and clinical protocols.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="py-16 md:py-24 relative bg-white">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="relative overflow-hidden rounded-3xl border border-[#3b3f69]/10 bg-[#3b3f69]/5 backdrop-blur-sm px-8 py-10 md:px-12 md:py-12 shadow-[0_20px_50px_rgba(59,63,105,0.08)]">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#ca1254]/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#3b3f69]/5 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="text-center lg:text-left max-w-xl">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#ca1254]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ca1254]">
                    Take the first step
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#3b3f69] leading-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {"Ready to reclaim your "}
                  <span className="italic text-[#ca1254]">
                    vitality?
                  </span>
                </h2>
                <p className="text-gray-500 font-light text-base md:text-lg leading-relaxed">
                  Book your session with qualified healthcare professionals and experience personalised, patient-centred care delivered to you.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <Link className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose/20 active:scale-[0.98] cursor-pointer bg-[#ca1254] text-white hover:brightness-110 shadow-sm border-none w-full sm:w-auto px-10 py-4 bg-[#ca1254] text-white rounded-xl font-bold text-sm shadow-[0_10px_25px_rgba(202,18,84,0.25)] hover:shadow-[0_15px_30px_rgba(202,18,84,0.35)] hover:-translate-y-1 transition-all duration-300" to="/booking">
                  Book a Session
                </Link>
                <Link to="/contact" className="w-full sm:w-auto px-10 py-4 border border-[#3b3f69]/30 text-[#3b3f69] rounded-xl font-bold text-sm hover:bg-white hover:border-[#3b3f69] hover:text-[#3b3f69] transition-all duration-300 inline-flex items-center justify-center">
                  Talk to our team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
