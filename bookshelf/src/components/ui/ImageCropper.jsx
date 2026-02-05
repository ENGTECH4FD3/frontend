import React, { useState, useRef, useEffect } from 'react';
import Croppie from 'croppie';
import 'croppie/croppie.css';

const ImageCropper = () => {
  const croppieRef = useRef(null);
  const croppieInstance = useRef(null);
  const [imageSrc, setImageSrc] = useState('');
  const [croppedImage, setCroppedImage] = useState('');

  // Initialize Croppie when the component mounts
  useEffect(() => {
    if (croppieRef.current && !croppieInstance.current) {
      croppieInstance.current = new Croppie(croppieRef.current, {
        viewport: { width: 200, height: 200, type: 'circle' }, // Circle viewport example
        boundary: { width: 300, height: 300 },
        enableExif: true,
      });
    }
    // Cleanup on component unmount
    return () => {
      if (croppieInstance.current) {
        croppieInstance.current.destroy();
        croppieInstance.current = null;
      }
    };
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
        // Bind the image to the Croppie instance once the reader loads it
        croppieInstance.current.bind({ url: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCrop = async () => {
    if (croppieInstance.current) {
      const result = await croppieInstance.current.result({
        type: 'base64', // Can be 'canvas', 'blob', 'base64'
        size: 'viewport',
        format: 'png',
      });
      setCroppedImage(result);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} accept="image/*" />
      <div ref={croppieRef} id="image-helper" /> {/* The element Croppie binds to */}
      <button onClick={handleCrop} disabled={!imageSrc}>
        Crop Image
      </button>
      {croppedImage && (
        <div>
          <h3>Cropped Preview:</h3>
          <img src={croppedImage} alt="Cropped" />
        </div>
      )}
    </div>
  );
};

export default ImageCropper;
