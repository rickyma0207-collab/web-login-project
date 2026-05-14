import { type CSSProperties, type FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginRequest } from '../api/login'
import { markLoggedIn } from '../auth'

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
  },
  card: {
    width: '100%',
    maxWidth: '26rem',
    background: '#fff',
    borderRadius: '14px',
    padding: '2rem',
    boxShadow: '0 18px 50px rgba(20,33,61,0.12)',
    border: '1px solid #e6e9f2',
  },
  title: { margin: '0 0 0.25rem', fontSize: '1.5rem' },
  sub: { margin: '0 0 1.5rem', color: '#5c6478', fontSize: '0.95rem' },
  label: { display: 'block', marginBottom: '0.35rem', fontSize: '0.9rem', fontWeight: 600 },
  field: {
    width: '100%',
    padding: '0.65rem 0.75rem',
    borderRadius: '8px',
    border: '1px solid #ccd2e4',
    fontSize: '1rem',
    marginBottom: '0.85rem',
  },
  hint: { fontSize: '0.8rem', color: '#a63d40', margin: '-0.4rem 0 0.6rem', minHeight: '1rem' },
  btn: {
    width: '100%',
    padding: '0.75rem',
    marginTop: '0.25rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 600,
    background: '#1d3557',
    color: '#fff',
  },
  btnDisabled: { opacity: 0.65, cursor: 'not-allowed' },
  alert: {
    marginTop: '1rem',
    padding: '0.65rem 0.75rem',
    borderRadius: '8px',
    fontSize: '0.9rem',
    background: '#fde8ea',
    color: '#7f1d1d',
    border: '1px solid #f5c2c7',
  },
} satisfies Record<string, CSSProperties>

export default function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [userErr, setUserErr] = useState('')
  const [passErr, setPassErr] = useState('')
  const [formError, setFormError] = useState('')
  const [loading, setLoading] = useState(false)

  function validateFields(): boolean {
    let ok = true
    const u = username.trim()
    const p = password
    setUserErr('')
    setPassErr('')
    setFormError('')

    if (!u) {
      setUserErr('Please enter a username')
      ok = false
    }
    if (!p) {
      setPassErr('Please enter a password')
      ok = false
    }
    return ok
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validateFields()) return

    setLoading(true)
    setFormError('')
    const result = await loginRequest(username.trim(), password)
    setLoading(false)

    if (!result.ok) {
      setFormError(result.message)
      return
    }

    markLoggedIn(result.body)
    navigate('/main', { replace: true })
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Sign in</h1>
        <p style={styles.sub}>Sign in with your account to continue</p>
        <form onSubmit={onSubmit} noValidate>
          <label style={styles.label} htmlFor="username">
            Username
          </label>
          <input
            id="username"
            name="username"
            autoComplete="username"
            style={styles.field}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={loading}
          />
          <div style={styles.hint}>{userErr}</div>

          <label style={styles.label} htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            style={styles.field}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
          <div style={styles.hint}>{passErr}</div>

          <button
            type="submit"
            style={{ ...styles.btn, ...(loading ? styles.btnDisabled : {}) }}
            disabled={loading}
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
        {formError ? <div style={styles.alert}>{formError}</div> : null}
      </div>
    </div>
  )
}
