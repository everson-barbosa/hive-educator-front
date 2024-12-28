
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/theme/theme.context"
import { AuthenticationProvider } from "./contexts/authentication/authentication.context"
import { Router } from "./routes/router";
import { Toaster } from "./components/ui/toaster/toaster.component";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./libs/query-client/query-client.utils";

function App() {

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark">
          <AuthenticationProvider>
            <Router />
            <Toaster />
          </AuthenticationProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
