import { type CSSProperties, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { clearSession } from '../auth'

const shell: CSSProperties = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  background: 'linear-gradient(165deg, #1d3557 0%, #457b9d 42%, #a8dadc 42%, #f1faee 100%)',
}

const header: CSSProperties = {
  padding: '1.25rem clamp(1rem, 4vw, 2rem)',
  color: '#f1faee',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1rem',
  flexWrap: 'wrap',
}

const brandRow: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
}

const logoMark: CSSProperties = {
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: '12px',
  background: 'linear-gradient(135deg, #e63946 0%, #f77f00 100%)',
  display: 'grid',
  placeItems: 'center',
  fontSize: '1.1rem',
  fontWeight: 800,
  color: '#fff',
  boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
}

const badge: CSSProperties = {
  display: 'inline-block',
  fontSize: '0.7rem',
  fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  background: 'rgba(241,250,238,0.18)',
  color: '#f1faee',
  padding: '0.25rem 0.55rem',
  borderRadius: '999px',
  border: '1px solid rgba(241,250,238,0.35)',
}

const navGhost: CSSProperties = {
  display: 'flex',
  gap: '0.35rem',
  flexWrap: 'wrap',
}

const navPill: CSSProperties = {
  border: '1px solid rgba(241,250,238,0.25)',
  background: 'rgba(255,255,255,0.06)',
  color: 'rgba(241,250,238,0.92)',
  borderRadius: '999px',
  padding: '0.35rem 0.85rem',
  fontSize: '0.82rem',
  cursor: 'default',
}

const headerActions: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
}

const logoutBtn: CSSProperties = {
  border: '1px solid rgba(241,250,238,0.55)',
  background: 'rgba(255,255,255,0.1)',
  color: '#f1faee',
  borderRadius: '10px',
  padding: '0.5rem 1rem',
  cursor: 'pointer',
  fontSize: '0.9rem',
  fontWeight: 600,
}

const wrap: CSSProperties = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  padding: '0 1rem 2.5rem',
}

const container: CSSProperties = {
  width: '100%',
  maxWidth: '1080px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
}

const hero: CSSProperties = {
  background: '#fff',
  borderRadius: '20px',
  padding: 'clamp(1.25rem, 3vw, 2rem)',
  boxShadow: '0 20px 50px rgba(29,53,87,0.14)',
  border: '1px solid rgba(29,53,87,0.06)',
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: '1fr',
}

const heroTop: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '1rem',
}

const pillDate: CSSProperties = {
  fontSize: '0.8rem',
  fontWeight: 600,
  color: '#457b9d',
  background: 'rgba(69,123,157,0.12)',
  padding: '0.35rem 0.75rem',
  borderRadius: '999px',
}

const statsGrid: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
  gap: '0.85rem',
}

const statCard: CSSProperties = {
  borderRadius: '14px',
  padding: '1rem 1.1rem',
  border: '1px solid #e8ecf4',
  background: 'linear-gradient(180deg, #fff 0%, #f8fafc 100%)',
}

const statLabel: CSSProperties = {
  fontSize: '0.78rem',
  fontWeight: 600,
  color: '#7a8499',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
  marginBottom: '0.35rem',
}

const statValue: CSSProperties = {
  fontSize: '1.65rem',
  fontWeight: 800,
  color: '#1d3557',
  letterSpacing: '-0.02em',
}

const statHint: CSSProperties = {
  fontSize: '0.8rem',
  color: '#5c6478',
  marginTop: '0.35rem',
}

const bodyGrid: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '1.25rem',
  alignItems: 'start',
}

const card: CSSProperties = {
  background: '#fff',
  borderRadius: '18px',
  padding: '1.5rem',
  boxShadow: '0 16px 40px rgba(29,53,87,0.1)',
  border: '1px solid rgba(29,53,87,0.06)',
}

const sectionTitle: CSSProperties = {
  margin: '0 0 0.35rem',
  fontSize: '1.05rem',
  fontWeight: 700,
  color: '#1d3557',
}

const sectionSub: CSSProperties = {
  margin: '0 0 1.1rem',
  fontSize: '0.9rem',
  color: '#5c6478',
  lineHeight: 1.55,
}

