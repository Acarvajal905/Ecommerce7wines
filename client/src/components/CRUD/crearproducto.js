import React from 'react';

export default function  CreateProduct(props) {

  return(
    <form onSubmit = {props.create}>

      <div>

        <h1>Crear Producto</h1>

        <label>Nombre:</label>
        <input type= 'text' placeholder = 'Nombre' name = 'name'></input> 

        <label>Descripcion:</label>
        <input type= 'text' placeholder = 'Descripcion' name = 'description'></input>

        <label>precio:</label>
        <input type= 'text' placeholder = 'Precio' name = 'price'></input>

        <label>Stock:</label>
        <input type= 'text' placeholder = 'Stock' name = 'stock'></input>

        <label>Categories:</label>
        <input type= 'text' placeholder = 'Categoria' name = 'categories'></input>

        <label>Imagen:</label>
        <input type= 'image' placeholder = 'montar imagen' name = 'image'></input>   {/* montar la url de la imagen (?) */}

        <label>Cantidad:</label>
        <input type= 'text' placeholder = 'Cantindad' name = 'quantity'></input>

        <label>Contenido:</label>
        <input type= 'text' placeholder = 'Contenido' name = 'content'></input>

        <label>Grado Alcoholico:</label>
        <input type= 'text' placeholder = 'percentage' name = 'percentage'></input>

        <label>Pais:</label>
        <input type= 'text' placeholder = 'Pais' name = 'country'></input>

        <label>Color:</label>
        <input type= 'text' placeholder = 'Color' name = 'colour'></input>

        <input type="submit" value="CREAR PRODUCTO" /> 

      </div>

    </form>
  )
}