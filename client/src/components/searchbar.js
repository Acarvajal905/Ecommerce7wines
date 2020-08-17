import React from "react";
import axios from "axios"

export default function SearchBar () {          

    const GetProducto = async (Prod) =>{  /* GetProducto se encarga de buscar en bd */
        try{
                                            /* Agustar la direccion de la bd */
            const resProd = await axios (`https://jsonplaceholder.typicode.com/users/`) /* Aca trae todos los productos de la bd */
            
            let Buscado= resProd.data.filter(p => p.name == Prod)  /* Hace un filtrado para buscar en producto que se busca */
            console.log(Buscado[0].id)

            let Url = "http://localhost:3000/products/" + Buscado[0].id;  /* Genera el link segun el id */

            console.log(Url)

            window.location.href = Url /*  Redirecciona a la url para que machee la app y renderice el producto */


        } catch(error){
            console.log(error);
        }
    }

    const handleSumit = function(e) {
        e.preventDefault();
        /* Aca va la funcion buscar en la bd */
           GetProducto(e.target.searchbar.value)
      };

    return (

        <form onSubmit={handleSumit}>

            <input                                             /* caja para escribir producto */
                type="text"
                placeholder="Buscar Producto"
                name ="searchbar"
                ></input>
                

            <input type="submit" value="Buscar..." />              {/* Boton para buscar  */}

        </form>
    );
}
