import { SIGN_IN_TOKEN_STORAGE_KEY } from "../../config/storage/storage.config"
import { createContext, ReactNode, useContext, useState } from "react"
import { signInWithEmailService } from "../../services/authentication/sign-in-with-email/sign-in-with-email.service"
import { useNavigate } from "react-router-dom"
import { IsAuthenticathedInitializer } from "./initializers/is-authenticated/is-authenticated.initializer"
import { UserInitializer } from "./initializers/user/user.initializer"
import { UserPayloadSchema } from "./schemas/user-payload/user-payload.schema"


interface SignInEmailAndPasswordProps {
  readonly email: string
  readonly password: string
}

interface AuthenticationContextProps {
  readonly user: UserPayloadSchema | null
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
  const [isAuthenticated, setIsAuthenticated] = useState(IsAuthenticathedInitializer())
  const [user, setUser] = useState<UserPayloadSchema | null>(UserInitializer)
  const navigate = useNavigate()

  const signInByEmailAndPassword = async ({ email, password }: SignInEmailAndPasswordProps) => {
    try {
      const { data } = await signInWithEmailService({ email, password })

      sessionStorage.setItem(SIGN_IN_TOKEN_STORAGE_KEY, data.access_token)
      
      navigate('/')
      setUser(UserInitializer())
    } catch (error) {
      console.error('Error on try sign in with email and password', error)
    }
    setIsAuthenticated(true)
  }

  const signOut = () => {
    sessionStorage.removeItem(SIGN_IN_TOKEN_STORAGE_KEY)
    setIsAuthenticated(false)
    setUser(null)
    navigate('/login')
  }

  const contextValue: AuthenticationContextProps = {
    user,
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