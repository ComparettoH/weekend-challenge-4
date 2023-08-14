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


        // determine if photo or descript
        const PhotoOrDescript = () => {
            if (Item.photoInfo){
                return <img src={Item.path}/>;

            } else {
                return <p>{Item.description}</p>
            }
        }

    
    
    return (
        <>
        <p onClick={togglePhoto} className='photo'>
                {PhotoOrDescript()}
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