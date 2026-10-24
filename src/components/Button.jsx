import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose/20 active:scale-[0.98] cursor-pointer'

const variants = {
  primary: 'bg-[#ca1254] text-white hover:brightness-110 shadow-sm border-none',
  outlineWhite: 'border-2 border-white text-white hover:bg-white hover:text-[#3b3f69]',
  ghost: 'text-[#3b3f69] hover:bg-[#3b3f69]/10',
}

export default function Button({ to, variant = 'primary', className = '', style, children }) {
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`} style={style}>
      {children}
    </Link>
  )
}
