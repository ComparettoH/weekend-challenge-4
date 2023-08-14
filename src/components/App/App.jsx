import { useEffect, useState } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

import './App.css';



function App() {
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



    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList 
        galleryItems={galleryItems}
        setGalleryItems={setGalleryItems}
        fetchGallery={fetchGallery}/>
      </div>
    );
}

export default App;
