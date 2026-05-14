# Domo — Real Estate Data Management Cockpit

Property-first portfolio management with rent control, document organization, and reporting.

## Quick Start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Build output is in `dist/` — compatible with Vercel, GitHub Pages, or any static host.

## Tech Stack

- Vite + React + TypeScript
- Tailwind CSS
- localStorage for persistence
- No backend, no auth, no database

## Pages

- **Cockpit** — Dashboard with income, expenses, unpaid rent, warnings
- **Portfolio** — All properties with add/edit/delete
- **Property Detail** — Dossier with tabs: Overview, Units, Financials, Contracts, Documents, Developments, Valuations, Warnings
- **Rent Control** — Monthly rent checklist with payment tracking
- **AI Inbox** — Document review workflow (designed for future AI)
- **Reports** — Bank, tax, performance, unpaid rent, valuations
- **Settings** — Categories, export placeholder, data reset
