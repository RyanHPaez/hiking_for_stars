import React, { useState, useContext } from "react";
import { PlaceDataContext } from "../context/placeDataContext";

function ViewTrailDetails (props,i) {
    const [UserView, setUserView] = useState([]);
    const placeData = useContext(PlaceDataContext);
    

    return (props.trigger) ?(
        <div className="popup">
            <div className="popup-inner" key={i} src={UserView.thumbnail} >
                {props.children}
            </div>
        </div>
    ) : "";
}

export default ViewTrailDetails;