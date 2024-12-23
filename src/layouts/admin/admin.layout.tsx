import { useAuthentication } from "../../contexts/authentication";
import { AuthGuard } from "../../utils/guards/auth-guard";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

export function AdminLayout() {
  const { isAuthenticated, signOut } = useAuthentication()

  useEffect(() => {
    if (!isAuthenticated) {
      console.log('Redirect to login')
    }
  }, [isAuthenticated])

  return (
    <AuthGuard>
      <header>
        <Link to="/">
          Home
        </Link>

        <div>
          <button type="button" onClick={signOut}>Logout</button>
        </div>
      </header>

      <aside>
        <ul>
          <li>
            <Link to='/exam-applications'>
              Exams
            </Link>
          </li>
        </ul>
      </aside>

      <main>
        <Outlet />
      </main>
    </AuthGuard>
  )
}