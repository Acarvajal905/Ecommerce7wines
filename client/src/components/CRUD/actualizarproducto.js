import React from 'react';
import Admin from './admin';
import axios from 'axios'

export default function Update() {
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


    //Funcion que se ejecuta en el Sumit
    const handleSumit = function(e) {
      e.preventDefault();
  
      const x = e.target;
  
      let prod= {
        description: x.description.value, 
        stock: x.stock.value, 
        categories: x.agregarcategories.value,
        quitarcategories: x.quitarcategories.value,
       /*  imagen: x.imagen.value,  */
        content: x.content.value, 
        percentage: x.percentage.value, 
        country: x.country.value, 
        colour : x.colour.value
      }

   /* ejecuto la funcion de bd */
   
    GetProducto(x.name.value)

   /* Empiezo a reemplazar valores */
    
   .then(function(Buscado){
      let Actualizado = Buscado[0];
      
      //agrega una categoria al arreglo de categorias
       
      if(prod.categories){
        let i = Actualizado.categories;
        i[i.length]=prod.categories

      }  //quita una categoria//
      if(prod.quitarcategories){
        let f = Actualizado.categories.indexOf(prod.quitarcategories)
        if(f!== -1){
          Actualizado.categories.splice( f, 1 );
        }  
      
      } //modifica content
      if(prod.content){
        Actualizado.content = prod.content;
      
      } //modifica percenage
      if(prod.percentage){
        Actualizado.percentage = prod.percentage;
      
      } //modifica country
      if(prod.country){
        Actualizado.country = prod.country;
      
      } //modifica colour
      if(prod.colour){
        Actualizado.colour = prod.country;
       
      } // No se que hacer con la imagen

       /* if(prod.imagen){
       Actualizado.imagen = prod.imagen;
      
      } */  //modifica description
      if(prod.description){
        Actualizado.description = prod.description;
      
      } //modifica stock
      if (prod.stock){
        Actualizado.stock = prod.stock;
      
      }
      console.log("retorno el producto actualizado")
      console.log(Actualizado)
      return Actualizado
      
    })
    //envia el produco modificado con un put
    .then( Actualizado => 
      axios.put(`https://jsonplaceholder.typicode.com/posts/${Actualizado.id}`,
      { 
        //Actualizar el artchivo que envia para nuesra bd
        Actualizado
      }) 
      )
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
        <Admin/>
        <form onSubmit={handleSumit}>
        <div> <h1>Actualizar Producto</h1> </div>
          
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Nombre:</label>
          <div class="col-sm-10">
            <input type= 'text' class="form-control" placeholder = 'name' name="name"></input>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Descripcion:</label>
          <div class="col-sm-10">
          <textarea class="form-control" placeholder="descripcion" name="description"></textarea>

          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Precio:</label>
          <div class="col-sm-10">
            <input type= 'text' class="form-control" placeholder = 'price' name="price"></input>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Stock:</label>
          <div class="col-sm-10">
            <input type= 'text' class="form-control" placeholder = 'stock' name="stock"></input>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Agregar Categoria:</label>
          <div class="col-sm-10">
            <input type= 'text' class="form-control" placeholder = 'agregar categories' name="agregarcategories"></input>
          </div>
        </div>
        
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Quitar Categoria:</label>
          <div class="col-sm-10">
            <input type= 'text' class="form-control" placeholder = 'quitar categories' name="quitarcategories"></input>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Imagen:</label>
          <div class="col-sm-10">
            <input type= 'file' placeholder = 'montar imagen' name="image"></input>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Cantidad:</label>
          <div class="col-sm-10">
            <input type= 'text' class="form-control" placeholder = 'quantity' name="quantity"></input>
          </div>
        </div>
      
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Contenido:</label>
          <div class="col-sm-10">
            <input type= 'text' class="form-control" placeholder = 'content' name="content"></input>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Grado Alcoholico:</label>
          <div class="col-sm-10">
            <input type= 'text' class="form-control" placeholder = 'percentage' name="percentage"></input>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Pais:</label>
          <div class="col-sm-10">
            <input type= 'text' class="form-control" placeholder = 'country' name="country"></input>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Color:</label>
          <div class="col-sm-10">
            <input type= 'text' class="form-control" placeholder = 'colour' name="colour"></input>
          </div>
        </div>

        <input class="btn btn-success" type="submit" value="ACTUALIZAR PRODUCTO" />
    
        </form>
        </div>
      )
    };
    