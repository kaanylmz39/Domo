import { Link } from 'react-router-dom'

export default function MarketingFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <img src={import.meta.env.BASE_URL + 'logo-dark.svg'} alt="Domo" className="h-20 object-contain mb-4" />
            <p className="text-sm leading-relaxed">
              The property management cockpit for Dutch landlords and real estate investors.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/#features" className="hover:text-white transition">Features</Link></li>
              <li><Link to="/#pricing" className="hover:text-white transition">Pricing</Link></li>
              <li><Link to="/#compare" className="hover:text-white transition">Why Domo</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link to="/app" className="hover:text-white transition">Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link to="/careers" className="hover:text-white transition">Careers</Link></li>
              <li><Link to="/press" className="hover:text-white transition">Press</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Support</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <span>© 2026 Domo. All rights reserved.</span>
          <span>Made in the Netherlands</span>
        </div>
      </div>
    </footer>
  )
}
