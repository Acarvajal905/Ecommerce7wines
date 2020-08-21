import React from 'react';
import Producto from './components/producto.js'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home.js'
import NavBar from './components/NavBar.js'
import Catalogo from "./components/Catalogo.js"
import { Route } from "react-router-dom"
import carrito from './components/Shoppingcart/carrito.js'
import { Provider } from 'react-redux';
import store from "./components/Redux/Store.js";



function App() {
  return (
    <Provider store={store}>
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

    </Provider>
  );
}

export default App;


