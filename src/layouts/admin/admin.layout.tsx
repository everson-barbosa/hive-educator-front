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

      <SidebarInset className="px-4">
        <Header />
        <div className="mt-4 px-4 max-w-7xl w-full mx-auto">
          <Outlet />
        </div>
      </SidebarInset>
      </AuthGuard>
    </SidebarProvider>
  )
}