import { useEffect, useState } from 'react';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

function GalleryList () {
    const [galleryItems, setGalleryItems] = useState([])

    // GET path
    const fetchGallery = () => {
        axios({
        method: 'GET',
        url: '/gallery'
        })
        .then( (response) => {
            setGalleryItems(response.data)
            // console.log('in fetchGallery', galleryItems)
        })
        .catch(function (error) {
            console.log('Error with GET:', error)
        })
    }

    useEffect( () => {
        fetchGallery()
    }, [])

   
    return (
        <div className='Photo'>
            {galleryItems.map(Item => (
                    <div key={Item.id}> 
                    <GalleryItem 
                        Item = {Item}
                        fetchGallery={fetchGallery}/>
                    </div>
                ))
            }
        </div>
)}


export default GalleryList;