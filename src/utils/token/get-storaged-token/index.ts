import { SIGN_IN_TOKEN_STORAGE_KEY } from "../../../config/storage/storage.config";

export function getStoragedToken() {
  return sessionStorage.getItem(SIGN_IN_TOKEN_STORAGE_KEY)
}