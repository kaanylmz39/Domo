import { Link } from 'react-router-dom'
import { ArrowRight, Check, HelpCircle } from 'lucide-react'
import MarketingFooter from '../components/layout/MarketingFooter'
import MarketingNav from '../components/layout/MarketingNav'

const plans = [
  {
    name: 'Freemium',
    price: '€0',
    period: '/month',
    desc: 'For owners who want to organize a small portfolio first.',
    features: ['Up to 5 units', 'Rent tracking', 'Document storage (100 MB)', 'Basic reports', 'Mobile access'],
    cta: 'Get Started Free',
    href: '/app',
    highlight: false,
  },
  {
    name: 'Starter',
    price: '€89',
    period: '/month',
    desc: 'For active landlords who need clearer monthly control.',
    features: ['Up to 20 units', 'AI Inbox & smart filing', 'Unlimited document storage', 'Bank & tax reports', 'Expense tracking', 'Valuation history', 'Priority email support'],
    cta: 'Request Access',
    href: '/contact',
    highlight: true,
  },
  {
    name: 'Professional',
    price: '€189',
    period: '/month',
    desc: 'For larger portfolios with more documents, checks, and reporting needs.',
    features: ['Up to 75 units', 'Everything in Starter', 'Multi-user access', 'Custom report builder', 'Personal onboarding', 'Data export & backup'],
    cta: 'Request Access',
    href: '/contact',
    highlight: false,
  },
  {
    name: 'Custom',
    price: 'From €299',
    period: '/month',
    desc: 'For portfolios above 75 units, teams, and custom operating needs.',
    features: ['From 75+ units', 'Everything in Professional', 'Custom onboarding', 'Portfolio migration support', 'Advanced report setup', 'Priority support'],
    cta: 'Request Custom Price',
    href: '/contact',
    highlight: false,
  },
]

const onboarding = [
  {
    type: 'Self-service',
    price: '€0',
    description: 'Customer fills templates independently.',
  },
  {
    type: 'Guided onboarding',
    price: '€250-€500',
    description: 'Support call and onboarding guidance.',
  },
  {
    type: 'Assisted onboarding',
    price: '€750-€1,000',
    description: 'Temporary access with permission for setup support.',
  },
  {
    type: 'Custom onboarding',
    price: '€2,000+',
    description: 'Larger portfolios with complex data structure.',
  },
]

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <MarketingNav active="pricing" />

      <main className="pt-32 pb-20 px-4 sm:px-6">
        <section className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-3">Pricing</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            Simple plans, with onboarding when you need it.
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">
            Start free, scale by the number of units you manage, and choose the onboarding level that fits your portfolio structure.
          </p>
        </section>

        <section className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map(plan => (
              <div key={plan.name} className={`rounded-xl border p-6 flex flex-col ${plan.highlight ? 'bg-white border-brand-600 ring-1 ring-brand-600 shadow-xl relative' : 'bg-white border-gray-200'}`}>
                {plan.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</div>}
                <h2 className="text-lg font-bold text-gray-900">{plan.name}</h2>
                <div className="mt-4 mb-1">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-sm text-gray-500">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-500 mb-6">{plan.desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <Check size={16} className="text-brand-600 shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={plan.href}
                  className={`w-full text-center py-2.5 rounded-lg text-sm font-semibold transition ${
                    plan.highlight ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-8">All subscription prices exclude VAT.</p>
        </section>

        <section className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-3">Onboarding costs</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Choose how much setup support you want.</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Onboarding is separate from the monthly plan. Small portfolios can start alone, while larger portfolios can get help structuring data.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-5 py-4 text-left font-semibold text-gray-500">Onboarding type</th>
                    <th className="px-5 py-4 text-left font-semibold text-gray-500">Price</th>
                    <th className="px-5 py-4 text-left font-semibold text-gray-500">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {onboarding.map(item => (
                    <tr key={item.type}>
                      <td className="px-5 py-4 font-semibold text-gray-900">{item.type}</td>
                      <td className="px-5 py-4 font-bold text-brand-700">{item.price}</td>
                      <td className="px-5 py-4 text-gray-500">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto bg-gray-50 rounded-2xl border border-gray-200 p-6 sm:p-8 flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
          <div className="flex gap-4">
            <div className="w-11 h-11 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
              <HelpCircle size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Not sure which plan fits?</h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Tell us your number of units, current spreadsheet structure, and document situation. We can recommend a plan and onboarding route.
              </p>
            </div>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-brand-700 transition">
            Contact Domo <ArrowRight size={16} />
          </Link>
        </section>
      </main>

      <MarketingFooter />
    </div>
  )
}
