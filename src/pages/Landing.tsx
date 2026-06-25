import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Building2, Shield, FileText, BarChart3, Receipt, Inbox,
  ChevronRight, Check, ArrowRight, Star, Users, Globe,
  Zap, Lock, Clock, TrendingUp, Home, PieChart,
  ClipboardCheck, FileSearch, Wrench, Download,
} from 'lucide-react'
import MarketingNav from '../components/layout/MarketingNav'
import ProductTourVideo from '../components/marketing/ProductTourVideo'

/* ── Features ───────────────────────────────────────────── */
const features = [
  { icon: Building2, title: 'Property cockpit', desc: 'See properties, units, tenants, contracts, income, expenses, and documents in one structured overview.' },
  { icon: Receipt, title: 'Rent control', desc: 'Monthly rent checklists are created from active contracts, so paid, partial, and unpaid rent are easy to follow.' },
  { icon: FileText, title: 'Digital archive', desc: 'Store contracts, invoices, valuations, bank statements, photos, and tax documents under the right property.' },
  { icon: Inbox, title: 'AI inbox workflow', desc: 'Review suggested document names, categories, dates, amounts, and property links before approving them.' },
  { icon: BarChart3, title: 'Reports', desc: 'Prepare clean views for bank reporting, tax preparation, unpaid rent, property performance, and valuations.' },
  { icon: Shield, title: 'Valuation history', desc: 'Track WOZ values, appraisals, bank valuations, and market estimates over time per property.' },
]

/* ── Expected Outputs ───────────────────────────────────── */
const expectedOutputs = [
  { icon: ClipboardCheck, title: 'Rent Status Overview', desc: 'See paid, unpaid and overdue rent per property or unit, including payment dates and open amounts.' },
  { icon: FileSearch, title: 'Missing Document Report', desc: 'Identify missing contracts, invoices, inspection files, ownership documents and other key records.' },
  { icon: Wrench, title: 'Maintenance Task Overview', desc: 'Track open, planned and completed maintenance tasks, linked directly to the relevant property or unit.' },
  { icon: Download, title: 'Accountant & Bank Export', desc: 'Generate structured overviews of income, costs, documents and portfolio information for accountants, banks or advisors.' },
]

/* ── Stats ──────────────────────────────────────────────── */
const stats = [
  { value: '2,400+', label: 'Properties Managed' },
  { value: '€180M+', label: 'Rent Tracked' },
  { value: '850+', label: 'Active Landlords' },
  { value: '99.9%', label: 'Uptime' },
]

/* ── How it works ───────────────────────────────────────── */
const steps = [
  { icon: Home, title: 'Centralise the portfolio', desc: 'Create a structured property record with units, purchase data, mortgage information, notes, and ownership details.' },
  { icon: Users, title: 'Connect operational data', desc: 'Link tenants, contracts, rent amounts, documents, expenses, developments, and valuations to the right property or unit.' },
  { icon: PieChart, title: 'Manage and report', desc: 'Track rent, monitor results, review documents, and prepare clear reports for banking, tax, and portfolio decisions.' },
]

