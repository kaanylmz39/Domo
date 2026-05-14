import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import type { Store } from '../store'
import { eur, fmtDate } from '../utils/format'
import Badge from '../components/ui/Badge'

interface Props { store: Store }

const tabs = ['Overview', 'Units', 'Financials', 'Contracts', 'Documents', 'Developments', 'Valuations', 'Warnings'] as const

export default function PropertyDetail({ store }: Props) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [tab, setTab] = useState<typeof tabs[number]>('Overview')

  const property = store.properties.find(p => p.id === id)
  if (!property) return <div className="p-8 text-gray-500">Property not found.</div>

  const propContracts = store.contracts.filter(c => c.propertyId === id)
  const propExpenses = store.expenses.filter(e => e.propertyId === id)
  const propDocs = store.documents.filter(d => d.propertyId === id)
  const propDevs = store.developments.filter(d => d.propertyId === id)
  const propVals = store.valuations.filter(v => v.propertyId === id)
  const propRent = store.rentRows.filter(r => r.propertyId === id)

  const warnings: string[] = []
  propContracts.forEach(c => {
    if (c.status === 'active' && c.endDate) {
      const days = (new Date(c.endDate).getTime() - Date.now()) / 86400000
      if (days < 90 && days > 0) warnings.push(`Contract for ${c.tenant} ending ${fmtDate(c.endDate)}`)
    }
    if (c.status === 'active' && c.nextRentIncreaseDate) {
      const days = (new Date(c.nextRentIncreaseDate).getTime() - Date.now()) / 86400000
      if (days < 60 && days > 0) warnings.push(`Rent increase possible for ${c.tenant} on ${fmtDate(c.nextRentIncreaseDate)}`)
    }
  })
  propRent.filter(r => r.paidStatus !== 'paid').forEach(r => {
    warnings.push(`Unpaid rent: ${r.tenant} — ${eur(r.expectedRent - r.amountReceived)} outstanding`)
  })

  const docCategories = ['contracts', 'invoices', 'bank_statements', 'tax_documents', 'photos', 'drawings', 'renovation', 'valuations', 'other'] as const

  return (
    <div>
      <button onClick={() => navigate('/portfolio')} className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-4">
        <ArrowLeft size={16} /> Back to Portfolio
      </button>

      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-2xl font-bold">{property.address}</h1>
        <Badge color={property.status === 'active' ? 'green' : 'gray'}>{property.status}</Badge>
      </div>

      <div className="flex gap-1 mb-6 border-b border-gray-200">
        {tabs.map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 transition ${
              tab === t ? 'border-brand-600 text-brand-700' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {t}
            {t === 'Warnings' && warnings.length > 0 && (
              <span className="ml-1.5 bg-amber-100 text-amber-700 text-xs px-1.5 py-0.5 rounded-full">{warnings.length}</span>
            )}
          </button>
        ))}
      </div>

      {tab === 'Overview' && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-sm">
            {([
              ['Address', property.address],
              ['City', property.city],
              ['Postcode', property.postcode],
              ['Purchase Price', eur(property.purchasePrice)],
              ['Purchase Date', fmtDate(property.purchaseDate)],
              ['WOZ Value', eur(property.wozValue)],
              ['Mortgage / Bank', property.mortgageBank || '—'],
              ['Status', property.status],
              ['Last Renovation', fmtDate(property.lastRenovationDate)],
            ] as const).map(([label, value]) => (
              <div key={label}>
                <span className="text-xs text-gray-500 uppercase tracking-wide">{label}</span>
                <div className="font-medium mt-0.5">{value}</div>
              </div>
            ))}
          </div>
          {property.notes && (
            <div className="mt-6 pt-4 border-t border-gray-100">
              <span className="text-xs text-gray-500 uppercase tracking-wide">Notes</span>
              <p className="mt-1 text-sm text-gray-700">{property.notes}</p>
            </div>
          )}
        </div>
      )}

      {tab === 'Units' && (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-left text-xs uppercase tracking-wide text-gray-500">
                <th className="px-4 py-3">Unit</th>
                <th className="px-4 py-3">Tenant</th>
                <th className="px-4 py-3 text-right">Monthly Rent</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Contract End</th>
                <th className="px-4 py-3">Next Increase</th>
              </tr>
            </thead>
            <tbody>
              {property.units.map(u => (
                <tr key={u.id} className="border-b border-gray-50">
                  <td className="px-4 py-3 font-medium">{u.name}</td>
                  <td className="px-4 py-3 text-gray-600">{u.tenant || '—'}</td>
                  <td className="px-4 py-3 text-right">{u.monthlyRent ? eur(u.monthlyRent) : '—'}</td>
                  <td className="px-4 py-3">
                    <Badge color={u.status === 'rented' ? 'green' : u.status === 'empty' ? 'yellow' : u.status === 'renovating' ? 'blue' : 'gray'}>
                      {u.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{fmtDate(u.contractEndDate)}</td>
                  <td className="px-4 py-3 text-gray-600">{fmtDate(u.nextRentIncreaseDate)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'Financials' && (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <span className="text-xs text-gray-500 uppercase tracking-wide">Monthly Income</span>
              <div className="text-xl font-bold text-brand-600 mt-1">{eur(property.units.filter(u => u.status === 'rented').reduce((s, u) => s + u.monthlyRent, 0))}</div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <span className="text-xs text-gray-500 uppercase tracking-wide">Total Expenses</span>
              <div className="text-xl font-bold text-red-600 mt-1">{eur(propExpenses.reduce((s, e) => s + e.amount, 0))}</div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <span className="text-xs text-gray-500 uppercase tracking-wide">Unpaid Rent</span>
              <div className="text-xl font-bold text-amber-600 mt-1">{eur(propRent.filter(r => r.paidStatus !== 'paid').reduce((s, r) => s + (r.expectedRent - r.amountReceived), 0))}</div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-left text-xs uppercase tracking-wide text-gray-500">
                  <th className="px-4 py-3">Description</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3 text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {propExpenses.map(e => (
                  <tr key={e.id} className="border-b border-gray-50">
                    <td className="px-4 py-3">{e.description}</td>
                    <td className="px-4 py-3"><Badge color="gray">{e.category.replace('_', ' ')}</Badge></td>
                    <td className="px-4 py-3 text-gray-600">{fmtDate(e.date)}</td>
                    <td className="px-4 py-3 text-right font-medium">{eur(e.amount)}</td>
                  </tr>
                ))}
                {propExpenses.length === 0 && (
                  <tr><td colSpan={4} className="px-4 py-8 text-center text-gray-400">No expenses recorded</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === 'Contracts' && (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-left text-xs uppercase tracking-wide text-gray-500">
                <th className="px-4 py-3">Tenant</th>
                <th className="px-4 py-3">Unit</th>
                <th className="px-4 py-3">Start</th>
                <th className="px-4 py-3">End</th>
                <th className="px-4 py-3 text-right">Rent</th>
                <th className="px-4 py-3 text-right">Deposit</th>
                <th className="px-4 py-3">Notice</th>
                <th className="px-4 py-3">Next Increase</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {propContracts.map(c => {
                const unit = property.units.find(u => u.id === c.unitId)
                return (
                  <tr key={c.id} className="border-b border-gray-50">
                    <td className="px-4 py-3 font-medium">{c.tenant}</td>
                    <td className="px-4 py-3 text-gray-600">{unit?.name ?? '—'}</td>
                    <td className="px-4 py-3 text-gray-600">{fmtDate(c.startDate)}</td>
                    <td className="px-4 py-3 text-gray-600">{fmtDate(c.endDate)}</td>
                    <td className="px-4 py-3 text-right">{eur(c.monthlyRent)}</td>
                    <td className="px-4 py-3 text-right">{eur(c.depositAmount)}</td>
                    <td className="px-4 py-3 text-gray-600">{c.noticePeriod}</td>
                    <td className="px-4 py-3 text-gray-600">{fmtDate(c.nextRentIncreaseDate)}</td>
                    <td className="px-4 py-3">
                      <Badge color={c.status === 'active' ? 'green' : c.status === 'upcoming' ? 'blue' : 'gray'}>{c.status}</Badge>
                    </td>
                  </tr>
                )
              })}
              {propContracts.length === 0 && (
                <tr><td colSpan={9} className="px-4 py-8 text-center text-gray-400">No contracts</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'Documents' && (
        <div className="space-y-4">
          {docCategories.map(cat => {
            const docs = propDocs.filter(d => d.category === cat)
            if (docs.length === 0) return null
            return (
              <div key={cat} className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">{cat.replace('_', ' ')}</h3>
                <div className="space-y-2">
                  {docs.map(d => (
                    <div key={d.id} className="flex justify-between text-sm">
                      <span className="font-medium text-gray-700">{d.name}</span>
                      <span className="text-gray-400">{fmtDate(d.date)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
          {propDocs.length === 0 && <div className="text-gray-400 text-sm">No documents uploaded</div>}
        </div>
      )}

      {tab === 'Developments' && (
        <div className="space-y-4">
          {propDevs.map(d => (
            <div key={d.id} className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-semibold">{d.title}</h3>
                <Badge color="blue">{d.type}</Badge>
                <span className="text-xs text-gray-400">{fmtDate(d.date)}</span>
              </div>
              <p className="text-sm text-gray-600">{d.description}</p>
              {d.notes && <p className="text-sm text-gray-500 mt-2 italic">{d.notes}</p>}
            </div>
          ))}
          {propDevs.length === 0 && <div className="text-gray-400 text-sm">No developments recorded</div>}
        </div>
      )}

      {tab === 'Valuations' && (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-left text-xs uppercase tracking-wide text-gray-500">
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3 text-right">Amount</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Notes</th>
              </tr>
            </thead>
            <tbody>
              {propVals.sort((a, b) => b.valuationDate.localeCompare(a.valuationDate)).map(v => (
                <tr key={v.id} className="border-b border-gray-50">
                  <td className="px-4 py-3 text-gray-600">{fmtDate(v.valuationDate)}</td>
                  <td className="px-4 py-3 text-right font-medium">{eur(v.valuationAmount)}</td>
                  <td className="px-4 py-3"><Badge color="gray">{v.valuationType.replace(/_/g, ' ')}</Badge></td>
                  <td className="px-4 py-3 text-gray-600">{v.notes}</td>
                </tr>
              ))}
              {propVals.length === 0 && (
                <tr><td colSpan={4} className="px-4 py-8 text-center text-gray-400">No valuations</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'Warnings' && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          {warnings.length > 0 ? (
            <ul className="space-y-3">
              {warnings.map((w, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-amber-700">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                  {w}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 text-sm">No warnings for this property.</p>
          )}
        </div>
      )}
    </div>
  )
}
