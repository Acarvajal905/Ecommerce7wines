import React from 'react';

export default function Update(props) {

    <form onSubmit={props.create}>

        <select
            onChange={(x) =>
                (x.target.value)}>
            {
                props.product.map((product) => {
                    return <option key={product.name}> {product.name} </option>
                })
            }
        </select>

        <input type='text' value={product.name} name='name' />
        <input type='text' value={product.description} name='description' />
        <input type='text' value={product.price} name='price' />
        <input type='text' value={product.stock} name='stock' />
        <input type='text' value={product.categories} name='categories' />
        <input type='text' value={product.name} name='name' />
        <input type='text' value={product.quantity} name='quantity' />
        <input type='text' value={product.content} name='content' />
        <input type='text' value={product.percentage} name='percentage' />
        <input type='text' value={product.country} name='country' />
        <input type='text' value={product.colour} name='colour' />
        <label>Sube aqui la imagen del producto</label>
        <input type='file' id='imagen' name='imagen' />
        <input type='submit' value='ACTUALIZAR' />

    </form>
}