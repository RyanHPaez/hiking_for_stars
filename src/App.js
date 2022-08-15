import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Home, Page2, Music, Login, User } from "./components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { PlaceDataContext } from "./context/placeDataContext";
import { Places } from "./components";
// import { isCompositeComponent } from "react-dom/test-utils";

function App() {
  const [placeData, setPlaceData] = useState([]);
  useEffect(() => {
    axios
      .get(`http:localhost:3005/app/places`)
      .then((response) => setPlaceData(response.data));
  }, []);

  console.log(placeData);
  // const getData = async() => {
  //   const {placeData} =await axios.get(`http:localhost:3005/app/places`);
  //   setPlaceData(placeData)
  // }

  // useEffect(() => {
  //   getData();
  // }, [])

  return (
    <div className="App">
      <PlaceDataContext.Provider value={placeData}>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/Music" element={<Music />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/places" element={<Places />} />
            <Route path="/User" element={<User />} />
          </Routes>
        </Router>
      </PlaceDataContext.Provider>
    </div>
  );
}

export default App;
