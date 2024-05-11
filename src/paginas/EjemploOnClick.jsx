import React from 'react';

const BotonClick = () => {
  // Función para manejar el evento onClick
  const handleClick = () => {
    alert('¡Haz hecho clic en el botón!');
  };

  return (
    <button onClick={handleClick}>Haz clic aquí</button>
  );
};

export default BotonClick;
