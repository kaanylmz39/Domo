import { Link } from 'react-router-dom'
import { ArrowRight, Briefcase, HeartHandshake, Layers, MapPin } from 'lucide-react'

const values = [
  { icon: Layers, title: 'Build with structure', text: 'We care about calm systems, clean records, and interfaces that make complex portfolios easier to understand.' },
  { icon: HeartHandshake, title: 'Stay close to users', text: 'Domo is shaped around real landlord workflows: rent checks, contracts, expenses, documents, and reports.' },
  { icon: MapPin, title: 'Dutch market first', text: 'We are focused on the local real estate context before expanding outward.' },
]

export default function Careers() {
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
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-3">Careers</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            Help build the cockpit for modern property portfolios.
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">
            We are early, focused, and careful about what we build. The best people for Domo like real problems, clean products, and useful software.
          </p>
        </section>

        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {values.map(v => (
            <div key={v.title} className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="w-11 h-11 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                <v.icon size={20} className="text-brand-600" />
              </div>
              <h2 className="font-semibold text-gray-900 mb-2">{v.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed">{v.text}</p>
            </div>
          ))}
        </section>

        <section className="max-w-5xl mx-auto bg-gray-50 rounded-2xl border border-gray-200 p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 bg-brand-600 text-white rounded-xl flex items-center justify-center">
              <Briefcase size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Open roles</h2>
              <p className="text-sm text-gray-500">We are not hiring for fixed roles yet.</p>
            </div>
          </div>
          <p className="text-gray-500 leading-relaxed mb-6">
            If you are strong in product design, frontend engineering, real estate operations, or finance workflows, we are open to conversations. Send a short note about what you would want to build at Domo.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-brand-700 transition">
            Introduce yourself <ArrowRight size={16} />
          </Link>
        </section>
      </main>
    </div>
  )
}
