import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Facebook, Instagram, Mail, Phone, TikTok, YouTube } from './Icons'

const companyLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Booking', path: '/booking' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Refund Policy', path: '/refund-policy' },
]

const serviceLinks = [
  { label: 'IV Infusion Therapy', path: '/services/iv-infusions' },
  { label: 'Health Assessments', path: '/services/health-assessments' },
  { label: 'Blood Collection', path: '/services/blood-collection' },
  { label: 'Aged Care & NDIS', path: '/services/aged-care-ndis' },
  { label: 'Professional Teeth Whitening', path: '/services/teeth-whitening' },
  { label: 'Corporate Health Services', path: '/services/corporate-health' },
]

const socials = [
  { name: 'facebook', href: 'https://www.facebook.com/share/1GEVniWdVF/', Icon: Facebook },
  { name: 'instagram', href: 'https://www.instagram.com/wellnessvitalityaustralia', Icon: Instagram },
  { name: 'tiktok', href: 'https://www.tiktok.com/@wellnessvitalityaus?_r=1&_t=ZS-959CqimuxpF', Icon: TikTok },
  { name: 'youtube', href: 'https://youtube.com/@wellnessvitalityaustralia', Icon: YouTube },
]

const currentYear = new Date().getFullYear()

const linkClass = 'text-white/60 hover:text-[#ca1254] hover:translate-x-1 block transition-all text-sm font-medium'

function FooterSection({ id, title, activeSection, toggleSection, children }) {
  const isOpen = activeSection === id
  return (
    <div className="border-b border-white/5 md:border-none last:border-none">
      <button
        onClick={() => toggleSection(id)}
        className="w-full flex items-center justify-between py-5 md:py-0 md:mb-6 text-left group md:cursor-default"
      >
        <h3 className="text-[11px] font-bold text-white uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100 transition-opacity">
          {title}
        </h3>
        <span
          className={`md:hidden transform transition-transform duration-500 ease-in-out ${
            isOpen ? 'rotate-180 opacity-100' : 'opacity-40'
          }`}
        >
          <ChevronDown className="w-4 h-4 text-white" strokeWidth={2.5} />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

function ContactItem({ Icon, label, href, className = '', children }) {
  return (
    <li className="flex gap-4 text-white/60 text-sm items-start group">
      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ca1254]/20 transition-colors">
        <Icon className={`w-4 h-4 text-[#ca1254] ${className}`} />
      </div>
      <div className="pt-1.5 flex flex-col">
        <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">{label}</span>
        <a href={href} className="font-bold text-white hover:text-[#ca1254] transition-colors break-all">
          {children}
        </a>
      </div>
    </li>
  )
}

export default function Footer() {
  const [activeSection, setActiveSection] = useState(null)
  const toggleSection = (id) => {
    if (window.innerWidth >= 768) return
    setActiveSection(activeSection === id ? null : id)
  }

  return (
    <footer className="bg-[#1a1c3d] text-white pt-16 md:pt-24 pb-8 md:pb-12 mt-auto border-t border-white/5 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-2 md:gap-8 mb-10 md:mb-16">
          <div className="lg:col-span-4 mb-4 md:mb-0">
            <Link className="inline-block mb-6 transition-transform hover:scale-[1.02]" to="/">
              <img
                alt="Wellness Vitality Australia"
                loading="lazy"
                width="180"
                height="72"
                className="h-14 md:h-20 w-auto"
                style={{ width: 'auto' }}
                src="/images/footer.png"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 pr-4 max-w-sm">
              Experience elite diagnostic and therapeutic services from the comfort of your home. Premium healthcare,
              delivered with a personal touch and clinical precision.
            </p>
            <div className="flex gap-4">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ca1254] hover:text-white transition-all duration-300 border border-white/5 hover:border-[#ca1254]"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <FooterSection id="company" title="Company" activeSection={activeSection} toggleSection={toggleSection}>
              <ul className="space-y-4">
                {companyLinks.map((l) => (
                  <li key={l.label}>
                    <Link className={linkClass} to={l.path}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterSection>
          </div>

          <div className="lg:col-span-3">
            <FooterSection id="services" title="Our Services" activeSection={activeSection} toggleSection={toggleSection}>
              <ul className="space-y-4">
                {serviceLinks.map((l) => (
                  <li key={l.label}>
                    <Link className={linkClass} to={l.path}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterSection>
          </div>

          <div className="lg:col-span-3">
            <FooterSection id="contact" title="Get In Touch" activeSection={activeSection} toggleSection={toggleSection}>
              <ul className="space-y-4">
                <ContactItem Icon={Phone} label="Call Us" href="tel:0296272659">
                  02 9627 2659
                </ContactItem>
                <ContactItem
                  Icon={Mail}
                  label="Email Us"
                  href="mailto:admin@wellnessvitalityaustralia.com.au"
                  className="flex-shrink-0"
                >
                  admin@wellnessvitalityaustralia.com.au
                </ContactItem>
              </ul>
            </FooterSection>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left w-full">
          <p className="text-white/30 text-[11px] font-medium tracking-wide">
            © {currentYear} Wellness &amp; Vitality Australia. Elite Clinical Services.
          </p>
        </div>
      </div>
    </footer>
  )
}
