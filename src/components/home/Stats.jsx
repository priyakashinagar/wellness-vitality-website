import { useEffect, useState } from 'react'

const stats = [
  { value: 100, suffix: '%', text: 'Personalised clinical care for every patient' },
  { value: 24, suffix: '/7', text: 'Accessible healthcare, wherever you are' },
  { value: 100, suffix: '%', text: 'Commitment to safety and quality standards' },
]

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let current = 0
    const step = target / 75
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="relative py-8 md:py-14 overflow-hidden">
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none text-center whitespace-nowrap italic overflow-hidden"
        style={{
          fontSize: 'clamp(28px, 9vw, 130px)',
          fontWeight: 400,
          letterSpacing: '0.08em',
          transform: 'scaleX(1.08)',
          fontFamily: 'var(--font-mackinac), serif',
          color: 'rgba(202,18,84,0.08)',
        }}
      >
        Wellness and Vitality
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-16 text-center">
          {stats.map((s, i) => (
            <div key={i} className="max-w-[140px] sm:max-w-xs mx-auto">
              <h3
                className="text-3xl md:text-5xl font-light tracking-tight mb-2 md:mb-4 leading-none"
                style={{ color: 'rgb(59,63,105)' }}
              >
                <Counter target={s.value} suffix={s.suffix} />
              </h3>
              <p
                className="text-[10px] sm:text-xs md:text-lg leading-snug md:leading-relaxed font-normal"
                style={{ color: 'rgb(59,63,105)' }}
              >
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
