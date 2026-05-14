import type { Store } from '../store'
import { eur, fmtDate } from '../utils/format'
import { FileText, Building, TrendingUp, AlertCircle, BarChart3 } from 'lucide-react'

interface Props { store: Store }

export default function Reports({ store }: Props) {
  const { properties, rentRows, expenses, valuations } = store

  const unpaid = rentRows.filter(r => r.paidStatus !== 'paid')
  const totalIncome = properties.flatMap(p => p.units).filter(u => u.status === 'rented').reduce((s, u) => s + u.monthlyRent * 12, 0)
  const totalExpenses = expenses.reduce((s, e) => s + e.amount, 0)

  const reports = [
    {
      title: 'Bank Report',
      icon: FileText,
      description: 'Summary of all income and expenses for bank reporting.',
      preview: (
        <div className="text-sm space-y-1">
          <div className="flex justify-between"><span>Total yearly income</span><span className="font-medium">{eur(totalIncome)}</span></div>
          <div className="flex justify-between"><span>Total yearly expenses</span><span className="font-medium">{eur(totalExpenses)}</span></div>
          <div className="flex justify-between border-t pt-1 mt-1"><span>Net result</span><span className="font-bold">{eur(totalIncome - totalExpenses)}</span></div>
        </div>
      ),
    },
    {
      title: 'Tax Report',
      icon: FileText,
      description: 'Overview of income, deductible expenses, and property values for tax filing.',
      preview: (
        <div className="text-sm space-y-1">
          <div className="flex justify-between"><span>Rental income</span><span className="font-medium">{eur(totalIncome)}</span></div>
          <div className="flex justify-between"><span>Deductible expenses</span><span className="font-medium">{eur(totalExpenses)}</span></div>
          <div className="flex justify-between"><span>Total WOZ value</span><span className="font-medium">{eur(properties.reduce((s, p) => s + p.wozValue, 0))}</span></div>
        </div>
      ),
    },
    {
      title: 'Property Performance',
      icon: Building,
      description: 'Per-property income, expenses, and yield.',
      preview: (
        <table className="w-full text-sm">
          <thead><tr className="text-xs text-gray-500"><th className="text-left py-1">Property</th><th className="text-right py-1">Income/yr</th><th className="text-right py-1">Expenses</th></tr></thead>
          <tbody>
            {properties.slice(0, 4).map(p => {
              const inc = p.units.filter(u => u.status === 'rented').reduce((s, u) => s + u.monthlyRent * 12, 0)
              const exp = expenses.filter(e => e.propertyId === p.id).reduce((s, e) => s + e.amount, 0)
              return (
                <tr key={p.id}>
                  <td className="py-1">{p.address.split(' ').slice(0, 2).join(' ')}</td>
                  <td className="text-right">{eur(inc)}</td>
                  <td className="text-right">{eur(exp)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ),
    },
    {
      title: 'Unpaid Rent Report',
      icon: AlertCircle,
      description: 'All outstanding rent payments.',
      preview: unpaid.length > 0 ? (
        <div className="text-sm space-y-1">
          {unpaid.map(r => (
            <div key={r.id} className="flex justify-between">
              <span>{r.tenant}</span>
              <span className="text-red-600 font-medium">{eur(r.expectedRent - r.amountReceived)}</span>
            </div>
          ))}
        </div>
      ) : <p className="text-sm text-gray-400">All rent is paid.</p>,
    },
    {
      title: 'Valuation Overview',
      icon: TrendingUp,
      description: 'Latest valuations per property.',
      preview: (
        <div className="text-sm space-y-1">
          {properties.slice(0, 5).map(p => {
            const v = valuations.filter(vl => vl.propertyId === p.id).sort((a, b) => b.valuationDate.localeCompare(a.valuationDate))[0]
            return (
              <div key={p.id} className="flex justify-between">
                <span>{p.address.split(' ').slice(0, 2).join(' ')}</span>
                <span className="font-medium">{v ? eur(v.valuationAmount) : '—'}</span>
              </div>
            )
          })}
        </div>
      ),
    },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Reports</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {reports.map(r => (
          <div key={r.title} className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-3 mb-1">
              <r.icon size={18} className="text-brand-600" />
              <h2 className="font-semibold">{r.title}</h2>
            </div>
            <p className="text-xs text-gray-500 mb-4">{r.description}</p>
            <div className="bg-gray-50 rounded-lg p-4">{r.preview}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
