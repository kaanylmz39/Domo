import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  FileText,
  Inbox,
  PieChart,
  Receipt,
  Settings,
} from 'lucide-react'
import MarketingFooter from '../components/layout/MarketingFooter'
import MarketingNav from '../components/layout/MarketingNav'

const steps = [
  {
    number: '01',
    icon: BarChart3,
    title: 'Get instant overview',
    text: 'The Cockpit gives a fast overview of the portfolio: monthly income, yearly income, expenses, result, unpaid rent, portfolio summary, and recent activity.',
    see: ['Key income and expense cards', 'Portfolio summary', 'Recent activity overview'],
    link: '/app',
    linkText: 'Open Cockpit',
  },
  {
    number: '02',
    icon: Building2,
    title: 'Zoom into properties',
    text: 'The Portfolio page shows every property and lets owners expand buildings into individual units. This is where rent, tenants, and contract dates become visible per unit.',
    see: ['Properties and cities', 'Unit-level rent', 'Tenant and status per unit'],
    link: '/app/portfolio',
    linkText: 'View Portfolio',
  },
  {
    number: '03',
    icon: Building2,
    title: 'Centralise property records',
    text: 'Clicking a property opens the dossier. This keeps the long-term record together: overview, units, financials, contracts, documents, developments, and valuations.',
    see: ['Property details', 'Units and contracts', 'Valuation and document history'],
    link: '/app/portfolio',
    linkText: 'Choose a Property',
  },
  {
    number: '04',
    icon: Receipt,
    title: 'Track rent and follow-ups',
    text: 'Rent Control turns contracts into a monthly checklist. Expected rent comes from active contracts, while the user only marks whether rent was paid, partial, or unpaid.',
    see: ['Expected rent per tenant', 'Paid status', 'Payment date and notes'],
    link: '/app/rent-control',
    linkText: 'Open Rent Control',
  },
  {
    number: '05',
    icon: Inbox,
    title: 'Approve AI suggestions',
    text: 'The AI Inbox is prepared for future automation. Today it shows a manual review workflow where files can be checked, renamed, categorized, and linked to a property.',
    see: ['Suggested property and category', 'Suggested file names', 'Approve and organize workflow'],
    link: '/app/ai-inbox',
    linkText: 'Open AI Inbox',
  },
  {
    number: '06',
    icon: FileText,
    title: 'Turn data into reports',
    text: 'Reports show previews for bank, tax, performance, unpaid rent, and valuation reports. Settings collect app information, categories, export placeholders, and reset options.',
    see: ['Report previews', 'Document and expense categories', 'Local data controls'],
    link: '/app/reports',
    linkText: 'View Reports',
  },
]

const concepts = [
  {
    title: 'Property first',
    text: 'Everything starts from the property. Units, tenants, contracts, income, expenses, and documents all connect back to that stable asset.',
  },
  {
    title: 'Unit-level control',
    text: 'One building can have many units. Domo keeps rent, tenant, contract, and status separate for each unit.',
  },
  {
    title: 'Archive plus cockpit',
    text: 'Domo is both a clean archive and an operating cockpit: records stay organized, while the owner can still make decisions quickly.',
  },
]

