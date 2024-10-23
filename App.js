// src/App.js

import React, { useState } from 'react';
import { BikeCard, InfoSection } from './components/BikeCard';
import PostBike from './components/PostBike';

const App = () => {
  const [showPost, setShowPost] = useState(false);

  const bikes = [
    { name: 'Moto 1', price: 10, location: 'Centro' },
    { name: 'Moto 2', price: 15, location: 'Polanco' },
  ];

  const togglePostSection = () => {
    setShowPost(!showPost);
  };

  return (
    <div>
      <h1>Bienvenido a Quick Bike</h1>
      <InfoSection />
      <div className="bike-cards-container">
        {bikes.map((bike, index) => (
          <BikeCard key={index} bike={bike} />
        ))}
      </div>
      <div className="button-container"> {/* Contenedor para el botón */}
        <button onClick={togglePostSection} className="toggle-button">
          {showPost ? 'Ocultar Publicación' : 'Publicar mi Moto'}
        </button>
      </div>
      {showPost && <PostBike />}
    </div>
  );
};

export default App;
