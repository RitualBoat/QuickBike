import React, { useState } from 'react';
import BikeCard from './BikeCard';

const HomePage = () => {
  // Estado de ejemplo con motos disponibles
  const [bikes, setBikes] = useState([
    { id: 1, name: 'Honda CBR 500', price: 50, location: 'CDMX' },
    { id: 2, name: 'Yamaha R6', price: 70, location: 'Guadalajara' },
  ]);

  return (
    <div>
      <h1>Motos Disponibles para Alquiler</h1>
      <div className="bike-list">
        {bikes.map((bike) => (
          <BikeCard key={bike.id} bike={bike} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
