import NavBar from "./components/Navbar";
import { ThemeProvider } from "./components/ui/theme-provider";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetails from "./components/CountryDetails";
import ScrollToTop from "./lib/scrollToTop";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route
            element={<CountryDetails />}
            path="/country-infos/CountryDetails"
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
