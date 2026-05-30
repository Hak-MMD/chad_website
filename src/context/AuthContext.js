import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import api, { setToken, setRefreshCallback } from '../api/axios'

const AuthContext = createContext(null)

function decodeJwt(token) {
  try {
    return JSON.parse(atob(token.split('.')[1]))
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [accessToken, setAccessToken] = useState(null)
  const [loading, setLoading] = useState(true)

  const refresh = useCallback(async () => {
    try {
      const res = await api.post('/api/v2/auth/refresh')
      const token = res.data.accessToken
      const payload = decodeJwt(token)
      setAccessToken(token)
      setToken(token)
      setUser({ id: payload.id, email: payload.email, plan: payload.plan, role: payload.role })
      return token
    } catch {
      setAccessToken(null)
      setToken(null)
      setUser(null)
      return null
    }
  }, [])

  useEffect(() => {
    setRefreshCallback(refresh)
    refresh().finally(() => setLoading(false))
  }, [refresh])

  const login = useCallback((userData, token) => {
    setUser(userData)
    setAccessToken(token)
    setToken(token)
  }, [])

  const logout = useCallback(async () => {
    try {
      await api.post('/api/v2/auth/logout')
    } catch {}
    setUser(null)
    setAccessToken(null)
    setToken(null)
  }, [])

  return (
    <AuthContext.Provider value={{ user, accessToken, loading, login, logout, refresh }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
