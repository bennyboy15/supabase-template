import { Navigate, Outlet } from 'react-router-dom'
import { useSession } from '../hooks/session.hooks'

function GuestRoute() {
  const { session, isLoading } = useSession()

  if (isLoading) {
    return null
  }

  if (session) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

export default GuestRoute
