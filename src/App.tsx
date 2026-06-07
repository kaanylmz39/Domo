import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar'
import { useStore } from './store'
import Landing from './pages/Landing'
import About from './pages/About'
import Blog from './pages/Blog'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Press from './pages/Press'
import Cockpit from './pages/Cockpit'
import Portfolio from './pages/Portfolio'
import PropertyDetail from './pages/PropertyDetail'
import RentControl from './pages/RentControl'
import AIInbox from './pages/AIInbox'
import Reports from './pages/Reports'
import Settings from './pages/Settings'

function DashboardLayout({ store }: { store: ReturnType<typeof useStore> }) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="pt-16 px-4 pb-8 lg:pt-8 lg:pl-68 lg:pr-8 lg:ml-60">
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

export default function App() {
  const store = useStore()

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/press" element={<Press />} />
      <Route path="/app/*" element={<DashboardLayout store={store} />} />
    </Routes>
  )
}
