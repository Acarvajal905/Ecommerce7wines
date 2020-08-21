import React from 'react';
import axios from "axios";
import "../../Styles/CRUD.css"
export function handleSumit(e){
    e.preventDefault();
    const x = e.target

    var usuario = {
        name: x.name.value,
        surname: x.surname.value,
        email: x.email.value,
        adress: x.adress.value,
        phone: x.phone.value,
        dni: x.dni.value
    }
     //traigo los usuarios
   axios.get(`https://jsonplaceholder.typicode.com/users/`)
   .then(ress =>{
    let arr = ress.data.filter(p => p.dni === usuario.dni)  //filtro por dni
     if(arr.length){
     alert( `El usuario ya existe`);
     } if(!arr.length){
      
      axios.post(`https://jsonplaceholder.typicode.com/users/`, usuario) /* Aca va la funcion para editar la bd, creando usuario */
      .then(response => {
          console.log(response)
            alert ("Usuario Creado")
      })
   }
})

 .catch (error2 => {
   console.log(error2);
   alert ("Algo salio mal")
 }) 


}

export function validate(input) {
    let errors = {};
    if (!input.name) {
        errors.name = 'Name is required';
    } else if (!/\S/.test(input.name)) {
        errors.name = 'Name is invalid';
    }if (!input.surname) {
        errors.surname = 'Surname is required';
    } else if (!/\S/.test(input.surname)) {
        errors.surname = 'Surnamen is invalid';
    }if (!input.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
        errors.email = 'Email is invalid';
    }if (!input.adress) {
        errors.adress = 'Adress is required';
    } else if (!/\S/.test(input.adress)) {
        errors.adress = 'Adress is invalid';
    }if (!input.phone) {
        errors.phone = 'Phone is required';
    } else if (!/[0-9]/.test(input.phone)) {
       errors.phone = 'Phone is invalid';
    }if (!input.dni) {
        errors.dni = 'Dni is required';
    } else if (!/[0-9]/.test(input.dni)) {
       errors.dni = 'Dni is invalid';
    } return errors
 }

export default function NewUser() {

    const [input, setInput] = React.useState({
       name: '',
       surname: "",
       email:"",
       adress:"",
       phone:"",
       dni:""


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
          <form onSubmit={handleSumit}>
               <div> <h1>Registrarse</h1> </div>
 
               <div class="form-group row">
                   <label class="col-sm-2 col-form-label">Nombre:</label>
                  <div class="col-sm-10">
                      <input className={`${errors.NewCategory && 'danger'}`} onChange={handleInputChange} value={input.name}
                          type= 'text' placeholder = 'Nombre' name ="name">
                      </input>
                      {errors.name && (<p className="danger">{errors.name}</p>)}
                   </div>
               </div>
 
          
             <div class="form-group row">
                  <label class="col-sm-2 col-form-label">Apellido:</label>
                  <div class="col-sm-10">
                       <input className={`${errors.surname && 'danger'}`} onChange={handleInputChange} value={input.categorydescription}
                           type= 'text' placeholder = 'Apellido' name ="surname">
                       </input>
                       {errors.surname && (<p className="danger">{errors.surname}</p>)}
                  </div>
             </div>

             <div class="form-group row">
                  <label class="col-sm-2 col-form-label">Email:</label>
                  <div class="col-sm-10">
                       <input className={`${errors.email && 'danger'}`} onChange={handleInputChange} value={input.email}
                           type= 'text' placeholder = 'Email' name ="email">
                       </input>
                       {errors.email && (<p className="danger">{errors.email}</p>)}
                  </div>
             </div>

             <div class="form-group row">
                  <label class="col-sm-2 col-form-label">Direccion:</label>
                  <div class="col-sm-10">
                       <input className={`${errors.adress && 'danger'}`} onChange={handleInputChange} value={input.adress}
                           type= 'text' placeholder = 'Direccion' name ="adress">
                       </input>
                       {errors.adress && (<p className="danger">{errors.adress}</p>)}
                  </div>
             </div>

             <div class="form-group row">
                  <label class="col-sm-2 col-form-label">Telefono:</label>
                  <div class="col-sm-10">
                       <input className={`${errors.phone && 'danger'}`} onChange={handleInputChange} value={input.phone}
                           type= 'text' placeholder = 'Telefono' name ="phone">
                       </input>
                       {errors.phone && (<p className="danger">{errors.phone}</p>)}
                  </div>
             </div>

             <div class="form-group row">
                  <label class="col-sm-2 col-form-label">DNI:</label>
                  <div class="col-sm-10">
                       <input className={`${errors.dni && 'danger'}`} onChange={handleInputChange} value={input.dni}
                           type= 'text' placeholder = 'DNI' name ="dni">
                       </input>
                       {errors.dni && (<p className="danger">{errors.dni}</p>)}
                  </div>
             </div>

             <input class="btn btn-success" type='submit' value='Crear Usuario' />
          </form>
       </div>
     )
 
 }