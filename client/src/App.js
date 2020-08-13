import React from 'react';
import Producto from './components/producto.js'
import Catalogo from './components/Catalogo.js'
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import Searchbar from './components/searchbar.js'


function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/products" component={Catalogo}/>
      </Switch>
      <Searchbar />
      <Producto />
    </BrowserRouter>


  );
}

export default App;


