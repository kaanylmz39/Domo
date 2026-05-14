import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Plus, Trash2, Pencil, AlertTriangle } from 'lucide-react'
import type { Store } from '../store'
import type { Property } from '../types'
import { eur, uid } from '../utils/format'
import Modal from '../components/ui/Modal'
import Badge from '../components/ui/Badge'

interface Props { store: Store }

const emptyProperty = (): Property => ({
  id: uid(), address: '', city: '', postcode: '', purchasePrice: 0, purchaseDate: '',
  wozValue: 0, mortgageBank: '', status: 'active', lastRenovationDate: '', notes: '', units: [],
})

export default function Portfolio({ store }: Props) {
  const { properties, addProperty, updateProperty, deleteProperty, rentRows, expenses, valuations, contracts } = store
  const navigate = useNavigate()
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState<Property | null>(null)
  const [deleteTarget, setDeleteTarget] = useState<Property | null>(null)

  const form = editing ?? emptyProperty()

  function handleSave() {
    if (!form.address || !form.city) return
    if (editing && properties.find(p => p.id === editing.id)) {
      updateProperty(form)
    } else {
      addProperty(form)
    }
    setShowForm(false)
    setEditing(null)
  }

  function handleDelete() {
    if (deleteTarget) {
      deleteProperty(deleteTarget.id)
      setDeleteTarget(null)
    }
  }

  function setField(key: keyof Property, value: string | number) {
    setEditing({ ...form, [key]: value })
  }

  function getMonthlyIncome(p: Property) {
    return p.units.filter(u => u.status === 'rented').reduce((s, u) => s + u.monthlyRent, 0)
  }

  function getYearlyExpenses(p: Property) {
    return expenses.filter(e => e.propertyId === p.id).reduce((s, e) => s + e.amount, 0)
  }

  function getUnpaid(p: Property) {
    return rentRows.filter(r => r.propertyId === p.id && r.paidStatus !== 'paid').reduce((s, r) => s + (r.expectedRent - r.amountReceived), 0)
  }

  function getLastValuation(p: Property) {
    const v = valuations.filter(v => v.propertyId === p.id).sort((a, b) => b.valuationDate.localeCompare(a.valuationDate))[0]
    return v ? eur(v.valuationAmount) : '—'
  }

  function hasWarning(p: Property) {
    return contracts.some(c => c.propertyId === p.id && c.status === 'active' && c.endDate && (new Date(c.endDate).getTime() - Date.now()) / 86400000 < 90)
      || rentRows.some(r => r.propertyId === p.id && r.paidStatus !== 'paid')
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <button
          onClick={() => { setEditing(emptyProperty()); setShowForm(true) }}
          className="flex items-center gap-2 bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-700 transition"
        >
          <Plus size={16} /> Add Property
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-left text-xs uppercase tracking-wide text-gray-500">
              <th className="px-4 py-3">Address</th>
              <th className="px-4 py-3">City</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Units</th>
              <th className="px-4 py-3 text-right">Monthly Income</th>
              <th className="px-4 py-3 text-right">Yearly Expenses</th>
              <th className="px-4 py-3 text-right">Unpaid</th>
              <th className="px-4 py-3 text-right">Last Valuation</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {properties.map(p => (
              <tr
                key={p.id}
                className="border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition"
                onClick={() => navigate(`/property/${p.id}`)}
              >
                <td className="px-4 py-3 font-medium">
                  <div className="flex items-center gap-2">
                    {p.address}
                    {hasWarning(p) && <AlertTriangle size={14} className="text-amber-500" />}
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-600">{p.city}</td>
                <td className="px-4 py-3">
                  <Badge color={p.status === 'active' ? 'green' : 'gray'}>{p.status}</Badge>
                </td>
                <td className="px-4 py-3 text-right">{p.units.length}</td>
                <td className="px-4 py-3 text-right">{eur(getMonthlyIncome(p))}</td>
                <td className="px-4 py-3 text-right">{eur(getYearlyExpenses(p))}</td>
                <td className="px-4 py-3 text-right">{getUnpaid(p) > 0 ? <span className="text-red-600 font-medium">{eur(getUnpaid(p))}</span> : '—'}</td>
                <td className="px-4 py-3 text-right">{getLastValuation(p)}</td>
                <td className="px-4 py-3 text-right" onClick={e => e.stopPropagation()}>
                  <div className="flex items-center justify-end gap-1">
                    <button
                      onClick={() => { setEditing({ ...p }); setShowForm(true) }}
                      className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600"
                    >
                      <Pencil size={14} />
                    </button>
                    <button
                      onClick={() => setDeleteTarget(p)}
                      className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-600"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add / Edit Modal */}
      <Modal open={showForm} onClose={() => { setShowForm(false); setEditing(null) }} title={editing && properties.find(p => p.id === editing.id) ? 'Edit Property' : 'Add Property'}>
        <div className="space-y-3">
          {(['address', 'city', 'postcode', 'mortgageBank'] as const).map(f => (
            <div key={f}>
              <label className="block text-xs font-medium text-gray-500 mb-1 capitalize">{f.replace(/([A-Z])/g, ' $1')}</label>
              <input
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                value={form[f]}
                onChange={e => setField(f, e.target.value)}
              />
            </div>
          ))}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Purchase Price</label>
              <input type="number" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" value={form.purchasePrice || ''} onChange={e => setField('purchasePrice', +e.target.value)} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Purchase Date</label>
              <input type="date" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" value={form.purchaseDate} onChange={e => setField('purchaseDate', e.target.value)} />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Notes</label>
            <textarea className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" rows={2} value={form.notes} onChange={e => setField('notes', e.target.value)} />
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button onClick={() => { setShowForm(false); setEditing(null) }} className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900">Cancel</button>
          <button onClick={handleSave} className="px-4 py-2 text-sm bg-brand-600 text-white rounded-lg hover:bg-brand-700">Save</button>
        </div>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal open={!!deleteTarget} onClose={() => setDeleteTarget(null)} title="Delete Property">
        <p className="text-sm text-gray-600 mb-6">
          Are you sure you want to delete this property? This action cannot be undone.
        </p>
        <div className="flex justify-end gap-3">
          <button onClick={() => setDeleteTarget(null)} className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900">Cancel</button>
          <button onClick={handleDelete} className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700">Delete property</button>
        </div>
      </Modal>
    </div>
  )
}
