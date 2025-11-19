import { AuthProvider, useAuth } from './context/AuthContext'
import Auth from './components/Auth'
import Dashboard from './components/Dashboard'
import './App.css'

function AppContent() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="loading-container" aria-busy="true">
        <div className="spinner" role="status" aria-label="Loading"></div>
        <p>Loading...</p>
      </div>
    )
  }

  return user ? <Dashboard /> : <Auth />
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
