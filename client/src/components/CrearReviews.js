import React from 'react';
import axios from "axios";
/* import "../../Styles/CRUD.css"; */

export default function CrearRewied(id){
    const handleSumit = function(e) {
        e.preventDefault();

        const useremail= e.target.email.value; 
        const usercalificacion= e.target.calificacion.value;
        const userdescripcion= e.target.descripcion.value;

        axios.get(`http://localhost:3001/users/`)
        .then(ress => {
            var user = ress.data.filter(p => p.email === useremail)
            if(user.length){
                var pruevarewies = {
                    calificacion: usercalificacion,
                    descripcion: userdescripcion,
                    productId: id.props,
                    userId: user[0].id
                }
               axios.post(`http://localhost:3001/products/${id.props}/review`, pruevarewies) 
            } else 
            var pruevarewies2 = {
                   calificacion: usercalificacion,
                    descripcion: userdescripcion,
                    productId: id,
            }
            axios.post(`http://localhost:3001/products/${id.props}/review`, pruevarewies)
        })
        .then(ressponse => {
            console.log(ressponse)
        })
    .catch (error2 => {
      console.log(error2);
     
    }) 
  
    };


    return  (

        
            <form onSubmit={handleSumit}>
                <div> <h1>Crear Reviews</h1> </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">Calificacion</label>
                  <input type= 'text' placeholder = 'Calificacion 1 al 5' name ="calificacion"></input>
              </div>
              <div class="form-group row">
                  <label class="col-sm-2 col-form-label">Descripcion</label>
                  <textarea type= 'text' placeholder = 'Descripcion de la Reviews' name ="descripcion"></textarea>
              </div>

              <div class="form-group row">
                  <label class="col-sm-2 col-form-label">Email</label>
                  <input type= 'text' placeholder = 'e-mail' name ="email"></input>
              </div>

                <input class="btn btn-danger" type="submit" value="Nueva Reviews" />   
            </form>
        

    
    );
}