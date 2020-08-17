import React from 'react';
import Admin from './admin';

export default function  DeleteProduct() {
    const handleSumit = function(e) {
        e.preventDefault();
        /* aca ba la funcion para editar la bd, eliminando un producto */
    }
    return (
        <div class="adminbox">
        <Admin/>
            <from onSubmit = {handleSumit}>
                <div> <h1>Eliminar Producto</h1> </div>

                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Producto a eliminar:</label>
                    <div class="col-sm-10">
                        <input type= 'text' class="form-control" placeholder = 'Producto a eliminar'></input>
                    </div>
                </div>
                <input class="btn btn-success" type='submit' value='ELIMINAR'/>
            </from>
        </div>
    )    
    
};