import React from 'react';
import Producto from './components/producto.js'
import { BrowserRouter } from 'react-router-dom'
import Searchbar from './components/searchbar.js'


function App() {
  return (
    <BrowserRouter>
      <Searchbar />
      <Producto />
    </BrowserRouter>


  );
}

export default App;


