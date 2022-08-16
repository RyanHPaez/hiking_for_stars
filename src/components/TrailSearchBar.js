import { useState } from "react";

function TrailSearchBar(props){
    const [searchTerm,setSearchTerm] = useState('')
    return (
        <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
            <input type="text" placeholder="Input Latitude" onChange={(e)=> setSearchTerm(e.target.value)}/>
            <input type="text" placeholder="Input Longitude" onChange={(e)=> setSearchTerm(e.target.value)}/>
            <input type="Submit"></input>
        </form>
    )
}

export default TrailSearchBar;