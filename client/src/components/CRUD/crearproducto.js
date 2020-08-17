import React from 'react';
import Admin from './admin';
import "../../Styles/CRUD.css"

export default function CreateProduct(){
  const handleSumit = function(e) {
    e.preventDefault();
    /* Aca va la funcion para editar la bd, creando producto */
 };

 
  return ( 
    <div class="adminbox">
      <Admin/> 
      <form  onSubmit={handleSumit}>
        <div> <h1>Crear Producto</h1> </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Nombre:</label>
          <div class="col-sm-10">
            <input type= 'text' class="form-control" placeholder = 'name'></input>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Descripcion:</label>
          <div class="col-sm-10">
          <textarea class="form-control" placeholder="descripcion"></textarea>

          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Precio:</label>
          <div class="col-sm-10">
            <input type= 'text' class="form-control" placeholder = 'price'></input>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Stock:</label>
          <div class="col-sm-10">
            <input type= 'text' class="form-control" placeholder = 'stock'></input>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Categoria:</label>
          <div class="col-sm-10">
            <input type= 'text' class="form-control" placeholder = 'categories'></input>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Imagen:</label>
          <div class="col-sm-10">
            <input type= 'file' placeholder = 'montar imagen'></input>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Cantidad:</label>
          <div class="col-sm-10">
            <input type= 'text' class="form-control" placeholder = 'quantity'></input>
          </div>
        </div>
      
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Contenido:</label>
          <div class="col-sm-10">
            <input type= 'text' class="form-control" placeholder = 'content'></input>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Grado Alcoholico:</label>
          <div class="col-sm-10">
            <input type= 'text' class="form-control" placeholder = 'percentage'></input>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Pais:</label>
          <div class="col-sm-10">
            <input type= 'text' class="form-control" placeholder = 'country'></input>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Color:</label>
          <div class="col-sm-10">
            <input type= 'text' class="form-control" placeholder = 'colour'></input>
          </div>
        </div>

        <input class="btn btn-success" type="submit" value="CREAR PRODUCTO" />

      </form>
    </div>
  )
};
