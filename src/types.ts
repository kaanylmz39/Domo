export interface Property {
  id: string
  address: string
  city: string
  postcode: string
  purchasePrice: number
  purchaseDate: string
  wozValue: number
  mortgageBank: string
  status: 'active' | 'sold' | 'inactive'
  lastRenovationDate: string
  notes: string
  units: Unit[]
}

export interface Unit {
  id: string
  propertyId: string
  name: string
  tenant: string
  monthlyRent: number
  status: 'rented' | 'empty' | 'renovating' | 'unavailable'
  contractEndDate: string
  nextRentIncreaseDate: string
}

export interface Contract {
  id: string
  propertyId: string
  unitId: string
  tenant: string
  startDate: string
  endDate: string
  monthlyRent: number
  rentDueDay: number
  depositAmount: number
  noticePeriod: string
  nextRentIncreaseDate: string
  status: 'active' | 'ended' | 'upcoming'
}

export type RentPaidStatus = 'paid' | 'unpaid' | 'partial'

export interface RentRow {
  id: string
  propertyId: string
  unitId: string
  tenant: string
  expectedRent: number
  amountReceived: number
  dueDate: string
  paidStatus: RentPaidStatus
  paymentDate: string
  notes: string
  month: string
}

export interface Expense {
  id: string
  propertyId: string | null
  description: string
  amount: number
  date: string
  category: ExpenseCategory
  recurring: boolean
}

export type ExpenseCategory =
  | 'maintenance'
  | 'renovation'
  | 'local_tax'
  | 'mortgage'
  | 'insurance'
  | 'utilities'
  | 'legal'
  | 'accountant'
  | 'bank'
  | 'management'
  | 'other'

export type IncomeCategory = 'rent' | 'other_income'

export interface DocRecord {
  id: string
  propertyId: string
  name: string
  category: DocCategory
  date: string
  notes: string
}

export type DocCategory =
  | 'contracts'
  | 'invoices'
  | 'bank_statements'
  | 'tax_documents'
  | 'photos'
  | 'drawings'
  | 'renovation'
  | 'valuations'
  | 'other'

export interface InboxItem {
  id: string
  fileName: string
  propertyId: string
  unitId: string
  documentType: DocCategory
  documentDate: string
  amount: number
  category: ExpenseCategory | ''
  suggestedName: string
  notes: string
  status: 'pending' | 'approved'
}

export interface Development {
  id: string
  propertyId: string
  unitId: string
  title: string
  type: string
  date: string
  description: string
  linkedDocIds: string[]
  linkedExpenseIds: string[]
  notes: string
}

export type ValuationType =
  | 'woz'
  | 'official_appraisal'
  | 'estimated_market_value'
  | 'bank_valuation'
  | 'other'

export interface Valuation {
  id: string
  propertyId: string
  valuationDate: string
  valuationAmount: number
  valuationType: ValuationType
  notes: string
  linkedDocId: string
}
