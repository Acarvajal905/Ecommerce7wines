import React from "react";
import { Route, Link } from "react-router-dom"
import "../Styles/Home.css"
import NavBar from './NavBar.js'
import NavBarUserIn from './NavBarUser.js'
import NavBarAdmin from './NavBarAdmin.js'
import NavCat from './NavBar2.js'
import Carrusel from './Carrusel.js'
import Minicat from "./Minicatalogo.js"
import Admin from "./CRUD/admin.js"
import Order from "./CRUD/orders";
import CreateCategory from "./CRUD/crearcategoria.js"
import Update from "./CRUD/actualizarproducto2.0"
import AdminProd from "./CRUD/adminproduct.js"
import DeleteProduct from "./CRUD/borrarproducto.js"
import CreateProduct from './CRUD/crearproducto.js'
import './Shoppingcart/carrito.css'
import CreateUser from "./Usuarios/CreateUser.js";
import DeleteUser from "./Usuarios/DeleteUser.js";
import Categorias from './CRUD/testcategory.js';
import LoginScreen from "./Usuarios/LoginScreen.js"
import Profile from "./Usuarios/getperfil.js"
import GetUsers from "./Usuarios/GetUsers.js"
import NavBarUser from "./Usuarios/NavBarUsuarios.js"
import Clientes from "./Usuarios/GetClients.js"
import Admins from "./Usuarios/GetAdmins.js"
import AssignRoles from '../components/Usuarios/AssignRoles.js'



export const Home = () => {

  return (
    <div>
      <Link to="/" >
        <header>
          <img class="head" href="/" src="https://cdn.discordapp.com/attachments/742768659256180832/747300411764899950/head0.jpg"></img>
        </header>
      </Link>

      <Route
        path="/" component={NavBar}
      />
      <Route
        path="/" component={NavBarUserIn}
      />
      <Route
        path="/" component={NavBarAdmin}
      />
      <Route
        exact path="/" component={Carrusel}
      />
      <Route
        exact path="/" component={Minicat}
      />
      <Route
        exact path="/signin/" component={LoginScreen}
      />
      <Route
        exact path="/signin/create" component={CreateUser}
      />
      <Route
        path="/Catalogue" component={NavCat}
      />
      <Route
        path="/admin" component={Admin}
      />
      <Route
        path="/admin/testcategories" component={Categorias}
      />
      <Route
        exact path='/admin/ordenes' component={Order}
      />
      <Route
       path='/admin/products/' component={AdminProd}
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
      <Route
        exact path='/admin/users/roles' component={AssignRoles}
      />
      <Route
        exact path='/admin/users/deleteuser' component={DeleteUser}
      />
      <Route
        path='/admin/listusers' component={NavBarUser}
      />
      <Route
        exact path='/admin/listusers' component={GetUsers}
      />
      <Route
        exact path='/admin/users/listclients' component={Clientes}
      />
      <Route
        exact path='/admin/users/listadmins' component={Admins}
      />
      <Route
        exact path='/me' component={Profile}
      />
      

    </div>

  )
}

export default Home;