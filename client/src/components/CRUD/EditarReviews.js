import React from 'react';
import axios from "axios";
import "../../Styles/CRUD.css";
import '../../Styles/SigninScreen.css'

export function validate(input) {
    let errors = {};
 
    if (!input.descripcion) {
      errors.descripcion = 'Description is required';
    } else if (!/\S/.test(input.descripcion)) {
      errors.descripcion = 'Description is invalid';
    } return errors
}

export default function EditRewied(id){

    const handleSumitBorrar = function(e){
        e.preventDefault();
        axios.get(`http://localhost:3001/products/${id.props}/review`, {headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}})
        .then(ress => { 
            let arr = ress.data.filter(p => p.user.id == localStorage.getItem('userId'))
            if(arr.length){
              return axios.delete(`http://localhost:3001/products/${id.props}/review/${arr[0].id}`, {headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}})
              .then(ressponse => {
                  console.log(ressponse)
                let Url = "http://localhost:3000/products/" + id.props;
                alert(`borrada`)
                window.location.replace(Url) 
              })
            }
            if(!arr.length){
              return alert( `la review no existe`);
             }
          })
    }

  const handleSumit = function(e) {
    e.preventDefault();
        
    if(e.target.descripcion.value === ""){
      return alert("descripcion requerida")
    }if(e.target.descripcion.value.length > 50){
      return alert("maximo 50 caracteres")
    }

    let NuevaReviews = {
      calificacion: e.target.calificacion.value,
      descripcion: e.target.descripcion.value,
      productId: id.props,
      userId: localStorage.getItem('userId')
    }
    axios.get(`http://localhost:3001/products/${id.props}/review`, {headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}})
    .then(ress => { 
      let arr = ress.data.filter(p => p.user.id == localStorage.getItem('userId'))
      if(arr.length){
        return axios.put(`http://localhost:3001/products/${id.props}/review/${arr[0].id}`, NuevaReviews, {headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}})
        .then(ressponse => {
            console.log(ressponse)
          let Url = "http://localhost:3000/products/" + id.props;
          alert(`modificada`)
          window.location.replace(Url) 
        })
      }
      if(!arr.length){
        return alert( `la review no existe`);
       }
    })
    
    .catch(er => {
      console.log(er)
      alert("Algo salio mal")
    })

  };

  const [input, setInput] = React.useState({
    descripcion: ""
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

  return  (
   <div>

   <form onSubmit={handleSumit} class="adminbox">

    <div> <h1>Edita tu Reviews</h1> </div>

    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Calificacion:</label>
      <div class="col-sm-10">
        <select name ="calificacion">
          <option name ="calificacion" value="5">☆☆☆☆☆</option>
          <option name ="calificacion" value="4">☆☆☆☆</option>
          <option name ="calificacion" value="3">☆☆☆</option>
          <option name ="calificacion" value="2">☆☆</option>
          <option name ="calificacion" value="1">☆</option>
        </select>
        {errors.calificacion && (<p className="danger">{errors.calificacion}</p>)}
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Descripcion</label>
      <textarea className={`${errors.descripcion && 'danger'}`} onChange={handleInputChange} value={input.descripcion}
      type= 'text' placeholder = 'Descripcion de la Reviews' name ="descripcion"></textarea>
      {errors.descripcion && (<p className="danger" >{errors.descripcion}</p>)}
    </div>
  
    <input class="btn btn-danger" type="submit" value="Nueva Reviews" />  <button onClick={handleSumitBorrar} class="btn btn-danger" type="submit">Borrar Review</button>
    
   </form>
  

   </div>
          
  );
}