import React from "react";
import "../Styles/Home.css"
import { Link } from 'react-router-dom'


export const NavCat = () => {

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light navcat">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarcat">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to={`/Catalogue/VinoTinto`} >
            <a class="nav-link" >Vino Tinto</a>
            </Link>
          </li>
          <li class="nav-item">
            <Link to={`/Catalogue/VinoBlanco`} >
            <a class="nav-link" >Vino Blanco</a>
            </Link>
          </li>
        </ul>   
      </div>
      
    </nav>
  )
}

export default NavCat;