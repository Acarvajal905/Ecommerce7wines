import React from 'react';

export default function CreateProduct(){
  const handleSumit = function(e) {
    e.preventDefault();
    /* Aca va la funcion para editar la bd, creando producto */
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
        <input type= 'text' placeholder = 'Precio' name = 'price'></input>
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
      <input type="submit" value="CREAR PRODUCTO" />

    </form>
  )
};
