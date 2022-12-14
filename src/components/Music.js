import { useEffect, useState } from "react";
import MusicGallery from "./MusicGallery";
import SearchBar from "./SearchBar";
// these are hooks and function components
function MusicSearch() {
  // this is where declaring our variable,these are multiple variables
  let [searchTerm, setSearchTerm] = useState("");
  let [data, setData] = useState([]);
  let [message, setMessage] = useState("");
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
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center justify-content-sm-center">
          <SearchBar handleSearch={handleSearch} />
          {message}
          <MusicGallery data={data} />
        </div>
      </div>
    </div>
  );
}

export default MusicSearch;
