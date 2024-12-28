import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card/card.component";
import { Outlet, useLocation } from "react-router-dom";

type Pathname = '/login' | '/forget-password'

interface Header {
  readonly title: string
  readonly description: string
}

const HEADER_MAPPER: Record<Pathname, Header> = {
  '/login': {
    title: 'Login',
    description: 'Enter your email below to login to your account'
  },
  '/forget-password': {
    title: 'Forgot password',
    description: '...'
  }
};

export function AuthenticationLayout() {
  const { pathname } = useLocation()

  const { title, description } = HEADER_MAPPER[pathname as Pathname]

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{title}</CardTitle>
              <CardDescription>
                {description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Outlet />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}