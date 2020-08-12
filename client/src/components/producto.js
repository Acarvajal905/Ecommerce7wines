import React from 'react';


export const Producto = ({ name, image, description, price, stock, content, percentage, country, quantity, colour }) => {
    return (
        <div>
            <h1>PRODUCTO {name}</h1>
            <img>{image}</img>
            <h2>{description}</h2>
            <span>{price}</span>
            <ul>
                <li>{stock}</li>
                <li>{content}</li>
                <li>{percentage}</li>
                <li>{country}</li>
                <li>{quantity}</li>
                <li>{colour}</li>

            </ul>

        </div>
    );
}
export default Producto;