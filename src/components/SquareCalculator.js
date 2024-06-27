import React, { useState, useEffect } from 'react';

const SquareCalculator = () => {
  const [number, setNumber] = useState(null);
  const [square, setSquare] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNumber = async () => {
      try {
        const response = await fetch('/api'); // Usar la ruta relativa con /api
        if (!response.ok) {
          throw new Error('Error en la solicitud: ' + response.statusText);
        }
        const data = await response.json();
        setNumber(data.number);
        setSquare(data.number ** 2);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    fetchNumber();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (number === null || square === null) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Calculadora de Cuadrados</h1>
      <h1>Robert Moises Vargas Mavarez</h1>
      <p>Número: {number}</p>
      <p>Cuadrado: {square}</p>
    </div>
  );
};

export default SquareCalculator;
