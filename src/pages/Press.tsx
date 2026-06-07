import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Download, Newspaper, Shield } from 'lucide-react'

const facts = [
  ['Company', 'Domo'],
  ['Category', 'Real estate data management cockpit'],
  ['Market focus', 'Dutch landlords and property investors'],
  ['Product stage', 'Frontend prototype and product validation'],
]

export default function Press() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Link to="/"><img src={import.meta.env.BASE_URL + 'logo-light.svg'} alt="Domo" className="h-16 object-contain" /></Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link to="/#features" className="hover:text-gray-900 transition">Features</Link>
            <Link to="/#pricing" className="hover:text-gray-900 transition">Pricing</Link>
            <Link to="/about" className="hover:text-gray-900 transition">About</Link>
            <Link to="/contact" className="hover:text-gray-900 transition">Contact</Link>
          </div>
          <Link to="/app" className="bg-brand-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-brand-700 transition flex items-center gap-2">
            Get Started <ArrowRight size={14} />
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-4 sm:px-6">
        <section className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-3">Press</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            Domo is building a property-first operating system for real estate portfolios.
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">
            A clean cockpit for landlords and investors to manage properties, units, rent, documents, expenses, valuations, and reports in one place.
          </p>
        </section>

        <section className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
            <div className="w-11 h-11 bg-brand-600 text-white rounded-xl flex items-center justify-center mb-5">
              <Newspaper size={20} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Company boilerplate</h2>
            <p className="text-gray-500 leading-relaxed">
              Domo is a real estate data management cockpit for property portfolios. The platform helps landlords and investors organize their properties, units, tenants, contracts, rent payments, expenses, documents, valuations, and reports from one property-first workspace.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">Company facts</h2>
            <div className="space-y-4">
              {facts.map(([label, value]) => (
                <div key={label} className="border-b border-gray-100 pb-3">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{label}</p>
                  <p className="text-sm font-medium text-gray-900 mt-1">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <Building2 size={20} className="text-brand-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Product screenshots</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Screenshots and product visuals will be prepared as the product matures.</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <Download size={20} className="text-brand-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Brand assets</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Logo files and brand guidelines can be shared on request.</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <Shield size={20} className="text-brand-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Media contact</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">For interviews, product notes, or company background, contact the Domo team.</p>
            <Link to="/contact" className="text-sm font-semibold text-brand-700 hover:text-brand-800">Contact Domo</Link>
          </div>
        </section>
      </main>
    </div>
  )
}
