import React, { useState } from "react";
import "../Styles/Cards.css"
import axios from "axios"

export default function SearchBar () {          

    
    const GetProducto= (prod) =>{  
        axios.get (`http://localhost:3001/products/`)
        .then(result => {
            for (let i = 0; i < result.data.length; i++) {
                if(prod === result.data[i].name){
                    console.log(result.data[i])
                    
                    let Url = "http://localhost:3000/products/" + result.data[i].id;
                    window.location.href = Url
                    console.log(Url)
                }
            }
        })
        .catch(err =>{
            console.log(err)
        })
    }    

    const handleInputChange = (e) => {
        const { value } = e.target;
        console.log(value) }

    const handleSumit = function(e) {
        e.preventDefault();        
           console.log(e.target.searchbar.value)
           GetProducto(e.target.searchbar.value)
        };

    return (
        <nav class="navbar navbar-light bg-light">
            <form class="form-inline" onSubmit={handleSumit}>
                <input onChange={ e => handleInputChange(e)} 
                    class="form-control mr-sm-2"
                    type="search"
                    type="text"
                    placeholder="Buscar Producto"
                    name ="searchbar"
                />

                <input class="btn btn-outline-danger" type="submit" value="Buscar..." />               {/* Boton para buscar */}
            </form>
        </nav>
    );
}
