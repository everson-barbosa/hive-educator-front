import { SidebarInset, SidebarProvider } from "../../components/ui/sidebar/sidebar.component";
import { useAuthentication } from "../../contexts/authentication/authentication.context";
import { AuthGuard } from "../../utils/guards/auth-guard";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AsideMenu } from "./components/aside-menu/aside-menu.component";
import { Header } from "./components/header/header.component";

export function AdminLayout() {
  const { isAuthenticated } = useAuthentication()

  useEffect(() => {
    if (!isAuthenticated) {
      console.log('Redirect to login')
    }
  }, [isAuthenticated])

  return (
    <SidebarProvider>
      <AuthGuard>
      <AsideMenu />

      <SidebarInset>
        <Header />
        <main className="px-4">
          <Outlet />
        </main>
      </SidebarInset>
      </AuthGuard>
    </SidebarProvider>
  )
}