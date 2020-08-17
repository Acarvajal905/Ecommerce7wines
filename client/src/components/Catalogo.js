import React, { useEffect, useState } from 'react';
import ProductCard from "./productcard"; 
import "../Styles/Cards.css";
import axios from "axios";

// AJUSTAR PARAMETROS, ESTAN DEFINIDOS PARA LA API

export default function Catalogo(){ 

    //define un estado al componente

 const [CatalogoInfo, setCatalogoInfo] = useState(null) 

         // hace un get a la bd sobre los productos 

 useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/`)
      .then(function (response) {
        setCatalogoInfo(response.data)
        console.log(response.data)
      })
  }, [])  //ese array vacio, limita la actualizacion del componente al montarse

   //retorno el estado y renderizo 
   
   return(                          //Definidos para la api                                                         
    CatalogoInfo  && (             
        <div class="box5">
            { CatalogoInfo.map(v =>  
             <ProductCard 
                name = {v.name}
               /*  categories = {v.categories} */
                price = {v.id}
               /*  description = {v.description}
                stock = {v.stock}
                image = {v.image}
                content = {v.content}
                percentage = {v.percentage}
                country = {v.country}
                colour = {v.colour}
                quantity = {v.quantity} */
                    /> 
                    )
                }
        </div>
    )
   ) 

}