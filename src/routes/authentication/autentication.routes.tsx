import { Route } from "react-router-dom";
import { LoginPage } from "../../pages/authentication/login/login.page";
import { ForgetPasswordPage } from "../../pages/authentication/forget-password/forget-password.page";
import { RedirectWithToken } from "../../pages/authentication/redirect-with-token/redirect-with-token.page";
import { AuthenticationLayout } from "../../layouts/authentication/authentication.layout";

export function AuthenticationRoutes() {
  return (
    <>
      <Route element={<AuthenticationLayout />}>
        <Route path="/login" Component={LoginPage}/>
        <Route path="/forgot-password" Component={ForgetPasswordPage} />
        <Route path="/redirect-with-token" Component={RedirectWithToken} />
      </Route>
    </>
  )
}