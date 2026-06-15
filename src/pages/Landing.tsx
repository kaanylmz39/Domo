import { Link } from 'react-router-dom'
import {
  Building2, Shield, FileText, BarChart3, Receipt, Inbox,
  ChevronRight, Check, ArrowRight, Star, Users, Globe,
  Zap, Lock, Clock, TrendingUp, Home, PieChart,
} from 'lucide-react'

/* ── Features ───────────────────────────────────────────── */
const features = [
  { icon: Building2, title: 'Portfolio Dashboard', desc: 'See every property, unit, tenant, and rent payment at a glance. Your entire portfolio on one screen.' },
  { icon: Receipt, title: 'Rent Collection Tracking', desc: 'Monthly rent checklists generated from your contracts. Mark payments as paid, partial, or overdue in seconds.' },
  { icon: FileText, title: 'Smart Document Storage', desc: 'Auto-rename and organize contracts, invoices, and tax documents per property. No more lost files.' },
  { icon: Inbox, title: 'AI-Powered Inbox', desc: 'Upload any document — Domo reads it, categorizes it, and links it to the right property and unit.' },
  { icon: BarChart3, title: 'Financial Reports', desc: 'One-click bank reports, tax summaries, and performance overviews. Ready for your accountant.' },
  { icon: Shield, title: 'Valuation Tracking', desc: 'Track WOZ values, appraisals, and market estimates over time. Know what your portfolio is worth.' },
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
  { icon: Home, title: 'Add Your Properties', desc: 'Enter addresses, units, purchase details, and mortgage info. Import from spreadsheet or start fresh.' },
  { icon: Users, title: 'Link Tenants & Contracts', desc: 'Add tenant info, contract terms, rent amounts, and deposit details per unit. Domo tracks everything.' },
  { icon: PieChart, title: 'Track & Report', desc: 'Monitor rent payments, expenses, and property values. Generate reports for banks, taxes, and investors.' },
]

/* ── Pricing ────────────────────────────────────────────── */
const plans = [
  {
    name: 'Starter',
    price: '€0',
    period: '/month',
    desc: 'For landlords who want to organize their first properties.',
    features: [
      'Up to 3 properties',
      'Unlimited units per property',
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
    name: 'Growth',
    price: '€59',
    period: '/month',
    desc: 'For active landlords managing a serious portfolio.',
    features: [
      'Up to 20 properties',
      'Unlimited units per property',
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
    name: 'Pro',
    price: 'Custom',
    period: '',
    desc: 'For larger portfolios, teams, and special pricing requests.',
    features: [
      'Unlimited properties',
      'Unlimited units per property',
      'Everything in Growth',
      'Multi-user access',
      'Special price on request',
      'Custom report builder',
      'Personal onboarding',
      'Data export & backup',
    ],
    cta: 'Request Special Price',
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
  { q: 'Is Domo really free?', a: 'Yes. The Starter plan is free forever for up to 3 properties with unlimited units. No credit card required.' },
  { q: 'Can I import my existing data?', a: 'Yes. You can import properties, tenants, and financial data from spreadsheets. Our team can help with migration on Professional and Business plans.' },
  { q: 'Is my data secure?', a: 'All data is encrypted at rest and in transit. We use enterprise-grade infrastructure with 99.9% uptime and daily backups.' },
  { q: 'Do you support commercial properties?', a: 'Yes. Domo works for residential, commercial, and mixed-use properties. Each unit can have its own contract type and rent structure.' },
  { q: 'Can multiple people access my account?', a: 'Multi-user access is available on the Business plan. Each user gets their own login with role-based permissions.' },
]

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Nav ─────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <img src={import.meta.env.BASE_URL + 'logo-light.svg'} alt="Domo" className="h-16 object-contain" />
          <div className="hidden md:flex items-center gap-5 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition">Features</a>
            <a href="#pricing" className="hover:text-gray-900 transition">Pricing</a>
            <Link to="/about" className="hover:text-gray-900 transition">About</Link>
            <Link to="/why-domo" className="hover:text-gray-900 transition">Why Domo</Link>
            <Link to="/walkthrough" className="hover:text-gray-900 transition">Walkthrough</Link>
            <Link to="/contact" className="hover:text-gray-900 transition">Contact</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login" className="hidden sm:inline-flex text-sm font-medium text-gray-600 hover:text-gray-900 transition">
              Log In
            </Link>
            <Link
              to="/app"
              className="bg-brand-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-brand-700 transition flex items-center gap-2"
            >
              Get Started <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </nav>

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
      <section id="features" className="py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything You Need.<br className="hidden sm:block" /> Nothing You Don't.</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Domo replaces scattered spreadsheets, email folders, and paper archives with one clean system built for property owners.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(f => (
              <div key={f.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-brand-200 hover:shadow-md transition-all group">
                <div className="w-11 h-11 bg-brand-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-100 transition">
                  <f.icon size={20} className="text-brand-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ────────────────────────────────── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-3">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Up and Running in 5 Minutes</h2>
            <p className="text-lg text-gray-500">No complex setup. No consultants. Just add your properties and go.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={s.title} className="relative bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                    {i + 1}
                  </div>
                  <s.icon size={20} className="text-gray-400" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
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
            <table className="w-full text-sm">
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
      </section>

      {/* ── Pricing ─────────────────────────────────────── */}
      <section id="pricing" className="py-20 sm:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-3">Pricing</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Simple Pricing. No Surprises.</h2>
            <p className="text-lg text-gray-500">Every plan includes unlimited units per property. Only pay for the number of properties you manage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
          <p className="text-center text-sm text-gray-400 mt-8">All prices excl. VAT. Growth plan starts at €59 and may increase later as the product expands.</p>
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
          <p className="mt-5 text-sm text-brand-300">Free forever for up to 3 properties · No credit card required</p>
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
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
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
