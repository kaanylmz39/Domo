import { Link } from 'react-router-dom'
import {
  Building2, Shield, FileText, BarChart3, Receipt, Inbox,
  ChevronRight, Check, ArrowRight, Star,
} from 'lucide-react'

const features = [
  { icon: Building2, title: 'Portfolio Overview', desc: 'Track all your properties, units, tenants, and rental income in one centralized cockpit.' },
  { icon: Receipt, title: 'Rent Control', desc: 'Monthly rent checklists with payment tracking. Know exactly who paid and who didn\'t.' },
  { icon: FileText, title: 'Document Management', desc: 'Organize contracts, invoices, tax documents, and photos per property with smart file naming.' },
  { icon: Inbox, title: 'AI Inbox', desc: 'Upload documents and let Domo categorize, rename, and link them to the right property automatically.' },
  { icon: BarChart3, title: 'Reports & Analytics', desc: 'Generate bank reports, tax overviews, and property performance summaries in seconds.' },
  { icon: Shield, title: 'Valuations & Tracking', desc: 'Track WOZ values, appraisals, and market valuations over time for every property.' },
]

const steps = [
  { n: '01', title: 'Add Your Properties', desc: 'Enter your property details, units, and tenant information into Domo.' },
  { n: '02', title: 'Track Everything', desc: 'Monitor rent payments, expenses, contracts, and documents from one dashboard.' },
  { n: '03', title: 'Stay In Control', desc: 'Get reports, track valuations, and never miss a rent payment or contract renewal.' },
]

const plans = [
  {
    name: 'Starter',
    price: '€0',
    period: 'forever',
    desc: 'Perfect for getting started with 1-2 properties.',
    features: ['Up to 2 properties', 'Rent tracking', 'Document storage', 'Basic reports', 'Mobile access'],
    cta: 'Start Free',
    highlight: false,
  },
  {
    name: 'Professional',
    price: '€29',
    period: '/month',
    desc: 'For serious landlords managing a growing portfolio.',
    features: ['Up to 20 properties', 'Unlimited units', 'AI Inbox', 'Advanced reports', 'Bank & tax exports', 'Priority support'],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For property managers and large portfolio owners.',
    features: ['Unlimited properties', 'Multi-user access', 'API integrations', 'Custom reports', 'Dedicated support', 'White-label option'],
    cta: 'Contact Us',
    highlight: false,
  },
]

const testimonials = [
  { name: 'Thomas V.', role: 'Private Investor, Amsterdam', text: 'Domo replaced my spreadsheets overnight. I finally have a clear overview of all my properties and rent payments.', stars: 5 },
  { name: 'Sarah K.', role: 'Property Manager, Rotterdam', text: 'The rent control feature alone saves me hours every month. No more chasing payments manually.', stars: 5 },
  { name: 'Mark J.', role: 'Real Estate Investor, Utrecht', text: 'Clean, professional, and exactly what I needed. The document organization is a game-changer.', stars: 5 },
]

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <img src={import.meta.env.BASE_URL + 'logo.png'} alt="Domo" className="h-9 object-contain" />
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition">Features</a>
            <a href="#how-it-works" className="hover:text-gray-900 transition">How It Works</a>
            <a href="#pricing" className="hover:text-gray-900 transition">Pricing</a>
            <a href="#testimonials" className="hover:text-gray-900 transition">Reviews</a>
          </div>
          <Link
            to="/app"
            className="bg-brand-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-brand-700 transition flex items-center gap-2"
          >
            Go to Dashboard <ArrowRight size={14} />
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Star size={14} /> Now available for Dutch landlords
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Your Real Estate Portfolio,<br />
            <span className="text-brand-600">Finally Under Control</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            Domo is the property management cockpit for landlords and investors. Track properties, rent, expenses, documents, and valuations — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/app"
              className="bg-brand-600 text-white px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-brand-700 transition flex items-center gap-2 shadow-lg shadow-brand-600/25"
            >
              Try Domo Free <ChevronRight size={18} />
            </Link>
            <a
              href="#features"
              className="text-gray-600 px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-gray-50 transition border border-gray-200"
            >
              See Features
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-400">No credit card required. Free plan available.</p>
        </div>
      </section>

      {/* Dashboard preview */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-2 shadow-2xl">
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <div className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-gray-100 rounded-md h-7 flex items-center px-3 text-xs text-gray-400 max-w-md">
                    app.domo.nl/cockpit
                  </div>
                </div>
              </div>
              <div className="p-6 grid grid-cols-5 gap-3">
                {[
                  { label: 'Monthly Income', value: '€ 12.850', color: 'text-emerald-600' },
                  { label: 'Yearly Income', value: '€ 154.200', color: 'text-emerald-600' },
                  { label: 'Yearly Expenses', value: '€ 62.590', color: 'text-red-500' },
                  { label: 'Yearly Result', value: '€ 91.610', color: 'text-emerald-600' },
                  { label: 'Properties', value: '8', color: 'text-gray-900' },
                ].map(c => (
                  <div key={c.label} className="bg-white rounded-lg border border-gray-200 p-4">
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">{c.label}</div>
                    <div className={`text-lg font-bold ${c.color}`}>{c.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Manage Properties</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Domo brings together all the tools landlords need — no more scattered spreadsheets, emails, and folders.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center mb-4">
                  <f.icon size={20} className="text-brand-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Up and Running in Minutes</h2>
            <p className="text-lg text-gray-500">No complex setup. No IT team needed. Just start adding your properties.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map(s => (
              <div key={s.n} className="text-center">
                <div className="text-4xl font-extrabold text-brand-100 mb-3">{s.n}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-500">Start for free. Upgrade when you grow.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map(p => (
              <div key={p.name} className={`rounded-xl border p-6 flex flex-col ${p.highlight ? 'bg-white border-brand-600 ring-2 ring-brand-600 shadow-xl' : 'bg-white border-gray-200'}`}>
                {p.highlight && <div className="text-xs font-semibold text-brand-600 uppercase tracking-wide mb-2">Most Popular</div>}
                <h3 className="text-lg font-bold text-gray-900">{p.name}</h3>
                <div className="mt-3 mb-1">
                  <span className="text-3xl font-extrabold text-gray-900">{p.price}</span>
                  <span className="text-sm text-gray-500">{p.period}</span>
                </div>
                <p className="text-sm text-gray-500 mb-6">{p.desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check size={16} className="text-brand-600 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/app"
                  className={`w-full text-center py-2.5 rounded-lg text-sm font-semibold transition ${
                    p.highlight
                      ? 'bg-brand-600 text-white hover:bg-brand-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Trusted by Dutch Landlords</h2>
            <p className="text-lg text-gray-500">See what property owners say about Domo.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <div className="font-semibold text-sm text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 bg-brand-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Take Control of Your Portfolio?
          </h2>
          <p className="text-lg text-brand-200 mb-8">
            Join hundreds of Dutch landlords who switched from spreadsheets to Domo.
          </p>
          <Link
            to="/app"
            className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-brand-50 transition shadow-lg"
          >
            Get Started for Free <ArrowRight size={18} />
          </Link>
          <p className="mt-4 text-sm text-brand-300">No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <img src={import.meta.env.BASE_URL + 'logo.png'} alt="Domo" className="h-8 object-contain brightness-200 mb-4" />
              <p className="text-sm leading-relaxed">
                The property management cockpit for Dutch landlords and real estate investors.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                <li><Link to="/app" className="hover:text-white transition">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm text-center">
            © 2026 Domo. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
