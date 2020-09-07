import '../Shoppingcart/carrito.css'
import React from 'react';
import Prodcart from './orders.js'
import Total from './total.js'


class Carrito extends React.Component {
  render() {
    return (
      <div class="cart">
      <Prodcart/>
      <Total/>
      </div>
    );
  }
}

export default (Carrito);
