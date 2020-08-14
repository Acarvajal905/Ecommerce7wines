import React from 'react';

export default function ProductCard(props) { /* las props las recibe desde catalogo */

  return (
      /* Podemos agregar mas destalles a la vista previa */
    <div>
        <h1>{props.name}</h1>
        {/* <img>{props.image}</img> */}
        <span>{props.price}</span>
    </div>
  )
};