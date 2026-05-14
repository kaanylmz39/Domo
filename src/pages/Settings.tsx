import { useState } from 'react'
import type { Store } from '../store'
import Modal from '../components/ui/Modal'

interface Props { store: Store }

const docCategories = ['Contracts', 'Invoices', 'Bank Statements', 'Tax Documents', 'Photos', 'Drawings', 'Renovation', 'Valuations', 'Other']
const expenseCategories = ['Maintenance', 'Renovation', 'Local Tax', 'Mortgage', 'Insurance', 'Utilities', 'Legal', 'Accountant', 'Bank', 'Management', 'Other']

export default function Settings({ store }: Props) {
  const { resetAll } = store
  const [confirmReset, setConfirmReset] = useState(false)

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="space-y-6 max-w-2xl">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-semibold mb-1">About Domo</h2>
          <p className="text-sm text-gray-500">
            Domo v1.0 — Real estate data management cockpit. Property-first portfolio management with rent control, document organization, and reporting.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-semibold mb-3">Document Categories</h2>
          <div className="flex flex-wrap gap-2">
            {docCategories.map(c => (
              <span key={c} className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700">{c}</span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-semibold mb-3">Expense Categories</h2>
          <div className="flex flex-wrap gap-2">
            {expenseCategories.map(c => (
              <span key={c} className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700">{c}</span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-semibold mb-1">Export / Backup</h2>
          <p className="text-sm text-gray-500 mb-3">Export portfolio data for backup or migration.</p>
          <button className="px-4 py-2 text-sm border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 cursor-not-allowed opacity-50">
            Export Data (coming soon)
          </button>
        </div>

        <div className="bg-white rounded-xl border border-red-200 p-5">
          <h2 className="font-semibold text-red-700 mb-1">Reset Data</h2>
          <p className="text-sm text-gray-500 mb-3">Clear all localStorage and restore mock data. This cannot be undone.</p>
          <button
            onClick={() => setConfirmReset(true)}
            className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Reset All Data
          </button>
        </div>
      </div>

      <Modal open={confirmReset} onClose={() => setConfirmReset(false)} title="Reset All Data">
        <p className="text-sm text-gray-600 mb-6">
          Are you sure you want to reset all data? This will clear all changes and restore the original mock data. This action cannot be undone.
        </p>
        <div className="flex justify-end gap-3">
          <button onClick={() => setConfirmReset(false)} className="px-4 py-2 text-sm text-gray-600">Cancel</button>
          <button onClick={() => { resetAll(); setConfirmReset(false) }} className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700">Reset</button>
        </div>
      </Modal>
    </div>
  )
}
