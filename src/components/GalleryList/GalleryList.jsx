const galleryItems = require('../modules/gallery.data');


function GalleryList (props) {

    return (
        <div>
            {
            props.list.map(Item => (
                    <div key={Item.id}> 
                        {Item.path} && {Item.description}
                        <br></br>
                        <button>👍 Like it!</button>
                        {Item.likes} people like this photo!
                    </div>
                ))
}
</div>
)}


export default GalleryList;