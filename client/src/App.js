import React from 'react';
import Producto  from './components/producto.js'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home.js'
import NavBar from './components/NavBar.js'
import Catalogo from "./components/Catalogo.js"
import { Route } from "react-router-dom"

let tipo = "tinto";

let articulo = [{name: "vino1",
  categories: "tinto",
  price: "$10",
  description: "nadan",
  stock: 2,
  image: "aca hay una foto",
  content: "750cc",
  percentage: "10%",
  country: "argentina",
  colour: "borboña",
  quantity: "nose"},
  
  {name: "vino2",
  categories: "tinto",
  price: "$10",
  description: "nadan",
  stock: 2,
  image: "aca hay una foto",
  content: "750cc",
  percentage: "10%",
  country: "argentina",
  colour: "borboña",
  quantity: "nose"},

  {name: "vino3",
  categories: "tinto",
  price: "$10",
  description: "nadan",
  stock: 2,
  image: "aca hay una foto",
  content: "750cc",
  percentage: "10%",
  country: "argentina",
  colour: "borboña",
  quantity: "nose"},{name: "vino4",
  categories: "tinto",
  price: "$10",
  description: "nadan",
  stock: 2,
  image: "aca hay una foto",
  content: "750cc",
  percentage: "10%",
  country: "argentina",
  colour: "borboña",
  quantity: "nose"},{name: "vino5",
  categories: "tinto",
  price: "$10",
  description: "nadan",
  stock: 2,
  image: "aca hay una foto",
  content: "750cc",
  percentage: "10%",
  country: "argentina",
  colour: "borboña",
  quantity: "nose"},{name: "vino5",
  categories: "tinto",
  price: "$10",
  description: "nadan",
  stock: 2,
  image: "aca hay una foto",
  content: "750cc",
  percentage: "10%",
  country: "argentina",
  colour: "borboña",
  quantity: "nose"},{name: "vino6",
  categories: "tinto",
  price: "$10",
  description: "nadan",
  stock: 2,
  image: "aca hay una foto",
  content: "750cc",
  percentage: "10%",
  country: "argentina",
  colour: "borboña",
  quantity: "nose"},{name: "vino7",
  categories: "tinto",
  price: "$10",
  description: "nadan",
  stock: 2,
  image: "aca hay una foto",
  content: "750cc",
  percentage: "10%",
  country: "argentina",
  colour: "borboña",
  quantity: "nose"},{name: "vino7",
  categories: "tinto",
  price: "$10",
  description: "nadan",
  stock: 2,
  image: "aca hay una foto",
  content: "750cc",
  percentage: "10%",
  country: "argentina",
  colour: "borboña",
  quantity: "nose"},];
  
function onFilter(id) {
    let productoelegido = articulo.filter(p => p.name === id);
    if(productoelegido.length > 0) {
        return productoelegido[0];
    } else {
        return null;
    }
};

function App() {
  return (
    <BrowserRouter>
      <Home />
      <Route
         path="/" component={NavBar}/>
      <Route
        exact path='/products/:id'
        render={({match}) => 
        <Producto props={onFilter(match.params.id)}/>}/>
      <Route
        exact path="/products"
        render={() => <Catalogo producto={articulo} />}/>
    </BrowserRouter>


  );
}

export default App;


