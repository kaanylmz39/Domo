import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface Props {
  active?: 'about' | 'blog' | 'careers' | 'press' | 'contact' | 'why' | 'login'
}

const linkClass = (isActive: boolean) =>
  isActive ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900 transition'

export default function MarketingNav({ active }: Props) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <Link to="/">
          <img src={import.meta.env.BASE_URL + 'logo-light.svg'} alt="Domo" className="h-16 object-contain" />
        </Link>
        <div className="hidden md:flex items-center gap-7 text-sm font-medium">
          <Link to="/#features" className={linkClass(false)}>Features</Link>
          <Link to="/#pricing" className={linkClass(false)}>Pricing</Link>
          <Link to="/about" className={linkClass(active === 'about')}>About</Link>
          <Link to="/why-domo" className={linkClass(active === 'why')}>Why Domo</Link>
          <Link to="/contact" className={linkClass(active === 'contact')}>Contact</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/login" className={linkClass(active === 'login') + ' hidden sm:inline-flex text-sm font-medium'}>
            Log In
          </Link>
          <Link to="/app" className="bg-brand-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-brand-700 transition flex items-center gap-2">
            Get Started <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </nav>
  )
}
