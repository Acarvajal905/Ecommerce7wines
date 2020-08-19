import React from 'react';
import '../Shoppingcart/carrito.css'
import { Link } from 'react-router-dom'


export default function Carrito(props) { /* las props las recibe desde catalogo */

    return (
        /* Podemos agregar mas destalles a la vista previa */

        <nav >
            <h4>Carrito de compras</h4>
            <div class="imagenF" >IMAGEN</div>

            <span>{props.products}</span>
            <button type="button" class="btn btn-info btn-sm">Eliminar del carrito</button>

        </nav>

    )
};