const actionsGrid: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '0.65rem',
}

const actionBtn: CSSProperties = {
  border: '1px solid #dce2ef',
  background: '#fff',
  borderRadius: '12px',
  padding: '0.85rem 0.75rem',
  textAlign: 'left',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
}

const actionIcon: CSSProperties = {
  fontSize: '1.25rem',
  lineHeight: 1,
}

const actionLabel: CSSProperties = {
  fontSize: '0.88rem',
  fontWeight: 700,
  color: '#14213d',
}

const actionMeta: CSSProperties = {
  fontSize: '0.75rem',
  color: '#7a8499',
}

const checklist: CSSProperties = {
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.65rem',
}

const checkItem: CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.65rem',
  fontSize: '0.9rem',
  color: '#14213d',
  lineHeight: 1.45,
}

const checkDot: CSSProperties = {
  width: '1.35rem',
  height: '1.35rem',
  borderRadius: '8px',
  background: 'linear-gradient(135deg, #2a9d8f, #457b9d)',
  flexShrink: 0,
  marginTop: '0.1rem',
  display: 'grid',
  placeItems: 'center',
  color: '#fff',
  fontSize: '0.65rem',
  fontWeight: 800,
}

const codeBox: CSSProperties = {
  marginTop: '1rem',
  borderRadius: '12px',
  background: '#1d3557',
  color: '#e2e8f0',
  padding: '0.85rem 1rem',
  fontSize: '0.78rem',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  lineHeight: 1.5,
  overflow: 'auto',
  border: '1px solid rgba(255,255,255,0.08)',
}

const tilesRow: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '0.85rem',
}

const tile: CSSProperties = {
  borderRadius: '14px',
  padding: '1.1rem',
  color: '#fff',
  minHeight: '112px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  gap: '0.25rem',
  border: '1px solid rgba(255,255,255,0.12)',
}

const tileTitle: CSSProperties = {
  fontSize: '0.95rem',
  fontWeight: 700,
  margin: 0,
}

const tileText: CSSProperties = {
  margin: 0,
  fontSize: '0.8rem',
  opacity: 0.92,
  lineHeight: 1.45,
}

const footerBar: CSSProperties = {
  textAlign: 'center',
  fontSize: '0.78rem',
  color: '#5c6478',
  padding: '0.25rem 0 0',
}

function greeting(): string {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 18) return 'Good afternoon'
  return 'Good evening'
}

