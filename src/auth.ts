const KEY = 'login-demo-session'

export function markLoggedIn(payload: unknown): void {
  try {
    sessionStorage.setItem(KEY, JSON.stringify({ at: Date.now(), payload }))
  } catch {
    sessionStorage.setItem(KEY, '{"at":0}')
  }
}

export function clearSession(): void {
  sessionStorage.removeItem(KEY)
}

export function isLoggedIn(): boolean {
  return sessionStorage.getItem(KEY) != null
}
