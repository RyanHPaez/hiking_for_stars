import { useEffect, useState } from "react";
import MusicGallery from "./MusicGallery";
import SearchBar from "./SearchBar";
// these are hooks and function components
function MusicSearch() {
  // this is where declaring our variable,these are multiple variables
  let [searchTerm, setSearchTerm] = useState("");
  let [data, setData] = useState([]);
  let [message, setMessage] = useState("Search for Music!");
// this is where you fetch the data with the hook we made in MusicGallery. UseEffect lets us count state variables
  useEffect(() => {
    if (searchTerm) {
      document.title = `${searchTerm} Music`;
      const fetchData = async () => {
        const response = await fetch(
          `https://itunes.apple.com/search?term=${searchTerm}`
        );
        const resData = await response.json();
        if (resData.results.length > 0) {
          setData(resData.results);
        } else {
          setMessage("Not Found");
        }
      };
      fetchData();
    }
  }, [searchTerm]);

  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearchTerm(term);
  };

  return (
    <div className="row align-items-start my-4 my-5">
      <SearchBar handleSearch={handleSearch} />
      {message}
      <MusicGallery data={data} />
    </div>
  );
  
}

export default MusicSearch;
