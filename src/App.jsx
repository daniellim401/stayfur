import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ChatPopup from "./components/ChatPopup.jsx";
import NoResults from "./pages/NoResultPage.jsx";
import FoundPage from "./pages/FoundPage.jsx";
import HotelPage from "./pages/HotelPage.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Router>
        {/* Navbar Component */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/no-results" element={<NoResults/>}/>
          <Route path="/found" element={<FoundPage/>}/>
          <Route path="/hotel" element={<HotelPage/>}/>  
        </Routes>
        <ChatPopup />
      </Router>
    </div>
  );
}

export default App;

