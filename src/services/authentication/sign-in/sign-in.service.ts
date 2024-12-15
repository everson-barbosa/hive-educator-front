import { AUTHENTICATION_API_CONFIG } from "../../../config/api/authentication.config";

interface SignServiceProps {
  readonly email: string
  readonly password: string
}

export function signInService({ email, password }: SignServiceProps) {
  return fetch(AUTHENTICATION_API_CONFIG.signIn, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })
}