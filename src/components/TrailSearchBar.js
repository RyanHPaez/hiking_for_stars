import { useState } from "react";

function TrailSearchBar(props) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  return (
    <div className="Trails">
      <form onSubmit={(e) => props.handleSearch(e, latitude, longitude)}>
        <div className="row ">
          <div className="Trails col-sm-12 shadow-lg p-1 mb-1 text-center my-3">
            <div className="col-sm-12 text-center ">
              <input
                type="text"
                className="form-control"
                placeholder="Input Latitude"
                onChange={(e) => setLatitude(e.target.value)}
              />
            </div>
            <div className="col-sm-12 shadow-lg p-3 mb-1 text-center ">
              <input
                type="text"
                className="form-control"
                placeholder="Input Longitude"
                onChange={(e) => setLongitude(e.target.value)}
              />
              <input type="Submit"></input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TrailSearchBar;
