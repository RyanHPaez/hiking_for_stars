import { useState } from "react";

function TrailSearchBar(props){
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    return (
        <form onSubmit={(e) => props.handleSearch(e, latitude,longitude)}>
            <input type="text" placeholder="Input Latitude" onChange={(e)=> setLatitude(e.target.value)}/>
            <input type="text" placeholder="Input Longitude" onChange={(e)=> setLongitude(e.target.value)}/>
            <input type="Submit"></input>
        </form>
    )
}

export default TrailSearchBar;