import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (import.meta.env.VITE_BYPASS_AUTH === 'true') return children

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        Loading...
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/signin" state={{ from: location.pathname }} replace />
  }

  return children
}

export default ProtectedRoute
