import { Link } from 'react-router-dom'
import { ArrowRight, Check } from '../Icons'

const features = ['Real-time availability', 'Instant confirmation', 'Afterpay accepted']

export default function OnlineBooking() {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 lg:w-1/2 flex flex-col justify-center relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-[rgb(202,18,84)]"></div>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[rgb(202,18,84)]">
                Self-Service Booking
              </span>
              <div className="w-8 h-px bg-[rgb(202,18,84)]/40"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(59,63,105)] mb-4">
              Simple Online <span className="text-[rgb(202,18,84)]">Booking</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-8">
              Book your session through our secure online booking system. We use Calendly for scheduling, with Afterpay
              available.
            </p>
            <div className="space-y-4 mb-10">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3 group/feat">
                  <div className="w-8 h-8 rounded-full bg-[rgb(59,63,105)]/5 flex items-center justify-center transition-colors group-hover/feat:bg-[rgb(202,18,84)]/10">
                    <Check className="w-4 h-4 text-[rgb(202,18,84)]" />
                  </div>
                  <span className="text-base text-[rgb(59,63,105)] font-medium">{f}</span>
                </div>
              ))}
            </div>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-3 px-8 py-3 text-[rgb(202,18,84)] text-base font-bold tracking-wide border-2 border-[rgb(202,18,84)] bg-transparent rounded-none transition-all duration-500 hover:bg-[rgb(202,18,84)] hover:text-white hover:gap-4 cursor-pointer group/btn"
            >
              Book Appointment
              <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>

          <div className="lg:w-1/2 relative h-[240px] sm:h-[320px] lg:h-auto">
            <img
              alt="Booking"
              loading="lazy"
              width="800"
              height="800"
              className="w-full h-full object-cover"
              src="/images/about.png"
            />
            <div className="absolute inset-0 bg-[rgb(59,63,105)]/10"></div>
            <div className="absolute bottom-4 right-4 w-[240px] bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[rgb(202,18,84)]/10 rounded-full flex items-center justify-center text-[rgb(202,18,84)] text-sm">
                  ✓
                </div>
                <div>
                  <div className="text-sm font-semibold text-[rgb(59,63,105)]">Verified Care</div>
                  <div className="text-xs text-gray-500">5.0 Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
