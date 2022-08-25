import React, { useState, useContext } from "react";
import { PlaceDataContext } from "../context/placeDataContext";

function TrailDetails(props, i) {
  const [userFavorite] = useState([]);

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner" key={i} src={userFavorite.thumbnail}>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default TrailDetails;
