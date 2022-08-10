import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Home, Page2, Page3, Page4} from "./components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { PlaceDataContext } from "./context/placeDataContext";
import { Places } from "./components"


function App() {


  const [placeData, setPlaceData] = useState([])
  useEffect( () => {
    axios
      .get(`http:localhost:3005/app/places`)
      .then ((response) => setPlaceData(response.data));
<<<<<<< HEAD
  }, [])
  // const getData = async() => {
  //   const {placeData} =await axios.get(`http:localhost:3005/app/places`);
  //   setPlaceData(placeData)
  // }

  // useEffect(() => {
  //   getData();
  // }, [])


=======
  })

  
>>>>>>> af3967d9eae1d8ecb44f19d86c7769013b5ef7c2
  return (
    <div className="App">
      <PlaceDataContext.Provider value={placeData}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/places" element={<Places />} />
        </Routes>
      </Router>
      </PlaceDataContext.Provider>
    </div>
  )
}

export default App;