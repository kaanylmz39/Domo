import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard, Building2, Receipt, Inbox,
  BarChart3, Settings,
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
  return (
    <aside className="fixed left-0 top-0 bottom-0 w-60 bg-white border-r border-gray-200 flex flex-col z-40">
      <div className="h-16 flex items-center px-6 border-b border-gray-100">
        <span className="text-xl font-bold tracking-tight text-brand-700">Domo</span>
        <span className="ml-1.5 text-[10px] font-medium text-gray-400 uppercase tracking-widest mt-1">cockpit</span>
      </div>
      <nav className="flex-1 py-4 px-3 space-y-1">
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
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
  )
}
