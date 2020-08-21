import React from 'react';
import { Link } from 'react-router-dom'
import '../Shoppingcart/carrito.css'


export default function Orders(props) { /* las props las recibe desde catalogo */

    return (
        /* Podemos agregar mas destalles a la vista previa */

        <div class="boxorder">
            {console.log(props)}
            <Link to={`/products/${props.id}`} >   {/* Esta para que machee con la api */}
                <h3 class="tituloprod">{props.name}</h3>
            </Link>
            <Link to={`/products/${props.id}`} >
                <img class="imagenF" src={props.image} ></img>
            </Link>
            <span class="precioprod">$ {props.price}</span>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary">-</button>
                <button type="button" class="btn btn-secondary">0</button>
                <button type="button" class="btn btn-secondary">+</button>
            </div>
           
        </div>

    )
};