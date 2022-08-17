import { useState } from 'react'

function SearchBar(props){
    const[searchTerm, setSearchTerm] = useState('')
    // const[searchTerm, setSearchTerm] = useState('')
    return (
            <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
                <input type="text" placeholder="Search Here" onChange={(e) => setSearchTerm(e.target.value)} />
                <input type="submit" />
                
            </form>
    )
}

export default SearchBar;