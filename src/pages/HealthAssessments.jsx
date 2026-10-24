import { Link } from 'react-router-dom'
import { css0 } from './styles/HealthAssessments.styles'

export default function HealthAssessments() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative min-h-[75vh] flex items-center pt-40 pb-20 bg-[#3b3f69] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />
        </div>
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#ca1254] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">
              Clinical Assessment
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold !text-white mb-6 leading-[1.1] tracking-tight w-full px-4 sm:px-6 lg:px-12 xl:px-16">
            Health Assessments
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed font-light mb-10">
            Comprehensive wellness checks for aged care residents and NDIS participants.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose/20 active:scale-[0.98] cursor-pointer bg-[#ca1254] text-white hover:brightness-110 shadow-sm border-none px-8 py-3.5 text-base" to="/contact">
              Enquire Now
            </Link>
            <Link className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose/20 active:scale-[0.98] cursor-pointer border-2 border-white text-white hover:bg-white hover:text-[#3b3f69] px-8 py-3.5 text-base" to="/booking">
              Book Now
            </Link>
          </div>
        </div>
      </section>
      <section className="py-14 sm:py-16 lg:py-20 bg-white overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
                <div className="w-6 sm:w-8 h-px bg-[#ca1254]" />
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#ca1254]">
                  About This Service
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#3b3f69] mb-6 sm:mb-8 leading-tight">
                {"Comprehensive Wellness Screening from "}
                <span className="text-[#ca1254]">
                  $199
                </span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-[#3b3f69]/80 leading-relaxed font-light mb-6 sm:mb-8">
                Our health assessments support integrated health & wellness and early detection for aged care and NDIS clients.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#3b3f69]/5 to-[#ca1254]/5 shadow-md hover:shadow-lg transition">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#3b3f69] text-white flex items-center justify-center text-sm">
                    ✔
                  </div>
                  <div>
                    <div className="font-semibold text-sm sm:text-base text-[#3b3f69]">
                      Early Detection
                    </div>
                    <div className="text-xs sm:text-sm text-[#3b3f69]/70">
                      Identify health risks before they become serious concerns
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#3b3f69]/5 to-[#ca1254]/5 shadow-md hover:shadow-lg transition">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#3b3f69] text-white flex items-center justify-center text-sm">
                    ✔
                  </div>
                  <div>
                    <div className="font-semibold text-sm sm:text-base text-[#3b3f69]">
                      Proactive Care
                    </div>
                    <div className="text-xs sm:text-sm text-[#3b3f69]/70">
                      Identify and remediate health issues before they escalate
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:block">
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(59,63,105,0.25)] lg:-skew-y-1">
                <img alt="Health Assessment" loading="lazy" width="800" height="1000" decoding="async" className="w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-auto object-cover hover:scale-105 transition duration-700" style={{ color: "transparent" }} src="/images/serviceswellnes.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: "80px 0 96px", background: "#fff", fontFamily: "'DM Sans', sans-serif" }}>
        <style dangerouslySetInnerHTML={{ __html: css0 }} />
        <div className="services-wrap">
          <div className="services-header">
            <div className="services-eyebrow">
              Services Included
            </div>
            <h2 className="services-title">
              {"What's Included in "}
              <span>
                Your Assessment
              </span>
            </h2>
          </div>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-num">
                01
              </div>
              <div className="service-text">
                Comprehensive Wellness Checks
              </div>
            </div>
            <div className="service-item">
              <div className="service-num">
                02
              </div>
              <div className="service-text">
                Vital Signs Monitoring
              </div>
            </div>
            <div className="service-item">
              <div className="service-num">
                03
              </div>
              <div className="service-text">
                Cardiovascular Risk Screening
              </div>
            </div>
            <div className="service-item">
              <div className="service-num">
                04
              </div>
              <div className="service-text">
                Diabetes Risk Screening
              </div>
            </div>
            <div className="service-item">
              <div className="service-num">
                05
              </div>
              <div className="service-text">
                Weight & Metabolic Assessments
              </div>
            </div>
            <div className="service-item">
              <div className="service-num">
                06
              </div>
              <div className="service-text">
                Clinical History Review
              </div>
            </div>
            <div className="service-item">
              <div className="service-num">
                07
              </div>
              <div className="service-text">
                Physical Wellbeing Evaluation
              </div>
            </div>
            <div className="service-item">
              <div className="service-num">
                08
              </div>
              <div className="service-text">
                Personalised Care Recommendations
              </div>
            </div>
          </div>
          <div style={{ margin: "0 -24px" }}>
            <section className="relative overflow-hidden" style={{ background: "#faf8f5", padding: "80px 0" }}>
              <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                <h2 className="text-3xl md:text-[2.6rem] font-semibold leading-tight mb-14 text-center lg:text-left" style={{ color: "#3b3f69" }}>
                  What Makes Our Assessments Different
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
                  <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div className="mb-5" style={{ color: "#ca1254" }}>
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
                      </svg>
                    </div>
                    <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                      Early Detection
                    </h3>
                    <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                      Identify health risks before they become serious concerns
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div className="mb-5" style={{ color: "#ca1254" }}>
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                      Proactive Care
                    </h3>
                    <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                      Identify and remediate health issues before they escalate
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div className="mb-5" style={{ color: "#ca1254" }}>
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l3 3L22 4" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                      </svg>
                    </div>
                    <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                      Clinical Standards
                    </h3>
                    <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                      Align with leading healthcare frameworks and TGA guidelines
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div className="mb-5" style={{ color: "#ca1254" }}>
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 010 7.75" />
                      </svg>
                    </div>
                    <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                      Expert Nursing
                    </h3>
                    <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                      Dedicated registered nurses with you at every step of the process
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-white">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-6 sm:w-8 h-px bg-[#ca1254]" />
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#ca1254]">
                Our Method
              </span>
              <div className="w-6 sm:w-8 h-px bg-[#ca1254]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3b3f69]">
              The Assessment Process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#3b3f69]/5 to-[#ca1254]/5 shadow-md hover:shadow-xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#3b3f69] text-white flex items-center justify-center font-bold text-lg sm:text-xl">
                1
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#3b3f69] mt-4">
                Booking
              </h3>
              <p className="text-xs sm:text-sm text-[#3b3f69]/70 mt-2">
                Schedule a convenient time for your assessment at home or your facility.
              </p>
            </div>
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#3b3f69]/5 to-[#ca1254]/5 shadow-md hover:shadow-xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#3b3f69] text-white flex items-center justify-center font-bold text-lg sm:text-xl">
                2
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#3b3f69] mt-4">
                Clinical Review
              </h3>
              <p className="text-xs sm:text-sm text-[#3b3f69]/70 mt-2">
                A thorough review of your medical history and current health status.
              </p>
            </div>
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#3b3f69]/5 to-[#ca1254]/5 shadow-md hover:shadow-xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#3b3f69] text-white flex items-center justify-center font-bold text-lg sm:text-xl">
                3
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#3b3f69] mt-4">
                Testing
              </h3>
              <p className="text-xs sm:text-sm text-[#3b3f69]/70 mt-2">
                Conducting vital signs, screenings, and metabolic assessments.
              </p>
            </div>
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#3b3f69]/5 to-[#ca1254]/5 shadow-md hover:shadow-xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#3b3f69] text-white flex items-center justify-center font-bold text-lg sm:text-xl">
                4
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#3b3f69] mt-4">
                Report
              </h3>
              <p className="text-xs sm:text-sm text-[#3b3f69]/70 mt-2">
                Receive a detailed health report and recommendations for further care.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-white">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="rounded-2xl sm:rounded-3xl bg-[#f4f5fa] px-6 sm:px-10 lg:px-14 py-8 sm:py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left max-w-xl">
              <p className="text-[11px] tracking-[0.3em] uppercase text-[#3b3f69]/60 mb-2">
                Get Started
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3b3f69] mb-2">
                Arrange Your Health Assessment
              </h2>
              <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                <span className="px-3 py-1 bg-[#ca1254]/10 text-[#ca1254] text-xs font-bold rounded-lg shadow-sm">
                  Starting from $199
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#3b3f69]/70">
                Contact us to arrange a health assessment or book directly online.
              </p>
            </div>
            <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
              <Link to="/booking" className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#ca1254] text-white font-semibold text-sm text-center hover:opacity-90 transition">
                Book Now
              </Link>
              <Link to="/contact" className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white text-[#3b3f69] font-semibold text-sm text-center hover:opacity-90 transition">
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
