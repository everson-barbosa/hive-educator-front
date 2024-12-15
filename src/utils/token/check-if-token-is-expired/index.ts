import { getTokenExpirationInMilliseconds } from "../get-token-expiration-in-milliseconds"

export function checkIfTokenIsExpired(token: string): boolean {
  const expiration = getTokenExpirationInMilliseconds(token)

  if (!expiration) {
    return true
  }

  return Date.now() > expiration
}