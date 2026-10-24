import Button from '../Button'
import { Check } from '../Icons'

const drips = [
  {
    name: 'Immune Defence IV',
    price: '$260',
    desc: 'Typically includes Vitamin C, B Complex, Zinc and Magnesium.',
    items: ['Vitamin C', 'B Complex', 'Zinc', 'Magnesium'],
  },
  {
    name: 'Energy & Performance Recovery',
    price: '$240',
    desc: 'Includes B Complex, B12, Magnesium and Vitamin C.',
    items: ['B Complex', 'B12', 'Magnesium', 'Vitamin C'],
  },
  {
    name: 'Beauty & Skin Glow IV',
    price: '$320',
    desc: 'Often includes Vitamin C, Biotin and Zinc.',
    items: ['Vitamin C', 'Biotin', 'Zinc'],
  },
  {
    name: 'Detox & Liver Support IV',
    price: '$300',
    desc: 'Commonly includes Vitamin C, Taurine and B vitamins.',
    items: ['Vitamin C', 'Taurine', 'B Vitamins'],
  },
  {
    name: 'Hydration & Recovery IV',
    price: '$220',
    desc: 'Saline with electrolytes, Vitamin C, B Complex and Magnesium.',
    items: ['Electrolytes', 'Vitamin C', 'B Complex', 'Magnesium'],
  },
  {
    name: 'Athlete Recovery IV',
    price: '$260',
    desc: 'Magnesium, Taurine, Vitamin C and B vitamins for muscle recovery.',
    items: ['Magnesium', 'Taurine', 'Vitamin C', 'B Vitamins'],
  },
]

// Cards alternate between the rose and indigo accent.
const accents = {
  rose: {
    badge: 'bg-[rgb(202,18,84)] text-white',
    button: 'border-[rgb(202,18,84)] text-[rgb(202,18,84)] hover:bg-[rgb(202,18,84)] hover:text-white',
  },
  indigo: {
    badge: 'bg-[rgb(59,63,105)] text-white',
    button: 'border-[rgb(59,63,105)] text-[rgb(59,63,105)] hover:bg-[rgb(59,63,105)] hover:text-white',
  },
}

export default function IVTherapy() {
  return (
    <section id="iv-therapy" className="py-10 md:py-16 bg-[#f8f9fc] relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-medium text-[rgb(59,63,105)] mb-6">IV Infusion Therapy</h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            IV therapy delivers vitamins, minerals and nutrients directly into the bloodstream, allowing higher nutrient
            availability compared with oral supplements.
          </p>
          <div className="mt-6 md:mt-8 h-1 w-16 md:w-20 bg-[rgb(202,18,84)] mx-auto"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {drips.map((d, i) => {
            const accent = i % 2 === 0 ? accents.rose : accents.indigo
            return (
              <div
                key={d.name}
                className="relative bg-white p-4 sm:p-8 border border-gray-100 shadow-[0_8px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.1)] hover:border-[rgb(202,18,84)]/20 transition duration-300 flex flex-col h-full w-full max-w-sm"
              >
                <div
                  className={`absolute top-3 right-3 px-4 py-2 rounded-full text-sm sm:text-base font-semibold shadow-md ${accent.badge}`}
                >
                  {d.price}
                </div>
                <h3 className="text-sm sm:text-2xl font-medium text-[rgb(59,63,105)] mb-3 pr-10 sm:pr-16">{d.name}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">{d.desc}</p>
                <ul className="space-y-2 mb-6">
                  {d.items.map((item, j) => (
                    <li
                      key={item}
                      className={`flex items-center gap-2 text-xs sm:text-sm text-[rgb(59,63,105)]/80 ${
                        j >= 2 ? 'hidden md:flex' : ''
                      }`}
                    >
                      <Check className="w-3.5 h-3.5 text-[rgb(202,18,84)] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  to="/booking"
                  variant="ghost"
                  className={`mt-auto w-full px-6 sm:px-8 py-3 sm:py-5 text-xs sm:text-base !rounded-none font-medium border tracking-wide transition-all duration-300 ${accent.button}`}
                >
                  Book Now
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
