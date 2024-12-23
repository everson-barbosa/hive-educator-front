
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/theme"
import { AuthenticationProvider } from "./contexts/authentication"
import { Router } from "./routes/router";

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <AuthenticationProvider>
          <Router />
        </AuthenticationProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
