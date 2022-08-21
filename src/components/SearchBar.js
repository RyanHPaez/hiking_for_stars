import { useState } from 'react'

function SearchBar(props){
    const[searchTerm, setSearchTerm] = useState('')
    // const[searchTerm, setSearchTerm] = useState('')
    return (
        <div className="container">
        <div className="row ">
          <div className="col-sm-12 text-center my-4">
            <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
                <h1 className='font-weight-light'>Look up your favorite music for your trip</h1>
                <input 
                type="text" 
                className="form-control"
                placeholder="Search Here" 
                onChange={(e) => setSearchTerm(e.target.value)} />
                <input 
                type="submit" 
                />                
            </form>
            </div>
            </div>
            </div>
    )
}

export default SearchBar;