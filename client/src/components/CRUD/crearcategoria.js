import React from 'react';

export default function NewCategory(props) {
    return (
        <form onSubmit={props.NewCategory}>
            <input type='text' placeholder='Categoria nueva' name='NewCategory' />
            <input type='text' placeholder='Descripcion de nueva categoria' name='CategoryDescription' />
            <input type='submit' value='AGREGAR CATEGORIA' />
        </form>
    )

}