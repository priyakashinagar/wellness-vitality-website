import { Link } from 'react-router-dom'
import { ArrowRight } from '../Icons'

const items = [
  {
    title: 'Healthcare professionals',
    subtitle: 'Qualified & Certified Care',
    text: 'Every nurse meets strict Australian healthcare registration standards.',
    img: '/images/healthproffessionals.png',
    color: 'rgb(211,107,124)',
  },
  {
    title: 'Personalised Clinical Care',
    subtitle: 'Tailored Services',
    text: 'Every session is tailored based on a full clinical assessment.',
    img: '/images/personalisedcare.png',
    color: 'rgb(160,166,205)',
  },
  {
    title: 'Mobile Healthcare',
    subtitle: 'Care At Your Doorstep',
    text: 'We bring healthcare to your home, workplace or care facility.',
    img: '/images/mobilehealth.png',
    color: 'rgb(102,135,125)',
  },
  {
    title: 'Aged Care & NDIS Support',
    subtitle: 'Dedicated Support Services',
    text: 'Dedicated care for aged care residents and NDIS participants.',
    img: '/images/agedcare.png',
    color: 'rgb(180,111,123)',
  },
]

export default function WhatWeDo() {
  return (
    <section className="py-10 md:py-16">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="text-center mb-8 md:mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-5xl font-medium mb-4 md:mb-6" style={{ color: 'rgb(59,63,105)' }}>
            What We Do
          </h2>
          <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
            Professional healthcare and wellness services delivered by Registered nurses, focused on personalised care,
            safety, and convenience.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {items.map((item) => (
            <Link key={item.title} className="group block cursor-pointer" to="/about">
              <div className="relative rounded-lg md:rounded-xl overflow-hidden">
                <img
                  alt={item.title}
                  loading="lazy"
                  width="600"
                  height="800"
                  className="w-full h-[160px] md:h-[260px] lg:h-[320px] object-cover transition duration-500 group-hover:scale-105"
                  src={item.img}
                />
                <div
                  className="absolute inset-0 z-20 flex flex-col justify-between p-3 md:p-6 opacity-0 group-hover:opacity-100 transition duration-300 text-white"
                  style={{ backgroundColor: item.color }}
                >
                  <div>
                    <h3 className="!text-white text-sm md:text-lg font-medium mb-1">{item.title}</h3>
                    <p className="!text-white text-[11px] md:text-sm mb-2 opacity-90 font-normal">{item.subtitle}</p>
                    <p className="!text-white text-xs md:text-sm leading-relaxed font-normal">{item.text}</p>
                  </div>
                  <div className="w-full">
                    <div className="w-full border border-white px-3 py-2 md:px-4 md:py-2.5 flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                      <span className="text-xs md:text-sm !text-white font-bold">Learn More</span>
                      <ArrowRight className="w-4 h-4 !text-white transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 md:mt-4 text-center group-hover:hidden transition duration-200">
                <h3 className="text-sm md:text-lg font-medium" style={{ color: 'rgb(59,63,105)' }}>
                  {item.title}
                </h3>
                <div className="mt-1 md:mt-2 h-[2px] w-8 md:w-12 mx-auto" style={{ backgroundColor: 'rgb(59,63,105)' }}></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
