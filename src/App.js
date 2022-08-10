import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Home, Page2, Page3, Page4 } from "./components";
import React, {useContext, useEffect, useState } from "react";
import axios from "axios";


function App() {

  const [placeData, setPlaceData] = useState([])
  useEffect( () => {
    axios
      .get(`http:localhhose:3005/app/places`)
      .then ((response) => setPlaceData(response.data));
  })
  
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;