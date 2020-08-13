import React from 'react';
import Producto from './components/producto.js'
import { BrowserRouter } from 'react-router-dom'
import Searchbar from './components/searchbar.js'
import Catalogo from "./components/Catalogo.js"

 
function App() {
  return (
    <BrowserRouter>
    <Searchbar />
    <Producto />
    <Catalogo />
  </BrowserRouter>
  );
}

export default App;


