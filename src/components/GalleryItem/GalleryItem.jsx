import axios from 'axios';

function GalleryItem ({ Item, fetchGallery}){

    //PUT path for likes
    const updateLikes = () => {
        console.log('adding a like!', Item.id)
        axios({
            method: 'PUT',
            url: '/gallery/like/${Item.id}'
        })
        .then(response => {
            console.log('response from PUT', response)
            fetchGallery()
        })
        .catch(error => {
            console.log('Error in PUT', error)
        })
    }

      //function to help render photo vs description
      function renderItem({Item}){
        const [photoInfo, setPhotoInfo] = useState(true);

        //toggles between photo & descript
        const togglePhoto = () => {
            console.log('photo had been clicked!');
            // setPhotoInfo(!photoInfo)
        }

        // determine if photo or descript
        const PhotoOrDescript = () => {
            if (Item.photoInfo){
                return <img src={Item.path}/>;

            } else {
                return <p>{Item.description}</p>
            }
        }

    }

    const togglePhoto = () => {
        console.log('photo had been clicked!');
        // setPhotoInfo(!photoInfo)
    }
    
    return (
        <>
        <p className='photo'><img src={Item.path} onClick={togglePhoto}/> 
                        </p>
                        <br></br>
                        <p className='like'>
                            <button onClick={updateLikes}>👍 Like it!</button>
                        {Item.likes} people like this photo!
                        </p>
        </>
    )
}


export default GalleryItem;