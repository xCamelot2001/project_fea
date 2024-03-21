// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import CameraControl from "./CameraControl";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/app" element={<Home />} /> Assuming you have a Home component  */}
        <Route path="/app" element={<CameraControl />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
