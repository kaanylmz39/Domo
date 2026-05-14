import { useState } from 'react'
import type { Store } from '../store'
import type { InboxItem, DocCategory, ExpenseCategory } from '../types'
import { eur, fmtDate } from '../utils/format'
import Modal from '../components/ui/Modal'
import Badge from '../components/ui/Badge'

interface Props { store: Store }

const docCategories: DocCategory[] = ['contracts', 'invoices', 'bank_statements', 'tax_documents', 'photos', 'drawings', 'renovation', 'valuations', 'other']
const expCategories: ExpenseCategory[] = ['maintenance', 'renovation', 'local_tax', 'mortgage', 'insurance', 'utilities', 'legal', 'accountant', 'bank', 'management', 'other']

export default function AIInbox({ store }: Props) {
  const { properties, inboxItems, approveInboxItem, updateInboxItem } = store
  const [editing, setEditing] = useState<InboxItem | null>(null)
  const [confirmTarget, setConfirmTarget] = useState<string | null>(null)

  const pending = inboxItems.filter(i => i.status === 'pending')
  const approved = inboxItems.filter(i => i.status === 'approved')

  function handleApprove() {
    if (confirmTarget) {
      approveInboxItem(confirmTarget)
      setConfirmTarget(null)
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">AI Inbox</h1>
      <p className="text-sm text-gray-500 mb-6">Review, categorize, and organize incoming documents. Designed for future AI automation.</p>

      <div className="mb-6 bg-white rounded-xl border border-gray-200 p-5">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">File Renaming</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-400">Original:</span>
            <div className="mt-1 font-mono text-red-600 bg-red-50 px-3 py-2 rounded-lg text-xs">scan_3948_final.pdf</div>
          </div>
          <div>
            <span className="text-gray-400">Renamed by Domo:</span>
            <div className="mt-1 font-mono text-brand-700 bg-brand-50 px-3 py-2 rounded-lg text-xs">2026-05-07_Keizersgracht274_Invoice_Plumber_850.pdf</div>
          </div>
        </div>
      </div>

      {pending.length > 0 && (
        <>
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Pending Review ({pending.length})</h2>
          <div className="space-y-3 mb-8">
            {pending.map(item => {
              const prop = properties.find(p => p.id === item.propertyId)
              return (
                <div key={item.id} className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-xs text-gray-400">{item.fileName}</span>
                        <Badge color="yellow">pending</Badge>
                      </div>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-2 text-sm">
                        <div><span className="text-gray-400">Property:</span> <span className="font-medium">{prop?.address ?? '—'}</span></div>
                        <div><span className="text-gray-400">Type:</span> <span className="font-medium">{item.documentType.replace('_', ' ')}</span></div>
                        <div><span className="text-gray-400">Date:</span> <span className="font-medium">{fmtDate(item.documentDate)}</span></div>
                        {item.amount > 0 && <div><span className="text-gray-400">Amount:</span> <span className="font-medium">{eur(item.amount)}</span></div>}
                      </div>
                      <div className="mt-2 text-xs">
                        <span className="text-gray-400">Suggested name:</span>{' '}
                        <span className="font-mono text-brand-700">{item.suggestedName}</span>
                      </div>
                      {item.notes && <p className="mt-1 text-xs text-gray-500">{item.notes}</p>}
                    </div>
                    <div className="flex gap-2 shrink-0 ml-4">
                      <button
                        onClick={() => setEditing({ ...item })}
                        className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => setConfirmTarget(item.id)}
                        className="text-xs px-3 py-1.5 rounded-lg bg-brand-600 text-white hover:bg-brand-700"
                      >
                        Approve
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </>
      )}

      {approved.length > 0 && (
        <>
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Approved ({approved.length})</h2>
          <div className="space-y-2">
            {approved.map(item => {
              const prop = properties.find(p => p.id === item.propertyId)
              return (
                <div key={item.id} className="bg-white rounded-xl border border-gray-200 p-4 opacity-60">
                  <div className="flex items-center gap-3 text-sm">
                    <Badge color="green">approved</Badge>
                    <span className="font-medium">{prop?.address}</span>
                    <span className="font-mono text-xs text-gray-400">{item.suggestedName}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </>
      )}

      {/* Edit Modal */}
      <Modal open={!!editing} onClose={() => setEditing(null)} title="Edit Inbox Item">
        {editing && (
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Property</label>
              <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" value={editing.propertyId} onChange={e => setEditing({ ...editing, propertyId: e.target.value })}>
                {properties.map(p => <option key={p.id} value={p.id}>{p.address}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Document Type</label>
              <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" value={editing.documentType} onChange={e => setEditing({ ...editing, documentType: e.target.value as DocCategory })}>
                {docCategories.map(c => <option key={c} value={c}>{c.replace('_', ' ')}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Date</label>
                <input type="date" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" value={editing.documentDate} onChange={e => setEditing({ ...editing, documentDate: e.target.value })} />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Amount</label>
                <input type="number" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" value={editing.amount || ''} onChange={e => setEditing({ ...editing, amount: +e.target.value })} />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Expense Category</label>
              <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" value={editing.category} onChange={e => setEditing({ ...editing, category: e.target.value as ExpenseCategory })}>
                <option value="">— None —</option>
                {expCategories.map(c => <option key={c} value={c}>{c.replace('_', ' ')}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Suggested File Name</label>
              <input className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm font-mono" value={editing.suggestedName} onChange={e => setEditing({ ...editing, suggestedName: e.target.value })} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Notes</label>
              <input className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" value={editing.notes} onChange={e => setEditing({ ...editing, notes: e.target.value })} />
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button onClick={() => setEditing(null)} className="px-4 py-2 text-sm text-gray-600">Cancel</button>
              <button onClick={() => { updateInboxItem(editing); setEditing(null) }} className="px-4 py-2 text-sm bg-brand-600 text-white rounded-lg hover:bg-brand-700">Save</button>
            </div>
          </div>
        )}
      </Modal>

      {/* Approve Confirmation */}
      <Modal open={!!confirmTarget} onClose={() => setConfirmTarget(null)} title="Approve Item">
        <p className="text-sm text-gray-600 mb-6">
          Are you sure you want to approve this item? It will be linked, renamed, categorized, and organized.
        </p>
        <div className="flex justify-end gap-3">
          <button onClick={() => setConfirmTarget(null)} className="px-4 py-2 text-sm text-gray-600">Cancel</button>
          <button onClick={handleApprove} className="px-4 py-2 text-sm bg-brand-600 text-white rounded-lg hover:bg-brand-700">Approve</button>
        </div>
      </Modal>
    </div>
  )
}
