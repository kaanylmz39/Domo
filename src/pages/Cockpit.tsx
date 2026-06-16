import type { Store } from '../store'
import { eur } from '../utils/format'
import {
  ArrowUpRight,
  Banknote,
  Building2,
  CalendarDays,
  CircleDollarSign,
  ClipboardList,
  Home,
  LineChart,
  Receipt,
  TrendingDown,
  TrendingUp,
  WalletCards,
} from 'lucide-react'

interface Props { store: Store }

export default function Cockpit({ store }: Props) {
  const { properties, rentRows, expenses } = store

  const units = properties.flatMap(property => property.units)
  const rentedUnits = units.filter(unit => unit.status === 'rented')
  const unavailableUnits = units.filter(unit => unit.status !== 'rented')
  const monthlyIncome = rentedUnits.reduce((sum, unit) => sum + unit.monthlyRent, 0)
  const yearlyIncome = monthlyIncome * 12
  const yearlyExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0)
  const yearlyResult = yearlyIncome - yearlyExpenses
  const unpaidRent = rentRows.filter(row => row.paidStatus !== 'paid').reduce((sum, row) => sum + (row.expectedRent - row.amountReceived), 0)
  const expectedRent = rentRows.reduce((sum, row) => sum + row.expectedRent, 0)
  const receivedRent = rentRows.reduce((sum, row) => sum + row.amountReceived, 0)
  const collectionRate = expectedRent > 0 ? Math.round((receivedRent / expectedRent) * 100) : 0
  const occupancyRate = units.length > 0 ? Math.round((rentedUnits.length / units.length) * 100) : 0
  const totalWoz = properties.reduce((sum, property) => sum + property.wozValue, 0)
  const expenseRatio = yearlyIncome > 0 ? Math.round((yearlyExpenses / yearlyIncome) * 100) : 0
  const donutRadius = 44
  const donutCircumference = 2 * Math.PI * donutRadius
  const rentedDonutLength = units.length > 0 ? donutCircumference * (rentedUnits.length / units.length) : 0

  const recentActivity = [
    { text: 'Rent received - Jan de Vries, Keizersgracht 274', date: '2026-05-01', type: 'Rent' },
    { text: 'Invoice uploaded - Plumber, Keizersgracht 274', date: '2026-05-07', type: 'Document' },
    { text: 'Partial payment - Ahmed El Amrani, Oudegracht 112', date: '2026-05-03', type: 'Follow-up' },
    { text: 'Roof inspection photo added - Oudegracht 112', date: '2026-05-10', type: 'Archive' },
    { text: 'Kitchen drawings received - Brink 9', date: '2026-04-20', type: 'Development' },
  ]

  const cards = [
    { label: 'Monthly Income', value: eur(monthlyIncome), detail: 'Recurring rent from rented units', icon: CircleDollarSign, tone: 'brand' },
    { label: 'Yearly Income', value: eur(yearlyIncome), detail: 'Annualized rental income', icon: TrendingUp, tone: 'brand' },
    { label: 'Yearly Expenses', value: eur(yearlyExpenses), detail: `${expenseRatio}% of yearly income`, icon: TrendingDown, tone: 'red' },
    { label: 'Yearly Result', value: eur(yearlyResult), detail: 'Income minus expenses', icon: LineChart, tone: yearlyResult >= 0 ? 'brand' : 'red' },
    { label: 'Unpaid Rent', value: eur(unpaidRent), detail: 'Open amount from rent control', icon: WalletCards, tone: unpaidRent > 0 ? 'amber' : 'brand' },
  ]

  const topProperties = properties
    .map(property => {
      const propertyIncome = property.units.filter(unit => unit.status === 'rented').reduce((sum, unit) => sum + unit.monthlyRent, 0)
      const propertyExpenses = expenses.filter(expense => expense.propertyId === property.id).reduce((sum, expense) => sum + expense.amount, 0)
      return { ...property, propertyIncome, propertyExpenses }
    })
    .sort((a, b) => b.propertyIncome - a.propertyIncome)
    .slice(0, 5)

  function toneClasses(tone: string) {
    if (tone === 'red') return 'bg-red-50 text-red-600 ring-red-100'
    if (tone === 'amber') return 'bg-amber-50 text-amber-600 ring-amber-100'
    return 'bg-brand-50 text-brand-700 ring-brand-100'
  }

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-700">Portfolio cockpit</p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-950">Good morning, Osman</h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-500">
              Your property archive, rent control, and financial overview in one operating view.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 rounded-xl border border-gray-200 bg-gray-50 p-3">
            <div className="min-w-24 rounded-lg bg-white px-4 py-3 text-center">
              <div className="text-lg font-bold text-gray-950">{properties.length}</div>
              <div className="text-[11px] font-medium uppercase tracking-wide text-gray-400">Properties</div>
            </div>
            <div className="min-w-24 rounded-lg bg-white px-4 py-3 text-center">
              <div className="text-lg font-bold text-gray-950">{units.length}</div>
              <div className="text-[11px] font-medium uppercase tracking-wide text-gray-400">Units</div>
            </div>
            <div className="min-w-24 rounded-lg bg-white px-4 py-3 text-center">
              <div className="text-lg font-bold text-brand-700">{occupancyRate}%</div>
              <div className="text-[11px] font-medium uppercase tracking-wide text-gray-400">Occupied</div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {cards.map(card => (
          <div key={card.label} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">{card.label}</p>
                <div className="mt-3 text-2xl font-bold tracking-tight text-gray-950">{card.value}</div>
              </div>
              <div className={`rounded-xl p-2.5 ring-1 ${toneClasses(card.tone)}`}>
                <card.icon size={18} />
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-gray-500">{card.detail}</p>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-base font-bold text-gray-950">Rent collection</h2>
              <p className="mt-1 text-sm text-gray-500">Current monthly rent checklist status.</p>
            </div>
            <div className="rounded-xl bg-brand-50 px-3 py-2 text-sm font-bold text-brand-700">{collectionRate}% collected</div>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-gray-100">
            <div className="h-full rounded-full bg-brand-600" style={{ width: `${Math.min(collectionRate, 100)}%` }} />
          </div>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-400">Expected</div>
              <div className="mt-2 text-lg font-bold text-gray-950">{eur(expectedRent)}</div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-400">Received</div>
              <div className="mt-2 text-lg font-bold text-brand-700">{eur(receivedRent)}</div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-400">Open</div>
              <div className="mt-2 text-lg font-bold text-amber-600">{eur(unpaidRent)}</div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-base font-bold text-gray-950">Portfolio composition</h2>
          <p className="mt-1 text-sm text-gray-500">Unit availability and long-term asset value.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-[0.85fr_1fr] xl:grid-cols-1 2xl:grid-cols-[0.85fr_1fr]">
            <div className="flex items-center justify-center">
              <div className="relative h-36 w-36">
                <svg viewBox="0 0 120 120" className="h-36 w-36 -rotate-90">
                  <circle
                    cx="60"
                    cy="60"
                    r={donutRadius}
                    fill="none"
                    stroke="#f3f4f6"
                    strokeWidth="16"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r={donutRadius}
                    fill="none"
                    stroke="#d1d5db"
                    strokeWidth="16"
                    strokeDasharray={`${donutCircumference} ${donutCircumference}`}
                    strokeDashoffset="0"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r={donutRadius}
                    fill="none"
                    stroke="#15803d"
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeDasharray={`${rentedDonutLength} ${donutCircumference}`}
                    strokeDashoffset="0"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-2xl font-bold text-gray-950">{occupancyRate}%</span>
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">occupied</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-gray-600">Rented units</span>
                  <span className="font-bold text-gray-950">{rentedUnits.length}/{units.length}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full rounded-full bg-brand-600" style={{ width: `${occupancyRate}%` }} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <Home size={18} className="mb-3 text-brand-700" />
                  <div className="text-xl font-bold text-gray-950">{unavailableUnits.length}</div>
                  <div className="text-xs text-gray-500">Empty / unavailable</div>
                </div>
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <Banknote size={18} className="mb-3 text-brand-700" />
                  <div className="text-xl font-bold text-gray-950">{eur(totalWoz)}</div>
                  <div className="text-xs text-gray-500">Total WOZ value</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-600" />
                  Rented
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                  Other
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between gap-4 border-b border-gray-100 px-5 py-4">
            <div>
              <h2 className="text-base font-bold text-gray-950">Top performing properties</h2>
              <p className="mt-1 text-sm text-gray-500">Sorted by monthly rental income.</p>
            </div>
            <Building2 size={20} className="text-brand-700" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-sm">
              <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-400">
                <tr>
                  <th className="px-5 py-3 text-left font-semibold">Property</th>
                  <th className="px-5 py-3 text-left font-semibold">City</th>
                  <th className="px-5 py-3 text-right font-semibold">Units</th>
                  <th className="px-5 py-3 text-right font-semibold">Monthly rent</th>
                  <th className="px-5 py-3 text-right font-semibold">Expenses</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {topProperties.map(property => (
                  <tr key={property.id} className="hover:bg-gray-50">
                    <td className="px-5 py-4 font-semibold text-gray-900">{property.address}</td>
                    <td className="px-5 py-4 text-gray-500">{property.city}</td>
                    <td className="px-5 py-4 text-right text-gray-500">{property.units.length}</td>
                    <td className="px-5 py-4 text-right font-bold text-brand-700">{eur(property.propertyIncome)}</td>
                    <td className="px-5 py-4 text-right text-gray-500">{eur(property.propertyExpenses)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-base font-bold text-gray-950">Recent activity</h2>
              <p className="mt-1 text-sm text-gray-500">Latest records in the archive.</p>
            </div>
            <ClipboardList size={20} className="text-brand-700" />
          </div>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={`${activity.date}-${index}`} className="flex gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-brand-700 ring-1 ring-gray-200">
                  {activity.type === 'Rent' ? <Receipt size={15} /> : activity.type === 'Follow-up' ? <CalendarDays size={15} /> : <ArrowUpRight size={15} />}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">{activity.type}</span>
                    <span className="whitespace-nowrap text-xs text-gray-400">{activity.date}</span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-gray-700">{activity.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
