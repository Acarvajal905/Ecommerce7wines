import React from 'react';

export default function Update() {

    const handleSumit = function(e) {
        e.preventDefault();
        const x = e.target;
        let nameproducto= x.name.value;

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

     /* Aca va la funcion para traer los producto de la bd */
           //arreglo de prueba//
      let productobd = [{name: "vino1",
      categories: ["tinto"],
      price: "$10",
      description: "nadan",
      stock: 2,
      image: "aca hay una foto",
      content: "750cc",
      percentage: "10%",
      country: "argentina",
      colour: "borboña",
      },
      
      {name: "vino2",
      categories: ["tinto"],
      price: "$10",
      description: "nadan",
      stock: 2,
      image: "aca hay una foto",
      content: "750cc",
      percentage: "10%",
      country: "argentina",
      colour: "borboña",
      }];; // devuelve un arreglos con productos //

      let productoacambiar= productobd.filter(p => p.name == nameproducto);/* filtramos el producto */

          //agrega una categoria al arreglo de categorias
      if(prod.categories){
        let i = productoacambiar[0].categories;
        i[i.length]=prod.categories

      }
          //quita una categoria//
      if(prod.quitarcategories){
        let f = productoacambiar[0].categories.indexOf(prod.quitarcategories)
        if(f!== -1){
          productoacambiar[0].categories.splice( f, 1 );
        }

      }if(prod.content){
        productoacambiar[0].content = prod.content;
      }if(prod.percentage){
        productoacambiar[0].percentage = prod.percentage;
      }if(prod.country){
        productoacambiar[0].country = prod.country;
      }if(prod.colour){
        productoacambiar[0].colour = prod.country;
      } /* if(prod.imagen){
        productoacambiar[0].imagen = prod.imagen;
      } */  if(prod.description){
        productoacambiar[0].description = prod.description;
      }if (prod.stock){
        productoacambiar[0].stock = prod.stock;
      };

      // funcion para enviar el put a la bd//
      console.log(productoacambiar);
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
    