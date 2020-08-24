import React from "react";
import { Route, Link } from "react-router-dom"
import "../Styles/Home.css"
import NavBar from './NavBar.js'
import Carrusel from './Carrusel.js'
import Minicat from "./Minicatalogo.js"
import Admin from "./CRUD/admin.js"
import Order from "./CRUD/orders";
import CreateCategory from "./CRUD/crearcategoria.js"
import Update from "./CRUD/actualizarproducto"
import DeleteProduct from "./CRUD/borrarproducto.js"
import CreateProduct from './CRUD/crearproducto.js'
import NewUser from "./Usuarios/FormUsuario"
import './Shoppingcart/carrito.css'


export const Home = () => {

  return (
    <div>
      <Link to="/" >
      <header>
        <img href="/" src="https://cdn.discordapp.com/attachments/742768659256180832/747300411764899950/head0.jpg"></img>
      </header>
      </Link>

      <Route
        path="/" component={NavBar} 
      />
      <Route
        exact path="/" component={Carrusel} 
      />
      <Route
        exact path="/" component={Minicat} 
      />
      <Route
       exact path="/account/create/" component={NewUser}
      />
      <Route
        path="/admin" component={Admin}
      />
      <Route
        exact path='/admin/products/ordenes' component={Order}
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

export default Home;