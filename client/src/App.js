
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard"; 
import ProductList from "./Components/Products"; 
import LandingPage from "./Components/Landing"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;