// src/components/PostBike.js

import React, { useState } from 'react';
import './PostBike.css'; // Asegúrate de que este archivo exista

const PostBike = () => {
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar la publicación
    console.log("Publicación realizada: ", { model, year, location, price });
    // Resetear el formulario
    setModel('');
    setYear('');
    setLocation('');
    setPrice('');
  };

  return (
    <div className="post-bike">
      <h2>Publica tu Moto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Modelo:</label>
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Año:</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Ubicación:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Precio por día:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Publicar</button>
      </form>
    </div>
  );
};

export default PostBike;
