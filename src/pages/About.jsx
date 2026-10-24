import { Link } from 'react-router-dom'
import Newsletter from '../components/home/Newsletter'

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-40 pb-20 bg-[#3b3f69] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />
        </div>
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 text-center reveal-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#ca1254] animate-pulse" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] !text-white">
              Expert Care
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold !text-white mb-6 leading-[1.15] tracking-tight">
            {"Mobile Healthcare & "}
            <br className="hidden md:block" />
            <span className="text-[#ca1254] font-semibold">
              IV Wellness
            </span>
            {" Services"}
          </h1>
          <p className="text-lg !text-white w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 leading-relaxed font-light">
            Personalised healthcare centred around you.
          </p>
          <div className="mt-10 w-20 h-1 bg-white/10 mx-auto rounded-full overflow-hidden">
            <div className="h-full bg-[#ca1254] w-1/3 animate-[slide_2s_infinite_linear]" />
          </div>
        </div>
      </section>
      <section className="relative py-16 bg-gradient-to-b from-white to-[#f8f9fc] overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#ca1254]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3b3f69]/5 rounded-full blur-3xl" />
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group reveal-left">
              <div className="aspect-[5/4] md:aspect-[11/10] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <img alt="Healthcare service" loading="lazy" width="800" height="600" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ color: "transparent" }} src="/images/aboutus.png" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg px-6 py-4 border border-gray-100">
                <p className="text-sm text-gray-500">
                  Trusted Care
                </p>
                <p className="text-lg font-semibold text-[#3b3f69]">
                  Registered Nurses
                </p>
              </div>
            </div>
            <div className="reveal-right delay-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-[#ca1254]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#ca1254]">
                  About Us
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold text-[#3b3f69] mb-6 leading-tight">
                Personalised Healthcare,
                <br />
                <span className="text-[#ca1254] font-medium">
                  Centred Around You
                </span>
              </h2>
              <div className="space-y-5 text-base md:text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  Wellness Vitality Australia provides professional healthcare and wellness services delivered by qualified registered nurses, focused on personalised treatments and evidence-based care.
                </p>
                <p>
                  Through our mobile services, we ensure you receive high-quality care in the comfort of your home, workplace, aged care facility or NDIS residence.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
                  <p className="text-sm font-medium text-[#3b3f69]">
                    Personalised Care
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
                  <p className="text-sm font-medium text-[#3b3f69]">
                    Mobile Services
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
                  <p className="text-sm font-medium text-[#3b3f69]">
                    Clinical Excellence
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
                  <p className="text-sm font-medium text-[#3b3f69]">
                    Trusted Professionals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden" style={{ background: "#faf8f5", padding: "80px 0" }}>
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <h2 className="text-3xl md:text-[2.6rem] font-semibold leading-tight mb-14" style={{ color: "#3b3f69" }}>
            The Wellness Vitality Difference
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
                All services are delivered by registered nurses who meet strict Australian registration standards.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mb-5" style={{ color: "#ca1254" }}>
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                Evidence-Based Care
              </h3>
              <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                The foundation of our care is based on rigorously researched clinical guidelines and protocols.
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
                Mobile First Approach
              </h3>
              <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                We come to your home, workplace, aged care facility or NDIS residence, clinical care on your terms.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mb-5" style={{ color: "#ca1254" }}>
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-[15px] sm:text-base font-bold mb-2" style={{ color: "#3b3f69" }}>
                Consults as Conversations
              </h3>
              <p className="text-[13.5px] leading-[1.7] font-light" style={{ color: "#6b7280" }}>
                We listen and discuss. Together, we ensure our patients are empowered to make the right choices.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-14 bg-white overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose/[0.02] rounded-full blur-[120px] pointer-events-none translate-x-1/3 translate-y-1/3" />
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group reveal-left delay-100">
              <div className="aspect-square rounded-[1rem] overflow-hidden shadow-2xl relative">
                <img alt="Mobile Healthcare" loading="lazy" width="800" height="800" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" style={{ color: "transparent" }} src="/images/mobilecare.png" />
                <div className="absolute inset-0 bg-indigo/5 group-hover:opacity-0 transition-opacity duration-500" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 max-w-[280px]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-rose/10 flex items-center justify-center text-rose">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-indigo uppercase tracking-wider">
                    Mobile First
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed font-light">
                  Delivering clinical care directly to your doorstep, workplace, or preferred facility.
                </p>
              </div>
            </div>
            <div className="reveal-right delay-200">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-px bg-rose" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-rose">
                  Unmatched Flexibility
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-indigo mb-8 leading-tight">
                {"Mobile Healthcare "}
                <br />
                <span className="italic font-light text-rose">
                  & Convenience
                </span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  We prioritize your convenience and comfort. Wellness Vitality Australia brings professional clinical care to you, ensuring you receive the support you need in the most convenient location.
                </p>
                <p>
                  Our mobile healthcare services allow patients to receive professional services in homes, workplaces, aged care facilities and NDIS residences.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose" />
                  <span className="text-sm font-medium text-indigo/80">
                    Private Homes
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose" />
                  <span className="text-sm font-medium text-indigo/80">
                    Workplaces
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose" />
                  <span className="text-sm font-medium text-indigo/80">
                    Aged Care Facilities
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose" />
                  <span className="text-sm font-medium text-indigo/80">
                    NDIS Residences
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="booking" className="py-14 bg-[#3b3f69] relative overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 text-center relative">
          <div className="absolute -top-10 left-10 w-32 h-32 bg-[#ca1254]/20 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl opacity-50" />
          <div className="relative z-10">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Take the first step
            </div>
            <h2 className="text-3xl md:text-6xl font-serif font-bold mb-6 text-white leading-tight">
              Ready to reclaim your
              {" "}
              <span className="text-[#ca1254]">
                vitality?
              </span>
            </h2>
            <p className="text-base md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              Book your session with qualified healthcare professionals and experience personalised, patient-centred care delivered to you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose/20 active:scale-[0.98] cursor-pointer bg-[#ca1254] text-white hover:brightness-110 shadow-sm border-none w-full sm:w-auto px-10 py-4 text-base font-bold bg-[#ca1254] text-white !rounded-none hover:bg-[#a8103f] shadow-[0_10px_30px_rgba(202,18,84,0.3)] transition-all duration-300 font-serif" to="/booking">
                Book a Session
              </Link>
              <Link className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose/20 active:scale-[0.98] cursor-pointer border-2 border-white text-white hover:bg-white hover:text-[#3b3f69] w-full sm:w-auto px-10 py-4 text-base font-bold !rounded-none transition-all duration-300 font-serif" to="/contact">
                Talk to our team
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 text-center">
          <p className="text-xs text-gray-400 italic w-full leading-relaxed">
            <span className="font-bold text-gray-500 not-italic block mb-2 uppercase tracking-widest text-[10px]">
              Clinical Disclaimer
            </span>
            All services are administered by qualified healthcare professionals following appropriate clinical protocols. Individual suitability is determined through clinical assessment. Results may vary and are dependent on individual health requirements.
          </p>
        </div>
      </section>
    </main>
  )
}
