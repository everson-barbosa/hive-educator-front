import { LoginPage } from '../../pages/authentication/login/login.page';
import { ForgetPasswordPage } from '../../pages/authentication/forget-password/forget-password.page';
import { RedirectWithToken } from '../../pages/authentication/redirect-with-token/redirect-with-token.page';
import { Route, Routes } from 'react-router-dom';
import { AuthenticationLayout } from '../../layouts/authentication/authentication.layout';

export function AuthenticationRoutes() {
  return (
    <Routes>
      <Route Component={AuthenticationLayout}>
        <Route path='/login' Component={LoginPage} />
        <Route path='/forget-password' Component={ForgetPasswordPage} />
        <Route path='/redirect-with-token' Component={RedirectWithToken} />
      </Route>
    </Routes>
  )
}