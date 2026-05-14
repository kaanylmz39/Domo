import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar'
import { useStore } from './store'
import Cockpit from './pages/Cockpit'
import Portfolio from './pages/Portfolio'
import PropertyDetail from './pages/PropertyDetail'
import RentControl from './pages/RentControl'
import AIInbox from './pages/AIInbox'
import Reports from './pages/Reports'
import Settings from './pages/Settings'

export default function App() {
  const store = useStore()

  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="ml-60 p-8">
        <Routes>
          <Route path="/" element={<Cockpit store={store} />} />
          <Route path="/portfolio" element={<Portfolio store={store} />} />
          <Route path="/property/:id" element={<PropertyDetail store={store} />} />
          <Route path="/rent-control" element={<RentControl store={store} />} />
          <Route path="/ai-inbox" element={<AIInbox store={store} />} />
          <Route path="/reports" element={<Reports store={store} />} />
          <Route path="/settings" element={<Settings store={store} />} />
        </Routes>
      </main>
    </div>
  )
}
