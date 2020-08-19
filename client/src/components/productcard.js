import React from 'react';
import { Link } from 'react-router-dom'
import "../Styles/Cards.css"

export default function ProductCard(props) { /* las props las recibe desde catalogo */

  return (
    /* Podemos agregar mas destalles a la vista previa */

    <div class="box3">
      {console.log(props)}
      <Link to={`/products/${props.id}`} >   {/* Esta para que machee con la api */}
        <h3 class="tituloprod">{props.name}</h3>
      </Link>
      <Link to={`/products/${props.id}`} >
        <img class="imagenF" src={props.image} ></img>
      </Link>
      <span class="precioprod">{props.price} $</span>
      <button type="button" class="btn btn-info btn-sm">Agregar al carrito</button>

    </div>

  )
};