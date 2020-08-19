import React from "react";
import { Route } from "react-router-dom"
import "../Styles/Head.css"
import CreateCategory from "./CRUD/crearcategoria.js"
import Update from "./CRUD/actualizarproducto"
import DeleteProduct from "./CRUD/borrarproducto.js"
import Admin from "./CRUD/admin.js"
import CreateProduct from './CRUD/crearproducto.js'

export const Head = () => {                 

  return (
    <div>
    <header>
      <h1 class="titulo">7wine</h1>
    </header>
          
    <Route
        path="/admin" component={Admin}
      />
      <Route
        exact path='/admin/products/borrarproducto' component={DeleteProduct}
      />
      <Route
        exact path='/admin/products/crearcategoria' component={CreateCategory}
      />
      <Route
        exact path='/admin/products/crearproducto' component={CreateProduct}
      />
        <Route
        exact path='/admin/products/actualizarproducto' component={Update}
      />

    </div>
  )
}

export default Head;