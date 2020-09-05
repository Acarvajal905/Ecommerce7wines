import React from 'react';
import axios from "axios";
import "../../Styles/CRUD.css"
import NavBarUser from "./NavBarUsuarios.js"

export function validate(input) {
  let errors = {};
  if (!input.eliminado) {
    errors.eliminado = 'Eliminado is required';
  } else if (!/\S/.test(input.eliminado)) {
    errors.eliminado = 'Eliminado is invalid';
  }
  return errors
}

export default function DeleteUser() {
    
  const [input, setInput] = React.useState({
    eliminado: ''   
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

  const GetUsuario = async (user) =>{
    try{
      const resUser = await axios(`http://localhost:3001/users/`);
      let Buscado= resUser.data;
      console.log("me traje ", Buscado);
      return Buscado;
    }
    catch(error){
      console.log(error);
    }
  }

  const handleSumit = function(e) {
    e.preventDefault();
    /* Traigo el usuario a eliminar */

    GetUsuario(e.target.eliminado.value)

    /* Elimino el usuario */
    .then(Buscado =>
      axios.delete(`http://localhost:3001/users/${Buscado[0].id}`))
      .then(response => {
      console.log("entre a ok")
      console.log(response)
      alert( `El usuario fue Eliminado`)
    })
    .catch (error2 => {
      console.log(error2);
      alert( `El Usuario no existe`)
    }) 
  }

  return (
    <div>
      <NavBarUser/>
      <form onSubmit={handleSumit} class="adminbox">
        <div> <h1>Eliminar Usuario</h1> </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Eliminar:</label>
          <div class="col-sm-10">
            <input className={`${errors.eliminado && 'danger'}`} onChange={handleInputChange} value={input.eliminado}
            type= 'text' placeholder = 'Usuario a eliminar' name ="eliminado">
            </input>
            {errors.eliminado && (<p className="danger">{errors.eliminado}</p>)}
          </div>
        </div>

        <input class="btn btn-danger" type='submit' value='ELIMINAR' />
      </form>
    </div>
  )
};
