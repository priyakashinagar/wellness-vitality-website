import { Link } from 'react-router-dom'
import { css0 } from './styles/BloodCollection.styles'

export default function BloodCollection() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style dangerouslySetInnerHTML={{ __html: css0 }} />
      <div className="bc-page">
        <section className="relative min-h-[75vh] flex items-center pt-40 pb-20 bg-[#3b3f69] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />
          </div>
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#ca1254] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">
                Pathology Services
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold !text-white mb-6 leading-[1.1] tracking-tight w-full px-4 sm:px-6 lg:px-12 xl:px-16">
              Blood Collection Services
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed font-light mb-10">
              Professional blood collection services combined with a mini wellness assessment delivered to your location.
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
        <section className="about-section">
          <div className="page-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
              <div>
                <div className="eyebrow" style={{ color: "#ca1254" }}>
                  <span className="eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
                  Professional Pathology
                  <span className="eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
                </div>
                <h2 className="section-title" style={{ fontSize: "clamp(36px, 4vw, 52px)", marginBottom: "24px" }}>
                  {"Clinical Pathology & "}
                  <br />
                  <em style={{ color: "#ca1254", fontStyle: "italic" }}>
                    Wellness Assessment
                  </em>
                  {" from $149"}
                </h2>
                <p style={{ fontSize: "16px", lineHeight: "1.75", color: "#6b7280", fontWeight: "300", marginBottom: "24px", maxWidth: "440px" }}>
                  Wellness Vitality Australia offers professional blood collection services combined with a mini wellness assessment for $149.
                </p>
                <p style={{ fontSize: "14px", fontWeight: "600", color: "#3b3f69", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Included Observations:
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
                  <div className="benefit-tag">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.12" />
                      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                      Blood pressure monitoring
                    </span>
                  </div>
                  <div className="benefit-tag">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.12" />
                      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                      Heart rate & rhythm regularity
                    </span>
                  </div>
                  <div className="benefit-tag">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.12" />
                      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                      Oxygen saturation levels
                    </span>
                  </div>
                  <div className="benefit-tag">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.12" />
                      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                      Temperature & Respiratory rate
                    </span>
                  </div>
                </div>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#6b7280", fontWeight: "300", maxWidth: "440px" }}>
                  This service provides a convenient snapshot of your current health and wellbeing while ensuring a safe and professional clinical experience.
                </p>
              </div>
              <div className="order-first md:order-last relative">
                <div className="about-image-wrap">
                  <img alt="Professional Blood Collection" loading="lazy" width="800" height="1000" decoding="async" style={{ color: "transparent", width: "100%", height: "auto", display: "block", objectFit: "cover" }} src="/images/blood-collection.png" />
                </div>
                <div className="stat-pill">
                  <div className="stat-num">
                    Qualified
                  </div>
                  <div className="stat-label">
                    Registered nurses only
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden" style={{ background: "#faf8f5", padding: "80px 0" }}>
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
            <h2 className="text-3xl md:text-[2.6rem] font-semibold leading-tight mb-14 text-center lg:text-left" style={{ color: "#3b3f69" }}>
              Where We Collect
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-5" style={{ color: "#ca1254" }}>
                  <div className="w-10 h-10" style={{ color: "#ca1254" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                  Home Blood Collection
                </h3>
                <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                  Comfortable collection in your own residence.
                </p>
              </div>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-5" style={{ color: "#ca1254" }}>
                  <div className="w-10 h-10" style={{ color: "#ca1254" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                  Workplace Testing
                </h3>
                <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                  Convenient services for employees on-site.
                </p>
              </div>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-5" style={{ color: "#ca1254" }}>
                  <div className="w-10 h-10" style={{ color: "#ca1254" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                  Aged Care Services
                </h3>
                <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                  Dedicated collection for aged care residents.
                </p>
              </div>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-5" style={{ color: "#ca1254" }}>
                  <div className="w-10 h-10" style={{ color: "#ca1254" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 00-3-3.87" />
                      <path d="M16 3.13a4 4 0 010 7.75" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                  NDIS Support
                </h3>
                <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                  Accessible pathology for NDIS participants.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="steps-section">
          <div className="page-container">
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <div className="eyebrow" style={{ color: "#ca1254", justifyContent: "center" }}>
                <span className="eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
                The Process
                <span className="eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
              </div>
              <h2 className="section-title" style={{ fontSize: "clamp(32px, 3.5vw, 44px)", margin: "0" }}>
                Simple Four-Step Journey
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="step-card flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="step-bg-num">
                  01
                </div>
                <div className="step-badge">
                  01
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px", position: "relative", zIndex: "1" }}>
                  Request Service
                </h3>
                <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0", position: "relative", zIndex: "1" }}>
                  Book online or call us with your pathology request details.
                </p>
              </div>
              <div className="step-card flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="step-bg-num">
                  02
                </div>
                <div className="step-badge">
                  02
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px", position: "relative", zIndex: "1" }}>
                  Confirm Booking
                </h3>
                <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0", position: "relative", zIndex: "1" }}>
                  Secure a convenient time for our mobile nurse to visit.
                </p>
              </div>
              <div className="step-card flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="step-bg-num">
                  03
                </div>
                <div className="step-badge">
                  03
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px", position: "relative", zIndex: "1" }}>
                  Home Visit
                </h3>
                <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0", position: "relative", zIndex: "1" }}>
                  Professional blood collection in the comfort of your home.
                </p>
              </div>
              <div className="step-card flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="step-bg-num">
                  04
                </div>
                <div className="step-badge">
                  04
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px", position: "relative", zIndex: "1" }}>
                  Laboratory
                </h3>
                <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0", position: "relative", zIndex: "1" }}>
                  Samples are safely transported directly to the pathology lab.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="advantages-section">
          <div className="page-container">
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <div className="eyebrow" style={{ color: "#ca1254", justifyContent: "center" }}>
                <span className="eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
                Mobile Advantages
                <span className="eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
              </div>
              <h2 className="section-title" style={{ fontSize: "clamp(32px, 3.5vw, 44px)", margin: "0" }}>
                Why Choose Mobile Collection?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="advantage-card">
                <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ca1254", flexShrink: "0" }} />
                  Home Comfort
                </h3>
                <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.7", margin: "0", paddingLeft: "16px" }}>
                  Eliminate the stress of travel and waiting rooms by having our nurse visit you.
                </p>
              </div>
              <div className="advantage-card">
                <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ca1254", flexShrink: "0" }} />
                  Mobility Support
                </h3>
                <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.7", margin: "0", paddingLeft: "16px" }}>
                  Ideal for those with limited mobility or recovering from surgery.
                </p>
              </div>
              <div className="advantage-card">
                <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ca1254", flexShrink: "0" }} />
                  Workplace Efficiency
                </h3>
                <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.7", margin: "0", paddingLeft: "16px" }}>
                  Minimal disruption to your workday with on-site collection for employees.
                </p>
              </div>
              <div className="advantage-card">
                <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ca1254", flexShrink: "0" }} />
                  Aged Care Specialisation
                </h3>
                <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.7", margin: "0", paddingLeft: "16px" }}>
                  Gentle and professional collection tailored for elderly patients.
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
                  Quick Booking
                </p>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3b3f69] mb-2">
                  Book a Blood Collection Service
                </h2>
                <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                  <span className="px-3 py-1 bg-[#ca1254]/10 text-[#ca1254] text-xs font-bold rounded-lg shadow-sm">
                    Starting from $149
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[#3b3f69]/70">
                  Book a convenient blood collection today or enquire with our team.
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
      </div>
    </main>
  )
}
