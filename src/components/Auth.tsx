import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import './Auth.css'

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null)

  const { signIn, signUp } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    const trimmedEmail = email.trim()
    const trimmedPassword = password.trim()

    if (!trimmedEmail || !trimmedPassword) {
      setMessage({ type: 'error', text: 'Email and password are required' })
      setLoading(false)
      return
    }

    try {
      if (isLogin) {
        const { error } = await signIn(trimmedEmail, trimmedPassword)
        if (error) {
          setMessage({ type: 'error', text: error.message })
        } else {
          setMessage({ type: 'success', text: 'Successfully logged in!' })
        }
      } else {
        const { error } = await signUp(trimmedEmail, trimmedPassword)
        if (error) {
          setMessage({ type: 'error', text: error.message })
        } else {
          setMessage({
            type: 'success',
            text: 'Account created! Check your email for confirmation.'
          })
        }
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: error instanceof Error ? error.message : 'An error occurred'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
        <p className="auth-subtitle">
          {isLogin ? 'Sign in to your account' : 'Sign up for a new account'}
        </p>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              minLength={6}
            />
          </div>

          {message && (
            <div className={`message ${message.type}`}>
              {message.text}
            </div>
          )}

          <button type="submit" disabled={loading} className="submit-button">
            {loading ? 'Loading...' : isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="auth-toggle">
          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin)
              setMessage(null)
            }}
            className="toggle-button"
            disabled={loading}
          >
            {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
          </button>
        </div>
      </div>
    </div>
  )
}
