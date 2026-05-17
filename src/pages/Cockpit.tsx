import { eur } from '../utils/format'
import type { Store } from '../store'
import { TrendingUp, TrendingDown, DollarSign, AlertCircle } from 'lucide-react'

interface Props { store: Store }

export default function Cockpit({ store }: Props) {
  const { properties, rentRows, expenses } = store

  const monthlyIncome = properties.flatMap(p => p.units).filter(u => u.status === 'rented').reduce((s, u) => s + u.monthlyRent, 0)
  const yearlyIncome = monthlyIncome * 12
  const yearlyExpenses = expenses.reduce((s, e) => s + e.amount, 0)
  const yearlyResult = yearlyIncome - yearlyExpenses
  const unpaidRent = rentRows.filter(r => r.paidStatus !== 'paid').reduce((s, r) => s + (r.expectedRent - r.amountReceived), 0)

  const recentActivity = [
    { text: 'Rent received — Jan de Vries, Keizersgracht 274', date: '2026-05-01' },
    { text: 'Invoice uploaded — Plumber, Keizersgracht 274', date: '2026-05-07' },
    { text: 'Partial payment — Ahmed El Amrani, Oudegracht 112', date: '2026-05-03' },
    { text: 'Roof inspection photo added — Oudegracht 112', date: '2026-05-10' },
    { text: 'Kitchen drawings received — Brink 9', date: '2026-04-20' },
  ]

  const cards = [
    { label: 'Monthly Income', value: eur(monthlyIncome), icon: DollarSign, color: 'text-brand-600' },
    { label: 'Yearly Income', value: eur(yearlyIncome), icon: TrendingUp, color: 'text-brand-600' },
    { label: 'Yearly Expenses', value: eur(yearlyExpenses), icon: TrendingDown, color: 'text-red-600' },
    { label: 'Yearly Result', value: eur(yearlyResult), icon: TrendingUp, color: yearlyResult >= 0 ? 'text-brand-600' : 'text-red-600' },
    { label: 'Unpaid Rent', value: eur(unpaidRent), icon: AlertCircle, color: unpaidRent > 0 ? 'text-amber-600' : 'text-brand-600' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Cockpit</h1>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {cards.map(c => (
          <div key={c.label} className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{c.label}</span>
              <c.icon size={16} className={c.color} />
            </div>
            <div className={`text-xl font-bold ${c.color}`}>{c.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">Portfolio Summary</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between"><span>Properties</span><span className="font-medium text-gray-900">{properties.length}</span></div>
            <div className="flex justify-between"><span>Total units</span><span className="font-medium text-gray-900">{properties.flatMap(p => p.units).length}</span></div>
            <div className="flex justify-between"><span>Rented units</span><span className="font-medium text-gray-900">{properties.flatMap(p => p.units).filter(u => u.status === 'rented').length}</span></div>
            <div className="flex justify-between"><span>Empty / unavailable</span><span className="font-medium text-gray-900">{properties.flatMap(p => p.units).filter(u => u.status !== 'rented').length}</span></div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {recentActivity.map((a, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="text-gray-600">{a.text}</span>
                <span className="text-gray-400 whitespace-nowrap ml-4">{a.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
