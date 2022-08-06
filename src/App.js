import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Home, Skills, Contact } from "./components";
import React from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;