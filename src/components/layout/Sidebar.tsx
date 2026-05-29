import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard, Building2, Receipt, Inbox,
  BarChart3, Settings, Menu, X,
} from 'lucide-react'

const links = [
  { to: '/', label: 'Cockpit', icon: LayoutDashboard },
  { to: '/portfolio', label: 'Portfolio', icon: Building2 },
  { to: '/rent-control', label: 'Rent Control', icon: Receipt },
  { to: '/ai-inbox', label: 'AI Inbox', icon: Inbox },
  { to: '/reports', label: 'Reports', icon: BarChart3 },
  { to: '/settings', label: 'Settings', icon: Settings },
]

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 z-50">
        <img src={import.meta.env.BASE_URL + 'logo.png'} alt="Domo" className="h-8 object-contain" />
        <button onClick={() => setOpen(!open)} className="p-2 rounded-lg hover:bg-gray-100 text-gray-600">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {open && <div className="lg:hidden fixed inset-0 bg-black/30 z-40" onClick={() => setOpen(false)} />}

      {/* Sidebar */}
      <aside className={`fixed top-0 bottom-0 w-60 bg-white border-r border-gray-200 flex flex-col z-50 transition-transform duration-200 ${
        open ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:left-0`}>
        <div className="h-[60px] flex items-center justify-center px-3 border-b border-gray-100">
          <img src={import.meta.env.BASE_URL + 'logo.png'} alt="Domo" className="w-44 object-contain" />
        </div>
        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              <l.icon size={18} />
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="px-6 py-4 border-t border-gray-100 text-xs text-gray-400">
          Domo v1.0
        </div>
      </aside>
    </>
  )
}
