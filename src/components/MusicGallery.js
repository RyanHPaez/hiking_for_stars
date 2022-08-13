import MusicGalleryItem from "./MusicGalleryItem";

function MusicGallery(props) {
  const display = props.data.map((item, index) => {
    return <MusicGalleryItem item={item} key={index} />;
  });

  return <div>{display}</div>;
}

export default MusicGallery;