import React from 'react';

export default function ProductCard(props) {

  return (
      /* Podemos agregar mas destalles a la vista previa */
    <div>
        <h1>{name}</h1>
        <img>{image}</img>
        <span>{price}</span>
    </div>
  )
};