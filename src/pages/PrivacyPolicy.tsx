import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import MarketingFooter from '../components/layout/MarketingFooter'
import MarketingNav from '../components/layout/MarketingNav'

const sections = [
  {
    title: '1. What this policy covers',
    text: 'This Privacy Policy explains how Domo intends to handle personal information when visitors use the website, contact us, or interact with the prototype.',
  },
  {
    title: '2. Information we may collect',
    text: 'If you contact us, we may receive your name, email address, portfolio size, and the message you choose to send. The current prototype does not use a backend database for visitor-entered app data.',
  },
  {
    title: '3. Local browser data',
    text: 'The Domo prototype stores app changes in the visitor’s own browser using localStorage. This means changes made by one visitor are not shared with Domo, other visitors, or the live website data.',
  },
  {
    title: '4. How information is used',
    text: 'Contact information is used to respond to requests, prepare demos, answer questions, and improve the product direction.',
  },
  {
    title: '5. Sharing and retention',
    text: 'Domo does not sell personal information. Information may be retained as long as needed to respond to inquiries or manage a business relationship.',
  },
  {
    title: '6. Contact',
    text: 'For privacy questions, contact Domo through the contact page. This policy should be reviewed before commercial launch.',
  },
]

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <MarketingNav />

      <main className="pt-32 pb-20 px-4 sm:px-6">
        <section className="max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-3">Privacy Policy</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            How Domo handles privacy.
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            This page provides a clear privacy overview for the current Domo website and prototype. It is written as a practical starting point and should be legally reviewed before commercial launch.
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
          <p className="text-sm text-gray-600">Have a privacy question or want a copy reviewed?</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-brand-700 transition">
            Contact Domo <ArrowRight size={16} />
          </Link>
        </section>
      </main>

      <MarketingFooter />
    </div>
  )
}
