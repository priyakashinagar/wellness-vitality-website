import { Link } from 'react-router-dom'
import { css0 } from './styles/IvInfusions.styles'

export default function IvInfusions() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style dangerouslySetInnerHTML={{ __html: css0 }} />
      <div className="iv-page">
        <section className="relative min-h-[75vh] flex items-center pt-40 pb-20 bg-[#3b3f69] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />
          </div>
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#ca1254] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">
                Nutrient Therapy
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold !text-white mb-6 leading-[1.1] tracking-tight w-full px-4 sm:px-6 lg:px-12 xl:px-16">
              IV Infusions
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed font-light mb-10">
              Targeted intravenous nutrient therapies for energy, immunity, and recovery.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose/20 active:scale-[0.98] cursor-pointer bg-[#ca1254] text-white hover:brightness-110 shadow-sm border-none px-8 py-3.5 text-base" to="/booking">
                Book IV Infusion
              </Link>
              <Link className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose/20 active:scale-[0.98] cursor-pointer border-2 border-white text-white hover:bg-white hover:text-[#3b3f69] px-8 py-3.5 text-base" to="/contact">
                Enquire Now
              </Link>
              <Link to="/custom-iv-drips" className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white/80 hover:text-white border border-white/20 hover:border-white/50 rounded-md transition-all duration-200 hover:bg-white/5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                Custom IV Drips
              </Link>
            </div>
          </div>
        </section>
        <section className="about-section">
          <div className="page-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[72px] items-center">
              <div className="order-first md:order-none relative">
                <div className="about-image-wrap">
                  <img alt="IV Infusion Wellness" loading="lazy" width="800" height="1000" decoding="async" style={{ color: "transparent", width: "100%", height: "50%", maxHeight: "520px", display: "block", objectFit: "cover", objectPosition: "center top" }} src="/images/ivinfusionservice.png" />
                </div>
                <div className="stat-pill">
                  <div className="stat-num">
                    100%
                  </div>
                  <div className="stat-label">
                    Bioavailability guaranteed
                  </div>
                </div>
              </div>
              <div>
                <div className="eyebrow" style={{ color: "#ca1254" }}>
                  <span className="eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
                  About This Service
                  <span className="eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
                </div>
                <h2 className="section-title" style={{ fontSize: "clamp(36px, 4vw, 52px)", marginBottom: "24px" }}>
                  Restorative Nutrient Infusions from
                  {" "}
                  <em style={{ color: "#ca1254", fontStyle: "italic" }}>
                    $220
                  </em>
                </h2>
                <p style={{ fontSize: "16px", lineHeight: "1.75", color: "#6b7280", fontWeight: "300", marginBottom: "32px", maxWidth: "440px" }}>
                  IV infusion therapy bypasses the digestive system entirely, delivering essential vitamins, minerals, and nutrients directly into the bloodstream for 100% bioavailability and faster results.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="stat-card">
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: "600", color: "#3b3f69", lineHeight: "1", marginBottom: "6px" }}>
                      100%
                    </div>
                    <div style={{ fontSize: "10px", color: "rgba(59,63,105,0.5)", textTransform: "uppercase", letterSpacing: "0.18em", fontWeight: "600" }}>
                      Absorption
                    </div>
                  </div>
                  <div className="stat-card">
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: "600", color: "#ca1254", lineHeight: "1", marginBottom: "6px" }}>
                      Qualified
                    </div>
                    <div style={{ fontSize: "10px", color: "rgba(202,18,84,0.5)", textTransform: "uppercase", letterSpacing: "0.18em", fontWeight: "600" }}>
                      Registered Nurses
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="nutrients-section">
          <div className="page-container" style={{ marginBottom: "48px" }}>
            <div style={{ textAlign: "center" }}>
              <div className="eyebrow" style={{ color: "#3b3f69", justifyContent: "center" }}>
                <span className="eyebrow-line" style={{ background: "#3b3f69", opacity: "0.3" }} />
                Clinical Formulations
                <span className="eyebrow-line" style={{ background: "#3b3f69", opacity: "0.3" }} />
              </div>
              <h2 className="section-title" style={{ fontSize: "clamp(32px, 3.5vw, 44px)", margin: "0 0 12px" }}>
                Nutrients Used in Infusions
              </h2>
              <p style={{ fontSize: "15px", color: "#9ca3af", fontWeight: "300", maxWidth: "520px", margin: "0 auto" }}>
                Pharmaceutical-grade vitamins, minerals, and amino acids in every formulation.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", overflow: "hidden", maskImage: "linear-gradient(to right, transparent, white 8%, white 92%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, white 8%, white 92%, transparent)" }}>
            <div style={{ display: "flex", gap: "16px" }}>
              <div className="marquee-left" style={{ display: "flex", gap: "16px", width: "max-content" }}>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Vitamin C
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Supports immune function and antioxidant protection.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Vitamin D3
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Essential for bone health and immune regulation.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Biotin
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Promotes healthy hair, skin, and metabolic function.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      B Complex
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Fuels energy production and nervous system support.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Methylcobalamin
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Active form of B12 for energy and neurological health.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Magnesium Sulphate
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Relaxes muscles, supports sleep and nerve function.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Zinc
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Crucial for immune system, wound healing and DNA synthesis.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Selenium
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Powerful antioxidant supporting thyroid and metabolic function.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Vitamin C
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Supports immune function and antioxidant protection.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Vitamin D3
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Essential for bone health and immune regulation.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Biotin
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Promotes healthy hair, skin, and metabolic function.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      B Complex
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Fuels energy production and nervous system support.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Methylcobalamin
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Active form of B12 for energy and neurological health.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Magnesium Sulphate
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Relaxes muscles, supports sleep and nerve function.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Zinc
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Crucial for immune system, wound healing and DNA synthesis.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Selenium
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Powerful antioxidant supporting thyroid and metabolic function.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Vitamin C
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Supports immune function and antioxidant protection.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Vitamin D3
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Essential for bone health and immune regulation.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Biotin
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Promotes healthy hair, skin, and metabolic function.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      B Complex
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Fuels energy production and nervous system support.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Methylcobalamin
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Active form of B12 for energy and neurological health.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Magnesium Sulphate
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Relaxes muscles, supports sleep and nerve function.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Zinc
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Crucial for immune system, wound healing and DNA synthesis.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Selenium
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Powerful antioxidant supporting thyroid and metabolic function.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Vitamin C
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Supports immune function and antioxidant protection.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Vitamin D3
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Essential for bone health and immune regulation.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Biotin
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Promotes healthy hair, skin, and metabolic function.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      B Complex
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Fuels energy production and nervous system support.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Methylcobalamin
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Active form of B12 for energy and neurological health.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Magnesium Sulphate
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Relaxes muscles, supports sleep and nerve function.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Zinc
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Crucial for immune system, wound healing and DNA synthesis.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Selenium
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Powerful antioxidant supporting thyroid and metabolic function.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <div className="marquee-right" style={{ display: "flex", gap: "16px", width: "max-content" }}>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Taurine
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Supports cardiovascular health and cellular hydration.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Arginine
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Boosts nitric oxide for circulation and recovery.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Glutamine
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Gut lining repair and immune system fuel source.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Lysine
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Collagen synthesis and immune support.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Ornithine
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Supports detoxification and growth hormone release.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Coenzyme Q10
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Vital cellular energy coenzyme powering repair and metabolism.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Alpha Lipoic Acid
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Universal antioxidant supporting nerve health and glucose metabolism.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Taurine
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Supports cardiovascular health and cellular hydration.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Arginine
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Boosts nitric oxide for circulation and recovery.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Glutamine
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Gut lining repair and immune system fuel source.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Lysine
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Collagen synthesis and immune support.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Ornithine
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Supports detoxification and growth hormone release.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Coenzyme Q10
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Vital cellular energy coenzyme powering repair and metabolism.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Alpha Lipoic Acid
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Universal antioxidant supporting nerve health and glucose metabolism.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Taurine
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Supports cardiovascular health and cellular hydration.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Arginine
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Boosts nitric oxide for circulation and recovery.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Glutamine
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Gut lining repair and immune system fuel source.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Lysine
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Collagen synthesis and immune support.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Ornithine
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Supports detoxification and growth hormone release.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Coenzyme Q10
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Vital cellular energy coenzyme powering repair and metabolism.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Alpha Lipoic Acid
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Universal antioxidant supporting nerve health and glucose metabolism.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Taurine
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Supports cardiovascular health and cellular hydration.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Arginine
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Boosts nitric oxide for circulation and recovery.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Glutamine
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Gut lining repair and immune system fuel source.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Lysine
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Collagen synthesis and immune support.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Ornithine
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Supports detoxification and growth hormone release.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(59,63,105,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b3f69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Coenzyme Q10
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Vital cellular energy coenzyme powering repair and metabolism.
                    </div>
                  </div>
                </div>
                <div className="nutrient-card">
                  <div style={{ width: "44px", height: "44px", borderRadius: "13px", flexShrink: "0", background: "rgba(202,18,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#3b3f69", marginBottom: "4px" }}>
                      Alpha Lipoic Acid
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", fontWeight: "300", lineHeight: "1.55" }}>
                      Universal antioxidant supporting nerve health and glucose metabolism.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 20px", borderRadius: "999px", background: "#fff", border: "1.5px solid #f0f0f5", fontSize: "10px", fontWeight: "700", letterSpacing: "0.28em", textTransform: "uppercase", color: "#3b3f69", boxShadow: "0 2px 12px rgba(59,63,105,0.07)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ca1254" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Highest Clinical Standards
            </div>
          </div>
        </section>
        <section className="treatments-section">
          <div className="page-container" style={{ position: "relative", zIndex: "1" }}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <div className="eyebrow" style={{ color: "#ca1254", justifyContent: "center" }}>
                <span className="eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
                Therapies & Pricing
                <span className="eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
              </div>
              <h2 className="section-title" style={{ fontSize: "clamp(32px, 3.5vw, 44px)", margin: "0" }}>
                IV Infusion Therapies
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="treatment-card">
                <div>
                  <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px", lineHeight: "1.35" }}>
                    Immune Defence IV
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0" }}>
                    High-dose vitamin C, zinc, and immune-supporting nutrients.
                  </p>
                </div>
                <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid #f5f5f7", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "10px", fontWeight: "700", color: "rgba(59,63,105,0.4)", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                    Pricing
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: "700", color: "#ca1254", background: "rgba(202,18,84,0.07)", padding: "6px 14px", borderRadius: "999px" }}>
                    $260
                  </span>
                </div>
              </div>
              <div className="treatment-card">
                <div>
                  <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px", lineHeight: "1.35" }}>
                    Energy & Performance IV
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0" }}>
                    B-complex vitamins and amino acids for sustained energy.
                  </p>
                </div>
                <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid #f5f5f7", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "10px", fontWeight: "700", color: "rgba(59,63,105,0.4)", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                    Pricing
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: "700", color: "#ca1254", background: "rgba(202,18,84,0.07)", padding: "6px 14px", borderRadius: "999px" }}>
                    $240
                  </span>
                </div>
              </div>
              <div className="treatment-card">
                <div>
                  <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px", lineHeight: "1.35" }}>
                    Beauty & Skin Glow IV
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0" }}>
                    Biotin and collagen-boosting nutrients.
                  </p>
                </div>
                <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid #f5f5f7", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "10px", fontWeight: "700", color: "rgba(59,63,105,0.4)", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                    Pricing
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: "700", color: "#ca1254", background: "rgba(202,18,84,0.07)", padding: "6px 14px", borderRadius: "999px" }}>
                    $320
                  </span>
                </div>
              </div>
              <div className="treatment-card">
                <div>
                  <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px", lineHeight: "1.35" }}>
                    Detox & Liver Support IV
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0" }}>
                    Liver-supporting antioxidants and detox nutrients.
                  </p>
                </div>
                <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid #f5f5f7", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "10px", fontWeight: "700", color: "rgba(59,63,105,0.4)", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                    Pricing
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: "700", color: "#ca1254", background: "rgba(202,18,84,0.07)", padding: "6px 14px", borderRadius: "999px" }}>
                    $300
                  </span>
                </div>
              </div>
              <div className="treatment-card">
                <div>
                  <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px", lineHeight: "1.35" }}>
                    Hydration & Recovery IV
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0" }}>
                    Electrolytes and minerals for rapid rehydration.
                  </p>
                </div>
                <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid #f5f5f7", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "10px", fontWeight: "700", color: "rgba(59,63,105,0.4)", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                    Pricing
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: "700", color: "#ca1254", background: "rgba(202,18,84,0.07)", padding: "6px 14px", borderRadius: "999px" }}>
                    $220
                  </span>
                </div>
              </div>
              <div className="treatment-card">
                <div>
                  <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px", lineHeight: "1.35" }}>
                    Athlete Recovery IV
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0" }}>
                    Targeted nutrients to accelerate muscle recovery.
                  </p>
                </div>
                <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid #f5f5f7", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "10px", fontWeight: "700", color: "rgba(59,63,105,0.4)", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                    Pricing
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: "700", color: "#ca1254", background: "rgba(202,18,84,0.07)", padding: "6px 14px", borderRadius: "999px" }}>
                    $260
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 bg-[#ca1254] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white -skew-x-12 translate-x-1/2" />
          </div>
          <div className="w-full max-w-4xl mx-auto px-6 relative z-10 text-center">
            <div className="eyebrow" style={{ color: "#fff", justifyContent: "center" }}>
              <span className="eyebrow-line" style={{ background: "#fff", opacity: "0.4" }} />
              Personalised Therapy
              <span className="eyebrow-line" style={{ background: "#fff", opacity: "0.4" }} />
            </div>
            <h2 className="section-title text-white" style={{ fontSize: "clamp(28px, 3.5vw, 36px)", marginBottom: "16px" }}>
              Looking for Custom IV Drips?
            </h2>
            <p style={{ fontSize: "15.5px", color: "rgba(255,255,255,0.85)", fontWeight: "300", marginBottom: "32px", maxWidth: "520px", margin: "0 auto 32px" }}>
              Explore personalised IV formulations and flexible pricing options tailored to your needs.
            </p>
            <Link to="/custom-iv-drips" className="inline-block px-10 py-4 rounded-xl bg-white text-[#ca1254] font-bold text-sm shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto min-w-[240px]">
              View Custom IV Drips
            </Link>
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
                How It Works
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="step-card flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="step-bg-num">
                  01
                </div>
                <div className="step-badge">
                  01
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#3b3f69", marginBottom: "10px", position: "relative", zIndex: "1" }}>
                  Consultation
                </h3>
                <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0", position: "relative", zIndex: "1" }}>
                  Initial clinical assessment with our registered nurse to determine suitability and goals.
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
                  Preparation
                </h3>
                <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0", position: "relative", zIndex: "1" }}>
                  Custom formulation of your nutrient therapy based on your individual requirements.
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
                  Administration
                </h3>
                <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0", position: "relative", zIndex: "1" }}>
                  Professional administration by a qualified nurse in a relaxed environment.
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
                  Recovery
                </h3>
                <p style={{ fontSize: "13.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.65", margin: "0", position: "relative", zIndex: "1" }}>
                  Relax as nutrients are delivered directly into your bloodstream.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="benefits-section">
          <div className="page-container" style={{ position: "relative", zIndex: "1" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="eyebrow" style={{ color: "#ca1254" }}>
                  <span className="eyebrow-line" style={{ background: "#ca1254", opacity: "0.4" }} />
                  Clinical Advantages
                </div>
                <h2 className="section-title" style={{ fontSize: "clamp(34px, 4.5vw, 54px)", color: "#3b3f69", marginBottom: "36px" }}>
                  {"How IV Therapy "}
                  <br />
                  <em style={{ color: "#ca1254", fontStyle: "italic" }}>
                    Supports Your Wellness
                  </em>
                </h2>
                <div className="flex flex-col">
                  <div className="benefit-row">
                    <div className="benefit-check">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "18px", fontWeight: "700", color: "#3b3f69", marginBottom: "6px" }}>
                        Direct Bioavailability
                      </div>
                      <div style={{ fontSize: "14.5px", color: "#64748b", fontWeight: "300", lineHeight: "1.6" }}>
                        Nutrients bypass the digestive system for immediate 100% absorption.
                      </div>
                    </div>
                  </div>
                  <div className="benefit-row">
                    <div className="benefit-check">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "18px", fontWeight: "700", color: "#3b3f69", marginBottom: "6px" }}>
                        Rapid Rehydration
                      </div>
                      <div style={{ fontSize: "14.5px", color: "#64748b", fontWeight: "300", lineHeight: "1.6" }}>
                        Instantly restores fluid balance and essential electrolytes at a cellular level.
                      </div>
                    </div>
                  </div>
                  <div className="benefit-row">
                    <div className="benefit-check">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "18px", fontWeight: "700", color: "#3b3f69", marginBottom: "6px" }}>
                        Cellular Energy
                      </div>
                      <div style={{ fontSize: "14.5px", color: "#64748b", fontWeight: "300", lineHeight: "1.6" }}>
                        Coenzymes and vitamins fuel ATP production for sustained natural energy.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="stat-block">
                  <div className="stat-icon-wrap">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(24px, 5vw, 36px)", fontWeight: "600", color: "#3b3f69", lineHeight: "1", marginBottom: "8px", wordBreak: "break-word" }}>
                    60m
                  </div>
                  <div style={{ fontSize: "11px", fontWeight: "700", color: "rgba(59,63,105,0.45)", textTransform: "uppercase", letterSpacing: "0.18em", lineHeight: "1.4" }}>
                    Typical Session
                  </div>
                </div>
                <div className="stat-block">
                  <div className="stat-icon-wrap">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10A8 8 0 004 12c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(24px, 5vw, 36px)", fontWeight: "600", color: "#3b3f69", lineHeight: "1", marginBottom: "8px", wordBreak: "break-word" }}>
                    100%
                  </div>
                  <div style={{ fontSize: "11px", fontWeight: "700", color: "rgba(59,63,105,0.45)", textTransform: "uppercase", letterSpacing: "0.18em", lineHeight: "1.4" }}>
                    Absorption Rate
                  </div>
                </div>
                <div className="stat-block">
                  <div className="stat-icon-wrap">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <polyline points="17 11 19 13 23 9" />
                    </svg>
                  </div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(24px, 5vw, 36px)", fontWeight: "600", color: "#3b3f69", lineHeight: "1", marginBottom: "8px", wordBreak: "break-word" }}>
                    Registered
                  </div>
                  <div style={{ fontSize: "11px", fontWeight: "700", color: "rgba(59,63,105,0.45)", textTransform: "uppercase", letterSpacing: "0.18em", lineHeight: "1.4" }}>
                    Nursing Staff
                  </div>
                </div>
                <div className="stat-block">
                  <div className="stat-icon-wrap">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(24px, 5vw, 36px)", fontWeight: "600", color: "#3b3f69", lineHeight: "1", marginBottom: "8px", wordBreak: "break-word" }}>
                    17+
                  </div>
                  <div style={{ fontSize: "11px", fontWeight: "700", color: "rgba(59,63,105,0.45)", textTransform: "uppercase", letterSpacing: "0.18em", lineHeight: "1.4" }}>
                    Key Nutrients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden" style={{ background: "#faf8f5", padding: "80px 0" }}>
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
            <h2 className="text-3xl md:text-[2.6rem] font-semibold leading-tight mb-14 text-center lg:text-left" style={{ color: "#3b3f69" }}>
              Is IV Therapy for You?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-5" style={{ color: "#ca1254" }}>
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                  Active Professionals
                </h3>
                <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                  To support energy levels and cognitive function during high-demand periods.
                </p>
              </div>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-5" style={{ color: "#ca1254" }}>
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                  Athletes & Fitness Enthusiasts
                </h3>
                <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                  For rapid rehydration and muscle recovery post-exertion.
                </p>
              </div>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-5" style={{ color: "#ca1254" }}>
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                  Frequent Travellers
                </h3>
                <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                  To combat jet lag, support the immune system and restore hydration.
                </p>
              </div>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-5" style={{ color: "#ca1254" }}>
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                  Overall Wellness Seekers
                </h3>
                <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                  Maintaining optimal nutrient levels for vitality and long-term health.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-14 sm:py-16 bg-white">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="bg-[#3b3f69] rounded-xl sm:rounded-2xl px-6 sm:px-10 py-6 sm:py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-1">
                  Ready to Book Your IV Infusion?
                </h2>
                <p className="text-sm sm:text-base text-white/80 max-w-xl">
                  Book your IV infusion through our secure booking system.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Link to="/booking" className="w-full sm:w-auto px-6 py-3 rounded-md bg-[#ca1254] text-white font-semibold text-sm text-center hover:opacity-90 transition">
                  Book IV Infusion
                </Link>
                <Link to="/contact" className="w-full sm:w-auto px-6 py-3 rounded-md bg-white text-[#3b3f69] font-semibold text-sm text-center hover:opacity-90 transition">
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
