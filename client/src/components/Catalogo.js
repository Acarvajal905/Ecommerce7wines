import React from 'react';
import Producto from "./producto.js"; /* Ajustar direccion del componente producto */

export default function Catalogo(props){ /* Propiedades del modelo producto consultado desde la bd*/
    return (
    <div>{
        props.map(v =>   /*Capaz haya que reagustar las forma en que recibe las props de la bd */
            <Product
           name = {v.name}
           categories = {v.categories}
           price = {v.price}
           description = {v.description}
           stock = {v.stock}
           image = {v.image}
           content = {v.content}
           percentage = {v.percentage}
           country = {v.country}
           colour = {v.colour}
           quantity = {v.quantity}
           /> 
           )
        }
        </div>
    );

};