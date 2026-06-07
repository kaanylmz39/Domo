import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Calendar, FileText } from 'lucide-react'

const posts = [
  {
    title: 'Why property-first records beat spreadsheet-first administration',
    category: 'Portfolio Operations',
    date: 'May 2026',
    summary: 'A practical look at why every financial, legal, and document record should connect back to a stable property dossier.',
  },
  {
    title: 'How to structure rent control for buildings with multiple units',
    category: 'Rent Control',
    date: 'May 2026',
    summary: 'The core difference between tracking rent per building and tracking rent per unit, and why unit-level contracts matter.',
  },
  {
    title: 'Building a cleaner real estate archive for accountants and banks',
    category: 'Documents',
    date: 'April 2026',
    summary: 'How consistent file naming, categories, and property links make tax season and financing conversations easier.',
  },
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Link to="/"><img src={import.meta.env.BASE_URL + 'logo-light.svg'} alt="Domo" className="h-16 object-contain" /></Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link to="/#features" className="hover:text-gray-900 transition">Features</Link>
            <Link to="/#pricing" className="hover:text-gray-900 transition">Pricing</Link>
            <Link to="/about" className="hover:text-gray-900 transition">About</Link>
            <Link to="/contact" className="hover:text-gray-900 transition">Contact</Link>
          </div>
          <Link to="/app" className="bg-brand-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-brand-700 transition flex items-center gap-2">
            Get Started <ArrowRight size={14} />
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-4 sm:px-6">
        <section className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-3">Blog</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            Practical notes on better property administration.
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">
            Ideas, product thinking, and operating lessons for landlords and real estate investors building a more reliable portfolio archive.
          </p>
        </section>

        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {posts.map(post => (
            <article key={post.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-brand-200 hover:shadow-md transition">
              <div className="w-11 h-11 bg-brand-50 rounded-xl flex items-center justify-center mb-5">
                <BookOpen size={20} className="text-brand-600" />
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                <Calendar size={13} />
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.category}</span>
              </div>
              <h2 className="font-semibold text-gray-900 mb-3 leading-snug">{post.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{post.summary}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                Coming soon <ArrowRight size={14} />
              </span>
            </article>
          ))}
        </section>

        <section className="max-w-5xl mx-auto bg-gray-50 rounded-2xl border border-gray-200 p-8 sm:p-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-brand-700 font-semibold text-sm mb-2">
              <FileText size={16} /> Editorial focus
            </div>
            <p className="text-gray-500 leading-relaxed max-w-2xl">
              The Domo blog will focus on clear, operational property management: rent administration, unit-level tracking, document workflows, and financial reporting.
            </p>
          </div>
          <Link to="/contact" className="shrink-0 bg-brand-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-brand-700 transition">
            Suggest a topic
          </Link>
        </section>
      </main>
    </div>
  )
}
