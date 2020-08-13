import React, { useState } from "react";

export const SearchBar = ({onSearch}) => {                  /* onSearch es la funcion para app donde buscaremos a la api */
    const [name, setname] = useState("");
    return (

        <form>

            <input                                                 /* caja para escribir producto */
            type="text"
            placeholder="Buscar Producto"
            value={name}
            onChange={e => setname(e.target.value)}
            />

            <input type="submit" value="Buscar..." />               {/* Boton para buscar */}

        </form>
    );
}
export default SearchBar;