/* ── Pricing ────────────────────────────────────────────── */
const plans = [
  {
    name: 'Freemium',
    price: '€0',
    period: '/month',
    desc: 'For owners who want to organize a small portfolio first.',
    features: [
      'Up to 5 units',
      'Rent tracking',
      'Document storage (100 MB)',
      'Basic reports',
      'Mobile access',
    ],
    cta: 'Get Started Free',
    href: '/app',
    highlight: false,
  },
  {
    name: 'Starter',
    price: '€89',
    period: '/month',
    desc: 'For active landlords who need clearer monthly control.',
    features: [
      'Up to 20 units',
      'AI Inbox & smart filing',
      'Unlimited document storage',
      'Bank & tax reports',
      'Expense tracking',
      'Valuation history',
      'Priority email support',
    ],
    cta: 'Request Access',
    href: '/contact',
    highlight: true,
  },
  {
    name: 'Professional',
    price: '€189',
    period: '/month',
    desc: 'For larger portfolios with more documents, checks, and reporting needs.',
    features: [
      'Up to 75 units',
      'Everything in Starter',
      'Multi-user access',
      'Custom report builder',
      'Personal onboarding',
      'Data export & backup',
    ],
    cta: 'Request Access',
    href: '/contact',
    highlight: false,
  },
  {
    name: 'Custom',
    price: 'From €299',
    period: '/month',
    desc: 'For portfolios above 75 units, teams, and custom operating needs.',
    features: [
      'From 75+ units',
      'Everything in Professional',
      'Custom onboarding',
      'Portfolio migration support',
      'Advanced report setup',
      'Priority support',
    ],
    cta: 'Request Custom Price',
    href: '/contact',
    highlight: false,
  },
]

/* ── Testimonials ───────────────────────────────────────── */
const testimonials = [
  { name: 'Thomas van den Berg', role: 'Private Investor · 12 properties', text: 'I switched from Excel to Domo in a weekend. Now I can see exactly which tenants paid, which contracts are expiring, and what my portfolio is worth — all in one place.', avatar: 'TV' },
  { name: 'Sarah Kooiman', role: 'Property Manager · 45 units', text: 'Rent control alone saves me 4 hours every month. The AI inbox is magic — I just upload invoices and Domo files them automatically.', avatar: 'SK' },
  { name: 'Mark de Jong', role: 'Real Estate Developer · 8 buildings', text: 'Finally a tool built for Dutch landlords. WOZ tracking, proper rent control, and clean reports my accountant actually likes.', avatar: 'MJ' },
]

/* ── Comparison ─────────────────────────────────────────── */
const comparisons = [
  { feature: 'Property & unit tracking', domo: true, spreadsheet: true, generic: true },
  { feature: 'Rent payment tracking', domo: true, spreadsheet: false, generic: true },
  { feature: 'Dutch tax & WOZ support', domo: true, spreadsheet: false, generic: false },
  { feature: 'Document auto-organization', domo: true, spreadsheet: false, generic: false },
  { feature: 'AI-powered filing', domo: true, spreadsheet: false, generic: false },
  { feature: 'Bank & tax reports', domo: true, spreadsheet: false, generic: true },
  { feature: 'No learning curve', domo: true, spreadsheet: true, generic: false },
  { feature: 'Free plan available', domo: true, spreadsheet: true, generic: false },
]

/* ── FAQ ────────────────────────────────────────────────── */
const faqs = [
  { q: 'Is Domo really free?', a: 'Yes. The Freemium plan is free forever for up to 5 units. No credit card required.' },
  { q: 'Can I import my existing data?', a: 'Yes. You can import properties, tenants, and financial data from spreadsheets. Our team can help with migration on Professional and Custom plans.' },
  { q: 'Is my data secure?', a: 'All data is encrypted at rest and in transit. We use enterprise-grade infrastructure with 99.9% uptime and daily backups.' },
  { q: 'Do you support commercial properties?', a: 'Yes. Domo works for residential, commercial, and mixed-use properties. Each unit can have its own contract type and rent structure.' },
  { q: 'Can multiple people access my account?', a: 'Multi-user access is available on the Professional and Custom plans. Each user can have their own login with role-based permissions.' },
]

type ExpectedOutput = typeof expectedOutputs[number]

