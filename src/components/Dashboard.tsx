import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import './Dashboard.css'

export default function Dashboard() {
  const { user, signOut } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSignOut = async () => {
    setLoading(true)
    setError(null)
    const { error: signOutError } = await signOut()
    if (signOutError) {
      setError(signOutError.message)
      setLoading(false)
    }
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1>Welcome!</h1>
        <p className="user-email">You are logged in as: <strong>{user?.email}</strong></p>

        <div className="user-info">
          <h2>User Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">User ID:</span>
              <span className="info-value">{user?.id}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">{user?.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Created At:</span>
              <span className="info-value">
                {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">Last Sign In:</span>
              <span className="info-value">
                {user?.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString() : 'N/A'}
              </span>
            </div>
          </div>
        </div>

        {error && (
          <div className="error-message" style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: '#ff4444', color: 'white', borderRadius: '6px' }}>
            {error}
          </div>
        )}

        <button onClick={handleSignOut} className="signout-button" disabled={loading} type="button">
          {loading ? 'Signing Out...' : 'Sign Out'}
        </button>
      </div>
    </div>
  )
}
