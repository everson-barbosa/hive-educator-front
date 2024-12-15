import { Outlet } from "react-router-dom";

export function AuthenticationLayout() {
  return (
    <div>
      <h2>Authentication Layout</h2>
      <Outlet />
    </div>
  )
}