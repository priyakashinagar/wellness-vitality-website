import { Link } from 'react-router-dom'
import { css0 } from './styles/TeethWhitening.styles'

export default function TeethWhitening() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style dangerouslySetInnerHTML={{ __html: css0 }} />
      <div className="tw-page">
        <section className="relative min-h-[75vh] flex items-center pt-40 pb-20 bg-[#3b3f69] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />
          </div>
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#ca1254] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">
                Aesthetic Care
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold !text-white mb-6 leading-[1.1] tracking-tight w-full px-4 sm:px-6 lg:px-12 xl:px-16">
              Professional Teeth Whitening
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed font-light mb-10">
              Safe and effective clinical teeth whitening for a brighter, more confident smile.
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
        <section className="tw-about-section">
          <div className="tw-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
              <div style={{ position: "relative" }}>
                <div className="tw-about-image-wrap">
                  <img alt="Professional Teeth Whitening Results" loading="lazy" width="800" height="1000" decoding="async" style={{ color: "transparent", width: "100%", height: "auto", display: "block", objectFit: "cover" }} src="/images/hometeethwhite.png" />
                </div>
                <div className="tw-stat-pill">
                  <div className="tw-stat-num">
                    8+
                  </div>
                  <div className="tw-stat-label">
                    Shades whiter in one visit
                  </div>
                </div>
              </div>
              <div>
                <div className="tw-eyebrow" style={{ color: "#ca1254" }}>
                  <span className="tw-eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
                  Premium Aesthetic
                  <span className="tw-eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
                </div>
                <h2 className="tw-section-title" style={{ fontSize: "clamp(36px, 4vw, 52px)", marginBottom: "24px" }}>
                  Clinical Grade Whitening from
                  {" "}
                  <em style={{ color: "#ca1254", fontStyle: "italic" }}>
                    $250
                  </em>
                </h2>
                <p style={{ fontSize: "16px", lineHeight: "1.75", color: "#6b7280", fontWeight: "300", marginBottom: "32px", maxWidth: "440px" }}>
                  Wellness Vitality Australia utilizes a professional-grade cosmetic teeth whitening accelerator, considered one of the highest-end portable systems on the market. Featuring advanced Ultrasonic technology and dual LED heads, our system optimizes gel penetration while reducing chair time.
                </p>
                <div style={{ padding: "20px", background: "#fef2f2", borderRadius: "16px", border: "1px solid #fee2e2", marginBottom: "32px" }}>
                  <p style={{ fontSize: "13px", color: "#b91c1c", fontWeight: "600", display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Safety Precaution
                  </p>
                  <p style={{ fontSize: "12px", color: "#7f1d1d", lineHeight: "1.5" }}>
                    Our system's ultrasound feature is highly effective, however, we disable this specific mode for patients with cardiac pacemakers as a standard clinical safety protocol.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="tw-benefit-tag">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.14" />
                      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                      Ultrasound Technology
                    </span>
                  </div>
                  <div className="tw-benefit-tag">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.14" />
                      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                      Dual-Client Treatment
                    </span>
                  </div>
                  <div className="tw-benefit-tag">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.14" />
                      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                      Up to 5 to 14 Shades Lighter
                    </span>
                  </div>
                  <div className="tw-benefit-tag">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.14" />
                      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                      Reduced Sensitivity
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tw-stats-section">
          <div className="tw-stats-mesh" />
          <div className="tw-container" style={{ position: "relative", zIndex: "1" }}>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <div className="tw-eyebrow" style={{ color: "#ca1254", justifyContent: "center" }}>
                <span className="tw-eyebrow-line" style={{ background: "#ca1254", opacity: "0.5" }} />
                The Whitening Difference
                <span className="tw-eyebrow-line" style={{ background: "#ca1254", opacity: "0.5" }} />
              </div>
              <h2 className="tw-section-title" style={{ fontSize: "clamp(32px, 3.5vw, 42px)", color: "#3b3f69", margin: "0" }}>
                {"Real Results, "}
                <em style={{ color: "#ca1254", fontStyle: "italic" }}>
                  Instantly
                </em>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="tw-stat-card">
                <div className="tw-stat-icon-wrap">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                  </svg>
                </div>
                <div className="tw-stat-big">
                  5-14
                </div>
                <div className="tw-stat-desc">
                  Shades Lighter
                </div>
              </div>
              <div className="tw-stat-card">
                <div className="tw-stat-icon-wrap">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="tw-stat-big">
                  Ultrasonic
                </div>
                <div className="tw-stat-desc">
                  Technology
                </div>
              </div>
              <div className="tw-stat-card">
                <div className="tw-stat-icon-wrap">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="tw-stat-big">
                  Dual
                </div>
                <div className="tw-stat-desc">
                  Treatment Heads
                </div>
              </div>
            </div>
            <div style={{ marginTop: "40px", textAlign: "center" }}>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", fontStyle: "italic", maxWidth: "600px", margin: "0 auto" }}>
                *Actual results vary based on gel concentration, enamel condition, existing stains, and lifestyle factors.
              </p>
            </div>
          </div>
        </section>
        <section className="tw-steps-section">
          <div className="tw-container">
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <div className="tw-eyebrow" style={{ color: "#ca1254", justifyContent: "center" }}>
                <span className="tw-eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
                The Process
                <span className="tw-eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
              </div>
              <h2 className="tw-section-title" style={{ fontSize: "clamp(32px, 3.5vw, 44px)", margin: "0" }}>
                The Whitening Experience
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              <div style={{ position: "relative" }}>
                <div className="tw-step-card flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="tw-step-num-bg">
                    1
                  </div>
                  <div className="tw-step-badge">
                    01
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px", position: "relative", zIndex: "1" }}>
                    Consultation
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0", position: "relative", zIndex: "1" }}>
                    Our clinical team assesses your teeth and discusses your whitening goals.
                  </p>
                </div>
                <div className="tw-step-connector" />
              </div>
              <div style={{ position: "relative" }}>
                <div className="tw-step-card flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="tw-step-num-bg">
                    2
                  </div>
                  <div className="tw-step-badge">
                    02
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px", position: "relative", zIndex: "1" }}>
                    Preparation
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0", position: "relative", zIndex: "1" }}>
                    Gingival protection is applied to ensure a safe and comfortable experience.
                  </p>
                </div>
                <div className="tw-step-connector" />
              </div>
              <div style={{ position: "relative" }}>
                <div className="tw-step-card flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="tw-step-num-bg">
                    3
                  </div>
                  <div className="tw-step-badge">
                    03
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px", position: "relative", zIndex: "1" }}>
                    Whitening
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0", position: "relative", zIndex: "1" }}>
                    Professional-grade whitening gel is applied and activated using LED technology.
                  </p>
                </div>
                <div className="tw-step-connector" />
              </div>
              <div style={{ position: "relative" }}>
                <div className="tw-step-card flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="tw-step-num-bg">
                    4
                  </div>
                  <div className="tw-step-badge">
                    04
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px", position: "relative", zIndex: "1" }}>
                    The Reveal
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0", position: "relative", zIndex: "1" }}>
                    Experience an immediate, noticeably brighter smile in just one session.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden" style={{ background: "#faf8f5", padding: "80px 0" }}>
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
            <h2 className="text-3xl md:text-[2.6rem] font-semibold leading-tight mb-14 text-center lg:text-left" style={{ color: "#3b3f69" }}>
              The Perfect Smile for You
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-5" style={{ color: "#ca1254" }}>
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.7.7m13.16 13.16.7.7M3 12h1m16 0h1M4.22 19.78l.7-.7m13.16-13.16.7-.7M12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                </div>
                <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                  Special Occasions
                </h3>
                <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                  Perfect for weddings, anniversaries, or professional photoshoots.
                </p>
              </div>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-5" style={{ color: "#ca1254" }}>
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 8h1a4 4 0 010 8h-1" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
                  </svg>
                </div>
                <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                  Coffee & Tea Drinkers
                </h3>
                <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                  Effective removal of extrinsic stains from daily habits.
                </p>
              </div>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-5" style={{ color: "#ca1254" }}>
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                  Confidence Boost
                </h3>
                <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                  For anyone looking to enhance their smile and overall self-esteem.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 bg-white border-t border-gray-50">
          <div className="tw-container">
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <div className="tw-eyebrow" style={{ color: "#ca1254", justifyContent: "center" }}>
                <span className="tw-eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
                Investment
                <span className="tw-eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
              </div>
              <h2 className="tw-section-title" style={{ fontSize: "clamp(32px, 3.5vw, 44px)", margin: "0" }}>
                Whitening Packages
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div style={{ padding: "40px 32px", borderRadius: "24px", background: "#fff", border: "1.5px solid #f0f0f5", textAlign: "center", boxShadow: "none", position: "relative" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#3b3f69", marginBottom: "16px" }}>
                  Single Session
                </h3>
                <div style={{ fontSize: "48px", fontWeight: "600", fontFamily: "'Cormorant Garamond', serif", color: "#ca1254", marginBottom: "24px" }}>
                  $250
                </div>
                <ul style={{ listStyle: "none", padding: "0", margin: "0 0 32px", textAlign: "left" }}>
                  <li style={{ fontSize: "14px", color: "#6b7280", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.14" />
                      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}
                    60-minute session
                  </li>
                  <li style={{ fontSize: "14px", color: "#6b7280", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.14" />
                      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}
                    Standard whitening
                  </li>
                  <li style={{ fontSize: "14px", color: "#6b7280", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.14" />
                      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}
                    Post-care guide
                  </li>
                </ul>
                <Link to="/booking" style={{ display: "block", padding: "14px", borderRadius: "10px", background: "rgba(59,63,105,0.05)", color: "#3b3f69", fontWeight: "700", fontSize: "14px", textDecoration: "none", transition: "all 0.2s" }}>
                  Book This Plan
                </Link>
              </div>
              <div style={{ padding: "40px 32px", borderRadius: "24px", background: "#3b3f69", border: "1.5px solid #f0f0f5", textAlign: "center", boxShadow: "0 20px 40px rgba(59,63,105,0.15)", position: "relative" }}>
                <div style={{ position: "absolute", top: "0", left: "50%", transform: "translate(-50%, -50%)", background: "#ca1254", color: "#fff", fontSize: "10px", fontWeight: "800", padding: "6px 16px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Most Popular
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#fff", marginBottom: "16px" }}>
                  Triple Session
                </h3>
                <div style={{ fontSize: "48px", fontWeight: "600", fontFamily: "'Cormorant Garamond', serif", color: "#fff", marginBottom: "24px" }}>
                  $259
                </div>
                <ul style={{ listStyle: "none", padding: "0", margin: "0 0 32px", textAlign: "left" }}>
                  <li style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.14" />
                      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}
                    3x intensive rounds
                  </li>
                  <li style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.14" />
                      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}
                    Deep stain removal
                  </li>
                  <li style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.14" />
                      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}
                    Maximum results
                  </li>
                </ul>
                <Link to="/booking" style={{ display: "block", padding: "14px", borderRadius: "10px", background: "#ca1254", color: "#fff", fontWeight: "700", fontSize: "14px", textDecoration: "none", transition: "all 0.2s" }}>
                  Book This Plan
                </Link>
              </div>
              <div style={{ padding: "40px 32px", borderRadius: "24px", background: "#fff", border: "1.5px solid #f0f0f5", textAlign: "center", boxShadow: "none", position: "relative" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#3b3f69", marginBottom: "16px" }}>
                  Couples Session
                </h3>
                <div style={{ fontSize: "48px", fontWeight: "600", fontFamily: "'Cormorant Garamond', serif", color: "#ca1254", marginBottom: "24px" }}>
                  $499
                </div>
                <ul style={{ listStyle: "none", padding: "0", margin: "0 0 32px", textAlign: "left" }}>
                  <li style={{ fontSize: "14px", color: "#6b7280", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.14" />
                      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}
                    Simultaneous treatment
                  </li>
                  <li style={{ fontSize: "14px", color: "#6b7280", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.14" />
                      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}
                    Two people, one visit
                  </li>
                  <li style={{ fontSize: "14px", color: "#6b7280", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#ca1254" fillOpacity="0.14" />
                      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ca1254" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}
                    Perfect for pairs
                  </li>
                </ul>
                <Link to="/booking" style={{ display: "block", padding: "14px", borderRadius: "10px", background: "rgba(59,63,105,0.05)", color: "#3b3f69", fontWeight: "700", fontSize: "14px", textDecoration: "none", transition: "all 0.2s" }}>
                  Book This Plan
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section style={{ padding: "48px 0", background: "#fff" }}>
          <div className="tw-container">
            <div className="rounded-[28px] bg-[#f5f6fa] border border-[#eaebf0] p-8 md:p-14 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 relative overflow-hidden">
              <div className="relative z-10 text-center lg:text-left">
                <p style={{ fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(59,63,105,0.5)", marginBottom: "8px", fontWeight: "700" }}>
                  Get Started
                </p>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: "600", color: "#3b3f69", marginBottom: "10px", lineHeight: "1.2" }}>
                  Ready to Enhance Your Smile?
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", color: "#ca1254", background: "rgba(202,18,84,0.1)", padding: "4px 10px", borderRadius: "6px" }}>
                    Single – $250
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: "700", color: "#ca1254", background: "rgba(202,18,84,0.1)", padding: "4px 10px", borderRadius: "6px" }}>
                    Triple – $259
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: "700", color: "#ca1254", background: "rgba(202,18,84,0.1)", padding: "4px 10px", borderRadius: "6px" }}>
                    Couples – $499
                  </span>
                </div>
                <p style={{ fontSize: "15px", color: "rgba(59,63,105,0.65)", fontWeight: "300" }}>
                  Book online or contact us to begin your whitening journey.
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
