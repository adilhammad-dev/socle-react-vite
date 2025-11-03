import './App.css'
import DashboardPage from 'pages/DashboardPage'
import ReportsPage from 'pages/ReportsPage'
import SalesPage from 'pages/SalesPage'
import { useState } from 'react'

function App() {
  const [page, setPage] = useState<'dashboard' | 'reports' | 'sales'>('dashboard')

  return (
    <div style={{ padding: 16, display: 'grid', gap: 16 }}>
      <nav style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => setPage('dashboard')}>Dashboard</button>
        <button onClick={() => setPage('reports')}>Reports</button>
        <button onClick={() => setPage('sales')}>Sales</button>
      </nav>
      {page === 'dashboard' && <DashboardPage />}
      {page === 'reports' && <ReportsPage />}
      {page === 'sales' && <SalesPage />}
    </div>
  )
}

export default App
