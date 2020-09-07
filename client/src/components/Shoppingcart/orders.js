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

            <form onSubmit={DeleteToCard}>
              <button  type="submit" value={v.id} name="delete">x</button>
            </form>

            <form onSubmit={RestaUno}>
              <button class="btn btn-danger" type="submit" value={v.id} name="restauno">-</button>
            </form>
              <a class="page-link" >{v.cantidad}</a>
            <form onSubmit={SumarUno}>
              <button class="btn btn-danger" type="submit" value={v.id} name="sumauno">+</button>
            </form>

          </div>
        )}
      </div>
    );

}
