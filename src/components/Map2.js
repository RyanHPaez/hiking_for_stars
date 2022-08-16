import { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import Map from './Map'


//incorporating search bar to the second webpage 
function Map2() {
  // return(
  //   <div className='Map2'>
  //   <div className='container'>
  //   <div className='row align-items-start my-4'>
  //     <div className='row'>
  //       <div className='col-{breakpoint}-auto'>
  //         <form>
  //           <input 
  //           type={text}
  //           placeholder= "Where to?" />
  //           <button>
  //           <i class= "fas fa-search"></i>
  //           </button>
  //         </form>
    const [searchTerm, setSearchTerm] = useState('')
    const [data, setData] = useState([])
    const[message, setMessage] = useState('Search for Trails!')
    const[options] = Map
    // </div>
  

  //the api address
  useEffect(() => {
    if (searchTerm) {
      console.log(searchTerm)
  
      const fetchData = async () => {
      const response = await fetch('https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=37.21994010863107&lon=-122.06889194045178&page=2&radius=30', options)
      const resData = await response.json()
        if(resData.results.length > 0) {
          setData(resData.results)
        } else {
          setMessage('Not Found')
        }
      }
      fetchData()
     } 
    }); 
    

    const handleSearch = (e, term) => {
      e.preventDefault()
      setSearchTerm(term)
    }
    
    return (
      <div className="App">
        <SearchBar handleSearch={handleSearch} />
        {message}
        <Map data={data} />
      </div>
    );
    }
    
  export default Map2;
    