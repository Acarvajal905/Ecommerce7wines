import React from 'react';
import axios from "axios";
import "../../Styles/CRUD.css";

export const handleSumit4 = function(e) {
  e.preventDefault();
  

  let NuevaCategori = {
    name: e.target.NewCategory.value, 
    description: e.target.categorydescription.value 
   }

  console.log("categoria a crear", NuevaCategori)

  //traigo las categorias del bd
  axios.get(`http://localhost:3001/category/`,{headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}})
  .then(ress =>{
   let arr = ress.data.filter(p => p.name === NuevaCategori.name)
    if(arr.length){
    alert( `La categoria ya existe`);
    } if(!arr.length){
     
     axios.post(`http://localhost:3001/category/`, NuevaCategori ,{headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}}) /* Aca va la funcion para editar la bd, creando categoria */
     .then(response => {
        alert ("Categoria Creada")
     })
     .catch(er => {
       console.log(er)
       alert ("Algo salio mal")
     })
  }
})
.catch (error2 => {
  console.log(error2);
  alert ("Algo salio mal")
}) 
};

export function validate(input) {
  let errors = {};
  if (!input.NewCategory) {
    errors.NewCategory = 'Category name is required';
  } else if (!/\S/.test(input.NewCategory)) {
    errors.NewCategory = 'Category name is invalid';
  }if (!input.categorydescription) {
    errors.categorydescription = 'Description is required';
  } else if (!/\S/.test(input.categorydescription)) {
    errors.categorydescription = 'Description is invalid';
  } return errors
}

export default function NewCategory() {

  const [input, setInput] = React.useState({
     NewCategory: '',
     categorydescription: ""
   });
   const [errors, setErrors] = React.useState({});
 
   const handleInputChange = function(e){
     setErrors(validate({
       ...input,
       [e.target.name]: e.target.value
     }));
 
     setInput({
       ...input,
       [e.target.name]: e.target.value
     })
   }
   
   return (
     <div class="adminbox">
        <form onSubmit={handleSumit4}>
           <div> <h1>Crear Categoria</h1> </div>

           <div class="form-group row">
         <label class="col-sm-2 col-form-label">Nueva Categoria:</label>
         <div class="col-sm-10">
           <input className={`${errors.NewCategory && 'danger'}`} onChange={handleInputChange} value={input.NewCategory}
             type= 'text' placeholder = 'Nombre de la categoria' name ="NewCategory">
           </input>
           {errors.NewCategory && (<p className="danger">{errors.NewCategory}</p>)}
         </div>
       </div>

           <div class="form-group row">
         <label class="col-sm-2 col-form-label">Descripcion:</label>
         <div class="col-sm-10">
           <input className={`${errors.categorydescription && 'danger'}`} onChange={handleInputChange} value={input.categorydescription}
             type= 'text' placeholder = 'Descripción de la categoria' name ="categorydescription">
           </input>
           {errors.categorydescription && (<p className="danger">{errors.categorydescription}</p>)}
         </div>
       </div>
             
           <input class="btn btn-danger" type='submit' value='AGREGAR CATEGORIA' />
        </form>
     </div>
   )

}