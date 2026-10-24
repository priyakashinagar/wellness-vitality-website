import { useRef, useState } from 'react'
import { HeartHandshake, House, Stethoscope } from '../Icons'

const cards = [
  {
    title: 'You are cared for.',
    description:
      'Every service is delivered by Registered nurses, ensuring safe, professional and personalised care at every step.',
    Icon: Stethoscope,
  },
  {
    title: 'You are supported.',
    description:
      'We take the time to understand your needs, offering guidance, reassurance and care tailored to your health goals.',
    Icon: HeartHandshake,
  },
  {
    title: 'You are comfortable.',
    description:
      'With mobile healthcare services, we bring clinical care to your home, workplace or care facility, making healthcare simple and stress-free.',
    Icon: House,
  },
]

export default function CareCards() {
  const sliderRef = useRef(null)
  const [active, setActive] = useState(0)

  const scrollTo = (i) => {
    const el = sliderRef.current
    if (!el) return
    el.scrollTo({ left: el.offsetWidth * i, behavior: 'smooth' })
  }

  const onScroll = () => {
    const el = sliderRef.current
    if (!el) return
    setActive(Math.round(el.scrollLeft / el.offsetWidth))
  }

  return (
    <section className="py-10 md:py-16">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
        <div
          ref={sliderRef}
          onScroll={onScroll}
          className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 scroll-smooth no-scrollbar"
        >
          {cards.map(({ title, description, Icon }) => (
            <div key={title} className="min-w-full snap-center p-8 rounded-xl" style={{ backgroundColor: '#f5f5f5' }}>
              <div className="mb-6" style={{ color: 'rgb(202,18,84)' }}>
                <Icon />
              </div>
              <h3 className="text-lg font-medium mb-3" style={{ color: 'rgb(59,63,105)' }}>
                {title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mb-10 md:hidden">
          {cards.map((c, i) => (
            <button
              key={c.title}
              onClick={() => scrollTo(i)}
              className={`h-1.5 w-6 ${i === active ? 'bg-[rgb(59,63,105)]' : 'bg-gray-300'}`}
            ></button>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-3 gap-8 mb-10 max-w-6xl mx-auto">
          {cards.map(({ title, description, Icon }) => (
            <div key={title} className="p-8 rounded-xl" style={{ backgroundColor: '#f5f5f5' }}>
              <div className="mb-6" style={{ color: 'rgb(202,18,84)' }}>
                <Icon />
              </div>
              <h3 className="text-xl font-medium mb-3" style={{ color: 'rgb(59,63,105)' }}>
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center py-6 px-6 rounded-md" style={{ backgroundColor: 'rgb(202,18,84)' }}>
            <p className="text-white text-lg md:text-xl font-medium">
              This is <span className="italic font-semibold">personalised care</span>. This is{' '}
              <span className="italic font-semibold">Wellness Vitality Australia</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
