import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { ArrowRight, ChevronDown, CloseIcon, MenuIcon } from './Icons'
import { navServices } from '../data/services'

const navLink = 'text-sm font-medium text-gray-700 hover:text-[#ca1254] transition'
const mobileLink = 'block text-base font-medium text-gray-800 hover:text-[#ca1254]'
const priceBadge =
  'text-[10px] font-bold text-[#ca1254] bg-[#ca1254]/5 px-2 py-0.5 rounded-full uppercase tracking-wider'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[2000] bg-white shadow-sm py-2 md:py-4">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 flex items-center justify-between">
        <Link className="flex flex-row items-center gap-3 py-1 group shrink-0" to="/">
          <img
            alt="Wellness Vitality Australia"
            width="200"
            height="48"
            className="h-8 sm:h-9 md:h-10 lg:h-11 w-auto transition-transform duration-300 group-hover:scale-105"
            style={{ width: 'auto' }}
            src="/images/logoimg.png"
          />
          <div className="flex flex-col justify-center opacity-90 group-hover:opacity-100 transition-opacity">
            <span className="text-[#3b3f69] font-bold text-[16px] tracking-tight uppercase leading-tight">
              Wellness Vitality
            </span>
            <span className="text-[#ca1254] font-semibold text-[12px] tracking-[0.2em] uppercase leading-tight">
              Australia
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link className={navLink} to="/">
            Home
          </Link>
          <div className="relative group">
            <button className={`${navLink} flex items-center gap-1 cursor-pointer`}>
              Services
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute left-0 top-full mt-2 w-60 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
              {navServices.map((s) => (
                <Link
                  key={s.href}
                  className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-[#3b3f69]/5 hover:text-[#3b3f69] transition-colors"
                  to={s.href}
                >
                  <span>{s.label}</span>
                  <span className={priceBadge}>{s.price}</span>
                </Link>
              ))}
            </div>
          </div>
          <Link className={navLink} to="/training">
            Training
          </Link>
          <Link className={navLink} to="/booking">
            Booking
          </Link>
          <Link className={navLink} to="/about">
            About Us
          </Link>
          <Link className={navLink} to="/contact">
            Contact Us
          </Link>
        </div>

        <div className="flex items-center gap-1.5 md:gap-3 shrink-0">
          <div className="hidden md:block">
            <Button
              to="/booking"
              className="w-[150px] px-4 py-3 text-sm flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Book Now
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
          <button className="md:hidden p-1.5 text-[#3b3f69] shrink-0" onClick={() => setOpen(!open)}>
            {open ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl overflow-y-auto overscroll-contain"
          style={{ maxHeight: 'calc(100vh - 60px)', WebkitOverflowScrolling: 'touch' }}
        >
          <div className="px-4 py-6 space-y-6">
            <Link to="/" className={mobileLink} onClick={close}>
              Home
            </Link>
            <div className="space-y-4">
              <div className="text-base font-medium text-gray-800 border-b border-gray-100 pb-2">Services</div>
              <div className="pl-4 space-y-4">
                {navServices.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    className="flex items-center justify-between text-sm text-gray-600 hover:text-[#3b3f69]"
                    onClick={close}
                  >
                    <span>{s.label}</span>
                    <span className={priceBadge}>{s.price}</span>
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/training" className={mobileLink} onClick={close}>
              Training
            </Link>
            <Link to="/about" className={mobileLink} onClick={close}>
              About Us
            </Link>
            <Link to="/contact" className={mobileLink} onClick={close}>
              Contact Us
            </Link>
            <Link
              to="/booking"
              className="block w-full text-center bg-[#ca1254] text-white font-semibold text-sm py-3.5 rounded-lg hover:bg-[#a30f44] transition mt-2"
              onClick={close}
            >
              Book Now →
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
