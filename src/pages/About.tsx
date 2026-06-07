import { Link } from 'react-router-dom'
import { ArrowRight, Building2, FileText, Home, Receipt } from 'lucide-react'

const principles = [
  { icon: Home, title: 'Property first', text: 'Every record starts from the property dossier, because the property is the long-term object.' },
  { icon: Building2, title: 'Unit level detail', text: 'Rent, tenants, contracts, and status are tracked per unit, even inside one building.' },
  { icon: Receipt, title: 'Finance ready', text: 'Income, expenses, valuations, and reports are structured for owners, banks, and accountants.' },
  { icon: FileText, title: 'Clean archive', text: 'Documents are organized by property and category so the archive stays usable over time.' },
]

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Link to="/"><img src={import.meta.env.BASE_URL + 'logo-light.svg'} alt="Domo" className="h-16 object-contain" /></Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link to="/#features" className="hover:text-gray-900 transition">Features</Link>
            <Link to="/#pricing" className="hover:text-gray-900 transition">Pricing</Link>
            <Link to="/about" className="text-gray-900">About</Link>
            <Link to="/contact" className="hover:text-gray-900 transition">Contact</Link>
          </div>
          <Link to="/app" className="bg-brand-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-brand-700 transition flex items-center gap-2">
            Get Started <ArrowRight size={14} />
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-4 sm:px-6">
        <section className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-3">About Domo</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            Built for property owners who outgrew Excel.
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">
            Domo gives landlords and real estate investors one calm cockpit for every property, unit, tenant, document, payment, valuation, and report.
          </p>
        </section>

        <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center mb-20">
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why we are building it</h2>
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>
                Real estate data is usually spread across spreadsheets, PDF folders, bank exports, email attachments, and memory. That works for a while, but it becomes fragile as soon as the portfolio grows.
              </p>
              <p>
                Domo is designed as a property-first archive and control center. The system keeps the stable object, the property, at the center while tenants, contracts, income, expenses, documents, valuations, and renovations change around it.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {principles.map(p => (
              <div key={p.title} className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="w-11 h-11 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                  <p.icon size={20} className="text-brand-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto bg-brand-700 rounded-2xl p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Want to see if Domo fits your portfolio?</h2>
          <p className="text-brand-200 mb-7">Tell us what you manage and we will prepare a focused walkthrough.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-brand-700 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-brand-50 transition">
            Contact Domo <ArrowRight size={16} />
          </Link>
        </section>
      </main>
    </div>
  )
}
