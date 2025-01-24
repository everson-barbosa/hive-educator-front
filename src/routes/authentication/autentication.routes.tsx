import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthenticationLayout } from '@/layouts/authentication/authentication.layout';

const LoginPage = lazy(() => import('@/pages/authentication/login/login.page'))
const ForgetPasswordPage = lazy(() => import('@/pages/authentication/forget-password/forget-password.page'))
const RedirectWithToken = lazy(() => import('@/pages/authentication/redirect-with-token/redirect-with-token.page'))

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