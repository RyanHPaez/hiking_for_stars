import { useState } from "react";
// this is the data and how it shows in Music API
function MusicGalleryItem(props) {
  let [view, setView] = useState(false);
  // this is before you click the image how it should be shown
  const simpleView = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <div className="results text-center">
              <h3>{props.item.trackName}</h3>
              <h4>{props.item.collectionName}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  };
  // this is after you click the image how it should be shown
  const detailView = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center my-3 ">
            <div
              style={{
                color: "Red",
                boxShadow: "10px 20px 40px #eea301 ",
                backgroundImage: `url(${props.item.artworkUrl100})`,
              }}
            >
              {/* this is what is shown in size of text of the image */}
              <div className="boxFont">
                <h2 className="font-weight-light">{props.item.trackName}</h2>
                <h3 className="font-weight-light">
                  {props.item.collectionName}
                </h3>
                <h4 className="font-weight-light">
                  {props.item.primaryGenreName}
                </h4>
                <h4 className="font-weight-light">{props.item.releaseDate}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  // when you click this is how it is set to diplay
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text ">
          <div onClick={() => setView(!view)}>
            {view ? detailView() : simpleView()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicGalleryItem;
