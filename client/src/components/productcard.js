import React from 'react';
import { Link } from 'react-router-dom'
import "../Styles/Cards.css"
import AddToCars from "./Shoppingcart/AddToCard.js"

const ProductCard = ( { name, id, price, image}) =>(

    /* Podemos agregar mas destalles a la vista previa */
 
    <div class="box3">
      <Link to={`/products/${id}`} >  
        <h3 class="tituloprod">{name}</h3>
      </Link>
      <Link to={`/products/${id}`} >
        <img class="imagenF" src={image} ></img>
      </Link>
      <span class="precioprod">{price} $</span> 
      <form onSubmit={AddToCars}>
        <button class="btn btn-danger" type="submit" value={id} name="add">Agregar al carrito</button>
      </form> 
       
    </div>
  )
  

  export default ProductCard