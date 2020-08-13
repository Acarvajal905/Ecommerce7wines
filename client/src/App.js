import React from 'react';
import Producto from './components/producto.js';
import Catalogo from "./components/Catalogo.js"
/* let tipo = "espumante";

let articulo = [{name: "tinto",
  categories: "vino",
  price: "$10",
  description: "nadan",
  stock: 2,
  image: "aca hay una foto",
  content: "750cc",
  percentage: "10%",
  country: "argentina",
  colour: "borboña",
  quantity: "nose"},
  {name: "blanco",
  categories: "espumante",
  price: "$10",
  description: "nadan",
  stock: 2,
  image: "aca hay una foto",
  content: "750cc",
  percentage: "10%",
  country: "argentina",
  colour: "borboña",
  quantity: "nose"}];
 */
function App() {
  return (
    <React.Fragment>
     {/*  <Catalogo producto={articulo} categoria={tipo}/> */}
      <Producto />
    </React.Fragment>


  );
}

export default App;


