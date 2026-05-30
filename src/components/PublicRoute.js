import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function PublicRoute({ children }) {
  const { user, loading } = useAuth()

  if (import.meta.env.VITE_BYPASS_AUTH === 'true') return children
  if (loading) return null
  if (user) return <Navigate to="/dashboard" replace />

  return children
}

export default PublicRoute
