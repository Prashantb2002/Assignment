
import React, { useState } from 'react';

function Gallery() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImage = URL.createObjectURL(file);
      setImages([...images, newImage]);
      setCurrentIndex(images.length);
    }
  };

  const handleNextImage = () => {
    if (images.length > 0) {
      setCurrentIndex((currentIndex + 1) % images.length);
    }
  };

  const handlePreviousImage = () => {
    if (images.length > 0) {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    }
  };

  const toggleGallery = () => {
    setShowGallery(!showGallery);
  };

  return (
    <>
      <div className="p-4 max-h-28 max-w-full lg:flex">
        <button 
          onClick={toggleGallery} 
          className="bg-black text-white p-2  rounded-xl w-24 h-12 ml-12">
          {showGallery ? 'Hide ' : 'Gallery'}
        </button>
        <button 
          onClick={() => document.getElementById('imageInput').click()} 
          className="bg-gray-600 text-white p-2 rounded-3xl w-28 h-10 ml-72 lg:h-14 lg:w-36">
          + Add Image
        </button>
        <input 
          id="imageInput" 
          type="file" 
          accept="image/*" 
          onChange={handleAddImage} 
          className="hidden"
        />
          <button 
           onClick={handlePreviousImage} 
            className="fa-solid fa-arrow-left  ml-20 size-9 bg-gray-800 text-gray-400 rounded-full
            lg:rounded-full">      
          </button>
          <button 
            onClick={handleNextImage} 
             className="fa-solid fa-arrow-right ml-3 size-9 bg-gray-800 text-gray-400 rounded-full">
          </button>        
      </div>
      {showGallery ? (
        <div className="grid grid-cols-3 p-2  my-4">
          {images.map((image, index) => (
            <img 
              key={index} 
              src={image} 
              alt={`Gallery Image ${index + 1}`} 
              className="w-full h-40 rounded-3xl p-2"
            />
          ))}
        </div>
      ) : (
        <div className="relative flex justify-center items-center h-40 my-4">
          {images.length > 0 ? (
            <>
              <img 
                src={images[currentIndex]} 
                alt="Current" 
                className="w-52 h-40 rounded-xl p-2"
              />          
            </>
          ) : (
            <p className='text-white text-lg'>No images added yet.</p>
          )}
        </div>
      )}
    </>
  );
}

export default Gallery;

