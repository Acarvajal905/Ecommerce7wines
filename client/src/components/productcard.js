import React from 'react';
import { Link } from 'react-router-dom'
import "../Styles/Cards.css"
import { AddToCars } from './Redux/Actions/index.js';
import { connect } from 'react-redux';


const ProductCard = ( { name, id, description , price , stock , image, quantity, content, percentage , country, colour , AddToCars}) =>(

    /* Podemos agregar mas destalles a la vista previa */
 
    <div class="box3">
      <Link to={`/products/${id}`} >  
        <h3 class="tituloprod">{name}</h3>
      </Link>
      <Link to={`/products/${id}`} >
        <img class="imagenF" src={image} ></img>
      </Link>
      <span class="precioprod">{price} $</span> 

      <Link to={`/carrito`} >
      <button type="button" class="btn btn-danger btn-sm"
      onClick={() =>{ AddToCars(id);}}>Agregar al carrito</button>  
      </Link>
    </div>
    
  )
  

  export default connect(null, { AddToCars })(ProductCard)