import { Routes } from "react-router-dom";
import { AuthenticationRoutes } from "./authentication/autentication.routes";

export function Router() {
  return (
    <Routes>
      {AuthenticationRoutes()}

    </Routes>
  )
}