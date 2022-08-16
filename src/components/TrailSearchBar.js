import { useState } from 'react'

function TrailSearchBar(props){
    const[searchTerm, setSearchTerm,] = useState('')
    // const[searchTerm, setSearchTerm] = useState('')
    return (
            <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
                <input type="text" placeholder='Search Here' onChange={(e) => setSearchTerm(e.target.value)}/>
                {/* <enter> */}
                <input type="text" placeholder="Search Here" onChange={(e) => setSearchTerm(e.target.value)} />
                <input type="submit" />
            </form>
    )
}

export default TrailSearchBar;