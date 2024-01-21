import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import Homepage from "./pages/homepage";
import Footer from "./Components/footer";
import Errorpage from "./pages/errorpage";
import About from "./pages/about";
import Admin from "./Components/admin";
export default function App() {
  const [active, setActive] = useState("home");

  return (
    <>
      <Router>
        <Navbar activeNav={active} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Homepage setActiveNav={setActive} />}
            errorElement={<Errorpage />}
          />
          <Route path="about-us" element={<About setActiveNav={setActive} />} />
          <Route path="/ggm/ministries/admins/2424" element={<Admin />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
