import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Home, Page2, Music, Login, SignUp } from "./components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { PlaceDataContext } from "./context/placeDataContext";
import { Places } from "./components"





function App() {
  const [placeData, setPlaceData] = useState([]);
  // const [userData, setUserData] = useState([]);

  useEffect( () => {
    axios
      .get('http://localhost:3005/app/places')
      .then ((response) => setPlaceData(response.data));
  }, [])


  return (
    <div className="App">
      <PlaceDataContext.Provider value={placeData}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/places" element={<Places />} />
        </Routes>
      </Router>
      </PlaceDataContext.Provider>
    </div>
  )
}

export default App;