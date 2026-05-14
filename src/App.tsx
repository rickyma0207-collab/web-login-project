import type { ReactNode } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { isLoggedIn } from './auth'
import Login from './pages/Login'
import Main from './pages/Main'

function RequireAuth({ children }: { children: ReactNode }) {
  if (!isLoggedIn()) {
    return <Navigate to="/" replace />
  }
  return children
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/main"
        element={
          <RequireAuth>
            <Main />
          </RequireAuth>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