function StatusBadge({ children, tone }: { children: string; tone: 'green' | 'amber' | 'red' | 'gray' }) {
  const tones = {
    green: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    amber: 'bg-amber-50 text-amber-700 border-amber-100',
    red: 'bg-red-50 text-red-700 border-red-100',
    gray: 'bg-gray-50 text-gray-600 border-gray-200',
  }

  return (
    <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${tones[tone]}`}>
      {children}
    </span>
  )
}

function OutputPreview({ output }: { output: ExpectedOutput }) {
  if (output.title === 'Rent Status Overview') {
    return (
      <div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
          {[
            ['Expected rent', '€12.850'],
            ['Received', '€10.950'],
            ['Open amount', '€1.900'],
            ['Paid units', '9 / 12'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-400">{label}</div>
              <div className="mt-1 text-xl font-extrabold text-gray-950">{value}</div>
            </div>
          ))}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-left text-xs uppercase tracking-wide text-gray-400">
                <th className="py-3 pr-4 font-semibold">Property / Unit</th>
                <th className="py-3 pr-4 font-semibold">Tenant</th>
                <th className="py-3 pr-4 font-semibold">Expected</th>
                <th className="py-3 pr-4 font-semibold">Received</th>
                <th className="py-3 pr-4 font-semibold">Status</th>
                <th className="py-3 font-semibold">Payment date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['Keizersgracht 274 / Unit A', 'Jan de Vries', '€1.450', '€1.450', 'Paid', '06 May 2026', 'green'],
                ['Witte de Withstraat 58 / Studio 2', 'Sophie Bakker', '€1.050', '€650', 'Partial', '08 May 2026', 'amber'],
                ['Stationsweg 23 / Apartment 3', 'Maria Santos', '€1.250', '€0', 'Overdue', '-', 'red'],
              ].map(row => (
                <tr key={row[0]} className="text-gray-700">
                  <td className="py-3 pr-4 font-medium text-gray-950">{row[0]}</td>
                  <td className="py-3 pr-4">{row[1]}</td>
                  <td className="py-3 pr-4">{row[2]}</td>
                  <td className="py-3 pr-4">{row[3]}</td>
                  <td className="py-3 pr-4"><StatusBadge tone={row[6] as 'green' | 'amber' | 'red'}>{row[4]}</StatusBadge></td>
                  <td className="py-3">{row[5]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  if (output.title === 'Missing Document Report') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          ['Keizersgracht 274', '2 missing', ['Inspection report', '2026 invoice copy']],
          ['Oudegracht 112', '1 missing', ['Updated WOZ decision']],
          ['Stationsweg 23', '3 missing', ['Signed contract', 'Permit file', 'Roof repair invoice']],
        ].map(([property, status, docs]) => (
          <div key={property as string} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <div className="flex items-start justify-between gap-3">
              <h4 className="font-bold text-gray-950">{property}</h4>
              <StatusBadge tone="amber">{status as string}</StatusBadge>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {(docs as string[]).map(doc => (
                <li key={doc} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )
  }

  if (output.title === 'Maintenance Task Overview') {
    return (
      <div className="space-y-3">
        {[
          ['Roof repair quotation', 'Planned', 'Stationsweg 23', '18 Jun 2026', 'amber'],
          ['Bathroom ventilation check', 'Open', 'Oudegracht 112 / Unit B', '22 Jun 2026', 'red'],
          ['Kitchen cabinet replacement', 'Completed', 'Keizersgracht 274 / Unit A', '04 Jun 2026', 'green'],
        ].map(row => (
          <div key={row[0]} className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
            <div>
              <div className="font-bold text-gray-950">{row[0]}</div>
              <div className="mt-1 text-sm text-gray-500">{row[2]} · Due {row[3]}</div>
            </div>
            <div className="md:text-right"><StatusBadge tone={row[4] as 'green' | 'amber' | 'red'}>{row[1]}</StatusBadge></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-5">
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
        <div className="text-xs font-semibold uppercase tracking-wide text-gray-400">Export summary</div>
        <div className="mt-4 space-y-3 text-sm text-gray-700">
          <div className="flex justify-between"><span>Portfolio income</span><strong className="text-gray-950">€154.200</strong></div>
          <div className="flex justify-between"><span>Portfolio costs</span><strong className="text-gray-950">€62.590</strong></div>
          <div className="flex justify-between"><span>Net result</span><strong className="text-emerald-700">€91.610</strong></div>
          <div className="flex justify-between"><span>Documents included</span><strong className="text-gray-950">148</strong></div>
        </div>
      </div>
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
        <div className="text-xs font-semibold uppercase tracking-wide text-gray-400">Included sheets</div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          {['Property overview', 'Rent ledger', 'Expense categories', 'Document index', 'Valuation overview', 'Open items'].map(item => (
            <div key={item} className="rounded-lg border border-gray-200 bg-white px-3 py-2 font-medium text-gray-700">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Landing() {
  const [selectedOutput, setSelectedOutput] = useState(expectedOutputs[0])

  return (
    <div className="min-h-screen bg-white">
      <MarketingNav />

      {/* ── Hero ────────────────────────────────────────── */}
      <section className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
            <Zap size={14} /> Built for Dutch landlords & property investors
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Stop Managing Properties<br />
            <span className="text-brand-600">in Spreadsheets</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Domo is the all-in-one property management cockpit. Track rent, organize documents, monitor expenses, and generate reports — built specifically for the Dutch real estate market.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/app"
              className="bg-brand-600 text-white px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-brand-700 transition flex items-center gap-2 shadow-lg shadow-brand-600/20"
            >
              Start for Free <ChevronRight size={18} />
            </Link>
            <a
              href="#demo"
              className="text-gray-600 px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-gray-50 transition border border-gray-200"
            >
              See Demo
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-400">
            <span className="flex items-center gap-1.5"><Check size={14} className="text-brand-500" /> Free forever plan</span>
            <span className="flex items-center gap-1.5"><Check size={14} className="text-brand-500" /> No credit card</span>
            <span className="flex items-center gap-1.5"><Check size={14} className="text-brand-500" /> Setup in 5 min</span>
          </div>
        </div>
      </section>

      {/* ── Dashboard mockup ────────────────────────────── */}
      <section id="demo" className="pb-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-1.5 sm:p-2 shadow-2xl">
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-gray-100 rounded-md h-6 flex items-center px-3 text-xs text-gray-400 max-w-sm">
                    app.domo.nl/cockpit
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-4">
                  {[
                    { label: 'Monthly Income', value: '€ 12.850', color: 'text-emerald-600' },
                    { label: 'Yearly Income', value: '€ 154.200', color: 'text-emerald-600' },
                    { label: 'Yearly Expenses', value: '€ 62.590', color: 'text-red-500' },
                    { label: 'Net Result', value: '€ 91.610', color: 'text-emerald-600' },
                    { label: 'Properties', value: '8', color: 'text-gray-900' },
                  ].map(c => (
                    <div key={c.label} className="bg-white rounded-lg border border-gray-200 p-3">
                      <div className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mb-1">{c.label}</div>
                      <div className={`text-sm sm:text-lg font-bold ${c.color}`}>{c.value}</div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Portfolio</div>
                    <div className="space-y-2 text-xs">
                      {['Keizersgracht 274 · Amsterdam', 'Witte de Withstraat 58 · Rotterdam', 'Oudegracht 112 · Utrecht', 'Stationsweg 23 · Den Haag'].map(p => (
                        <div key={p} className="flex justify-between py-1 border-b border-gray-50">
                          <span className="text-gray-700">{p}</span>
                          <span className="text-emerald-600 font-medium">Active</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Rent Status — May 2026</div>
                    <div className="space-y-2 text-xs">
                      {[
                        { t: 'Jan de Vries', s: 'Paid', c: 'text-emerald-600' },
                        { t: 'Maria Santos', s: 'Paid', c: 'text-emerald-600' },
                        { t: 'Café de Witte', s: 'Overdue', c: 'text-red-500' },
                        { t: 'Sophie Bakker', s: 'Partial', c: 'text-amber-500' },
                      ].map(r => (
                        <div key={r.t} className="flex justify-between py-1 border-b border-gray-50">
                          <span className="text-gray-700">{r.t}</span>
                          <span className={`font-medium ${r.c}`}>{r.s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product tour ────────────────────────────────── */}
      <ProductTourVideo showIntro={false} className="pt-8 pb-24 sm:pt-12 sm:pb-28 px-4 sm:px-6" />

      {/* ── Social proof bar ────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ────────────────────────────────────── */}
      <section id="features" className="py-20 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 sm:mb-14">
            <p className="text-sm font-bold text-brand-600 uppercase tracking-[0.18em] mb-3">Features</p>
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-12 items-end">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 leading-tight">
                Built for property owners who need control, not more spreadsheets.
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-8">
                Domo brings daily property management into one clean system: rent, documents, financials, contracts, valuations, and reports stay connected to the property they belong to.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {features.map(f => (
              <div key={f.title} className="bg-gray-50 rounded-2xl border border-gray-200 p-6 sm:p-7 hover:border-brand-200 hover:shadow-md transition-all group">
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 bg-white border border-brand-100 rounded-xl flex items-center justify-center group-hover:bg-brand-50 transition">
                    <f.icon size={22} className="text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-950 mb-2">{f.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-7">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Expected Outputs ────────────────────────────── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 sm:mb-14">
            <p className="text-sm font-bold text-brand-600 uppercase tracking-[0.18em] mb-3">Expected Outputs</p>
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-12 items-end">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 leading-tight">
                Practical outputs for owners, accountants, banks and advisors.
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-8">
                DOMO does not only store property data. It turns scattered information into practical overviews that owners, accountants, banks and advisors can use.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {expectedOutputs.map(output => (
              <button
                key={output.title}
                type="button"
                onClick={() => setSelectedOutput(output)}
                className={`text-left bg-white rounded-2xl border p-6 sm:p-7 shadow-sm hover:border-brand-200 hover:shadow-md transition-all group ${
                  selectedOutput.title === output.title ? 'border-brand-300 ring-4 ring-brand-100' : 'border-gray-200'
                }`}
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 bg-brand-50 border border-brand-100 rounded-xl flex items-center justify-center group-hover:bg-brand-100 transition">
                    <output.icon size={22} className="text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-950 mb-2">{output.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-7">{output.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 sm:p-7 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 border-b border-gray-100 pb-5 mb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">Example output</p>
                <h3 className="mt-2 text-xl sm:text-2xl font-extrabold text-gray-950">{selectedOutput.title}</h3>
              </div>
              <span className="inline-flex w-fit rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-500">
                Mock client portfolio
              </span>
            </div>
            <OutputPreview output={selectedOutput} />
          </div>
          <p className="mt-8 text-center text-sm sm:text-base text-gray-500 leading-7">
            These outputs help owners move from searching through folders and messages to working with structured portfolio information.
          </p>
        </div>
      </section>

      {/* ── How it works ────────────────────────────────── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 sm:mb-14">
            <p className="text-sm font-bold text-brand-600 uppercase tracking-[0.18em] mb-3">How it works</p>
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-12 items-end">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 leading-tight">
                From scattered information to a controlled property archive.
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-8">
                Domo is built around the property as the long-term source of truth. Every tenant, contract, document, expense, valuation, and report is connected back to that stable record.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="relative bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center text-white font-extrabold text-sm">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center">
                    <s.icon size={22} className="text-brand-600" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-950 mb-3">{s.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-7">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison ──────────────────────────────────── */}
      <section id="compare" className="py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-3">Why Domo</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Domo vs. The Alternatives</h2>
            <p className="text-lg text-gray-500">See how Domo compares to spreadsheets and generic property tools.</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="px-5 py-3 text-left font-medium text-gray-500">Feature</th>
                  <th className="px-5 py-3 text-center font-semibold text-brand-700">Domo</th>
                  <th className="px-5 py-3 text-center font-medium text-gray-500">Spreadsheets</th>
                  <th className="px-5 py-3 text-center font-medium text-gray-500">Generic Tools</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map(c => (
                  <tr key={c.feature} className="border-b border-gray-50">
                    <td className="px-5 py-3 text-gray-700">{c.feature}</td>
                    <td className="px-5 py-3 text-center">{c.domo ? <Check size={16} className="text-brand-600 mx-auto" /> : <span className="text-gray-300">—</span>}</td>
                    <td className="px-5 py-3 text-center">{c.spreadsheet ? <Check size={16} className="text-gray-400 mx-auto" /> : <span className="text-gray-300">—</span>}</td>
                    <td className="px-5 py-3 text-center">{c.generic ? <Check size={16} className="text-gray-400 mx-auto" /> : <span className="text-gray-300">—</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ─────────────────────────────────────── */}
      <section id="pricing" className="py-20 sm:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-3">Pricing</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Simple Pricing. No Surprises.</h2>
            <p className="text-lg text-gray-500">Start free, then scale by the number of units you manage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map(p => (
              <div key={p.name} className={`rounded-xl border p-6 flex flex-col ${p.highlight ? 'bg-white border-brand-600 ring-1 ring-brand-600 shadow-xl relative' : 'bg-white border-gray-200'}`}>
                {p.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</div>}
                <h3 className="text-lg font-bold text-gray-900">{p.name}</h3>
                <div className="mt-4 mb-1">
                  <span className="text-4xl font-extrabold text-gray-900">{p.price}</span>
                  <span className="text-sm text-gray-500">{p.period}</span>
                </div>
                <p className="text-sm text-gray-500 mb-6">{p.desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <Check size={16} className="text-brand-600 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to={p.href}
                  className={`w-full text-center py-2.5 rounded-lg text-sm font-semibold transition ${
                    p.highlight
                      ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-8">All prices excl. VAT. Custom plans start from €299/month for portfolios above 75 units.</p>
          <div className="mt-6 text-center">
            <Link to="/pricing" className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-800 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-50 transition">
              View full pricing and onboarding <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-3">Testimonials</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Trusted by Dutch Property Owners</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map(t => (
              <div key={t.name} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-semibold text-sm">{t.avatar}</div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust bar ───────────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-sm text-gray-400">
          <span className="flex items-center gap-2"><Lock size={16} /> SSL Encrypted</span>
          <span className="flex items-center gap-2"><Shield size={16} /> GDPR Compliant</span>
          <span className="flex items-center gap-2"><Globe size={16} /> EU Data Centers</span>
          <span className="flex items-center gap-2"><Clock size={16} /> 99.9% Uptime</span>
          <span className="flex items-center gap-2"><TrendingUp size={16} /> Daily Backups</span>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section id="faq" className="py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(f => (
              <div key={f.q} className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-brand-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Take Control of Your Portfolio?
          </h2>
          <p className="text-lg text-brand-200 mb-8 leading-relaxed">
            Join 850+ Dutch landlords who replaced their spreadsheets with Domo. Start for free — upgrade when you're ready.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/app"
              className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-brand-50 transition shadow-lg"
            >
              Start for Free <ArrowRight size={18} />
            </Link>
          </div>
          <p className="mt-5 text-sm text-brand-300">Free forever for up to 5 units · No credit card required</p>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────── */}
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
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><Link to="/pricing" className="hover:text-white transition">Pricing</Link></li>
                <li><Link to="/why-domo" className="hover:text-white transition">Why Domo</Link></li>
                <li><Link to="/walkthrough" className="hover:text-white transition">Walkthrough</Link></li>
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
                <li><Link to="/help" className="hover:text-white transition">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <span>© 2026 Domo. All rights reserved.</span>
            <span>Made in the Netherlands 🇳🇱</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
