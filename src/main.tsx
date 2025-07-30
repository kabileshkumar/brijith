import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { SearchProvider } from "./context/SearchContext";
import { ThemeProvider } from "./components/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark">
    <SearchProvider>
      <App />
    </SearchProvider>
  </ThemeProvider>
);
