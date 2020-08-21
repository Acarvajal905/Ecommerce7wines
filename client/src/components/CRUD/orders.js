import React from 'react';
import "../../Styles/CRUD.css"

export default function Order() {
    return (
        <div class="adminbox">
            
             <div> <h1>Ordenes</h1> </div>

             <div class="form-group row">
                <label class="col-sm-2 col-form-label">ID Usuario:</label>
                <div class="col-sm-10">
                    <input 
                    type= 'text' placeholder = 'ID Usuario' name ="IDUsuario">
                    </input>
                </div>
                <label class="col-sm-2 col-form-label">Ordenes del Usuario</label>
            </div>

            <button type="button" class="btn btn-danger" disabled>ORDENES</button>
        </div>     
    )
};