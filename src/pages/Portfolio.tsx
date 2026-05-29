import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Plus, Trash2, Pencil, ChevronDown, ChevronRight } from 'lucide-react'
import type { Store } from '../store'
import type { Property, Unit } from '../types'
import { eur, fmtDate, uid } from '../utils/format'
import Modal from '../components/ui/Modal'
import Badge from '../components/ui/Badge'

interface Props { store: Store }

const emptyUnit = (propertyId: string): Unit => ({
  id: uid(), propertyId, name: '', tenant: '', monthlyRent: 0,
  status: 'empty', contractEndDate: '', nextRentIncreaseDate: '',
})

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
  const [expanded, setExpanded] = useState<Set<string>>(new Set())

  const form = editing ?? emptyProperty()

  function toggleExpand(id: string) {
    setExpanded(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

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

  function addUnit() {
    setEditing({ ...form, units: [...form.units, emptyUnit(form.id)] })
  }

  function updateUnit(idx: number, key: keyof Unit, value: string | number) {
    const units = [...form.units]
    units[idx] = { ...units[idx], [key]: value }
    setEditing({ ...form, units })
  }

  function removeUnit(idx: number) {
    setEditing({ ...form, units: form.units.filter((_, i) => i !== idx) })
  }

  function getMonthlyIncome(p: Property) {
    return p.units.filter(u => u.status === 'rented').reduce((s, u) => s + u.monthlyRent, 0)
  }

  function getRentReceived(p: Property) {
    return rentRows.filter(r => r.propertyId === p.id && r.paidStatus === 'paid').reduce((s, r) => s + r.amountReceived, 0)
  }

  function getUnitRentReceived(unitId: string) {
    const row = rentRows.find(r => r.unitId === unitId && r.paidStatus === 'paid')
    return row ? row.amountReceived : 0
  }

  function getContractStart(propertyId: string, unitId?: string) {
    const active = contracts.filter(c => c.propertyId === propertyId && c.status === 'active' && (unitId ? c.unitId === unitId : true))
      .sort((a, b) => a.startDate.localeCompare(b.startDate))
    return active.length > 0 ? active[0].startDate : ''
  }

  function getYearlyExpenses(p: Property) {
    return expenses.filter(e => e.propertyId === p.id).reduce((s, e) => s + e.amount, 0)
  }

  function getLastValuation(p: Property) {
    const v = valuations.filter(v => v.propertyId === p.id).sort((a, b) => b.valuationDate.localeCompare(a.valuationDate))[0]
    return v ? eur(v.valuationAmount) : '—'
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

      <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
        <table className="w-full text-sm min-w-[900px]">
          <thead>
            <tr className="border-b border-gray-100 text-left text-xs uppercase tracking-wide text-gray-500">
              <th className="px-4 py-3 w-8"></th>
              <th className="px-4 py-3">Address</th>
              <th className="px-4 py-3">City</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Units</th>
              <th className="px-4 py-3 text-right">Monthly Income</th>
              <th className="px-4 py-3 text-right">Rent Received</th>
              <th className="px-4 py-3">Contract Start</th>
              <th className="px-4 py-3 text-right">Yearly Expenses</th>
              <th className="px-4 py-3 text-right">Last Valuation</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {properties.map(p => {
              const isExpanded = expanded.has(p.id)
              const hasMultipleUnits = p.units.length > 1
              return (
                <>
                  <tr
                    key={p.id}
                    className="border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition"
                    onClick={() => navigate(`/property/${p.id}`)}
                  >
                    <td className="px-4 py-3" onClick={e => { e.stopPropagation(); if (hasMultipleUnits) toggleExpand(p.id) }}>
                      {hasMultipleUnits && (
                        <button className="text-gray-400 hover:text-gray-600">
                          {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                        </button>
                      )}
                    </td>
                    <td className="px-4 py-3 font-medium">{p.address}</td>
                    <td className="px-4 py-3 text-gray-600">{p.city}</td>
                    <td className="px-4 py-3">
                      <Badge color={p.status === 'active' ? 'green' : 'gray'}>{p.status}</Badge>
                    </td>
                    <td className="px-4 py-3 text-right">{p.units.length}</td>
                    <td className="px-4 py-3 text-right">{eur(getMonthlyIncome(p))}</td>
                    <td className="px-4 py-3 text-right">{getRentReceived(p) > 0 ? <span className="text-brand-600 font-medium">{eur(getRentReceived(p))}</span> : '—'}</td>
                    <td className="px-4 py-3 text-gray-600">{fmtDate(getContractStart(p.id))}</td>
                    <td className="px-4 py-3 text-right">{eur(getYearlyExpenses(p))}</td>
                    <td className="px-4 py-3 text-right">{getLastValuation(p)}</td>
                    <td className="px-4 py-3 text-right" onClick={e => e.stopPropagation()}>
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => { setEditing({ ...p, units: p.units.map(u => ({ ...u })) }); setShowForm(true) }}
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
                  {isExpanded && p.units.map(u => (
                    <tr key={u.id} className="border-b border-gray-50 bg-gray-50/50">
                      <td className="px-4 py-2"></td>
                      <td className="px-4 py-2 pl-8 text-gray-500 text-xs font-medium">{u.name}</td>
                      <td className="px-4 py-2 text-gray-500 text-xs">{u.tenant || '—'}</td>
                      <td className="px-4 py-2">
                        <Badge color={u.status === 'rented' ? 'green' : u.status === 'empty' ? 'yellow' : u.status === 'renovating' ? 'blue' : 'gray'}>
                          {u.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-2"></td>
                      <td className="px-4 py-2 text-right text-xs">{u.monthlyRent > 0 ? eur(u.monthlyRent) : '—'}</td>
                      <td className="px-4 py-2 text-right text-xs">
                        {getUnitRentReceived(u.id) > 0
                          ? <span className="text-brand-600 font-medium">{eur(getUnitRentReceived(u.id))}</span>
                          : '—'}
                      </td>
                      <td className="px-4 py-2 text-gray-500 text-xs">{fmtDate(getContractStart(p.id, u.id))}</td>
                      <td className="px-4 py-2"></td>
                      <td className="px-4 py-2"></td>
                      <td className="px-4 py-2"></td>
                    </tr>
                  ))}
                </>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Add / Edit Property + Units Modal */}
      <Modal wide open={showForm} onClose={() => { setShowForm(false); setEditing(null) }} title={editing && properties.find(p => p.id === editing.id) ? 'Edit Property' : 'Add Property'}>
        <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-1">
          {/* Property fields */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Address</label>
              <input className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" value={form.address} onChange={e => setField('address', e.target.value)} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">City</label>
              <input className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" value={form.city} onChange={e => setField('city', e.target.value)} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Postcode</label>
              <input className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" value={form.postcode} onChange={e => setField('postcode', e.target.value)} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Mortgage / Bank</label>
              <input className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" value={form.mortgageBank} onChange={e => setField('mortgageBank', e.target.value)} />
            </div>
          </div>
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

          {/* Units section */}
          <div className="border-t border-gray-100 pt-4 mt-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-700">Units</h3>
              <button
                type="button"
                onClick={addUnit}
                className="flex items-center gap-1 text-xs text-brand-600 hover:text-brand-700 font-medium"
              >
                <Plus size={14} /> Add Unit
              </button>
            </div>

            {form.units.length === 0 && (
              <p className="text-xs text-gray-400 mb-2">No units yet. Add a unit to track tenants and rent.</p>
            )}

            {form.units.map((u, idx) => (
              <div key={u.id} className="bg-gray-50 rounded-lg p-3 mb-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-gray-500">Unit {idx + 1}</span>
                  <button
                    type="button"
                    onClick={() => removeUnit(idx)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] text-gray-400 mb-0.5">Unit Name</label>
                    <input className="w-full border border-gray-200 rounded px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500" value={u.name} onChange={e => updateUnit(idx, 'name', e.target.value)} placeholder="e.g. Ground Floor" />
                  </div>
                  <div>
                    <label className="block text-[10px] text-gray-400 mb-0.5">Tenant</label>
                    <input className="w-full border border-gray-200 rounded px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500" value={u.tenant} onChange={e => updateUnit(idx, 'tenant', e.target.value)} placeholder="Tenant name" />
                  </div>
                  <div>
                    <label className="block text-[10px] text-gray-400 mb-0.5">Monthly Rent</label>
                    <input type="number" className="w-full border border-gray-200 rounded px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500" value={u.monthlyRent || ''} onChange={e => updateUnit(idx, 'monthlyRent', +e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-[10px] text-gray-400 mb-0.5">Status</label>
                    <select className="w-full border border-gray-200 rounded px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500" value={u.status} onChange={e => updateUnit(idx, 'status', e.target.value)}>
                      <option value="rented">Rented</option>
                      <option value="empty">Empty</option>
                      <option value="renovating">Renovating</option>
                      <option value="unavailable">Unavailable</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] text-gray-400 mb-0.5">Contract End</label>
                    <input type="date" className="w-full border border-gray-200 rounded px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500" value={u.contractEndDate} onChange={e => updateUnit(idx, 'contractEndDate', e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-[10px] text-gray-400 mb-0.5">Next Rent Increase</label>
                    <input type="date" className="w-full border border-gray-200 rounded px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500" value={u.nextRentIncreaseDate} onChange={e => updateUnit(idx, 'nextRentIncreaseDate', e.target.value)} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-100">
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
