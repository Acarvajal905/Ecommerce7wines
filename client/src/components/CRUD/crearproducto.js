import React from 'react';
import axios from "axios";

export default function CreateProduct(){
  const handleSumit = function(e) {
    e.preventDefault();

    const x = e.target

    let Creado = {
      name: x.name.value,
      description: x.description.value,
      price: x.price.value,
      stock: x.stock.value,
      /* image: x.image.value */
      quantity: x.quantity.value,
      content: x.content.value,
      percentage: x.percentage.value,
      country: x.country.value,
      colour: x.colour.value
    }
    console.log("productor del target", Creado)
    /* Aca va la funcion para editar la bd, creando producto */
    axios.post(`https://jsonplaceholder.typicode.com/posts/`, Creado)
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
      <div> <h1>Crear Producto</h1> </div>
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
        <input type= 'number' placeholder = 'Precio' name = 'price'></input>
      </div>
      <div>
        <label>Stock:</label>
        <input type= 'text' placeholder = 'Stock' name = 'stock'></input>
      </div>
      <div>
        <label>Categories:</label>
        <input type= 'text' placeholder = 'Categoria' name = 'categories'></input>
      </div>
      <div>
        <label>Imagen:</label>
        <input type= 'file' placeholder = 'montar imagen' name = 'image'></input> 
      </div>
      <div>
        <label>Cantidad:</label>
        <input type= 'text' placeholder = 'Cantindad' name = 'quantity'></input>
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
      <input type="submit" value="CREAR PRODUCTO" />

    </form>
  )
};
