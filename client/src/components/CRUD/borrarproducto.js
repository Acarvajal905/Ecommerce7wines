import React from 'react';

export default function  DeleteProduct() {
    const handleSumit = function(e) {
        e.preventDefault();
        /* aca ba la funcion para editar la bd, eliminando un producto */
    }
    return (
        <from onSubmit = {handleSumit}>
            <div>
                <h1>Eliminar Producto</h1>
            </div>
            <div>
            <input type= 'text' placeholder = 'Producto a eliminar' name = 'Eliminar'></input>
            </div>
            <input type='submit' value='ELIMINAR'/>
        </from>
    )    
    
};