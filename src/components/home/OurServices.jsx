import { Link } from 'react-router-dom'
import Button from '../Button'
import { ArrowRight, Check } from '../Icons'

const services = [
  {
    title: 'IV Infusions',
    img: '/images/iv-nutrient-therapy.png',
    text: 'Targeted intravenous nutrient therapies designed to support energy, recovery and immune health.',
  },
  {
    title: 'Health Assessments',
    img: '/images/healthcare.png',
    text: 'Comprehensive wellness checks and health & wellness screening for aged care and NDIS clients.',
  },
  {
    title: 'Teeth Whitening',
    img: '/images/teethwhitening.png',
    text: 'Professional teeth whitening services delivered by qualified healthcare professionals. Improves smile appearance and can lighten teeth by up to 6 to 8 shades.',
  },
  {
    title: 'Aged Care & NDIS Nursing',
    img: '/images/agedcare-nursing.png',
    text: 'Professional nursing services supporting ongoing healthcare needs.',
  },
  {
    title: 'Blood Collection',
    img: '/images/bloodcollection.png',
    text: 'Convenient blood testing services available at home or care facilities.',
  },
  {
    title: 'Corporate Health Services',
    img: '/images/coprate.png',
    text: 'Workplace health checks and corporate IV hydration services.',
  },
]

export default function OurServices() {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-left md:text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#3b3f69] mb-4">Our Services</h2>
          <p className="text-gray-500 max-w-2xl md:mx-auto text-sm md:text-lg leading-relaxed">
            We offer a range of nurse-led services including IV infusions, teeth whitening, blood collection, and
            clinical nursing reports. Delivered via our mobile service, our care is safe, convenient, and tailored to
            your individual needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <img
                alt={s.title}
                loading="lazy"
                width="600"
                height="600"
                className="w-full h-[160px] sm:h-[200px] lg:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                src={s.img}
              />
              <div className="absolute bottom-0 w-full bg-white/95 p-3 text-center">
                <h3 className="text-sm sm:text-base lg:text-lg font-medium text-[#3b3f69] leading-tight">{s.title}</h3>
              </div>
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-[#ca1254] flex items-center justify-center text-white">
                    <Check className="w-3 h-3" strokeWidth={4} />
                  </div>
                  <h3 className="text-white font-serif font-bold text-lg md:text-xl">{s.title}</h3>
                </div>
                <p className="text-white/80 text-xs sm:text-sm mb-6 leading-relaxed">{s.text}</p>
                <Link to="/booking">
                  <button className="bg-[#ca1254] text-white px-8 py-2.5 text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-[#a30f44] transition-all font-bold group/btn">
                    Book Now
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Button to="/services" className="px-8 md:px-10 py-3">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
