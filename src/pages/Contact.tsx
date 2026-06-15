import type { FormEvent } from 'react'
import { Check, Mail, MessageSquare, Shield } from 'lucide-react'
import MarketingFooter from '../components/layout/MarketingFooter'
import MarketingNav from '../components/layout/MarketingNav'

export default function Contact() {
  function handleContactSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = String(form.get('name') ?? '')
    const email = String(form.get('email') ?? '')
    const portfolio = String(form.get('portfolio') ?? '')
    const message = String(form.get('message') ?? '')
    const subject = encodeURIComponent(`Domo contact request from ${name || 'website visitor'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPortfolio: ${portfolio}\n\nMessage:\n${message}`
    )
    window.location.href = `mailto:info@domo.nl?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <MarketingNav active="contact" />

      <main className="pt-32 pb-20 px-4 sm:px-6">
        <section className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <div>
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-3">Contact</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              Want to talk about your portfolio?
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              Tell us how many units you manage and what you want Domo to solve first. We will use your message to prepare a focused demo.
            </p>
            <div className="space-y-4">
              {[
                ['Freemium stays free', 'Start organizing up to 5 units without paying.'],
                ['Starter supports 20 units', 'For active landlords who want structure and control.'],
                ['Custom pricing starts from €299', 'For portfolios above 75 units, teams, and special setup needs.'],
              ].map(([title, text]) => (
                <div key={title} className="flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                    <Check size={17} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-500">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <Mail size={18} className="text-brand-600 mb-2" />
                <p className="text-sm font-semibold text-gray-900">Email first</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <MessageSquare size={18} className="text-brand-600 mb-2" />
                <p className="text-sm font-semibold text-gray-900">Focused demo</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <Shield size={18} className="text-brand-600 mb-2" />
                <p className="text-sm font-semibold text-gray-900">No obligation</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleContactSubmit} className="bg-white rounded-xl border border-gray-200 p-6 space-y-4 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Name</span>
                <input name="name" required className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500" />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Email</span>
                <input name="email" type="email" required className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500" />
              </label>
            </div>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Portfolio size</span>
              <select name="portfolio" className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500">
                <option>1-5 units</option>
                <option>6-20 units</option>
                <option>21-75 units</option>
                <option>75+ units</option>
                <option>Property manager / team</option>
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Message</span>
              <textarea name="message" rows={6} required className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500" placeholder="Tell us what you want Domo to help with..." />
            </label>
            <button type="submit" className="w-full bg-brand-600 text-white py-3 rounded-lg text-sm font-semibold hover:bg-brand-700 transition">
              Send Request
            </button>
            <p className="text-xs text-gray-400 text-center">This opens your email app with the message prepared.</p>
          </form>
        </section>
      </main>
      <MarketingFooter />
    </div>
  )
}
