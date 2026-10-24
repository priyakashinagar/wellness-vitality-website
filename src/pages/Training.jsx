import { Link } from 'react-router-dom'

export default function Training() {
  return (
    <div className="bg-[#f5f4f0] text-[#3b3f69] overflow-x-hidden min-h-screen">
      <section className="relative pt-32 md:pt-30 pb-16 md:pb-24 bg-[#3b3f69] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />
        </div>
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 text-center reveal-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#ca1254] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">
              Accredited Programmes
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold !text-white mb-8 leading-[1.2] tracking-tight">
            Training &
            <span className="text-[#ca1254]">
              {" Services"}
            </span>
          </h1>
          <p className="text-xl text-white w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 leading-relaxed font-light">
            Professional programmes designed for individuals, workplaces, and community environments, built around saving lives.
          </p>
          <div className="mt-10 md:mt-14 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#ca1254] hover:bg-[#a30f44] text-white px-8 md:px-12 py-3.5 md:py-4 rounded font-medium transition shadow-lg shadow-rose/10">
              {"Get in Touch "}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <div id="programmes" className="w-full flex flex-col pb-16">
        <section className="w-full py-20 md:py-32">
          <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 relative group">
              <div className="relative aspect-square md:aspect-[5/4] w-full rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(59,63,105,0.08)] border border-[#3b3f69]/10">
                <img alt="CPR & First Aid Training" loading="lazy" decoding="async" className="object-cover transition-transform duration-700 group-hover:scale-105" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent" }} sizes="(max-width: 1024px) 100vw, 50vw" src="/images/cprimage.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(59,63,105,0.05)] to-transparent pointer-events-none" />
              </div>
              <div className="absolute -z-10 w-48 h-48 rounded-full bg-[#ca1254]/10 blur-3xl -bottom-10 -left-10" />
              <div className="absolute -z-10 w-48 h-48 rounded-full bg-[#3b3f69]/5 blur-3xl -top-10 -right-10" />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex items-end gap-4 mb-10 relative">
                <div className="text-[120px] font-bold text-[#3b3f69]/[0.03] leading-none absolute -top-16 -left-6 tracking-tighter select-none">
                  01
                </div>
                <div className="relative z-10">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[#ca1254] font-semibold mb-4">
                    {"Category "}
                    01
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-[#3b3f69] leading-[1.15]">
                    CPR & First Aid Training
                  </h2>
                  <div className="w-16 h-1 bg-[#ca1254] mt-8" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-5 p-5 md:p-6 rounded-2xl bg-white border border-[#3b3f69]/5 shadow-sm hover:shadow-[0_8px_30px_rgba(59,63,105,0.08)] transition-all hover:-translate-y-1 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#ca1254]/5 flex items-center justify-center text-[#ca1254] group-hover:bg-[#ca1254] group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-pulse" aria-hidden="true">
                      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                      <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#3b3f69] mb-1.5 group-hover:text-[#ca1254] transition-colors">
                      HLTAID009 – Provide CPR
                    </h3>
                    <p className="text-[14px] text-gray-500 leading-relaxed font-light">
                      Essential CPR skills including compressions, rescue breathing and AED use.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 p-5 md:p-6 rounded-2xl bg-white border border-[#3b3f69]/5 shadow-sm hover:shadow-[0_8px_30px_rgba(59,63,105,0.08)] transition-all hover:-translate-y-1 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#ca1254]/5 flex items-center justify-center text-[#ca1254] group-hover:bg-[#ca1254] group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity" aria-hidden="true">
                      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#3b3f69] mb-1.5 group-hover:text-[#ca1254] transition-colors">
                      HLTAID011 – Provide First Aid
                    </h3>
                    <p className="text-[14px] text-gray-500 leading-relaxed font-light">
                      Comprehensive first aid training covering injuries and medical emergencies.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 p-5 md:p-6 rounded-2xl bg-white border border-[#3b3f69]/5 shadow-sm hover:shadow-[0_8px_30px_rgba(59,63,105,0.08)] transition-all hover:-translate-y-1 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#ca1254]/5 flex items-center justify-center text-[#ca1254] group-hover:bg-[#ca1254] group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap" aria-hidden="true">
                      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                      <path d="M22 10v6" />
                      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#3b3f69] mb-1.5 group-hover:text-[#ca1254] transition-colors">
                      HLTAID012 – Education & Care
                    </h3>
                    <p className="text-[14px] text-gray-500 leading-relaxed font-light">
                      First aid tailored for childcare and school environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-20 md:py-32 bg-[#ca1254]/[0.04]">
          <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 lg:flex-row-reverse">
            <div className="w-full lg:w-1/2 relative group">
              <div className="relative aspect-square md:aspect-[5/4] w-full rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(59,63,105,0.08)] border border-[#3b3f69]/10">
                <img alt="Emergency Response Training" loading="lazy" decoding="async" className="object-cover transition-transform duration-700 group-hover:scale-105" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent" }} sizes="(max-width: 1024px) 100vw, 50vw" src="/images/firstaid.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(59,63,105,0.05)] to-transparent pointer-events-none" />
              </div>
              <div className="absolute -z-10 w-48 h-48 rounded-full bg-[#ca1254]/10 blur-3xl -bottom-10 -right-10" />
              <div className="absolute -z-10 w-48 h-48 rounded-full bg-[#3b3f69]/5 blur-3xl -top-10 -left-10" />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex items-end gap-4 mb-10 relative">
                <div className="text-[120px] font-bold text-[#3b3f69]/[0.03] leading-none absolute -top-16 -left-6 tracking-tighter select-none">
                  02
                </div>
                <div className="relative z-10">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[#ca1254] font-semibold mb-4">
                    {"Category "}
                    02
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-[#3b3f69] leading-[1.15]">
                    Emergency Response Training
                  </h2>
                  <div className="w-16 h-1 bg-[#ca1254] mt-8" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-5 p-5 md:p-6 rounded-2xl bg-white border border-[#3b3f69]/5 shadow-sm hover:shadow-[0_8px_30px_rgba(59,63,105,0.08)] transition-all hover:-translate-y-1 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#ca1254]/5 flex items-center justify-center text-[#ca1254] group-hover:bg-[#ca1254] group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-alert" aria-hidden="true">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                      <path d="M12 8v4" />
                      <path d="M12 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#3b3f69] mb-1.5 group-hover:text-[#ca1254] transition-colors">
                      Anaphylaxis & Asthma
                    </h3>
                    <p className="text-[14px] text-gray-500 leading-relaxed font-light">
                      Recognition and management of allergic and respiratory emergencies.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 p-5 md:p-6 rounded-2xl bg-white border border-[#3b3f69]/5 shadow-sm hover:shadow-[0_8px_30px_rgba(59,63,105,0.08)] transition-all hover:-translate-y-1 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#ca1254]/5 flex items-center justify-center text-[#ca1254] group-hover:bg-[#ca1254] group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users" aria-hidden="true">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#3b3f69] mb-1.5 group-hover:text-[#ca1254] transition-colors">
                      RAMOAP (NSW Teachers)
                    </h3>
                    <p className="text-[14px] text-gray-500 leading-relaxed font-light">
                      Medical emergency response training for school environments.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 p-5 md:p-6 rounded-2xl bg-white border border-[#3b3f69]/5 shadow-sm hover:shadow-[0_8px_30px_rgba(59,63,105,0.08)] transition-all hover:-translate-y-1 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#ca1254]/5 flex items-center justify-center text-[#ca1254] group-hover:bg-[#ca1254] group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-stethoscope" aria-hidden="true">
                      <path d="M11 2v2" />
                      <path d="M5 2v2" />
                      <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
                      <path d="M8 15a6 6 0 0 0 12 0v-3" />
                      <circle cx="20" cy="10" r="2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#3b3f69] mb-1.5 group-hover:text-[#ca1254] transition-colors">
                      Clinical Awareness
                    </h3>
                    <p className="text-[14px] text-gray-500 leading-relaxed font-light">
                      Identify stroke, heart attack, diabetes and other conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-20 md:py-32">
          <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 relative group">
              <div className="relative aspect-square md:aspect-[5/4] w-full rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(59,63,105,0.08)] border border-[#3b3f69]/10">
                <img alt="Workplace & Support Services" loading="lazy" decoding="async" className="object-cover transition-transform duration-700 group-hover:scale-105" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent" }} sizes="(max-width: 1024px) 100vw, 50vw" src="/images/corporate.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(59,63,105,0.05)] to-transparent pointer-events-none" />
              </div>
              <div className="absolute -z-10 w-48 h-48 rounded-full bg-[#ca1254]/10 blur-3xl -bottom-10 -left-10" />
              <div className="absolute -z-10 w-48 h-48 rounded-full bg-[#3b3f69]/5 blur-3xl -top-10 -right-10" />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex items-end gap-4 mb-10 relative">
                <div className="text-[120px] font-bold text-[#3b3f69]/[0.03] leading-none absolute -top-16 -left-6 tracking-tighter select-none">
                  03
                </div>
                <div className="relative z-10">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[#ca1254] font-semibold mb-4">
                    {"Category "}
                    03
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-[#3b3f69] leading-[1.15]">
                    Workplace & Support Services
                  </h2>
                  <div className="w-16 h-1 bg-[#ca1254] mt-8" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-5 p-5 md:p-6 rounded-2xl bg-white border border-[#3b3f69]/5 shadow-sm hover:shadow-[0_8px_30px_rgba(59,63,105,0.08)] transition-all hover:-translate-y-1 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#ca1254]/5 flex items-center justify-center text-[#ca1254] group-hover:bg-[#ca1254] group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-syringe" aria-hidden="true">
                      <path d="m18 2 4 4" />
                      <path d="m17 7 3-3" />
                      <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
                      <path d="m9 11 4 4" />
                      <path d="m5 19-3 3" />
                      <path d="m14 4 6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#3b3f69] mb-1.5 group-hover:text-[#ca1254] transition-colors">
                      Drug & Alcohol Testing
                    </h3>
                    <p className="text-[14px] text-gray-500 leading-relaxed font-light">
                      On-site testing services for workplace safety.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 p-5 md:p-6 rounded-2xl bg-white border border-[#3b3f69]/5 shadow-sm hover:shadow-[0_8px_30px_rgba(59,63,105,0.08)] transition-all hover:-translate-y-1 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#ca1254]/5 flex items-center justify-center text-[#ca1254] group-hover:bg-[#ca1254] group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase" aria-hidden="true">
                      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      <rect width="20" height="14" x="2" y="6" rx="2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#3b3f69] mb-1.5 group-hover:text-[#ca1254] transition-colors">
                      Event Medical Support
                    </h3>
                    <p className="text-[14px] text-gray-500 leading-relaxed font-light">
                      Qualified medics for events and on-site care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-[#3b3f69]/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#3b3f69]/10 bg-[#f5f4f0] px-8 py-10 md:px-14 md:py-16 shadow-lg">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#ca1254]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#3b3f69]/10 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-center lg:text-left">
                <p className="text-[#ca1254] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
                  Custom Training
                </p>
                <h3 className="text-3xl md:text-5xl font-bold text-[#3b3f69] mb-6 leading-[1.15]">
                  {"Tailored Solutions "}
                  <br className="hidden md:block" />
                  {"for Your "}
                  <span className="text-[#ca1254]">
                    Organisation
                  </span>
                </h3>
                <p className="text-[#3b3f69]/70 text-sm md:text-lg mb-8 max-w-lg leading-relaxed font-light mx-auto lg:mx-0">
                  We design flexible training programmes based on your organisation’s needs, environment, and compliance requirements.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#ca1254] text-white px-10 py-4 rounded font-semibold hover:bg-[#a30f44] transition-all hover:shadow-lg hover:shadow-[#ca1254]/20 hover:-translate-y-0.5">
                  {"Get in Touch "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="w-full lg:w-auto min-w-[300px]">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#3b3f69]/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#ca1254]/5 rounded-bl-full blur-xl pointer-events-none" />
                  <h4 className="text-[13px] font-bold text-[#3b3f69] uppercase tracking-wider mb-6 pb-4 border-b border-[#3b3f69]/10">
                    What We Offer
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-[15px] font-light text-[#3b3f69]/80 group">
                      <span className="text-[#ca1254] group-hover:scale-125 transition-transform">
                        •
                      </span>
                      <span>
                        Flexible formats (online & in-person)
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-[15px] font-light text-[#3b3f69]/80 group">
                      <span className="text-[#ca1254] group-hover:scale-125 transition-transform">
                        •
                      </span>
                      <span>
                        Industry-specific programmes
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-[15px] font-light text-[#3b3f69]/80 group">
                      <span className="text-[#ca1254] group-hover:scale-125 transition-transform">
                        •
                      </span>
                      <span>
                        Workplace safety compliance
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-[15px] font-light text-[#3b3f69]/80 group">
                      <span className="text-[#ca1254] group-hover:scale-125 transition-transform">
                        •
                      </span>
                      <span>
                        Scalable team training solutions
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
