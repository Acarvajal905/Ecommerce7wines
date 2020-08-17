import React from 'react';
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

     /* ejecuto la funcion de bd  */
     
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
        <form onSubmit={handleSumit}>
          <div> <h1>Actualizar Producto</h1> </div>
          <div>
            <label>Nombre:</label>
            <input type= 'text' placeholder = 'Nombre' name = 'name'></input>
          </div>
          <div>
            <label>Descripcion:</label>
            <input type= 'text' placeholder = 'Descripcion' name = 'description'></input>
          </div>
          <div>
            <label>Precio:</label>
            <input type= 'text' placeholder = 'Precio' name = 'price'></input>
          </div>
          <div>
            <label>Stock:</label>
            <input type= 'text' placeholder = 'Stock' name = 'stock'></input>
          </div>
          <div>
            <label>Agregar Categories:</label>
            <input type= 'text' placeholder = 'Categoria' name = 'agregarcategories'></input>
          </div>
          <div>
            <label>Quitar Categories:</label>
            <input type= 'text' placeholder = 'Categoria' name = 'quitarcategories'></input>
          </div>
          <div>
            <label>Imagen:</label>
            <input type= 'text' placeholder = 'montar imagen' name = 'image'></input> 
          </div>
          <div>
            <label>Contenido:</label>
            <input type= 'text' placeholder = 'Contenido' name = 'content'></input>
          </div>
          <div>
            <label>Grado Alcoholico:</label>
            <input type= 'text' placeholder = 'percentage' name = 'percentage'></input>
          </div>
          <div>
            <label>Pais:</label>
            <input type= 'text' placeholder = 'Pais' name = 'country'></input>
          </div>
          <div>
            <label>Color:</label>
            <input type= 'text' placeholder = 'Color' name = 'colour'></input>
          </div>
          <input type="submit" value="ActualizarProducto" />
    
        </form>
      )
    };
    