import React from 'react';
import axios from "axios";
import "../../Styles/CRUD.css";


export function validate(input) {
    let errors = {};
 
    if (!input.descripcion) {
      errors.descripcion = 'Description is required';
    } else if (!/\S/.test(input.descripcion)) {
      errors.descripcion = 'Description is invalid';
    } return errors
  }

export default function CrearRewied(id){
    const handleSumit = function(e) {
        e.preventDefault();

        const useremail= e.target.email.value; 
        const usercalificacion= e.target.calificacion.value;
        const userdescripcion= e.target.descripcion.value;
        
        if(userdescripcion === ""){
            return alert("descripcion requerida")
        }if(userdescripcion.length > 50){
            return alert("maximo 50 caracteres")
        }

        axios.get(`http://localhost:3001/users/`,{headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}})
        .then(ress => {
            var user = ress.data.filter(p => p.email === useremail)
            if(user.length){
                var pruevarewies = {
                    calificacion: usercalificacion,
                    descripcion: userdescripcion,
                    productId: id.props,
                    userId: user[0].id
                }
             
               axios.post(`http://localhost:3001/products/${id.props}/review`,{headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}}, pruevarewies) 
               .then(ressponse => {

                let Url = "http://localhost:3000/products/" + id.props;

                alert(`Reviews Creada`)
                window.location.replace(Url)
            })
            }
        })
      /*   .then(ress => {
            axios.get(`http://localhost:3001/products/${id.props}/review`)
            .then(ress2 =>{
                console.log(ress2.data, useremail )

            })
        }) */
        
        .catch (error2 => {
         console.log(error2);
     
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

        
            <form onSubmit={handleSumit}>
                <div> <h1>Crear Reviews</h1> </div>
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
                  <input className={`${errors.descripcion && 'danger'}`} onChange={handleInputChange} value={input.descripcion}
                   type= 'text' placeholder = 'Descripcion de la Reviews' name ="descripcion"></input>
                   {errors.descripcion && (<p className="danger" >{errors.descripcion}</p>)}
              </div>

              <div class="form-group row">
                  <label class="col-sm-2 col-form-label">Email</label>
                  <input type= 'text' placeholder = 'e-mail' name ="email"></input>
              </div>
             
                <input class="btn btn-danger" type="submit" value="Nueva Reviews" />  
             
            </form>
        

    
    );
}