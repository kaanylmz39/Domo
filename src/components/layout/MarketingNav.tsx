import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'

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
  const [mobileOpen, setMobileOpen] = useState(false)
  const productActive = active === 'why' || active === 'walkthrough'
  const companyActive = active === 'about' || active === 'blog' || active === 'careers' || active === 'press'
  const supportActive = active === 'contact' || active === 'help' || active === 'privacy' || active === 'terms'
  const closeMobile = () => setMobileOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <Link to="/" onClick={closeMobile}>
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
          <Link to="/app" className="hidden sm:flex bg-brand-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-brand-700 transition items-center gap-2">
            Get Started <ArrowRight size={14} />
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(open => !open)}
            className="md:hidden rounded-lg border border-gray-200 p-2 text-gray-700 hover:bg-gray-50"
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-5 shadow-xl shadow-gray-900/10">
          <div className="mx-auto max-w-6xl pt-4 space-y-4">
            <div>
              <Link to="/#features" onClick={closeMobile} className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                Features
              </Link>
            </div>

            <div className="rounded-xl border border-gray-200 p-2">
              <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-400">Product</p>
              <Link to="/#pricing" onClick={closeMobile} className={dropdownLinkClass(false)}>Pricing</Link>
              <Link to="/why-domo" onClick={closeMobile} className={dropdownLinkClass(active === 'why')}>Why Domo</Link>
              <Link to="/walkthrough" onClick={closeMobile} className={dropdownLinkClass(active === 'walkthrough')}>Walkthrough</Link>
              <Link to="/app" onClick={closeMobile} className={dropdownLinkClass(false)}>Open Dashboard</Link>
            </div>

            <div className="rounded-xl border border-gray-200 p-2">
              <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-400">Company</p>
              <Link to="/about" onClick={closeMobile} className={dropdownLinkClass(active === 'about')}>About Us</Link>
              <Link to="/blog" onClick={closeMobile} className={dropdownLinkClass(active === 'blog')}>Blog</Link>
              <Link to="/careers" onClick={closeMobile} className={dropdownLinkClass(active === 'careers')}>Careers</Link>
              <Link to="/press" onClick={closeMobile} className={dropdownLinkClass(active === 'press')}>Press</Link>
            </div>

            <div className="rounded-xl border border-gray-200 p-2">
              <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-400">Support</p>
              <Link to="/help" onClick={closeMobile} className={dropdownLinkClass(active === 'help')}>Help Center</Link>
              <Link to="/contact" onClick={closeMobile} className={dropdownLinkClass(active === 'contact')}>Contact</Link>
              <Link to="/privacy" onClick={closeMobile} className={dropdownLinkClass(active === 'privacy')}>Privacy Policy</Link>
              <Link to="/terms" onClick={closeMobile} className={dropdownLinkClass(active === 'terms')}>Terms of Service</Link>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <Link to="/login" onClick={closeMobile} className="rounded-lg border border-gray-200 px-4 py-2.5 text-center text-sm font-semibold text-gray-700">
                Log In
              </Link>
              <Link to="/app" onClick={closeMobile} className="rounded-lg bg-brand-600 px-4 py-2.5 text-center text-sm font-semibold text-white">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
