import React from 'react';
import Producto from './components/producto.js'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home.js'
import NavBar from './components/NavBar.js'
import Catalogo from "./components/Catalogo.js"
import { Route } from "react-router-dom"
import carrito from './components/Shoppingcart/carrito.js'



function App() {
  return (
    <BrowserRouter>
      <Home />

      <Route
        path="/" component={NavBar} />
      <Route
        exact path='/products/:id'
        render={({ match }) => <Producto props={match.params.id} />}
      />
      <Route exact path="/products" component={Catalogo} />
      <Route exact path="/carrito" component={carrito} />
    </BrowserRouter>


  );
}

export default App;


