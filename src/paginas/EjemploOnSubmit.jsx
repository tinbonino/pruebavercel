import React, { useState } from 'react';

const InputOnChange = () => {
  // Estado para almacenar el valor del input
  const [valor, setValor] = useState('');

  // Función para manejar el evento onChange
  const handleChange = (event) => {
    setValor(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={valor}
        onChange={handleChange}
        placeholder="Escribe algo aquí"
      />
      <p>Texto ingresado: {valor}</p>
    </div>
  );
};

export default InputOnChange;
