import React from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../productos';

const ProductoDetalle = () => {
  const { id } = useParams(); // Obtenemos el ID del producto de los parámetros de la URL
  const producto = productos.find(prod => prod.id === parseInt(id)); // Buscamos el producto por su ID

  // Verificamos si el producto existe
  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  // Renderizamos los detalles del producto
  return (
    <div>
      <h2>Detalles del producto</h2>
      <h3>ID: {producto.id}</h3>
      <h3>Nombre: {producto.nombre}</h3>
      <h3>Precio: {producto.precio}</h3>
    </div>
  );
};

export default ProductoDetalle;
