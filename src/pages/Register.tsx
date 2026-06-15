import type { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Building2, Check, Lock, Mail, User } from 'lucide-react'
import MarketingFooter from '../components/layout/MarketingFooter'
import MarketingNav from '../components/layout/MarketingNav'

export default function Register() {
  const navigate = useNavigate()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    navigate('/app')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <MarketingNav active="register" />

      <main className="pt-32 pb-20 px-4 sm:px-6">
        <section className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
          <div>
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-3">Create account</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              Start your Domo workspace.
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              Create a client account for your property portfolio and start from a clean, property-first cockpit.
            </p>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Freemium includes</h2>
              <div className="space-y-3">
                {[
                  'Free account for up to 5 units',
                  'Property and unit records',
                  'Rent, contract, and document structure',
                  'Upgrade later when the portfolio grows',
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-8 h-8 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center">
                      <Check size={16} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-brand-600 text-white flex items-center justify-center">
                <Building2 size={20} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Create your account</h2>
                <p className="text-sm text-gray-500">Set up your first Domo workspace.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Full name</span>
                <div className="relative mt-1">
                  <User size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-lg border border-gray-200 pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
                  />
                </div>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">Email address</span>
                <div className="relative mt-1">
                  <Mail size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-gray-200 pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
                  />
                </div>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">Portfolio size</span>
                <select
                  name="portfolio"
                  className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
                >
                  <option>1-5 units</option>
                  <option>6-20 units</option>
                  <option>21-75 units</option>
                  <option>75+ units</option>
                  <option>Property manager / team</option>
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">Password</span>
                <div className="relative mt-1">
                  <Lock size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    name="password"
                    type="password"
                    required
                    placeholder="Create a password"
                    className="w-full rounded-lg border border-gray-200 pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
                  />
                </div>
              </label>

              <label className="flex gap-2 text-sm text-gray-500">
                <input type="checkbox" required className="mt-1 rounded border-gray-300 text-brand-600 focus:ring-brand-500" />
                <span>I agree to the <Link to="/terms" className="text-brand-700 font-medium">Terms</Link> and <Link to="/privacy" className="text-brand-700 font-medium">Privacy Policy</Link>.</span>
              </label>

              <button type="submit" className="w-full bg-brand-600 text-white py-3 rounded-lg text-sm font-semibold hover:bg-brand-700 transition flex items-center justify-center gap-2">
                Create account <ArrowRight size={16} />
              </button>
            </form>

            <p className="text-sm text-gray-500 text-center mt-6">
              Already have an account? <Link to="/login" className="font-semibold text-brand-700 hover:text-brand-800">Log in</Link>
            </p>
            <p className="text-xs text-gray-400 text-center mt-3">
              This is a frontend account page for future client access. No backend account is created yet.
            </p>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  )
}
