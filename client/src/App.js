import React from 'react';
import Producto from './components/producto.js'
import { BrowserRouter } from 'react-router-dom'
import Searchbar from './components/searchbar.js'
import Catalogo from "./components/Catalogo.js"

 let tipo = "tinto";

let articulo = [{name: "tinto",
  categories: "tinto",
  price: "$10",
  description: "nadan",
  stock: 2,
  image: "aca hay una foto",
  content: "750cc",
  percentage: "10%",
  country: "argentina",
  colour: "borboña",
  quantity: "nose"}];
 
function App() {
  return (
    <BrowserRouter>
    <Searchbar />
    <Producto />
    <Catalogo producto={articulo} categoria={tipo}/>
  </BrowserRouter>
  );
}

export default App;


