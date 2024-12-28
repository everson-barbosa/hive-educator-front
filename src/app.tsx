
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/theme/theme.context"
import { AuthenticationProvider } from "./contexts/authentication/authentication.context"
import { Router } from "./routes/router";
import { Toaster } from "./components/ui/toaster/toaster.component";

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <AuthenticationProvider>
          <Router />
          <Toaster />
        </AuthenticationProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
