import { Link } from 'react-router-dom'
import { css0 } from './styles/AgedCareNdis.styles'

export default function AgedCareNdis() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style dangerouslySetInnerHTML={{ __html: css0 }} />
      <div className="ac-page">
        <section className="relative min-h-[75vh] flex items-center pt-40 pb-20 bg-[#3b3f69] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />
          </div>
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#ca1254] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">
                Aged Care & NDIS
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold !text-white mb-6 leading-[1.1] tracking-tight w-full px-4 sm:px-6 lg:px-12 xl:px-16">
              Aged Care & NDIS Nursing Services
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed font-light mb-10">
              Professional nursing care tailored to support ongoing healthcare needs.
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[72px] items-center">
              <div className="order-first md:order-none relative">
                <div className="about-image-wrap">
                  <img alt="Compassionate Nursing Care" loading="lazy" width="800" height="1000" decoding="async" style={{ color: "transparent", width: "100%", height: "auto", display: "block", objectFit: "cover" }} src="/images/serviceagedcare.png" />
                </div>
                <div className="stat-pill">
                  <div className="stat-num">
                    100%
                  </div>
                  <div className="stat-label">
                    Registered nurses
                  </div>
                </div>
              </div>
              <div>
                <div className="eyebrow" style={{ color: "#ca1254" }}>
                  <span className="eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
                  Trusted Care
                  <span className="eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
                </div>
                <h2 className="section-title" style={{ fontSize: "clamp(36px, 4vw, 52px)", marginBottom: "24px" }}>
                  Dignified Clinical Nursing from
                  {" "}
                  <em style={{ color: "#ca1254", fontStyle: "italic" }}>
                    $160
                  </em>
                </h2>
                <p style={{ fontSize: "16px", lineHeight: "1.75", color: "#6b7280", fontWeight: "300", marginBottom: "8px", maxWidth: "440px" }}>
                  Reliable and compassionate nursing services for aged care residents and NDIS participants, supporting daily healthcare needs with a focus on dignity and quality of life.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8">
                  <div className="stat-card">
                    <div className="text-2xl sm:text-3xl font-semibold text-[#3b3f69] leading-none mb-1.5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      24/7
                    </div>
                    <div className="text-[10px] text-[#3b3f69]/50 uppercase tracking-widest font-semibold">
                      Support Potential
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="text-2xl sm:text-3xl font-semibold text-[#ca1254] leading-none mb-1.5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      Qualified
                    </div>
                    <div className="text-[10px] text-[#ca1254]/50 uppercase tracking-widest font-semibold">
                      Registered Nurses
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sb-section">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <div>
                <div className="eyebrow" style={{ color: "#3b3f69" }}>
                  <span className="eyebrow-line" style={{ background: "#3b3f69", opacity: "0.3" }} />
                  Services Included
                </div>
                <h2 className="section-title" style={{ fontSize: "clamp(28px, 3vw, 38px)" }}>
                  Clinical Nursing Services
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
                  <div className="service-row">
                    <div className="service-icon-wrap">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Medication administration
                  </div>
                  <div className="service-row">
                    <div className="service-icon-wrap">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Wound care and dressings
                  </div>
                  <div className="service-row">
                    <div className="service-icon-wrap">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Catheter care
                  </div>
                  <div className="service-row">
                    <div className="service-icon-wrap">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Continence assessments
                  </div>
                  <div className="service-row">
                    <div className="service-icon-wrap">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Pressure injury risk management
                  </div>
                  <div className="service-row">
                    <div className="service-icon-wrap">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Chronic disease monitoring
                  </div>
                  <div className="service-row">
                    <div className="service-icon-wrap">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Post-hospital care
                  </div>
                </div>
              </div>
              <div>
                <div className="eyebrow" style={{ color: "#ca1254" }}>
                  <span className="eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
                  Why Choose Us
                </div>
                <h2 className="section-title" style={{ fontSize: "clamp(28px, 3vw, 38px)" }}>
                  The Benefits of Our Care
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "8px" }}>
                  <div className="benefit-card">
                    <div className="benefit-icon-wrap">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "15px", fontWeight: "700", color: "#3b3f69", marginBottom: "5px" }}>
                        Professional Clinical Support
                      </div>
                      <div style={{ fontSize: "13px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65" }}>
                        Registered nurses providing expert nursing care.
                      </div>
                    </div>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon-wrap">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "15px", fontWeight: "700", color: "#3b3f69", marginBottom: "5px" }}>
                        Improved Quality of Care
                      </div>
                      <div style={{ fontSize: "13px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65" }}>
                        Evidence-based care tailored to individual health needs.
                      </div>
                    </div>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon-wrap">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "15px", fontWeight: "700", color: "#3b3f69", marginBottom: "5px" }}>
                        Reduced Hospital Visits
                      </div>
                      <div style={{ fontSize: "13px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65" }}>
                        Proactive management to minimise unnecessary hospitalisations.
                      </div>
                    </div>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon-wrap">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "15px", fontWeight: "700", color: "#3b3f69", marginBottom: "5px" }}>
                        Ongoing Health Management
                      </div>
                      <div style={{ fontSize: "13px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65" }}>
                        Consistent monitoring and support for long-term health.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="process-section">
          <div className="page-container" style={{ position: "relative", zIndex: "1" }}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <div className="eyebrow" style={{ color: "#ca1254", justifyContent: "center" }}>
                <span className="eyebrow-line" style={{ background: "#ca1254", opacity: "0.5" }} />
                The Process
                <span className="eyebrow-line" style={{ background: "#ca1254", opacity: "0.5" }} />
              </div>
              <h2 className="section-title" style={{ fontSize: "clamp(32px, 3.5vw, 44px)", color: "#fff", margin: "0" }}>
                Our Care Process
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="step-card flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="step-bg-num">
                  1
                </div>
                <div className="step-badge">
                  01
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#fff", marginBottom: "10px", position: "relative", zIndex: "1" }}>
                  Initial Inquiry
                </h3>
                <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.55)", fontWeight: "300", lineHeight: "1.65", margin: "0", position: "relative", zIndex: "1" }}>
                  Contact us to discuss your specific nursing requirements.
                </p>
              </div>
              <div className="step-card flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="step-bg-num">
                  2
                </div>
                <div className="step-badge">
                  02
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#fff", marginBottom: "10px", position: "relative", zIndex: "1" }}>
                  Clinical Assessment
                </h3>
                <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.55)", fontWeight: "300", lineHeight: "1.65", margin: "0", position: "relative", zIndex: "1" }}>
                  Our head nurse will conduct a thorough assessment of care needs.
                </p>
              </div>
              <div className="step-card flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="step-bg-num">
                  3
                </div>
                <div className="step-badge">
                  03
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#fff", marginBottom: "10px", position: "relative", zIndex: "1" }}>
                  Care Planning
                </h3>
                <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.55)", fontWeight: "300", lineHeight: "1.65", margin: "0", position: "relative", zIndex: "1" }}>
                  Development of a tailored clinical care plan in coordination with your health team.
                </p>
              </div>
              <div className="step-card flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="step-bg-num">
                  4
                </div>
                <div className="step-badge">
                  04
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#fff", marginBottom: "10px", position: "relative", zIndex: "1" }}>
                  Dedicated Care
                </h3>
                <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.55)", fontWeight: "300", lineHeight: "1.65", margin: "0", position: "relative", zIndex: "1" }}>
                  Consistent, professional nursing support delivered at your location.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden" style={{ background: "#faf8f5", padding: "80px 0" }}>
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
            <h2 className="text-3xl md:text-[2.6rem] font-semibold leading-tight mb-14 text-center lg:text-left" style={{ color: "#3b3f69" }}>
              Dedicated to Clinical Excellence
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-5" style={{ color: "#ca1254" }}>
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </div>
                <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                  Dignified Care
                </h3>
                <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                  Focusing on independence and dignity in every clinical interaction.
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
                  Collaborative Approach
                </h3>
                <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                  Working closely with GPs and specialists to ensure care continuity.
                </p>
              </div>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-5" style={{ color: "#ca1254" }}>
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                  Community Focused
                </h3>
                <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                  Building trusted relationships with residents and families.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-20 bg-white">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="bg-[#f4f5fa] rounded-2xl sm:rounded-3xl px-6 sm:px-10 lg:px-14 py-8 sm:py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left max-w-lg">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#ca1254] mb-2">
                  Get Support
                </p>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3b3f69] mb-2">
                  Personalised Nursing Support
                </h2>
                <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                  <span className="px-3 py-1 bg-[#ca1254]/10 text-[#ca1254] text-xs font-bold rounded-lg shadow-sm">
                    Starting from $160
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[#3b3f69]/70">
                  Contact us for personalised nursing support or book a consultation online.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Link to="/booking" className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#3b3f69] text-white font-semibold text-sm text-center hover:opacity-90 transition">
                  Book Now
                </Link>
                <Link to="/contact" className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#ca1254] text-white font-semibold text-sm text-center hover:opacity-90 transition">
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
