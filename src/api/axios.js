import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // required for httpOnly refresh token cookie
})

let _token = null
let _onRefresh = null
let _isRefreshing = false
let _queue = []

function flushQueue(error, token = null) {
  _queue.forEach(({ resolve, reject }) => (error ? reject(error) : resolve(token)))
  _queue = []
}

export function setToken(token) {
  _token = token
}

export function setRefreshCallback(fn) {
  _onRefresh = fn
}

api.interceptors.request.use((config) => {
  if (_token) config.headers.Authorization = `Bearer ${_token}`
  return config
})

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config
    if (error.response?.status === 401 && !original._retry) {
      if (_isRefreshing) {
        return new Promise((resolve, reject) => {
          _queue.push({ resolve, reject })
        }).then((token) => {
          original.headers.Authorization = `Bearer ${token}`
          return api(original)
        })
      }
      original._retry = true
      _isRefreshing = true
      try {
        const newToken = await _onRefresh?.()
        if (newToken) {
          flushQueue(null, newToken)
          original.headers.Authorization = `Bearer ${newToken}`
          return api(original)
        }
        flushQueue(new Error('Session expired'))
        return Promise.reject(error)
      } catch (e) {
        flushQueue(e)
        return Promise.reject(e)
      } finally {
        _isRefreshing = false
      }
    }
    return Promise.reject(error)
  }
)

export default api
