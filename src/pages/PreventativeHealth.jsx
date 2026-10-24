import { Link } from 'react-router-dom'
import { css0 } from './styles/PreventativeHealth.styles'

export default function PreventativeHealth() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style dangerouslySetInnerHTML={{ __html: css0 }} />
      <div className="ph-page">
        <section className="relative min-h-[75vh] flex items-center pt-40 pb-20 bg-[#3b3f69] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />
          </div>
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#ca1254] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">
                Health & Wellness Support
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold !text-white mb-6 leading-[1.1] tracking-tight w-full px-4 sm:px-6 lg:px-12 xl:px-16">
              Integrated Health & Wellness
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed font-light mb-10">
              Supporting long-term health through vitamin therapies and lifestyle guidance.
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
              <div className="relative">
                <div className="about-image-wrap">
                  <img alt="Wellness and Vitamin Support" loading="lazy" width="800" height="1000" decoding="async" style={{ color: "transparent", width: "100%", height: "auto", display: "block", objectFit: "cover" }} src="/images/assessment.png" />
                </div>
                <div className="about-stat-pill">
                  <div className="about-stat-num">
                    100%
                  </div>
                  <div className="about-stat-label">
                    Personalised care plans
                  </div>
                </div>
              </div>
              <div>
                <div className="eyebrow" style={{ color: "#ca1254" }}>
                  <span className="eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
                  Our Philosophy
                  <span className="eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
                </div>
                <h2 className="section-title" style={{ fontSize: "clamp(36px, 4vw, 52px)", marginBottom: "24px" }}>
                  Proactive Vitality Support from
                  {" "}
                  <em style={{ color: "#ca1254", fontStyle: "italic" }}>
                    $180
                  </em>
                </h2>
                <p style={{ fontSize: "16px", lineHeight: "1.75", color: "#6b7280", fontWeight: "300", marginBottom: "32px", maxWidth: "440px" }}>
                  Our health & wellness services focus on improving overall wellbeing through targeted vitamin support and professional lifestyle guidance. A proactive approach that starts from within.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="benefit-tag">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.12" />
                      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                      Improved energy levels
                    </span>
                  </div>
                  <div className="benefit-tag">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.12" />
                      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                      Supports immune function
                    </span>
                  </div>
                  <div className="benefit-tag">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.12" />
                      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                      Promotes long-term wellbeing
                    </span>
                  </div>
                  <div className="benefit-tag">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.12" />
                      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                      Personalised health support
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services-section">
          <div className="page-container">
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <div className="eyebrow" style={{ color: "#3b3f69", justifyContent: "center" }}>
                <span className="eyebrow-line" style={{ background: "#3b3f69", opacity: "0.3" }} />
                Services Included
                <span className="eyebrow-line" style={{ background: "#3b3f69", opacity: "0.3" }} />
              </div>
              <h2 className="section-title" style={{ fontSize: "clamp(32px, 3.5vw, 44px)", margin: "0" }}>
                Wellness Support
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="service-card">
                <div className="service-card-icon" style={{ background: "rgba(202,18,84,0.08)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#3b3f69", marginBottom: "6px" }}>
                  Vitamin & Nutrient Support
                </h3>
                <p style={{ fontSize: "13px", color: "#9ca3af", marginBottom: "20px", fontWeight: "400" }}>
                  Targeted injections to replenish what your body needs most.
                </p>
                <div>
                  <div className="service-list-item">
                    <span className="service-dot" style={{ background: "#ca1254" }} />
                    B12 injections
                  </div>
                  <div className="service-list-item">
                    <span className="service-dot" style={{ background: "#ca1254" }} />
                    Vitamin D injections
                  </div>
                  <div className="service-list-item">
                    <span className="service-dot" style={{ background: "#ca1254" }} />
                    Amino acid injections
                  </div>
                  <div className="service-list-item">
                    <span className="service-dot" style={{ background: "#ca1254" }} />
                    Vitality & energy injections
                  </div>
                </div>
              </div>
              <div className="service-card">
                <div className="service-card-icon" style={{ background: "rgba(59,63,105,0.08)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#3b3f69", marginBottom: "6px" }}>
                  Lifestyle Support
                </h3>
                <p style={{ fontSize: "13px", color: "#9ca3af", marginBottom: "20px", fontWeight: "400" }}>
                  Holistic guidance to align your habits with your health goals.
                </p>
                <div>
                  <div className="service-list-item">
                    <span className="service-dot" style={{ background: "#3b3f69" }} />
                    Nutrition guidance
                  </div>
                  <div className="service-list-item">
                    <span className="service-dot" style={{ background: "#3b3f69" }} />
                    Supplement advice
                  </div>
                  <div className="service-list-item">
                    <span className="service-dot" style={{ background: "#3b3f69" }} />
                    Lifestyle consultations
                  </div>
                  <div className="service-list-item">
                    <span className="service-dot" style={{ background: "#3b3f69" }} />
                    Health optimisation programmes
                  </div>
                </div>
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
                Your Path to Wellness
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              <div style={{ position: "relative" }}>
                <div className="step-card flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="step-num-bg">
                    1
                  </div>
                  <div className="step-badge">
                    01
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px", position: "relative", zIndex: "1" }}>
                    Initial Consultation
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0", position: "relative", zIndex: "1" }}>
                    Discuss your health goals and lifestyle to identify key areas for improvement.
                  </p>
                </div>
                <div className="step-connector" />
              </div>
              <div style={{ position: "relative" }}>
                <div className="step-card flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="step-num-bg">
                    2
                  </div>
                  <div className="step-badge">
                    02
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px", position: "relative", zIndex: "1" }}>
                    Nutrient Review
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0", position: "relative", zIndex: "1" }}>
                    Clinical assessment of your vitamin and nutrient requirements.
                  </p>
                </div>
                <div className="step-connector" />
              </div>
              <div style={{ position: "relative" }}>
                <div className="step-card flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="step-num-bg">
                    3
                  </div>
                  <div className="step-badge">
                    03
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px", position: "relative", zIndex: "1" }}>
                    Personalised Plan
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0", position: "relative", zIndex: "1" }}>
                    Creation of a tailored vitamin therapy and lifestyle programme.
                  </p>
                </div>
                <div className="step-connector" />
              </div>
              <div style={{ position: "relative" }}>
                <div className="step-card flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="step-num-bg">
                    4
                  </div>
                  <div className="step-badge">
                    04
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px", position: "relative", zIndex: "1" }}>
                    Ongoing Support
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0", position: "relative", zIndex: "1" }}>
                    Regular check-ins and adjustments to keep you on your wellness path.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden" style={{ background: "#faf8f5", padding: "80px 0" }}>
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
            <h2 className="text-3xl md:text-[2.6rem] font-semibold leading-tight mb-14 text-center lg:text-left" style={{ color: "#3b3f69" }}>
              Our Approach to Health
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-5" style={{ color: "#ca1254" }}>
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                    <circle cx="12" cy="12" r="3" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                  </svg>
                </div>
                <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                  Nutrient Optimisation
                </h3>
                <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                  Targeting specific deficiencies to enhance your daily vitality.
                </p>
              </div>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-5" style={{ color: "#ca1254" }}>
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                  Integrated Wellness
                </h3>
                <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                  A proactive approach to health that reduces long-term risks.
                </p>
              </div>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-5" style={{ color: "#ca1254" }}>
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                  Personalised Wellness
                </h3>
                <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                  Evidence-based advice tailored to your unique lifestyle goals.
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
                  Start Your Wellness Journey
                </h2>
                <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                  <span className="px-3 py-1 bg-[#ca1254]/10 text-[#ca1254] text-xs font-bold rounded-lg shadow-sm">
                    Starting from $180
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[#3b3f69]/70">
                  Get in touch to start your wellness journey or book your initial consultation.
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
