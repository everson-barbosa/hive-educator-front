import { ReactNode } from "react";
import { useAuthentication } from "../../../contexts/authentication";

interface AuthGuardProps {
  readonly children: ReactNode
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated } = useAuthentication()

  if (isAuthenticated) {
    return children
  }

  return null
}