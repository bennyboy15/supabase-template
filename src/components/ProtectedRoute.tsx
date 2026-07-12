import { Navigate, Outlet } from 'react-router-dom'
import { useSession } from '../contexts/session.context'

function ProtectedRoute() {
  const { session, isLoading } = useSession()

  if (isLoading) {
    return null
  }

  if (!session) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default ProtectedRoute
