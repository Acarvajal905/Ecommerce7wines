import React from 'react';
import axios from "axios";
import "../../Styles/CRUD.css"

export default function CreateProduct(){
  const handleSumit = function(e) {
    e.preventDefault();

    const x = e.target
    //producto creado por el formulario
    let Creado = { 
      name: x.name.value,
      description: x.description.value,
      price: x.price.value,
      stock: x.stock.value,
      image: x.imagen.value,
      quantity: x.quantity.value,
      content: x.content.value,
      percentage: x.percentage.value,
      country: x.country.value,
      colour: x.colour.value,
      url: x.url.value
    }

    console.log("productor del target", Creado)
    /* Aca va la funcion para editar la bd, creando producto */
    axios.post(`http://localhost:3001/products/`, Creado)
    .then(response => {
      console.log("entre a ok")
      window.location.href = "http://localhost:3000/result/ok"
    })
    .catch (error2 => {
      window.location.href = "http://localhost:3000/result/bad";
    }) 
        
 };
 
  return ( 
    <div class="adminbox">
      <form  onSubmit={handleSumit}>
        <div> <h1>Crear Producto</h1> </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Nombre:</label>
          <div class="col-sm-10">
            <input type= 'text' class="form-control" placeholder = 'name' name ="name"></input>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Descripcion:</label>
          <div class="col-sm-10">
          <textarea class="form-control" placeholder="descripcion" name ="description"></textarea>

          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Precio:</label>
          <div class="col-sm-10">
            <input type= 'text' class="form-control" placeholder = 'price' name= "price"></input>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Stock:</label>
          <div class="col-sm-10">
            <input type= 'text' class="form-control" placeholder = 'stock' name="stock"></input>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Imagen:</label>
          <div class="col-sm-10">
            <input type= 'text' placeholder = 'montar imagen' name="imagen"></input>
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
            <input type= 'text' class="form-control" placeholder = 'content' name ="content"></input>
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
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Url:</label>
          <div class="col-sm-10">
            <input type= 'text' class="form-control" placeholder = 'Url' name="url"></input>
          </div>
        </div>

        <input class="btn btn-success" type="submit" value="CREAR PRODUCTO" />

      </form>
    </div>
  )
};
