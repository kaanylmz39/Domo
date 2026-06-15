import type { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Check, Lock, Mail, Shield } from 'lucide-react'
import MarketingFooter from '../components/layout/MarketingFooter'
import MarketingNav from '../components/layout/MarketingNav'

export default function Login() {
  const navigate = useNavigate()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    navigate('/app')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <MarketingNav active="login" />

      <main className="pt-32 pb-20 px-4 sm:px-6">
        <section className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
          <div>
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-3">Client login</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              Sign in to your Domo workspace.
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              Access the cockpit for your property portfolio: rent control, property dossiers, documents, financials, valuations, and reports in one place.
            </p>

            <div className="space-y-4">
              {[
                'Property-first portfolio overview',
                'Unit-level rent and contract records',
                'Documents, expenses, and valuations together',
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

          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-brand-600 text-white flex items-center justify-center">
                <Lock size={20} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Welcome back</h2>
                <p className="text-sm text-gray-500">Use your client details to continue.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
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
                <span className="text-sm font-medium text-gray-700">Password</span>
                <div className="relative mt-1">
                  <Lock size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    name="password"
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-gray-200 pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
                  />
                </div>
              </label>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-500">
                  <input type="checkbox" className="rounded border-gray-300 text-brand-600 focus:ring-brand-500" />
                  Remember me
                </label>
                <Link to="/contact" className="font-medium text-brand-700 hover:text-brand-800">
                  Forgot password?
                </Link>
              </div>

              <button type="submit" className="w-full bg-brand-600 text-white py-3 rounded-lg text-sm font-semibold hover:bg-brand-700 transition flex items-center justify-center gap-2">
                Sign in <ArrowRight size={16} />
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex gap-3 text-sm text-gray-500">
                <Shield size={18} className="text-brand-600 shrink-0 mt-0.5" />
                <p>
                  This login page is prepared for future client access. Current prototype access opens the local cockpit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  )
}
