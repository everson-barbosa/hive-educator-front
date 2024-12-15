import { useAuthentication } from "../../contexts/authentication";
import { AuthGuard } from "../../utils/guards/auth-guard";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export function AdminLayout() {
  const { isAuthenticated } = useAuthentication()

  useEffect(() => {
    if (!isAuthenticated) {
      console.log('Redirect to login')
    }
  }, [isAuthenticated])

  return (
    <AuthGuard>
      <header>
        Header
      </header>

      <aside>
        Aside
      </aside>

      <main>
        <Outlet />
      </main>
    </AuthGuard>
  )
}