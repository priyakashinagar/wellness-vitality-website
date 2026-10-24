import { Link } from 'react-router-dom'
import { css0 } from './styles/CorporateHealth.styles'

export default function CorporateHealth() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style dangerouslySetInnerHTML={{ __html: css0 }} />
      <div className="ch-page">
        <section className="relative min-h-[75vh] flex items-center pt-40 pb-20 bg-[#3b3f69] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />
          </div>
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#ca1254] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">
                Workplace Health
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold !text-white mb-6 leading-[1.1] tracking-tight w-full px-4 sm:px-6 lg:px-12 xl:px-16">
              Corporate & Workplace Health Services
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed font-light mb-10">
              Professional healthcare services designed for organisations and workplaces.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose/20 active:scale-[0.98] cursor-pointer bg-[#ca1254] text-white hover:brightness-110 shadow-sm border-none px-8 py-3.5 text-base" to="/booking">
                Book Now
              </Link>
              <Link className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose/20 active:scale-[0.98] cursor-pointer border-2 border-white text-white hover:bg-white hover:text-[#3b3f69] px-8 py-3.5 text-base" to="/contact">
                Enquire Now
              </Link>
            </div>
          </div>
        </section>
        <section className="ch-about-section">
          <div className="ch-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[72px] items-center">
              <div>
                <div className="ch-eyebrow" style={{ color: "#ca1254" }}>
                  <span className="ch-eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
                  Optimise Your Team
                  <span className="ch-eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
                </div>
                <h2 className="ch-section-title" style={{ fontSize: "clamp(36px, 4vw, 52px)", marginBottom: "24px" }}>
                  Optimised Workplace Vitality from
                  {" "}
                  <em style={{ color: "#ca1254", fontStyle: "italic" }}>
                    $250
                  </em>
                </h2>
                <p style={{ fontSize: "16px", lineHeight: "1.75", color: "#6b7280", fontWeight: "300", marginBottom: "32px", maxWidth: "440px" }}>
                  We provide tailored healthcare services for workplaces to support employee wellbeing and ensure a healthier work environment. Our on-site model minimises disruption while maximising health outcomes for your organisation.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="ch-benefit-tag">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.14" />
                      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                      Promotes Employee Wellbeing
                    </span>
                  </div>
                  <div className="ch-benefit-tag">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.14" />
                      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                      Improves Productivity
                    </span>
                  </div>
                  <div className="ch-benefit-tag">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.14" />
                      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                      Supports Workplace Safety
                    </span>
                  </div>
                  <div className="ch-benefit-tag">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.14" />
                      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                      Convenient On-Site Services
                    </span>
                  </div>
                </div>
              </div>
              <div className="order-first md:order-none relative">
                <div className="ch-about-image-wrap">
                  <img alt="Corporate Workplace Health" loading="lazy" width="800" height="1000" decoding="async" style={{ color: "transparent", width: "100%", height: "auto", maxHeight: "520px", display: "block", objectFit: "cover", objectPosition: "center top", transition: "transform 0.7s" }} src="/images/croprate.png" onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')} onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')} />
                </div>
                <div className="ch-stat-pill">
                  <div className="ch-stat-num">
                    4+
                  </div>
                  <div className="ch-stat-label">
                    On-site services available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ch-services-section">
          <div className="ch-container" style={{ position: "relative", zIndex: "1" }}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <div className="ch-eyebrow" style={{ color: "rgba(202,18,84,0.7)", justifyContent: "center" }}>
                <span className="ch-eyebrow-line" style={{ background: "#ca1254", opacity: "0.5" }} />
                What We Offer
                <span className="ch-eyebrow-line" style={{ background: "#ca1254", opacity: "0.5" }} />
              </div>
              <h2 className="ch-section-title" style={{ fontSize: "clamp(32px, 3.5vw, 44px)", color: "#fff", margin: "0" }}>
                Our Workplace Solutions
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="ch-service-card">
                <div className="ch-service-badge">
                  01
                </div>
                <div>
                  <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "8px" }}>
                    Workplace Health Checks
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0" }}>
                    Comprehensive health assessments for employees.
                  </p>
                </div>
              </div>
              <div className="ch-service-card">
                <div className="ch-service-badge">
                  02
                </div>
                <div>
                  <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "8px" }}>
                    Corporate IV Hydration
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0" }}>
                    IV wellness sessions to keep teams energised and performing.
                  </p>
                </div>
              </div>
              <div className="ch-service-card">
                <div className="ch-service-badge">
                  03
                </div>
                <div>
                  <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "8px" }}>
                    Drug & Alcohol Screening
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0" }}>
                    Professional and confidential workplace screening.
                  </p>
                </div>
              </div>
              <div className="ch-service-card">
                <div className="ch-service-badge">
                  04
                </div>
                <div>
                  <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "8px" }}>
                    Workplace Blood Testing
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0" }}>
                    On-site blood collection and testing services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ch-steps-section">
          <div className="ch-container">
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <div className="ch-eyebrow" style={{ color: "#ca1254", justifyContent: "center" }}>
                <span className="ch-eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
                Implementation
                <span className="ch-eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
              </div>
              <h2 className="ch-section-title" style={{ fontSize: "clamp(32px, 3.5vw, 44px)", margin: "0" }}>
                The Implementation Path
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              <div style={{ position: "relative" }}>
                <div className="ch-step-card flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="ch-step-num-bg">
                    1
                  </div>
                  <div className="ch-step-badge">
                    01
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px", position: "relative", zIndex: "1" }}>
                    Planning
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0", position: "relative", zIndex: "1" }}>
                    We collaborate with your HR team to design a targeted wellness schedule.
                  </p>
                </div>
                <div className="ch-step-connector" />
              </div>
              <div style={{ position: "relative" }}>
                <div className="ch-step-card flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="ch-step-num-bg">
                    2
                  </div>
                  <div className="ch-step-badge">
                    02
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px", position: "relative", zIndex: "1" }}>
                    On-Site Setup
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0", position: "relative", zIndex: "1" }}>
                    Our clinical team arrives and sets up a professional health station at your office.
                  </p>
                </div>
                <div className="ch-step-connector" />
              </div>
              <div style={{ position: "relative" }}>
                <div className="ch-step-card flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="ch-step-num-bg">
                    3
                  </div>
                  <div className="ch-step-badge">
                    03
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px", position: "relative", zIndex: "1" }}>
                    Engagement
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0", position: "relative", zIndex: "1" }}>
                    Employees receive professional health checks and wellness support during work hours.
                  </p>
                </div>
                <div className="ch-step-connector" />
              </div>
              <div style={{ position: "relative" }}>
                <div className="ch-step-card flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="ch-step-num-bg">
                    4
                  </div>
                  <div className="ch-step-badge">
                    04
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px", position: "relative", zIndex: "1" }}>
                    Insight
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0", position: "relative", zIndex: "1" }}>
                    Receive aggregated, confidential reporting to help inform your wellness initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden" style={{ background: "#faf8f5", padding: "80px 0" }}>
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
            <h2 className="text-3xl md:text-[2.6rem] font-semibold leading-tight mb-14 text-center lg:text-left" style={{ color: "#3b3f69" }}>
              How We May Support Your Organisation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-5" style={{ color: "#ca1254" }}>
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                  Promotes Employee Wellbeing
                </h3>
                <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                  Healthy employees are more engaged and satisfied.
                </p>
              </div>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-5" style={{ color: "#ca1254" }}>
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                  Improves Productivity
                </h3>
                <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                  Integrated health & wellness supports better performance at work.
                </p>
              </div>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-5" style={{ color: "#ca1254" }}>
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                  Supports Workplace Safety
                </h3>
                <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                  Reduce risk and liability through professional health services.
                </p>
              </div>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-5" style={{ color: "#ca1254" }}>
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                  Convenient On-Site Services
                </h3>
                <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                  Seamlessly integrated health support at your workplace, saving time and effort.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="ch-partner-section">
          <div className="ch-container">
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <div className="ch-eyebrow" style={{ color: "#ca1254", justifyContent: "center" }}>
                <span className="ch-eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
                Corporate Standards
                <span className="ch-eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
              </div>
              <h2 className="ch-section-title" style={{ fontSize: "clamp(32px, 3.5vw, 44px)", margin: "0" }}>
                Why Partner With Us?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="ch-partner-card flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="ch-partner-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: "17px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px" }}>
                  Seamless Integration
                </h3>
                <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.7", margin: "0" }}>
                  Minimal disruption to your workplace operations with efficient on-site setup.
                </p>
              </div>
              <div className="ch-partner-card flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="ch-partner-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: "17px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px" }}>
                  Professional Reporting
                </h3>
                <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.7", margin: "0" }}>
                  Receive aggregated health insights to inform your organisation wellness strategy.
                </p>
              </div>
              <div className="ch-partner-card flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="ch-partner-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: "17px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px" }}>
                  Employee Engagement
                </h3>
                <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.7", margin: "0" }}>
                  Boost morale and productivity by showing a genuine commitment to staff health.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="ch-container">
            <div className="rounded-[28px] bg-[#f5f6fa] border border-[#eaebf0] p-8 md:p-14 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 relative overflow-hidden">
              <div className="relative z-10 text-center lg:text-left">
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#3b3f69]/50 mb-2 font-bold">
                  Get Started
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#3b3f69] mb-3 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Empower Your Workforce
                </h2>
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                  <span className="text-xs font-bold text-[#ca1254] bg-[#ca1254]/10 px-2.5 py-1 rounded-md">
                    Starting from $250
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[#3b3f69]/65 font-light">
                  Get in touch for a demonstration or book your first on-site day online.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 relative z-10 w-full sm:w-auto">
                <Link to="/booking" className="px-8 py-4 rounded-xl bg-gradient-to-br from-[#ca1254] to-[#e84d8a] text-white font-semibold text-sm text-center shadow-lg shadow-[#ca1254]/30 hover:opacity-90 transition">
                  Book Now
                </Link>
                <Link to="/contact" className="px-8 py-4 rounded-xl bg-white text-[#3b3f69] font-semibold text-sm text-center border border-[#3b3f69]/15 hover:opacity-90 transition">
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
