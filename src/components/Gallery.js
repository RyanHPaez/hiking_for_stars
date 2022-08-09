import GalleryItem from './GalleryItem'

interface GalleryProps{
    data: ItemProps[]
}

const Gallery = (props: GalleryProps) => {

    const display = props.data.map((item , index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery