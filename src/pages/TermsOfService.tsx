import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import MarketingFooter from '../components/layout/MarketingFooter'
import MarketingNav from '../components/layout/MarketingNav'

const sections = [
  {
    title: '1. Use of the website',
    text: 'The Domo website and prototype are provided to present the product concept and allow visitors to explore the interface. You may use the site for lawful evaluation and feedback.',
  },
  {
    title: '2. Prototype status',
    text: 'The current app is a frontend prototype using mock data and local browser storage. It is not yet a production system for storing live property, tenant, financial, or legal records.',
  },
  {
    title: '3. Visitor changes',
    text: 'Changes made inside the prototype, such as adding or deleting properties, are stored only in the visitor’s own browser and do not affect the public website, repository, or other visitors.',
  },
  {
    title: '4. No professional advice',
    text: 'Domo may display financial, tax, property, or reporting concepts, but the website does not provide legal, tax, accounting, mortgage, or investment advice.',
  },
  {
    title: '5. Availability',
    text: 'The website may change as the product develops. Features, pricing, and availability may be updated over time.',
  },
  {
    title: '6. Contact',
    text: 'Questions about these terms can be sent through the contact page. These terms should be reviewed before commercial launch.',
  },
]

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <MarketingNav />

      <main className="pt-32 pb-20 px-4 sm:px-6">
        <section className="max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-3">Terms of Service</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            Terms for using Domo.
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            These terms describe how the current Domo website and prototype may be used. They are a practical starting point and should be legally reviewed before commercial launch.
          </p>
          <p className="text-sm text-gray-400 mt-4">Last updated: June 2026</p>
        </section>

        <section className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 divide-y divide-gray-100">
          {sections.map(section => (
            <div key={section.title} className="p-6">
              <h2 className="font-semibold text-gray-900 mb-2">{section.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed">{section.text}</p>
            </div>
          ))}
        </section>

        <section className="max-w-3xl mx-auto mt-10 bg-gray-50 rounded-2xl border border-gray-200 p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <p className="text-sm text-gray-600">Questions about using Domo?</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-brand-700 transition">
            Contact us <ArrowRight size={16} />
          </Link>
        </section>
      </main>

      <MarketingFooter />
    </div>
  )
}
