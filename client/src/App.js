import React from 'react';
import Producto  from './components/producto.js'
import { BrowserRouter } from 'react-router-dom'
import Searchbar from './components/searchbar.js'
import CreateProduct from './components/CRUD/crearproducto.js'
import Catalogo from "./components/Catalogo.js"
import { Route } from "react-router-dom"
import CreateCategory from "./components/CRUD/crearcategoria.js"
import Update from "./components/CRUD/actualizarproducto.js"
import DeleteProduct from "./components/CRUD/borrarproducto.js"
import Admin from "./components/CRUD/admin.js"

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
  quantity: "nose"}];
  
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
      <Searchbar />

      <Route
      exact path="/admin" component={Admin}
      />

      <Route
      exact path='/admin/products/crearproducto' component={CreateProduct}
      />

      <Route
      exact path='/admin/products/crearcategoria' component={CreateCategory}
      />

      <Route
      exact path='/admin/products/borrarproducto' component={DeleteProduct}
      />

      <Route
      exact path='/admin/products/actualizarproducto' component={Update}
      />

      <Route
        exact path='/products/:id'
        render={({match}) => 
        <Producto props={onFilter(match.params.id)}/>}
      />

      <Route
        exact path="/products"
        render={() => <Catalogo producto={articulo} />}
      />
    </BrowserRouter>


  );
}

export default App;


