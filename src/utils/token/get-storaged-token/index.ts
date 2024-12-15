import { SIGN_IN_TOKEN_LOCALSTORE_KEY } from "../../../config/localstorage/localstorage.config";

export function getStoragedToken() {
  return localStorage.getItem(SIGN_IN_TOKEN_LOCALSTORE_KEY)
}