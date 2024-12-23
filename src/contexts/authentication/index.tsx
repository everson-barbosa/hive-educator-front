import { SIGN_IN_TOKEN_STORAGE_KEY } from "../../config/storage/storage.config"
import { createContext, ReactNode, useContext, useState } from "react"
import { checkIfTokenIsExpired } from "../../utils/token/check-if-token-is-expired"
import { getStoragedToken } from "../../utils/token/get-storaged-token"
import { signInWithEmailService } from "../../services/authentication/sign-in-with-email/sign-in-with-email.service"
import { useNavigate } from "react-router-dom"

interface SignInEmailAndPasswordProps {
  readonly email: string
  readonly password: string
}

interface AuthenticationContextProps {
  readonly isAuthenticated: boolean
  readonly signIn: {
    readonly withEmailAndPassword: (props: SignInEmailAndPasswordProps) => void
  }
  readonly signOut: () => void 
}

export const AuthenticationContext = createContext({} as AuthenticationContextProps)

interface AuthenticationProviderProps {
  readonly children: ReactNode
}

export function AuthenticationProvider({ children }: AuthenticationProviderProps) {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = getStoragedToken()

    return token ? checkIfTokenIsExpired(token) : false
  })

  const signInByEmailAndPassword = async ({ email, password }: SignInEmailAndPasswordProps) => {
    try {
      const { data } = await signInWithEmailService({ email, password })

      sessionStorage.setItem(SIGN_IN_TOKEN_STORAGE_KEY, data.access_token)
      
      navigate('/')
    } catch (error) {
      console.error('Error on try sign in with email and password', error)
    }
    setIsAuthenticated(true)
  }

  const signOut = () => {
    console.log('signOut')

    sessionStorage.removeItem(SIGN_IN_TOKEN_STORAGE_KEY)
    setIsAuthenticated(false)
    navigate('/login')
  }

  const contextValue: AuthenticationContextProps = {
    isAuthenticated,
    signIn: {
      withEmailAndPassword: signInByEmailAndPassword
    },
    signOut
  }

  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  )
}

export const useAuthentication = () => useContext(AuthenticationContext)