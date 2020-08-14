import React from 'react';
import { Link } from 'react-router-dom'

export default function ProductCard(props) { /* las props las recibe desde catalogo */

  return (
      /* Podemos agregar mas destalles a la vista previa */
    <div>
      <Link to={`/products/${props.name}`} >
        <h1>{props.name}</h1>
      </Link>
        {/* <img>{props.image}</img> */}
        <span>{props.price}</span>
    </div>
  )
};