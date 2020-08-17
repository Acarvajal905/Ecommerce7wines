import React from 'react';
import { Link } from 'react-router-dom'
import "../Styles/Cards.css"

export default function ProductCard(props) { /* las props las recibe desde catalogo */

  return (
      /* Podemos agregar mas destalles a la vista previa */
    
      <div class="box3">
        <Link to={`/products/${props.price}`} >   {/* Esta para que machee con la api */}
          <h3>{props.name}</h3>
        </Link>
        {/* <img>{props.image}</img> */}
        <div class="imagenF">IMAGEN</div>
        <span>{props.price}</span>
      </div>
    
  )
};