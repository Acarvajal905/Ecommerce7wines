import React from 'react';
import Admin from './admin';

export default function NewCategory() {


 const handleSumit = function(e) {
      e.preventDefault();
      /* Aca va la funcion para editar la bd, creando categoria */
    };
    
    return (
      <div class="adminbox">
      <Admin/>
         <form onSubmit={handleSumit}>
            <div> <h1>Crear Categoria</h1> </div>

            <div class="form-group row">
               <label class="col-sm-2 col-form-label">Nueva Categoria:</label>
               <div class="col-sm-10">
                  <input type= 'text' class="form-control" placeholder = 'NewCategory'></input>
               </div>
            </div>

            <div class="form-group row">
               <label class="col-sm-2 col-form-label">Descripcion:</label>
               <div class="col-sm-10">
                  <textarea class="form-control" placeholder="CategoryDescription"></textarea>
               </div>
            </div>
              
            <input class="btn btn-success" type='submit' value='AGREGAR CATEGORIA' />
         </form>
      </div>
    )

}