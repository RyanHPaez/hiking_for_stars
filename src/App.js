import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Home, Page2, Page3, Page4 } from "./components";
import React, {useContext, useEffect, useState } from "react";
import axios from "axios";
import { PlaceDataContext } from "./context/placeDataContext";


function App() {

  const [placeData, setPlaceData] = useState([])
  useEffect( () => {
    axios
      .get(`http:localhhose:3005/app/places`)
      .then ((response) => setPlaceData(response.data));
  })
  
  return (
    <div className="App">
      <PlaceDataContext.Provider value={placeData0}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
        </Routes>
      </Router>
      </PlaceDataContext.Provider>
    </div>
  );
}

export default App;