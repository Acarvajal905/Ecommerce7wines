import '../Shoppingcart/carrito.css'
import React from 'react';
import Comprar from "./Comprar.js"


export default function Total(){
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
    <div class="totalbox">
      
      <h5 class="titulost">Productos:</h5>

      {productosCarrito.map(v=>

      <p class="precioprod">{v.price * v.cantidad} $</p>)}

      <h2 class="titulost">TOTAL:</h2>

      <p class="precioprod"> {total}$</p>
      
      <form  onSubmit={Comprar} >
        <button class="btn btn-danger" type="submit" value={total} name="Comprar">COMPRAR</button>
      </form>

    </div>
  )
}



