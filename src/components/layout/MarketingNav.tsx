import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'

interface Props {
  active?: 'about' | 'blog' | 'careers' | 'press' | 'contact' | 'why' | 'walkthrough' | 'login' | 'register' | 'help' | 'privacy' | 'terms'
}

const linkClass = (isActive: boolean) =>
  isActive ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900 transition'

const dropdownButtonClass = (isActive: boolean) =>
  `inline-flex items-center gap-1.5 py-7 ${isActive ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900 transition'}`

const dropdownPanelClass =
  'pointer-events-none absolute left-0 top-full min-w-56 translate-y-2 rounded-xl border border-gray-200 bg-white p-2 opacity-0 shadow-xl shadow-gray-900/10 transition-all duration-150 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100'

const dropdownLinkClass = (isActive: boolean) =>
  `block rounded-lg px-3 py-2 text-sm transition ${isActive ? 'bg-brand-50 text-brand-800' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`

export default function MarketingNav({ active }: Props) {
  const productActive = active === 'why' || active === 'walkthrough'
  const companyActive = active === 'about' || active === 'blog' || active === 'careers' || active === 'press'
  const supportActive = active === 'contact' || active === 'help' || active === 'privacy' || active === 'terms'

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <Link to="/">
          <img src={import.meta.env.BASE_URL + 'logo-light.svg'} alt="Domo" className="h-16 object-contain" />
        </Link>
        <div className="hidden md:flex items-center gap-7 text-sm font-medium">
          <Link to="/#features" className={linkClass(false)}>Features</Link>

          <div className="group relative">
            <button type="button" className={dropdownButtonClass(productActive)}>
              Product <ChevronDown size={14} />
            </button>
            <div className={dropdownPanelClass}>
              <Link to="/#pricing" className={dropdownLinkClass(false)}>Pricing</Link>
              <Link to="/why-domo" className={dropdownLinkClass(active === 'why')}>Why Domo</Link>
              <Link to="/walkthrough" className={dropdownLinkClass(active === 'walkthrough')}>Walkthrough</Link>
              <Link to="/app" className={dropdownLinkClass(false)}>Open Dashboard</Link>
            </div>
          </div>

          <div className="group relative">
            <button type="button" className={dropdownButtonClass(companyActive)}>
              Company <ChevronDown size={14} />
            </button>
            <div className={dropdownPanelClass}>
              <Link to="/about" className={dropdownLinkClass(active === 'about')}>About Us</Link>
              <Link to="/blog" className={dropdownLinkClass(active === 'blog')}>Blog</Link>
              <Link to="/careers" className={dropdownLinkClass(active === 'careers')}>Careers</Link>
              <Link to="/press" className={dropdownLinkClass(active === 'press')}>Press</Link>
            </div>
          </div>

          <div className="group relative">
            <button type="button" className={dropdownButtonClass(supportActive)}>
              Support <ChevronDown size={14} />
            </button>
            <div className={dropdownPanelClass}>
              <Link to="/help" className={dropdownLinkClass(active === 'help')}>Help Center</Link>
              <Link to="/contact" className={dropdownLinkClass(active === 'contact')}>Contact</Link>
              <Link to="/privacy" className={dropdownLinkClass(active === 'privacy')}>Privacy Policy</Link>
              <Link to="/terms" className={dropdownLinkClass(active === 'terms')}>Terms of Service</Link>
            </div>
          </div>
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
