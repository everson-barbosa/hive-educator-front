import { checkIfTokenIsExpired } from "@/utils/token/check-if-token-is-expired"
import { getPayloadFromToken } from "@/utils/token/get-payload-from-token"
import { getStoragedToken } from "@/utils/token/get-storaged-token"
import { UserPayloadSchema, userPayloadSchema } from "../../schemas/user-payload/user-payload.schema"

export function UserInitializer() {
  const token = getStoragedToken()

  if (!token) return null

  const isTokenExpired = checkIfTokenIsExpired(token)

  if (isTokenExpired) return null  

  const payload = getPayloadFromToken<UserPayloadSchema>(token, userPayloadSchema)

  return payload
}