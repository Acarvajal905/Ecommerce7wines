import React from "react";
import "../Styles/Home.css"
import handleSumitSalir from "./Usuarios/logout.js"
import { Link } from 'react-router-dom'

export const AccountOn = () => {

  return (
      <div class="account">
        <form onSubmit={handleSumitSalir}>
            <Link to={`/me`} >
              <button class="btn btn-danger btn-sm perfilbutton">Perfil</button>
            </Link>
            
            <button class="btn btn-danger btn-sm logoutbutton" type="submit">Cerrar sesión</button>
      </form>
      </div>
  )
}
export default AccountOn;