import '../Shoppingcart/carrito.css'
import React from 'react';
import { Link } from 'react-router-dom'
import DeleteToCard from "./DeletetoCard.js"
import SumarUno from "./SumarUno.js"
import RestaUno from "./RestaUno.js"

export default function Prodcart () {
  let cantidad;

  if(!localStorage.getItem('cantidades')){
    cantidad = [];
  }else {
    cantidad = JSON.parse(localStorage.getItem('cantidades'));
  }

  let productosCarrito; 

  if(!localStorage.getItem('productos')){
    productosCarrito = [];
  }else {
    productosCarrito = JSON.parse(localStorage.getItem('productos'));
  }

 

  

  for(let i = 0; i < productosCarrito.length; i++){

    for(let j = 0; j< cantidad.length; j++){

      if(productosCarrito[i].id == cantidad[j][0]){

        productosCarrito[i].cantidad = cantidad[j][1]

      }
    }
 }
     
  
    return (
      <div class="boxcart"> 
        {productosCarrito.map(v =>

          <div class="boxorder">
        
            <Link to={`/products/${v.id}`} >
              <img class="imagencart" src={v.image} ></img>
            </Link>
            
            <Link to={`/products/${v.id}`} >  
              <h3 class="tituloprod">{v.name}</h3>
            </Link>

            <span class="precioprod">{v.price} $</span> 

            <div class="btn-group" role="group" aria-label="Basic example">
              <form onSubmit={RestaUno}>
                <button type="button" class="btn btn-danger" type="submit" value={v.id} name="restauno">-</button>
              </form>
              <a type="button" class="page-link">{v.cantidad}</a>
              <form onSubmit={SumarUno}>
                <button type="button" class="btn btn-danger" type="submit" value={v.id} name="sumauno">+</button>
              </form>
            </div>

            <form onSubmit={DeleteToCard}>
              <button class="btn btn-danger btn-sm" type="submit" value={v.id} name="delete">Eliminar</button>
            </form>

          </div>
        )}
      </div>
    );

}
