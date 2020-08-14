import React from 'react';
import "../Styles/producto.css"


export default function Producto ({props}) {
    if (!props){
        return <div>El producto no existe</div>
    }else 
    return (
        <div class="box1">

          {/*   <img class="image">{pros.image}</img> */}

            <div class="box2">

                <h2 class="tittle" > {props.name}</h2>
                <h5 class="description">{props.description}</h5>
                <span class="price">{props.price}</span>
                <ul>
                    <li>Stock: {props.stock}</li>
                    <li>{props.content}</li>
                    <li>Grado Alcoholico: {props.percentage}</li>
                    <li>Pais: {props.country}</li>
                    <li>{props.quantity} ml/cc</li>
                    <li>Color: {props.colour}</li>

                </ul>

            </div>

        </div>
    );
}
