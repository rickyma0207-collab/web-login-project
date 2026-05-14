/** Backend origin in production; in dev Vite proxies — see vite.config.ts */
const REMOTE_ORIGIN = 'http://43.154.250.117:5010'

function loginUrl(): string {
  return import.meta.env.DEV ? '/login-api/login' : `${REMOTE_ORIGIN}/login`
}

export type LoginResult =
  | { ok: true; status: number; body: unknown }
  | { ok: false; message: string }

function readErrorMessage(payload: unknown, fallback: string): string {
  if (payload && typeof payload === 'object') {
    const o = payload as Record<string, unknown>
    const m = o.message ?? o.msg ?? o.error
    if (typeof m === 'string' && m.trim()) return m
  }
  return fallback
}

export async function loginRequest(username: string, password: string): Promise<LoginResult> {
  let res: Response
  try {
    res = await fetch(loginUrl(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
  } catch {
    return { ok: false, message: 'Network error. Check your connection and try again.' }
  }

  let body: unknown
  const text = await res.text()
  if (text) {
    try {
      body = JSON.parse(text) as unknown
    } catch {
      body = text
    }
  }

  if (!res.ok) {
    const msg =
      readErrorMessage(body, '') ||
      text ||
      `Sign-in failed (${res.status} ${res.statusText || 'error'})`
    return { ok: false, message: msg }
  }

  return { ok: true, status: res.status, body }
}
