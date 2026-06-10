import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Check, FileText, PieChart, Receipt, Shield } from 'lucide-react'
import MarketingFooter from '../components/layout/MarketingFooter'
import MarketingNav from '../components/layout/MarketingNav'

const reasons = [
  {
    icon: Building2,
    title: 'Your property stays the center of everything',
    text: 'Tenants, contracts, rents, expenses, valuations, and documents all change over time. The property is the stable object. Domo keeps every record connected to the property and, when needed, to the exact unit.',
  },
  {
    icon: Receipt,
    title: 'Rent is tracked per unit, not just per building',
    text: 'If one building has five apartments, each unit can have its own rent, tenant, contract dates, payment status, and rent increase moment. That gives owners a much clearer view than one building-level number.',
  },
  {
    icon: FileText,
    title: 'Documents become an archive instead of a folder mess',
    text: 'Contracts, invoices, bank statements, valuation reports, tax documents, drawings, and renovation files can be organized by property and category, so important history stays easy to find.',
  },
  {
    icon: PieChart,
    title: 'Financial control becomes easier to explain',
    text: 'Domo separates income, expenses, deposits, unpaid rent, valuations, and portfolio-level costs. That structure makes conversations with accountants, banks, partners, or investors easier.',
  },
]

const outcomes = [
  'Know what rent should come in every month',
  'See which units and contracts need attention',
  'Keep a clean archive per property',
  'Prepare faster for accounting and financing conversations',
  'Understand portfolio value and property performance over time',
  'Reduce dependency on scattered spreadsheets and memory',
]

export default function WhyDomo() {
  return (
    <div className="min-h-screen bg-white">
      <MarketingNav active="why" />

      <main className="pt-32 pb-20 px-4 sm:px-6">
        <section className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-3">Why Domo</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            Property owners need more than a spreadsheet.
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">
            Domo is built for owners who want a serious, property-first cockpit: one place to understand rent, contracts, documents, expenses, valuations, and the long-term history of each asset.
          </p>
        </section>

        <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-10 items-start mb-20">
          <div className="space-y-5">
            {reasons.map(reason => (
              <div key={reason.title} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="w-11 h-11 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                  <reason.icon size={20} className="text-brand-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed">{reason.text}</p>
              </div>
            ))}
          </div>

          <aside className="bg-gray-50 rounded-2xl border border-gray-200 p-6 sm:p-8 sticky top-28">
            <div className="w-12 h-12 bg-brand-600 text-white rounded-xl flex items-center justify-center mb-5">
              <Shield size={22} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What owners gain</h2>
            <div className="space-y-3">
              {outcomes.map(item => (
                <div key={item} className="flex gap-2.5 text-sm text-gray-700">
                  <Check size={16} className="text-brand-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                Domo is especially useful when a portfolio becomes too important to manage from memory, loose PDFs, and disconnected Excel sheets.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-brand-700 transition">
                Talk to us <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </section>

        <section className="max-w-5xl mx-auto bg-brand-700 rounded-2xl p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">The simple idea behind Domo</h2>
          <p className="text-brand-200 leading-relaxed max-w-3xl mx-auto">
            A property portfolio should feel like a clean archive and a cockpit at the same time: structured enough for financial decisions, simple enough to use every month.
          </p>
        </section>
      </main>

      <MarketingFooter />
    </div>
  )
}
