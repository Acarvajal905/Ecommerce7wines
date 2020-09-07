import '../Shoppingcart/carrito.css'
import React from 'react';
import { Link } from 'react-router-dom'

export default function OrderUser(){
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

  let total = 0;

  for(let i = 0; i< productosCarrito.length; i++){
    total = total + (productosCarrito[i].price * productosCarrito[i].cantidad)
  }

  return(
    <div class="totalboxORDER">
        <h5 class="titulost">COMPRADOR</h5>
        <h5 class="titulost">LISTA DE COMPRA</h5>
      {productosCarrito.map(v=>
      <div> 
        <Link to={`/products/${v.id}`} >  
          <p class="nameprod">{v.name}</p>
        </Link>
        <p class="precioprod">{v.price} x {v.cantidad} = {(v.price * v.cantidad).toFixed(3)} $</p>
      </div>
      )}

      <div class="card-header borders">
        <h2 class="titulost">TOTAL</h2>
        <p class="precioprod total"> {total.toFixed(3)}$</p>
        
      </div>
    </div>
  )
}


