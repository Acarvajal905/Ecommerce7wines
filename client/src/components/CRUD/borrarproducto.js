import React from 'react';
import axios from "axios"
import "../../Styles/CRUD.css"

export function validate(input) {
    let errors = {};
    if (!input.eliminado) {
      errors.eliminado = 'Eliminado is required';
    } else if (!/\S/.test(input.eliminado)) {
      errors.eliminado = 'Eliminado is invalid';
    }
    return errors
}

export default function  DeleteProduct() {

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

  //funcion que trae los productos de la bd
  const GetProducto = async (Prod) =>{  
    try{
      const resProd = await axios (`http://localhost:3001/products/`,{headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}})
      let Buscado= resProd.data.filter(p => p.name === Prod) //para probar busca que el id coinsida
      console.log("me traje ", Buscado)  //modificar cuando este listo
      return Buscado
    } 
    catch(error){
      console.log(error);
    }
  }

  const handleSumit = function(e) {
    e.preventDefault();
    /* Traigo el producto a eliminar */

    GetProducto(e.target.eliminado.value)

    /* Elimino el producto */
    .then(Buscado =>
        axios.delete(`http://localhost:3001/products/${Buscado[0].id}` ,{headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}}))

    .then(response => {
          console.log("entre a ok")
          console.log(response)
          alert( `El producto fue Eliminado`)
        })
    .catch (error2 => {
        console.log(error2);
        alert( `El producto no existe`)
    }) 
  }

  return (
    <div class="adminbox">
        <form onSubmit={handleSumit}>
          <div> <h1>Borrar Producto</h1> </div>

          <div class="form-group row">
      <label class="col-sm-2 col-form-label">Eliminar:</label>
      <div class="col-sm-10">
        <input className={`${errors.eliminado && 'danger'}`} onChange={handleInputChange} value={input.eliminado}
          type= 'text' placeholder = 'Producto a eliminar' name ="eliminado">
        </input>
        {errors.eliminado && (<p className="danger">{errors.eliminado}</p>)}
      </div>
    </div>

          <input class="btn btn-danger" type='submit' value='ELIMINAR' />
        </form>
    </div>
  )
    
};