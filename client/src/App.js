import React from 'react';
import Producto from './components/producto.js'
import { BrowserRouter } from 'react-router-dom'
import Searchbar from './components/searchbar.js'
import CreateProduct from './components/CRUD/crearproducto.js'


function App() {
  return (
    <BrowserRouter>
      <Searchbar />
      <CreateProduct/>
      <Producto />
    </BrowserRouter>


  );
}

export default App;


