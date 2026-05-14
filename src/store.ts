import { useState, useEffect, useCallback } from 'react'
import type {
  Property, Contract, RentRow, Expense, DocRecord,
  InboxItem, Development, Valuation,
} from './types'
import {
  mockProperties, mockContracts, mockRentRows, mockExpenses,
  mockDocuments, mockInboxItems, mockDevelopments, mockValuations,
} from './data/mockData'

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(`domo_${key}`)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

function save<T>(key: string, value: T) {
  localStorage.setItem(`domo_${key}`, JSON.stringify(value))
}

export function useStore() {
  const [properties, setProperties] = useState<Property[]>(() => load('properties', mockProperties))
  const [contracts, setContracts] = useState<Contract[]>(() => load('contracts', mockContracts))
  const [rentRows, setRentRows] = useState<RentRow[]>(() => load('rentRows', mockRentRows))
  const [expenses, setExpenses] = useState<Expense[]>(() => load('expenses', mockExpenses))
  const [documents, setDocuments] = useState<DocRecord[]>(() => load('documents', mockDocuments))
  const [inboxItems, setInboxItems] = useState<InboxItem[]>(() => load('inboxItems', mockInboxItems))
  const [developments, setDevelopments] = useState<Development[]>(() => load('developments', mockDevelopments))
  const [valuations, setValuations] = useState<Valuation[]>(() => load('valuations', mockValuations))

  useEffect(() => { save('properties', properties) }, [properties])
  useEffect(() => { save('contracts', contracts) }, [contracts])
  useEffect(() => { save('rentRows', rentRows) }, [rentRows])
  useEffect(() => { save('expenses', expenses) }, [expenses])
  useEffect(() => { save('documents', documents) }, [documents])
  useEffect(() => { save('inboxItems', inboxItems) }, [inboxItems])
  useEffect(() => { save('developments', developments) }, [developments])
  useEffect(() => { save('valuations', valuations) }, [valuations])

  const addProperty = useCallback((p: Property) => setProperties(prev => [...prev, p]), [])
  const updateProperty = useCallback((p: Property) => setProperties(prev => prev.map(x => x.id === p.id ? p : x)), [])
  const deleteProperty = useCallback((id: string) => setProperties(prev => prev.filter(x => x.id !== id)), [])

  const updateRentRow = useCallback((r: RentRow) => setRentRows(prev => prev.map(x => x.id === r.id ? r : x)), [])

  const approveInboxItem = useCallback((id: string) => {
    setInboxItems(prev => prev.map(x => x.id === id ? { ...x, status: 'approved' as const } : x))
  }, [])

  const updateInboxItem = useCallback((item: InboxItem) => {
    setInboxItems(prev => prev.map(x => x.id === item.id ? item : x))
  }, [])

  const addExpense = useCallback((e: Expense) => setExpenses(prev => [...prev, e]), [])

  const addDocument = useCallback((d: DocRecord) => setDocuments(prev => [...prev, d]), [])

  const addDevelopment = useCallback((d: Development) => setDevelopments(prev => [...prev, d]), [])

  const addValuation = useCallback((v: Valuation) => setValuations(prev => [...prev, v]), [])

  const resetAll = useCallback(() => {
    const keys = ['properties', 'contracts', 'rentRows', 'expenses', 'documents', 'inboxItems', 'developments', 'valuations']
    keys.forEach(k => localStorage.removeItem(`domo_${k}`))
    setProperties(mockProperties)
    setContracts(mockContracts)
    setRentRows(mockRentRows)
    setExpenses(mockExpenses)
    setDocuments(mockDocuments)
    setInboxItems(mockInboxItems)
    setDevelopments(mockDevelopments)
    setValuations(mockValuations)
  }, [])

  return {
    properties, contracts, rentRows, expenses, documents,
    inboxItems, developments, valuations,
    addProperty, updateProperty, deleteProperty,
    updateRentRow, approveInboxItem, updateInboxItem,
    addExpense, addDocument, addDevelopment, addValuation,
    resetAll,
  }
}

export type Store = ReturnType<typeof useStore>
