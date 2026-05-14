import { useState } from 'react'
import type { Store } from '../store'
import type { RentRow, RentPaidStatus } from '../types'
import { eur, fmtDate } from '../utils/format'
import Modal from '../components/ui/Modal'
import Badge from '../components/ui/Badge'

interface Props { store: Store }

export default function RentControl({ store }: Props) {
  const { properties, rentRows, updateRentRow } = store
  const [payTarget, setPayTarget] = useState<RentRow | null>(null)
  const [payForm, setPayForm] = useState({ status: 'paid' as RentPaidStatus, paymentDate: '', amount: 0, notes: '' })

  function openPay(row: RentRow) {
    setPayTarget(row)
    setPayForm({
      status: 'paid',
      paymentDate: new Date().toISOString().slice(0, 10),
      amount: row.expectedRent,
      notes: '',
    })
  }

  function handlePay() {
    if (!payTarget) return
    const amount = payForm.status === 'paid' ? payTarget.expectedRent : payForm.status === 'partial' ? payForm.amount : 0
    updateRentRow({
      ...payTarget,
      paidStatus: payForm.status,
      amountReceived: amount,
      paymentDate: payForm.status !== 'unpaid' ? payForm.paymentDate : '',
      notes: payForm.notes || payTarget.notes,
    })
    setPayTarget(null)
  }

  const paidCount = rentRows.filter(r => r.paidStatus === 'paid').length
  const totalCount = rentRows.length

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Rent Control</h1>
          <p className="text-sm text-gray-500 mt-1">Monthly rent checklist — {rentRows[0]?.month ?? ''}</p>
        </div>
        <div className="text-sm text-gray-500">
          {paidCount} of {totalCount} paid
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-left text-xs uppercase tracking-wide text-gray-500">
              <th className="px-4 py-3">Property</th>
              <th className="px-4 py-3">Unit</th>
              <th className="px-4 py-3">Tenant</th>
              <th className="px-4 py-3 text-right">Expected</th>
              <th className="px-4 py-3 text-right">Received</th>
              <th className="px-4 py-3">Due Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Payment Date</th>
              <th className="px-4 py-3">Notes</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {rentRows.map(r => {
              const prop = properties.find(p => p.id === r.propertyId)
              const unit = prop?.units.find(u => u.id === r.unitId)
              return (
                <tr key={r.id} className="border-b border-gray-50">
                  <td className="px-4 py-3 font-medium">{prop?.address ?? '—'}</td>
                  <td className="px-4 py-3 text-gray-600">{unit?.name ?? '—'}</td>
                  <td className="px-4 py-3 text-gray-600">{r.tenant}</td>
                  <td className="px-4 py-3 text-right">{eur(r.expectedRent)}</td>
                  <td className="px-4 py-3 text-right font-medium">{r.amountReceived > 0 ? eur(r.amountReceived) : '—'}</td>
                  <td className="px-4 py-3 text-gray-600">{fmtDate(r.dueDate)}</td>
                  <td className="px-4 py-3">
                    <Badge color={r.paidStatus === 'paid' ? 'green' : r.paidStatus === 'partial' ? 'yellow' : 'red'}>
                      {r.paidStatus}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{fmtDate(r.paymentDate)}</td>
                  <td className="px-4 py-3 text-gray-500 max-w-[150px] truncate">{r.notes}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => openPay(r)}
                      className="text-xs px-3 py-1.5 rounded-lg bg-brand-50 text-brand-700 hover:bg-brand-100 font-medium transition"
                    >
                      {r.paidStatus === 'paid' ? 'Edit' : 'Mark paid'}
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <Modal open={!!payTarget} onClose={() => setPayTarget(null)} title="Update Rent Payment">
        {payTarget && (
          <div className="space-y-4">
            <div className="text-sm text-gray-600">
              {payTarget.tenant} — {eur(payTarget.expectedRent)} expected
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Paid Status</label>
              <select
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                value={payForm.status}
                onChange={e => setPayForm({ ...payForm, status: e.target.value as RentPaidStatus })}
              >
                <option value="paid">Paid</option>
                <option value="partial">Partially paid</option>
                <option value="unpaid">Unpaid</option>
              </select>
            </div>
            {payForm.status !== 'unpaid' && (
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Payment Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  value={payForm.paymentDate}
                  onChange={e => setPayForm({ ...payForm, paymentDate: e.target.value })}
                />
              </div>
            )}
            {payForm.status === 'partial' && (
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Amount Received</label>
                <input
                  type="number"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  value={payForm.amount || ''}
                  onChange={e => setPayForm({ ...payForm, amount: +e.target.value })}
                />
              </div>
            )}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Note</label>
              <input
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                value={payForm.notes}
                onChange={e => setPayForm({ ...payForm, notes: e.target.value })}
              />
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button onClick={() => setPayTarget(null)} className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900">Cancel</button>
              <button onClick={handlePay} className="px-4 py-2 text-sm bg-brand-600 text-white rounded-lg hover:bg-brand-700">Save</button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
