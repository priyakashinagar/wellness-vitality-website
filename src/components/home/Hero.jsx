import Button from '../Button'
import { Check } from '../Icons'

const heroBtn = 'flex-1 sm:flex-none px-4 sm:px-8 py-3.5 text-[14px] font-semibold !rounded-none'
const badges = ['REGISTERED NURSES', 'MOBILE HEALTHCARE']

export default function Hero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-0 lg:pb-20 overflow-hidden" style={{ backgroundColor: 'rgb(59, 63, 105)' }}>
      <div className="w-full px-6 lg:px-12 xl:px-16 pt-4 pb-0 lg:pb-8 relative z-10 text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.3rem] font-medium leading-[1.1] mb-6 !text-white">
              Mobile IV Therapy &amp; <br className="hidden sm:block" />
              Clinical Services
            </h1>
            <p
              className="text-[16px] sm:text-[17px] md:text-[18px] mb-8 max-w-lg leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.85)' }}
            >
              Personalised healthcare centred around you. Mobile IV infusions and wellness services delivered by
              registered nurses.
            </p>
            <div className="flex flex-row justify-center lg:justify-start gap-3 mb-4">
              <Button to="/booking" className={heroBtn} style={{ boxShadow: '0 10px 30px rgba(202,18,84,0.25)' }}>
                Book Treatment
              </Button>
              <Button to="/services" variant="outlineWhite" className={heroBtn}>
                Our Services
              </Button>
            </div>

            <div className="lg:hidden -mx-6 mt-0 relative">
              <img
                alt="Healthcare Professionals"
                width="600"
                height="400"
                className="w-full h-auto block"
                style={{ maxWidth: 380, margin: '0 auto' }}
                src="/images/heroimage.png"
              />
            </div>

            <div className="lg:hidden bg-[rgb(45,49,85)] -mx-6 px-6 py-4 flex flex-row justify-center gap-6">
              {badges.map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[rgb(202,18,84)]" />
                  <span className="text-[10px] font-bold text-white/80 tracking-widest whitespace-nowrap">{b}</span>
                </div>
              ))}
            </div>

            <div className="hidden lg:flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-white/10">
              {badges.map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[rgb(202,18,84)]" />
                  <span className="text-[11px] font-semibold text-white/70 tracking-[0.15em]">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex absolute right-0 lg:right-[7%] bottom-0 lg:bottom-0 w-full lg:w-[50%] h-[400px] sm:h-[500px] lg:h-[95%] items-end justify-center lg:justify-end pointer-events-none z-0">
        <img
          alt="Healthcare Professionals"
          width="1000"
          height="700"
          className="w-full h-auto max-h-full object-contain object-bottom lg:object-right opacity-100 transition-opacity duration-500"
          src="/images/heroimage.png"
        />
      </div>
    </section>
  )
}
