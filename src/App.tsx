import { Outlet } from "react-router-dom";
import ThemeProviders from "./providers/ThemeProviders";
import ThemeWrapper from "./providers/ThemeWrapper";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

export default function AppLayout() {
  return (
    <div className="main">
      <ThemeProviders>
          <ThemeWrapper>
            <Navbar />
            <Outlet />
            <Footer />
          </ThemeWrapper>
      </ThemeProviders>
    </div>
  );
}