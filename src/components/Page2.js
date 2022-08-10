import { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import Map from './Map'

//incorporating search bar to the second webpage 
function App();
 {
  let [searchTerm, setSearchTerm] = useState('')
  let [data, setData] = useState([])
  let [message, setMessage] = useState('Search for Trails!')

  //the api address
  useEffect(() => {
    if (searchTerm) {
      document.title=`${searchTerm} Trail`
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
    },
     [searchTerm])

    const handleSearch = (e, term) => {
      e.preventDefault()
      setSearchTerm(term)
    }
    return (
      <div className="Search">
        <SearchBar handleSearch={handleSearch} />
        {message}
        <Map data={data} />
      </div>
    );
  }
//   return (
//     <div className="page2">
//       <div className="container">
//         <div className="row align-items-center my-4">
//           <div className="col-sm-6 pl-4 my-5">
//             <h5>Repository link</h5>
//             <a href={"https://github.com/RyanHPaez/hiking_for_stars"}>
//               <h4>Check it out!</h4>
//             </a>
//             <div className="col-sm-10 my-5">
//               <h1 className="font-weight-light">whatever we want!</h1>
//               <p>paragraph can go here!:</p>
//               <p>
//                 paragraph can go here!
//               </p>
//             </div>
//           </div>
//           <div className= 'col-sm-6 '>          
//             <img
//               className='p'
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xksVRek8uJJPEn-2VhLDD8PoOHI93xSAVQ&usqp=CAU"
//               alt="hill"
//             />          
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
