import React, { useContext } from "react";
import { PlaceDataContext } from "../context/placeDataContext";
// import '../TrailDetails.css'


function TrailDetails (props) {

    const placeData = useContext(PlaceDataContext)

    return (props.trigger) ?(
        <div className="popup">
            <div key="" className="popup-inner">
                <img src={props.thumbnail}
                alt=''/>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default TrailDetails;