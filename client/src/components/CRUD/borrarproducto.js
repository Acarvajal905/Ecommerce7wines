import React from 'react';
import axios from "axios"

export default function  DeleteProduct() {

      //funcion que trae los productos de la bd
  const GetProducto = async (Prod) =>{  
    try{
      const resProd = await axios (`https://jsonplaceholder.typicode.com/posts/`)
      let Buscado= resProd.data.filter(p => p.id == Prod) //para probar busca que el id coinsida
      console.log("me traje ", Buscado)                   //modificar cuando este listo
        return Buscado
     } catch(error){
        console.log(error);
       }
   }

    const handleSumit = function(e) {
        e.preventDefault();
        /* Traigo el producto a eliminar */

        GetProducto(e.target.eliminado.value)

        /* Elimino el producto */
        
        .then(Buscado =>
            axios.delete(`https://jsonplaceholder.typicode.com/posts/${Buscado.id}`))

        .then(response => {
             console.log("entre a ok")
             console.log(response)
            })
        .catch (error2 => {
            console.log(error2);
        }) 
    }
    return (
        <div class="adminbox">
           <form onSubmit={handleSumit}>
              <div> <h1>Borrar Producto</h1> </div>
  
              <div class="form-group row">
                 <label class="col-sm-2 col-form-label">Eliminar:</label>
                 <div class="col-sm-10">
                    <input type= 'text' class="form-control" placeholder = 'Producto a eliminar' name="eliminado"></input>
                 </div>
              </div>
                
              <input class="btn btn-success" type='submit' value='ELIMINAR' />
           </form>
        </div>
        )
    
};