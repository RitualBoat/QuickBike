// src/components/BikeCard.js

import React from 'react';
import './BikeCard.css';

const BikeCard = ({ bike }) => {
  return (
    <div className="bike-card">
      <h3 className="bike-title">{bike.name}</h3>
      <p className="bike-price">
        Precio por día: <strong>${bike.price}</strong>
      </p>
      <p className="bike-location">Ubicación: {bike.location}</p>
      <button className="rent-button">Rentar</button> {/* Botón para rentar */}
    </div>
  );
};

// Componente adicional para información sobre la empresa
const InfoSection = () => {
  return (
    <div className="info-section">
      <h2>Sobre Quick Bike</h2>
      <p>
        Quick Bike es una empresa dedicada a ofrecer el mejor servicio de alquiler de motocicletas. 
        Creemos en la movilidad sostenible y queremos que disfrutar de la ciudad sea fácil y divertido. 
        ¡Renta una motocicleta hoy mismo y explora a tu ritmo!
      </p>
    </div>
  );
};

export { BikeCard, InfoSection };
