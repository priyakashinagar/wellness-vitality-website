import { Link } from 'react-router-dom'
import { ArrowRight, Briefcase, HeartPulse, ShieldAlert, Stethoscope } from '../Icons'

const trainings = [
  { title: 'CPR & First Aid', text: 'Essential life-saving training programmes.', Icon: HeartPulse },
  { title: 'Workplace Training', text: 'Compliance and safety for organisations.', Icon: Briefcase },
  { title: 'Emergency Response', text: 'Asthma, anaphylaxis and critical care.', Icon: ShieldAlert },
  { title: 'Event Medical Support', text: 'On-site medical care for events.', Icon: Stethoscope },
]

export default function Training() {
  return (
    <section className="py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold text-[#3b3f69] mb-2">Training and Services</h2>
            <p className="text-gray-500 text-sm md:text-base">Accredited and workplace-focused training programmes.</p>
          </div>
          <Link to="/training" className="mt-3 md:mt-0 flex items-center gap-1.5 text-[#ca1254] group/link cursor-pointer">
            <span className="text-sm font-medium hover:underline">View All Training</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {trainings.map(({ title, text, Icon }) => (
            <div
              key={title}
              className="bg-white rounded-lg p-5 border border-[#ca1254] transition hover:shadow-md cursor-pointer group/card"
            >
              <div className="mb-4">
                <Icon
                  size={24}
                  strokeWidth={1.5}
                  className="lucide w-8 h-8 text-[#ca1254] transition-transform group-hover/card:scale-110"
                />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-[#3b3f69] mb-2">{title}</h3>
              <p className="text-xs md:text-sm text-[#3b3f69]/80 leading-snug">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
