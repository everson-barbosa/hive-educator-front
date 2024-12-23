import { AuthenticationRoutes } from "./authentication/autentication.routes";
import { PrivateRoutes } from "./private/private.routes";

export function Router() {
  return (
    <>
      <AuthenticationRoutes />
      <PrivateRoutes />
    </>
  )
}