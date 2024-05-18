import NavBar from "./components/Navbar";
import { ThemeProvider } from "./components/ui/theme-provider";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetails from "./components/CountryDetails";
import ScrollToTop from "./lib/scrollToTop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <Router>
          <ScrollToTop />
          <NavBar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<CountryDetails />} path="/CountryDetails" />
          </Routes>
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
