export function eur(n: number): string {
  return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(n)
}

export function fmtDate(d: string): string {
  if (!d) return '—'
  return new Date(d).toLocaleDateString('nl-NL', { year: 'numeric', month: 'short', day: 'numeric' })
}

export function uid(): string {
  return Math.random().toString(36).slice(2, 10)
}
