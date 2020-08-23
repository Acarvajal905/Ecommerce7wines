import React from 'react';
import Producto from './components/producto.js'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home.js'
import Catalogo from "./components/Catalogo.js"
import { Route } from "react-router-dom"
import carrito from './components/Shoppingcart/carrito.js'
import ResultSearch from "./components/search.js"


function App() {
  return (
    <BrowserRouter>
      <Home />
      <Route exact path="/search/:id" component={ResultSearch}/>
      <Route exact path='/products/:id' component={Producto}/>
      <Route exact path="/products" component={Catalogo} />
      <Route exact path="/carrito" component={carrito} />
    </BrowserRouter>


  );
}

export default App;


