import { BrowserRouter } from "react-router-dom"
import { Router } from "./routes/router"
import { ThemeProvider } from "./contexts/theme"
import { AuthenticationProvider } from "./contexts/authentication"

function App() {

  return (
    <ThemeProvider defaultTheme="dark">
      <AuthenticationProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthenticationProvider>
    </ThemeProvider>
  )
}

export default App
