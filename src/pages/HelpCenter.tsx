import { Link } from 'react-router-dom'
import { ArrowRight, Building2, FileText, HelpCircle, Mail, Receipt, Settings } from 'lucide-react'
import MarketingFooter from '../components/layout/MarketingFooter'
import MarketingNav from '../components/layout/MarketingNav'

const topics = [
  { icon: Building2, title: 'Portfolio setup', text: 'Add properties, split buildings into units, and keep property details structured.' },
  { icon: Receipt, title: 'Rent control', text: 'Understand expected rent, paid status, partial payments, payment dates, and monthly checks.' },
  { icon: FileText, title: 'Documents', text: 'Organize contracts, invoices, bank statements, tax documents, renovation records, and valuations.' },
  { icon: Settings, title: 'Settings and data', text: 'Learn how local browser data works, how to reset data, and what changes are saved locally.' },
]

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-white">
      <MarketingNav />

      <main className="pt-32 pb-20 px-4 sm:px-6">
        <section className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-3">Help Center</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            Support for using Domo with confidence.
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">
            Find guidance for setting up properties, managing units, checking rent, and keeping documents organized.
          </p>
        </section>

        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {topics.map(topic => (
            <div key={topic.title} className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="w-11 h-11 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                <topic.icon size={20} className="text-brand-600" />
              </div>
              <h2 className="font-semibold text-gray-900 mb-2">{topic.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed">{topic.text}</p>
            </div>
          ))}
        </section>

        <section className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
            <HelpCircle size={24} className="text-brand-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common questions</h2>
            <div className="space-y-4 text-sm text-gray-600">
              <p><strong className="text-gray-900">Can visitors change the real website?</strong><br />No. Changes are stored only in each visitor's browser.</p>
              <p><strong className="text-gray-900">Is there a backend?</strong><br />Not yet. The current prototype uses mock data and localStorage.</p>
              <p><strong className="text-gray-900">Can the app handle multiple units?</strong><br />Yes. Rent and tenant information can be managed per unit.</p>
            </div>
          </div>
          <div className="bg-brand-700 rounded-2xl p-8 text-white">
            <Mail size={24} className="text-brand-200 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Need more help?</h2>
            <p className="text-brand-200 leading-relaxed mb-6">
              If you want a walkthrough, have a portfolio-specific question, or want to discuss Starter, Professional, or Custom pricing, contact the Domo team.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-brand-700 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-brand-50 transition">
              Contact support <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  )
}
