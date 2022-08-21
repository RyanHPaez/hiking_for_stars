import { useEffect, useState } from "react";
import TrailSearchBar from "./TrailSearchBar";
import MapData from "./MapData";
//incorporating search bar to the second webpage
function Map() {
  const [data, setData] = useState([]);

  const options = {
    method: "GET",
    terms: {
      type: String,
      require: true,
    },
    id: {
      type: String,
      require: false,
    },
    url: {
      type: String,
      require: false,
    },
    name: {
      type: String,
      require: false,
    },
    city: {
      type: String,
      require: true,
    },
    region: {
      type: String,
      require: true,
    },
    country: {
      type: String,
      require: false,
    },
    difficulty: {
      type: String,
      require: true,
    },
    thumbnail: {
      type: String,
      require: false,
    },
    lon: {
      type: Number,
      require: Boolean,
    },
    lat: {
      type: Number,
      require: Boolean,
    },
    headers: {
      "X-RapidAPI-Key": "1fc73e876cmshbbb7a9c22b1c966p17aa01jsn612c4925dd8f",
      "X-RapidAPI-Host": "trailapi-trailapi.p.rapidapi.com",
    },
  };
  //the api address
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=37.21994010863107&lon=-122.06889194045178&radius=30`,
        options
      );
      const resData = await response.json();
      // console.log(resData)
      // if(resData.results.length > 0) {
      setData(resData.results);
      // } else {
      //   setMessage('Not Found')
      // }
    };
    fetchData();
  }, [data]);

  const handleSearch = (e, longitude, latitude) => {
    e.preventDefault();
    console.log(longitude, latitude);
    const fetchData = async () => {
      const response = await fetch(
        `https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=${latitude}&lon=${longitude}&radius=30`,
        options
      );
      const resData = await response.json();
      console.log(resData);
      // if(resData.results.length > 0) {
      //   setData(resData.results)
      // } else {
      //   setMessage('Not Found')
      // }
    };
    fetchData();
  };

  return (
    <div className="col-sm-12 my-5 text-center">
      <TrailSearchBar handleSearch={handleSearch} />
      <h2 className="font-weight-light">Search for Trails!</h2>
      <MapData data={data} />
    </div>
  );
}

export default Map;
