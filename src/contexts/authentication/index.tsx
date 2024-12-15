import { SIGN_IN_TOKEN_LOCALSTORE_KEY } from "../../config/localstorage/localstorage.config"
import { createContext, ReactNode, useContext, useState } from "react"
import { checkIfTokenIsExpired } from "../../utils/token/check-if-token-is-expired"
import { getStoragedToken } from "../../utils/token/get-storaged-token"

interface AuthenticationContextProps {
  readonly isAuthenticated: boolean
  readonly signIn: (token: string) => void
  readonly signOut: () => void 
}

export const AuthenticationContext = createContext({} as AuthenticationContextProps)

interface AuthenticationProviderProps {
  readonly children: ReactNode
}

export function AuthenticationProvider({ children }: AuthenticationProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = getStoragedToken()

    return token ? checkIfTokenIsExpired(token) : false
  })

  const signIn = (token: string) => {
    localStorage.setItem(SIGN_IN_TOKEN_LOCALSTORE_KEY, token)
    setIsAuthenticated(true)
  }

  const signOut = () => {
    localStorage.removeItem(SIGN_IN_TOKEN_LOCALSTORE_KEY)
    setIsAuthenticated(false)
  }

  const contextValue: AuthenticationContextProps = {
    isAuthenticated,
    signIn,
    signOut
  }

  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  )
}

export const useAuthentication = () => useContext(AuthenticationContext)