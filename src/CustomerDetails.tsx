import React, { useState, useEffect } from 'react';
import { Customer } from './Customer';
import {imageData} from './image_data'; // Import image data directly from image_data.ts

interface CustomerDetailsProps {
  customer: Customer | null;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [photos, setPhotos] = useState<string[]>([]);

  // Function to select random images
  const getRandomImages = () => {
    const randomIndexes = Array.from({ length: 9 }, () => Math.floor(Math.random() * imageData.length));
    const randomImages = randomIndexes.map(index => imageData[index]);
    return randomImages;
  };

  useEffect(() => {
    // Set initial random images
    setPhotos(getRandomImages());

    // Change images every 10 seconds
    const interval = setInterval(() => {
      setPhotos(getRandomImages());
    }, 30000);

    // Cleanup function
    return () => clearInterval(interval);
  }, [customer]); // Add customer as a dependency

  return (
    <div className="customer-details">
      {customer ? (
        <>
          <h2>{customer.name}</h2>
          <p>{customer.title}</p>
          <p>{customer.address}</p>
          <div className="photo-grid">
            {photos.map((photo, index) => (
              <img key={index} src={photo} alt={`Photo ${index + 1}`} />
            ))}
          </div>
        </>
      ) : (
        <p>Select a customer to view details</p>
      )}
    </div>
  );
};

export default CustomerDetails;
