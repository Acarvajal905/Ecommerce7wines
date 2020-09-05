import React from "react";
import "../Styles/Cards.css"

export default function SearchBar () {

    const handleSumit = function(e) {
        e.preventDefault();

        console.log(e.target.searchbar.value)

        let Url = "http://localhost:3000/search/" + e.target.searchbar.value;
        window.location.replace(Url)
    };

    return (

        <nav class="navbar navbar-light bg-light">
            <form class="form-inline" onSubmit={handleSumit}>
                <input 
                    class="form-control mr-sm-2"
                    type="text"
                    placeholder="Buscar Producto"
                    name ="searchbar"
                />

                <input class="btn btn-outline-danger button" type="submit" value="Buscar..." />   
            </form>
        </nav>

    
    );
}
