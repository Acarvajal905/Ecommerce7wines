import React from "react";
import "../Styles/Home.css"
import axios from "axios";
import { Link } from 'react-router-dom'

export const NavCat = () => {

  const [categorias, setCategorias] = React.useState([]);

  React.useEffect(() => {
    axios.get(`http://localhost:3001/category`)
    .then(result => {
      let categories = result.data
      console.log(categories);
      setCategorias(categories);
    })
  }, [])

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light navcat">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarcat">
        <ul class="navbar-nav">
          {categorias.map(v =>
            <Link to={`/Catalogue/`+v.name} >
              <li class="nav-link" name ="categories" value={v.id}>{v.name}</li>
            </Link>
            )
          }
        </ul>
      </div>  
    </nav>
  )
}

export default NavCat;