import { Link } from 'react-router-dom'
import { css0 } from './styles/CustomIvDrips.styles'

export default function CustomIvDrips() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style dangerouslySetInnerHTML={{ __html: css0 }} />
      <div className="cdp">
        <section className="relative min-h-[75vh] flex items-center pt-40 pb-20 bg-[#3b3f69] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />
          </div>
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#ca1254] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">
                Tailored Therapy
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold !text-white mb-6 leading-[1.1] tracking-tight w-full px-4 sm:px-6 lg:px-12 xl:px-16">
              Custom IV Drips & Pricing
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed font-light mb-10">
              Designing a clinical formulation based entirely on your unique requirements. Choose from our comprehensive library of vitamins, minerals and amino acids.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose/20 active:scale-[0.98] cursor-pointer bg-[#ca1254] text-white hover:brightness-110 shadow-sm border-none px-8 py-3.5 text-base" to="/contact">
                Enquire Now
              </Link>
              <Link className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose/20 active:scale-[0.98] cursor-pointer border-2 border-white text-white hover:bg-white hover:text-[#3b3f69] px-8 py-3.5 text-base" to="/services/iv-infusions">
                Back to IV Infusions
              </Link>
            </div>
          </div>
        </section>
        <section className="pkg-section">
          <div className="cdp-wrap">
            <div className="pkg-header">
              <span className="eyebrow" style={{ justifyContent: "center" }}>
                <span className="eyebrow-line" />
                Scientifically Formulated
                <span className="eyebrow-line" />
              </span>
              <h2 className="section-title" style={{ fontSize: "clamp(36px, 4vw, 52px)" }}>
                Infusion Menu
              </h2>
              <p style={{ fontSize: "15.5px", color: "#9ca3af", fontWeight: "300", marginTop: "10px", maxWidth: "460px", margin: "10px auto 0" }}>
                Our most popular nutrient combinations for targeted recovery and performance.
              </p>
            </div>
            <div className="pkg-grid">
              <div className="pkg-card">
                <div>
                  <div className="pkg-icon">
                    $
                  </div>
                  <h3 className="pkg-name">
                    Hydration Revival Infusion
                  </h3>
                  <p className="pkg-desc">
                    Vitamin C, Magnesium, B-Complex & Zinc
                  </p>
                </div>
                <div className="pkg-footer">
                  <div>
                    <span className="pkg-price-label">
                      Pricing
                    </span>
                    <span className="pkg-price">
                      $280
                    </span>
                  </div>
                  <span className="pkg-badge">
                    All Inclusive
                  </span>
                </div>
              </div>
              <div className="pkg-card">
                <div>
                  <div className="pkg-icon">
                    $
                  </div>
                  <h3 className="pkg-name">
                    Anti-Inflammatory Infusion
                  </h3>
                  <p className="pkg-desc">
                    Vitamin C, Magnesium, B-Complex, Zinc & Taurine
                  </p>
                </div>
                <div className="pkg-footer">
                  <div>
                    <span className="pkg-price-label">
                      Pricing
                    </span>
                    <span className="pkg-price">
                      $350
                    </span>
                  </div>
                  <span className="pkg-badge">
                    All Inclusive
                  </span>
                </div>
              </div>
              <div className="pkg-card">
                <div>
                  <div className="pkg-icon">
                    $
                  </div>
                  <h3 className="pkg-name">
                    Immune Defence Infusion
                  </h3>
                  <p className="pkg-desc">
                    Vitamin C, B-Complex, Zinc & Selenium
                  </p>
                </div>
                <div className="pkg-footer">
                  <div>
                    <span className="pkg-price-label">
                      Pricing
                    </span>
                    <span className="pkg-price">
                      $430
                    </span>
                  </div>
                  <span className="pkg-badge">
                    All Inclusive
                  </span>
                </div>
              </div>
              <div className="pkg-card">
                <div>
                  <div className="pkg-icon">
                    $
                  </div>
                  <h3 className="pkg-name">
                    Recovery & Performance Infusion
                  </h3>
                  <p className="pkg-desc">
                    Vitamin C, Magnesium, B-complex, Vitamin B12, Taurine & GB Shot
                  </p>
                </div>
                <div className="pkg-footer">
                  <div>
                    <span className="pkg-price-label">
                      Pricing
                    </span>
                    <span className="pkg-price">
                      $455
                    </span>
                  </div>
                  <span className="pkg-badge">
                    All Inclusive
                  </span>
                </div>
              </div>
              <div className="pkg-card">
                <div>
                  <div className="pkg-icon">
                    $
                  </div>
                  <h3 className="pkg-name">
                    Calm & Restore Infusion
                  </h3>
                  <p className="pkg-desc">
                    Magnesium, GABA, Taurine
                  </p>
                </div>
                <div className="pkg-footer">
                  <div>
                    <span className="pkg-price-label">
                      Pricing
                    </span>
                    <span className="pkg-price">
                      $350
                    </span>
                  </div>
                  <span className="pkg-badge">
                    All Inclusive
                  </span>
                </div>
              </div>
              <div className="pkg-card">
                <div>
                  <div className="pkg-icon">
                    $
                  </div>
                  <h3 className="pkg-name">
                    Liver Health Support Infusion
                  </h3>
                  <p className="pkg-desc">
                    Vitamin C, B-Complex, Glycine & B12
                  </p>
                </div>
                <div className="pkg-footer">
                  <div>
                    <span className="pkg-price-label">
                      Pricing
                    </span>
                    <span className="pkg-price">
                      $375
                    </span>
                  </div>
                  <span className="pkg-badge">
                    All Inclusive
                  </span>
                </div>
              </div>
              <div className="pkg-card">
                <div>
                  <div className="pkg-icon">
                    $
                  </div>
                  <h3 className="pkg-name">
                    Hair, Skin & Nails Infusion
                  </h3>
                  <p className="pkg-desc">
                    Vitamin C, Magnesium, B-Complex, Zinc & Biotin
                  </p>
                </div>
                <div className="pkg-footer">
                  <div>
                    <span className="pkg-price-label">
                      Pricing
                    </span>
                    <span className="pkg-price">
                      $395
                    </span>
                  </div>
                  <span className="pkg-badge">
                    All Inclusive
                  </span>
                </div>
              </div>
              <div className="pkg-card">
                <div>
                  <div className="pkg-icon">
                    $
                  </div>
                  <h3 className="pkg-name">
                    The Glow Infusion
                  </h3>
                  <p className="pkg-desc">
                    Vitamin C, B-Complex & Zinc
                  </p>
                </div>
                <div className="pkg-footer">
                  <div>
                    <span className="pkg-price-label">
                      Pricing
                    </span>
                    <span className="pkg-price">
                      $420
                    </span>
                  </div>
                  <span className="pkg-badge">
                    All Inclusive
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="addons-section">
          <div className="cdp-wrap">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="eyebrow" style={{ justifyContent: "center" }}>
                <span className="eyebrow-line" />
                Enhance Your Drip
                <span className="eyebrow-line" />
              </span>
              <h2 className="section-title" style={{ fontSize: "clamp(30px, 3vw, 40px)", margin: "0 0 16px" }}>
                Service Add-ons & Boosters
              </h2>
              <p style={{ fontSize: "15.5px", color: "#6b7280", fontWeight: "300", lineHeight: "1.7", maxWidth: "580px", margin: "0 auto" }}>
                Complement any IV therapy with targeted boosters — curated by our clinicians to amplify your results.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
              <div className="bg-white rounded-[24px] p-8 md:p-10 border border-[#ebebeb] shadow-sm">
                <h3 className="text-2xl font-bold font-serif text-[#3b3f69] mb-6 pb-4 border-b-2 border-[#f5f5f7]">
                  IV ADD ONS
                </h3>
                <div className="flex flex-col">
                  <div className="flex justify-between items-end py-3.5 border-b border-gray-100 last:border-0 group">
                    <span className="text-[#3b3f69] font-medium text-[15px] group-hover:text-[#ca1254] transition-colors">
                      Vitamin C
                    </span>
                    <div className="flex-1 mx-4 border-b border-dotted border-gray-300 relative -top-1.5 opacity-40" />
                    <span className="text-[#ca1254] font-bold text-[15px]">
                      From $54
                    </span>
                  </div>
                  <div className="flex justify-between items-end py-3.5 border-b border-gray-100 last:border-0 group">
                    <span className="text-[#3b3f69] font-medium text-[15px] group-hover:text-[#ca1254] transition-colors">
                      Magnesium
                    </span>
                    <div className="flex-1 mx-4 border-b border-dotted border-gray-300 relative -top-1.5 opacity-40" />
                    <span className="text-[#ca1254] font-bold text-[15px]">
                      $35
                    </span>
                  </div>
                  <div className="flex justify-between items-end py-3.5 border-b border-gray-100 last:border-0 group">
                    <span className="text-[#3b3f69] font-medium text-[15px] group-hover:text-[#ca1254] transition-colors">
                      Zinc
                    </span>
                    <div className="flex-1 mx-4 border-b border-dotted border-gray-300 relative -top-1.5 opacity-40" />
                    <span className="text-[#ca1254] font-bold text-[15px]">
                      $54
                    </span>
                  </div>
                  <div className="flex justify-between items-end py-3.5 border-b border-gray-100 last:border-0 group">
                    <span className="text-[#3b3f69] font-medium text-[15px] group-hover:text-[#ca1254] transition-colors">
                      B complex
                    </span>
                    <div className="flex-1 mx-4 border-b border-dotted border-gray-300 relative -top-1.5 opacity-40" />
                    <span className="text-[#ca1254] font-bold text-[15px]">
                      $54
                    </span>
                  </div>
                  <div className="flex justify-between items-end py-3.5 border-b border-gray-100 last:border-0 group">
                    <span className="text-[#3b3f69] font-medium text-[15px] group-hover:text-[#ca1254] transition-colors">
                      B Complex Plus
                    </span>
                    <div className="flex-1 mx-4 border-b border-dotted border-gray-300 relative -top-1.5 opacity-40" />
                    <span className="text-[#ca1254] font-bold text-[15px]">
                      $64
                    </span>
                  </div>
                  <div className="flex justify-between items-end py-3.5 border-b border-gray-100 last:border-0 group">
                    <span className="text-[#3b3f69] font-medium text-[15px] group-hover:text-[#ca1254] transition-colors">
                      Selenium
                    </span>
                    <div className="flex-1 mx-4 border-b border-dotted border-gray-300 relative -top-1.5 opacity-40" />
                    <span className="text-[#ca1254] font-bold text-[15px]">
                      $70
                    </span>
                  </div>
                  <div className="flex justify-between items-end py-3.5 border-b border-gray-100 last:border-0 group">
                    <span className="text-[#3b3f69] font-medium text-[15px] group-hover:text-[#ca1254] transition-colors">
                      Glycine
                    </span>
                    <div className="flex-1 mx-4 border-b border-dotted border-gray-300 relative -top-1.5 opacity-40" />
                    <span className="text-[#ca1254] font-bold text-[15px]">
                      $64
                    </span>
                  </div>
                  <div className="flex justify-between items-end py-3.5 border-b border-gray-100 last:border-0 group">
                    <span className="text-[#3b3f69] font-medium text-[15px] group-hover:text-[#ca1254] transition-colors">
                      GB Shot
                    </span>
                    <div className="flex-1 mx-4 border-b border-dotted border-gray-300 relative -top-1.5 opacity-40" />
                    <span className="text-[#ca1254] font-bold text-[15px]">
                      $64
                    </span>
                  </div>
                  <div className="flex justify-between items-end py-3.5 border-b border-gray-100 last:border-0 group">
                    <span className="text-[#3b3f69] font-medium text-[15px] group-hover:text-[#ca1254] transition-colors">
                      SD Shot
                    </span>
                    <div className="flex-1 mx-4 border-b border-dotted border-gray-300 relative -top-1.5 opacity-40" />
                    <span className="text-[#ca1254] font-bold text-[15px]">
                      $70
                    </span>
                  </div>
                  <div className="flex justify-between items-end py-3.5 border-b border-gray-100 last:border-0 group">
                    <span className="text-[#3b3f69] font-medium text-[15px] group-hover:text-[#ca1254] transition-colors">
                      Taurine
                    </span>
                    <div className="flex-1 mx-4 border-b border-dotted border-gray-300 relative -top-1.5 opacity-40" />
                    <span className="text-[#ca1254] font-bold text-[15px]">
                      $70
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-[#3b3f69] rounded-[24px] p-8 md:p-10 shadow-lg">
                <h3 className="text-2xl font-bold font-serif text-white mb-6 pb-4 border-b-2 border-white/10">
                  BOOSTERS MENU
                </h3>
                <div className="flex flex-col">
                  <div className="py-4 border-b border-white/10 last:border-0 group">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-white font-semibold text-[16px] tracking-wide group-hover:text-white/80 transition-colors">
                        Vitamin B12 Shot
                      </h4>
                      <div className="flex-1 mx-4 border-b border-dotted border-white/20 relative -top-1.5" />
                      <span className="text-[#ca1254] font-bold text-[16px] ml-4">
                        $59
                      </span>
                    </div>
                    <p className="text-white/60 text-[13.5px] font-light leading-relaxed m-0 max-w-[90%]">
                      Increase metabolism, boost energy, regulate mood, sleep and appetite
                    </p>
                  </div>
                  <div className="py-4 border-b border-white/10 last:border-0 group">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-white font-semibold text-[16px] tracking-wide group-hover:text-white/80 transition-colors">
                        Biotin B7
                      </h4>
                      <div className="flex-1 mx-4 border-b border-dotted border-white/20 relative -top-1.5" />
                      <span className="text-[#ca1254] font-bold text-[16px] ml-4">
                        $54
                      </span>
                    </div>
                    <p className="text-white/60 text-[13.5px] font-light leading-relaxed m-0 max-w-[90%]">
                      The elixir for your hair, skin and nails to thrive
                    </p>
                  </div>
                  <div className="py-4 border-b border-white/10 last:border-0 group">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-white font-semibold text-[16px] tracking-wide group-hover:text-white/80 transition-colors">
                        COQ10
                      </h4>
                      <div className="flex-1 mx-4 border-b border-dotted border-white/20 relative -top-1.5" />
                      <span className="text-[#ca1254] font-bold text-[16px] ml-4">
                        $54
                      </span>
                    </div>
                    <p className="text-white/60 text-[13.5px] font-light leading-relaxed m-0 max-w-[90%]">
                      Support exercise performance and recovery while helping to reduce fatigue and enhance endurance
                    </p>
                  </div>
                  <div className="py-4 border-b border-white/10 last:border-0 group">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-white font-semibold text-[16px] tracking-wide group-hover:text-white/80 transition-colors">
                        Vitamin D
                      </h4>
                      <div className="flex-1 mx-4 border-b border-dotted border-white/20 relative -top-1.5" />
                      <span className="text-[#ca1254] font-bold text-[16px] ml-4">
                        $99
                      </span>
                    </div>
                    <p className="text-white/60 text-[13.5px] font-light leading-relaxed m-0 max-w-[90%]">
                      Helps your immune system against viruses & builds density in your bones
                    </p>
                  </div>
                  <div className="py-4 border-b border-white/10 last:border-0 group">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-white font-semibold text-[16px] tracking-wide group-hover:text-white/80 transition-colors">
                        ALA Complex
                      </h4>
                      <div className="flex-1 mx-4 border-b border-dotted border-white/20 relative -top-1.5" />
                      <span className="text-[#ca1254] font-bold text-[16px] ml-4">
                        $58
                      </span>
                    </div>
                    <p className="text-white/60 text-[13.5px] font-light leading-relaxed m-0 max-w-[90%]">
                      Powerful antioxidant that supports cellular energy, nerve health and metabolic balance while helping protect the body from oxidative stress
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-section">
          <div className="cdp-wrap">
            <div className="cta-box">
              <div style={{ position: "relative", zIndex: "1" }}>
                <div className="cta-eyebrow">
                  <span className="cta-eyebrow-line" />
                  Begin Your Transformation
                </div>
                <h2 className="cta-heading">
                  Ready to Design
                  <br className="hidden md:block" />
                  {" Your Custom Drip?"}
                </h2>
                <p className="cta-sub">
                  Our clinicians are ready to assist you in formulating a nutrient therapy protocol that perfectly matches your vitality goals.
                </p>
              </div>
              <div className="cta-buttons">
                <Link className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose/20 active:scale-[0.98] cursor-pointer bg-[#ca1254] text-white hover:brightness-110 shadow-sm border-none cta-btn-primary" to="/booking">
                  Book Consultation
                </Link>
                <Link className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose/20 active:scale-[0.98] cursor-pointer border-2 border-[#3b3f69] text-[#3b3f69] hover:bg-[#3b3f69] hover:text-white cta-btn-outline" to="/contact">
                  Enquire via Email
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
