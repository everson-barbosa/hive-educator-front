import { checkIfTokenIsExpired } from "../../../utils/token/check-if-token-is-expired";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function RedirectWithToken() {
  const location = useLocation()
  
  useEffect(() => {
    const urlSearchParams = new URLSearchParams(location.search)

    const token = urlSearchParams.get('token')
    
    const isTokenExpired = token ? checkIfTokenIsExpired(token) : false
    
    if (isTokenExpired) {
      // console.log('Redirect to login')
    } else {
      // console.log('Redirect to logged page')
    }
  }, [location.search])

  return (
    <div>
      Redirect with token
    </div>
  )
}

export default RedirectWithToken