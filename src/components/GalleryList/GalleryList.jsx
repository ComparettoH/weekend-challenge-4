import { useEffect, useState } from 'react';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';

const [galleryItems, setGalleryItems] = useState([])

    // GET path
    const fetchGallery = () => {
        axios({
        method: 'GET',
        url: '/gallery'
        })
        .then( (response) => {
            setGalleryItems(response.data)
            console.log('in fetchGallery', galleryItems)
        })
        .catch(function (error) {
            console.log('Error with GET:', error)
        })
    }

    useEffect( () => {
        fetchGallery()
    }, [])

function GalleryList ({ galleryItems, setGalleryItems, fetchGallery}) {

    
    return (
        <div>
            {
            galleryItems.map(Item => (
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