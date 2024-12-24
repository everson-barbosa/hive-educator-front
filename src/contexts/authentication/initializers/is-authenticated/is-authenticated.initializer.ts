import { checkIfTokenIsExpired } from "@/utils/token/check-if-token-is-expired"
import { getStoragedToken } from "@/utils/token/get-storaged-token"

export function IsAuthenticathedInitializer() {
  const token = getStoragedToken()

  if (!token) return false

  const isTokenExpired = checkIfTokenIsExpired(token)

  if (isTokenExpired) return false

  return true
}