import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import InfoPage from "./pages/info";
import LocationPage from "./pages/locationPage";

function App() {
  return (
    <BrowserRouter>
      <div className="font-display">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/home/:quizId" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
              <Route path="/locations" element={<InfoPage />} />
          <Route path="/locations/:locationid" element={<LocationPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
