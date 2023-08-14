import { useState } from 'react';
import axios from 'axios';

function GalleryItem ({ Item, fetchGallery}){

    const [photoInfo, setPhotoInfo] = useState(false);

    //toggles between photo & descript
    const togglePhoto = () => {
        console.log('photo had been clicked!');
        setPhotoInfo(!photoInfo)
    }

    //PUT path for likes
    const updateLikes = () => {
        console.log('adding a like!', Item.id)
        axios({
            method: 'PUT',
            url: `/gallery/like/${Item.id}`
        })
        .then(response => {
            console.log('response from PUT', response)
            fetchGallery()
        })
        .catch(error => {
            console.log('Error in PUT', error)
        })
    }
    
    
    return (
        <>
            <div onClick={togglePhoto} className='photo'>
                { photoInfo ? <p>{Item.description}</p> : <img src={Item.path}/>}
            </div>
            <br></br>
            <button onClick={updateLikes}>✴︎ Like it!</button>
            <p>
                {Item.likes == 0 ? "No one has liked this photo" : `${Item.likes} people have liked this photo!`}
            </p>
        </>
    )
}


export default GalleryItem;