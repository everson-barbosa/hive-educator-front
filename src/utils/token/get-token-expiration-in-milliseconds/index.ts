export function getTokenExpirationInMilliseconds(token: string): number | null {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    
    return payload.exp ? payload.exp * 1000 : null; 
  } catch {
    return null; 
  }
}
