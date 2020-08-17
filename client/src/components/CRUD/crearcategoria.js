import React from 'react';
import axios from "axios"

export default function NewCategory() {


 const handleSumit = function(e) {
      e.preventDefault();
      

      let NuevaCategori = {name: e.target.newcategory.value, descripcion: e.target.categorydescription.value }

      console.log("categoria a crear", NuevaCategori)

      /* Aca va la funcion para editar la bd, creando categoria */
      
      axios.post(`https://jsonplaceholder.typicode.com/posts/`, NuevaCategori)
    .then(response => {
      console.log("entre a ok")
      console.log(response)
    })
    .catch (error2 => {
      console.log(error2);
    }) 

    };
    
    return (
      <div class="adminbox">
         <form onSubmit={handleSumit}>
            <div> <h1>Crear Categoria</h1> </div>

            <div class="form-group row">
               <label class="col-sm-2 col-form-label">Nueva Categoria:</label>
               <div class="col-sm-10">
                  <input type= 'text' class="form-control" placeholder = 'NewCategory' name="newcategory"></input>
               </div>
            </div>

            <div class="form-group row">
               <label class="col-sm-2 col-form-label">Descripcion:</label>
               <div class="col-sm-10">
                  <textarea class="form-control" placeholder="CategoryDescription" name="categorydescription"></textarea>
               </div>
            </div>
              
            <input class="btn btn-success" type='submit' value='AGREGAR CATEGORIA' />
         </form>
      </div>
    )

}