// import "../styles.css" 

// function Producto({nombre,precio}) {
//   return (
//     <div className="card">
//         <h2>{nombre}</h2>
//         <h3>{precio}</h3>
//     </div>
//   )
// }

// export default Producto

import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link
import "../styles.css" 

function Producto({ id, nombre, precio }) {
  return (
    <Link to={`/producto/${id}`} className="card"> {/* Enlace a la página de detalle del producto */}
      <h2>{nombre}</h2>
      <h3>{precio}</h3>
    </Link>
  );
}

export default Producto;