function formatToday(): string {
  return new Intl.DateTimeFormat('en', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(new Date())
}

export default function Main() {
  const navigate = useNavigate()
  const hello = useMemo(() => greeting(), [])
  const today = useMemo(() => formatToday(), [])

  function logout() {
    clearSession()
    navigate('/', { replace: true })
  }

  return (
    <div style={shell}>
      <header style={header}>
        <div style={brandRow}>
          <div style={logoMark} aria-hidden>
            L
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
                Dashboard
              </span>
              <span style={badge}>Signed in</span>
            </div>
            <p style={{ margin: '0.35rem 0 0', fontSize: '0.88rem', opacity: 0.88 }}>
              Workspace overview & quick links
            </p>
          </div>
        </div>
        <div style={headerActions}>
          <nav style={navGhost} aria-label="Sample navigation">
            <span style={navPill}>Overview</span>
            <span style={navPill}>Projects</span>
            <span style={navPill}>Reports</span>
          </nav>
          <button type="button" style={logoutBtn} onClick={logout}>
            Sign out
          </button>
        </div>
      </header>

      <div style={wrap}>
        <div style={container}>
          <section style={hero}>
            <div style={heroTop}>
              <div>
                <span style={pillDate}>{today}</span>
                <h1 style={{ margin: '0.65rem 0 0', fontSize: 'clamp(1.45rem, 3vw, 1.85rem)', color: '#1d3557' }}>
                  {hello} — welcome back
                </h1>
                <p style={{ margin: '0.5rem 0 0', color: '#5c6478', maxWidth: '36rem', lineHeight: 1.65 }}>
                  Here’s a richer layout you can extend with real data. Cards below are decorative samples;
                  wire them to your API when you’re ready.
                </p>
              </div>
            </div>

            <div style={statsGrid}>
              <div className="main-dashboard-stat" style={statCard}>
                <div style={statLabel}>Open tasks</div>
                <div style={statValue}>12</div>
                <div style={statHint}>3 due this week</div>
              </div>
              <div className="main-dashboard-stat" style={statCard}>
                <div style={statLabel}>Projects</div>
                <div style={statValue}>5</div>
                <div style={statHint}>2 in active sprint</div>
              </div>
              <div className="main-dashboard-stat" style={statCard}>
                <div style={statLabel}>Team</div>
                <div style={statValue}>8</div>
                <div style={statHint}>Everyone synced</div>
              </div>
              <div className="main-dashboard-stat" style={statCard}>
                <div style={statLabel}>Uptime</div>
                <div style={statValue}>99.9%</div>
                <div style={statHint}>Last 30 days</div>
              </div>
            </div>
          </section>

          <div style={bodyGrid}>
            <section style={card}>
              <h2 style={sectionTitle}>Quick actions</h2>
              <p style={sectionSub}>Starter buttons — swap handlers for real routes or modals.</p>
              <div style={actionsGrid}>
                <button type="button" className="main-dashboard-action" style={actionBtn}>
                  <span style={actionIcon} aria-hidden>
                    ✦
                  </span>
                  <span style={actionLabel}>New project</span>
                  <span style={actionMeta}>Kick off a workspace</span>
                </button>
                <button type="button" className="main-dashboard-action" style={actionBtn}>
                  <span style={actionIcon} aria-hidden>
                    ◎
                  </span>
                  <span style={actionLabel}>Invite people</span>
                  <span style={actionMeta}>Share access securely</span>
                </button>
                <button type="button" className="main-dashboard-action" style={actionBtn}>
                  <span style={actionIcon} aria-hidden>
                    ≡
                  </span>
                  <span style={actionLabel}>View reports</span>
                  <span style={actionMeta}>Charts & exports</span>
                </button>
                <button type="button" className="main-dashboard-action" style={actionBtn}>
                  <span style={actionIcon} aria-hidden>
                    ⚙
                  </span>
                  <span style={actionLabel}>Settings</span>
                  <span style={actionMeta}>Profile & security</span>
                </button>
              </div>
            </section>

            <section style={card}>
              <h2 style={sectionTitle}>Session & API</h2>
              <p style={sectionSub}>
                Your login state lives in this tab only — close it and you’ll need to sign in again.
              </p>
              <ul style={checklist}>
                <li style={checkItem}>
                  <span style={checkDot}>✓</span>
                  <span>Session stored in browser session storage for this demo.</span>
                </li>
                <li style={checkItem}>
                  <span style={checkDot}>✓</span>
                  <span>Replace checklist items with onboarding steps for your product.</span>
                </li>
                <li style={checkItem}>
                  <span style={checkDot}>✓</span>
                  <span>Hook stat cards to your backend or analytics service.</span>
                </li>
              </ul>
              <div style={codeBox}>
                POST /login
                <br />
                {`{ "username": "…", "password": "…" }`}
              </div>
            </section>
          </div>

          <div style={tilesRow}>
            <div
              className="main-dashboard-tile"
              style={{
                ...tile,
                background: 'linear-gradient(145deg, #1d3557 0%, #457b9d 100%)',
              }}
            >
              <p style={tileTitle}>Roadmap</p>
              <p style={tileText}>Plan milestones and share timelines with stakeholders.</p>
            </div>
            <div
              className="main-dashboard-tile"
              style={{
                ...tile,
                background: 'linear-gradient(145deg, #e63946 0%, #f4a261 100%)',
              }}
            >
              <p style={tileTitle}>Alerts</p>
              <p style={tileText}>Surface anomalies, failed jobs, or SLA breaches in one place.</p>
            </div>
            <div
              className="main-dashboard-tile"
              style={{
                ...tile,
                background: 'linear-gradient(145deg, #2a9d8f 0%, #264653 100%)',
              }}
            >
              <p style={tileTitle}>Docs</p>
              <p style={tileText}>Link internal wikis, runbooks, and API references for the team.</p>
            </div>
          </div>

          <p style={footerBar}>Login demo · Built with React · Customize this shell for your app</p>
        </div>
      </div>
    </div>
  )
}
