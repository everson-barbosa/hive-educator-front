import { ReactNode, useEffect } from "react";
import { useAuthentication } from "../../../contexts/authentication/authentication.context";
import { useNavigate } from "react-router-dom";

interface AuthGuardProps {
  readonly children: ReactNode
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated } = useAuthentication()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated, navigate])

  if (isAuthenticated) {
    return children
  }

  return null
}