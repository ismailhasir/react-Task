import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BestOffers from "./pages/BestOffers";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="offers" element={<BestOffers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
