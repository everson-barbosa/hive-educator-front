import axios from "axios";
import { AUTHENTICATION_API_CONFIG } from "../../../config/api/authentication-api.config";

interface SignInWithEmailServiceProps {
  readonly email: string
  readonly password: string
}

export interface SignInWithEmailServiceResponse {
  readonly access_token: string
}

export function signInWithEmailService({ email, password }: SignInWithEmailServiceProps) {
  return axios.post<SignInWithEmailServiceResponse>(AUTHENTICATION_API_CONFIG.signInByEmailAndPassword, {
    email, 
    password
  })
}