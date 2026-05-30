import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function decodeJwt(token) {
  try {
    return JSON.parse(atob(token.split('.')[1]))
  } catch {
    return null
  }
}

function OAuthSuccess() {
  const navigate = useNavigate()
  const { login } = useAuth()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('token')

    if (!token) {
      navigate('/signin', { replace: true })
      return
    }

    const payload = decodeJwt(token)
    if (!payload) {
      navigate('/signin', { replace: true })
      return
    }

    login({ id: payload.id, email: payload.email, plan: payload.plan, role: payload.role }, token)
    navigate('/dashboard', { replace: true })
  }, [])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      Signing you in...
    </div>
  )
}

export default OAuthSuccess
