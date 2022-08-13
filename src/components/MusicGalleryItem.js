import { useState } from "react";
// this is the data and how it shows in Music API
function MusicGalleryItem(props) {
  let [view, setView] = useState(false);
// this is before you click the image how it should be shown
  const simpleView = () => {
    return (
      <div
        style={{
          flexDirection: 'column',
         justifyContent: 'flex-start',
         alignItems: 'center',
         backgroundSize: 'contain',
         textAlign: 'center',
          width: "20vw",
          height: "20vh",
          border: "1px solid black",
          margin: "20px",
          position: "relative",
          boxShadow: '10px 20px 40px #eea301 ',
          backgroundImage: 'radial-gradient(  rgb(203, 203, 203),rgb(251, 250, 214),rgb(79, 70, 52))'
        }}
      >
        <h3>{props.item.trackName}</h3>
        <h4>{props.item.collectionName}</h4>
      </div>
    );
  };
// this is after you click the image how it should be shown
  const detailView = () => {
    return (
      <div className="row align-items-start my-4">
      <div
        style={{
          flexDirection: 'column',
         justifyContent: 'flex-start',
         alignItems: 'center',
         backgroundSize: 'contain',
         textAlign: 'center',
          width: "20vw",
          height: "20vh",
          border: "1px solid black",
          margin: "20px",
          position: "relative",
          boxShadow: '10px 20px 40px #eea301 ',
          backgroundImage: `url(${props.item.artworkUrl100})`,
          
        }}
      >
        {/* this is what is shown in size of text of the image */}
        <h2>{props.item.trackName}</h2>
        <h3>{props.item.collectionName}</h3>
        <h4>{props.item.primaryGenreName}</h4>
        <h4>{props.item.releaseDate}</h4>
      </div></div>
    );
  };
// when you click this is how it is set to diplay
  return (
    <div className="row align-items-start my-4">
    <div onClick={() => setView(!view)} style={{ display: "inline" }}>
      {view ? detailView() : simpleView()}
    </div></div>
  );
}

export default MusicGalleryItem;