function MiniVisual({ type }: { type: string }) {
  if (type === 'cockpit') {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
        <div className="grid grid-cols-2 gap-2 mb-3">
          {['€ 12.850', '€ 154k', '€ 62k', '€ 91k'].map((value, index) => (
            <div key={value} className="rounded-lg border border-gray-100 bg-gray-50 p-2">
              <div className="h-1.5 w-12 rounded bg-gray-200 mb-2" />
              <div className={`text-sm font-bold ${index === 2 ? 'text-red-500' : 'text-brand-700'}`}>{value}</div>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <div className="h-2 rounded bg-brand-100 w-full" />
          <div className="h-2 rounded bg-gray-100 w-4/5" />
          <div className="h-2 rounded bg-gray-100 w-2/3" />
        </div>
      </div>
    )
  }

  if (type === 'portfolio') {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
        {[
          ['Keizersgracht 274', '€ 2.150'],
          ['Unit A', '€ 1.250'],
          ['Unit B', '€ 900'],
        ].map(([name, rent], index) => (
          <div key={name} className={`flex items-center justify-between py-2 ${index > 0 ? 'pl-4 border-t border-gray-100' : ''}`}>
            <div>
              <div className="text-xs font-semibold text-gray-800">{name}</div>
              <div className="text-[10px] text-gray-400">{index === 0 ? 'Amsterdam · building' : 'Rented · active contract'}</div>
            </div>
            <div className="text-xs font-bold text-brand-700">{rent}</div>
          </div>
        ))}
      </div>
    )
  }

  if (type === 'dossier') {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
        <div className="flex gap-1.5 mb-3 overflow-hidden">
          {['Overview', 'Units', 'Contracts'].map(tab => (
            <div key={tab} className={`rounded-md px-2 py-1 text-[10px] font-medium ${tab === 'Overview' ? 'bg-brand-100 text-brand-800' : 'bg-gray-100 text-gray-500'}`}>{tab}</div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-gray-50 p-2">
            <div className="h-2 rounded bg-gray-200 mb-2" />
            <div className="h-2 rounded bg-gray-100 w-2/3" />
          </div>
          <div className="rounded-lg bg-gray-50 p-2">
            <div className="h-2 rounded bg-gray-200 mb-2" />
            <div className="h-2 rounded bg-brand-100 w-3/4" />
          </div>
        </div>
      </div>
    )
  }

  if (type === 'rent') {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
        {[
          ['Jan de Vries', 'Paid', 'text-brand-700 bg-brand-50'],
          ['Sophie Bakker', 'Partial', 'text-amber-700 bg-amber-50'],
          ['Cafe de Witte', 'Unpaid', 'text-red-600 bg-red-50'],
        ].map(([tenant, status, style]) => (
          <div key={tenant} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
            <span className="text-xs font-medium text-gray-700">{tenant}</span>
            <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${style}`}>{status}</span>
          </div>
        ))}
      </div>
    )
  }

  if (type === 'inbox') {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
        <div className="rounded-lg border border-dashed border-brand-200 bg-brand-50 p-3 mb-3">
          <div className="text-xs font-semibold text-brand-800">scan_3948_final.pdf</div>
          <div className="text-[10px] text-brand-700 mt-1">Suggested rename ready</div>
        </div>
        <div className="h-2 rounded bg-gray-100 mb-2" />
        <div className="h-2 rounded bg-gray-100 w-3/4 mb-3" />
        <div className="rounded-md bg-brand-600 text-white text-center text-[10px] font-semibold py-1.5">Approve</div>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[55, 78, 42].map(height => (
          <div key={height} className="flex items-end h-16 rounded-lg bg-gray-50 px-2">
            <div className="w-full rounded-t bg-brand-400" style={{ height: `${height}%` }} />
          </div>
        ))}
      </div>
      <div className="h-2 rounded bg-gray-100 w-full mb-2" />
      <div className="h-2 rounded bg-gray-100 w-2/3" />
    </div>
  )
}

export default function Walkthrough() {
  return (
    <div className="min-h-screen bg-white">
      <MarketingNav active="walkthrough" />

      <main className="pt-32 pb-20 px-4 sm:px-6">
        <section className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-3">Walkthrough</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            See how Domo works from first overview to detailed property records.
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">
            This guided tour explains what clients can see inside Domo, how the cockpit is structured, and where each important workflow lives.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/app" className="inline-flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-brand-700 transition">
              Start in the App <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-50 transition">
              Ask for a walkthrough
            </Link>
          </div>
        </section>

        <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 mb-20">
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 sm:p-8">
            <div className="w-12 h-12 rounded-xl bg-brand-600 text-white flex items-center justify-center mb-5">
              <PieChart size={22} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The basic idea</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Domo is designed around the way property owners actually think: first the property, then the units, then the changing records around it.
            </p>
            <div className="space-y-4">
              {concepts.map(item => (
                <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">What clients can explore</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                ['Cockpit', 'Portfolio-wide numbers and activity'],
                ['Portfolio', 'Properties, buildings, and unit-level rent'],
                ['Rent Control', 'Monthly rent checklist from contracts'],
                ['AI Inbox', 'Future-ready document review workflow'],
                ['Reports', 'Bank, tax, performance, and valuation previews'],
                ['Settings', 'Categories, export placeholders, and reset option'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-xl border border-gray-200 p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-3">Step by step</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">A guided route through the product</h2>
          </div>

          <div className="space-y-5">
            {steps.map((step, index) => (
              <div key={step.title} className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-[0.55fr_1.1fr_1fr_0.9fr] gap-6 items-start">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  <step.icon size={22} className="text-brand-600" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.text}</p>
                </div>

                <MiniVisual type={['cockpit', 'portfolio', 'dossier', 'rent', 'inbox', 'reports'][index]} />

                <div className="bg-gray-50 rounded-xl border border-gray-200 p-4">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">What you see</p>
                  <div className="space-y-2 mb-4">
                    {step.see.map(item => (
                      <div key={item} className="flex gap-2 text-sm text-gray-700">
                        <Check size={15} className="text-brand-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link to={step.link} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800">
                    {step.linkText} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto bg-brand-700 rounded-2xl p-8 sm:p-10 text-center">
          <Settings size={26} className="text-brand-200 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Best way to use the demo</h2>
          <p className="text-brand-200 leading-relaxed max-w-3xl mx-auto mb-7">
            Open the app, expand a multi-unit property in Portfolio, then check Rent Control and AI Inbox. That route shows the main idea quickly: property-first records with unit-level control.
          </p>
          <Link to="/app" className="inline-flex items-center gap-2 bg-white text-brand-700 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-brand-50 transition">
            Open the Demo App <ArrowRight size={16} />
          </Link>
        </section>
      </main>

      <MarketingFooter />
    </div>
  )
}
