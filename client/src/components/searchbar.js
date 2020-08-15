import React, { useState } from "react";
import "../Styles/Cards.css"

export const SearchBar = ({ onSearch }) => {                  /* onSearch es la funcion para app donde buscaremos a la api */
    const [name, setname] = useState("");
    return (
      
        <nav class="navbar navbar-light bg-light">
        <form class="form-inline">
           
            <input  class="form-control mr-sm-2"   type="search" aria-label="Search"                                                 /* caja para escribir producto */
                type="text"
                placeholder="Buscar Producto"
                value={name}
                onChange={e => setname(e.target.value)}
            />

            <input  class="btn btn-outline-success my-2 my-sm-0" type="submit" value="Buscar..." />               {/* Boton para buscar */}
        
        </form>
        </nav>
       
    );
}
export default SearchBar;