import React from 'react';

export default function NewCategory() {


 const handleSumit = function(e) {
      e.preventDefault();
      /* Aca va la funcion para editar la bd, creando categoria */
    };
    
    return (
       <form onSubmit={handleSumit}>
           <div> <h1>Crear Categoria</h1> </div>
           <div>
               <label>Nueva Categoria:</label>
               <input type= 'text' placeholder = 'Categoria' name = 'NewCategory'></input>
            </div>
            <div>
               <label>Descripcion:</label>
               <input type= 'text' placeholder = 'Descripcion de nueva categoria' name = 'CategoryDescription'></input>
            </div>
            <input type='submit' value='AGREGAR CATEGORIA' />
       </form>
    )

}