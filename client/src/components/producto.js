import "../Styles/producto.css";
import axios from "axios";
import React, { useEffect, useState } from 'react';

// AJUSTAR PARAMETROS, ESTAN DEFINIDOS PARA LA API

export default function Producto({ props }) {

    //define un estado al componente 
    const [ProductoInfo, setProductoInfo] = useState(null) 
  
      // hace un get a la bd sobre el id 

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${props}`)
          .then(function (response) {
            setProductoInfo(response.data)
            console.log(response.data)
          })
      }, [props])  //ese array limita el actualizacion del componente una vez trae el solicitado

      
      //retorno el estado y renderizo 
    return (
        ProductoInfo && (       //AGUSTAR PARAMETROS
            <div>
            <div class="box1">
            <h1 class="image">Aca hay una foto</h1>
            </div>
            <div class="box2">
                <h2 class="tittle" > {ProductoInfo.name}</h2>
                <h5 class="description">{ProductoInfo.phone}</h5>
                <span class="price">{ProductoInfo.id}</span>
            </div>
            <ul>
                <li>Stock: {26 * ProductoInfo.id}</li>
                <li>{ProductoInfo.address.suite}</li>
                <li>Grado Alcoholico: {7 * ProductoInfo.id}</li>
                <li>Pais: {ProductoInfo.address.city}</li>
                <li>{14 * ProductoInfo.id} ml/cc</li>
                <li>Color: {ProductoInfo.username}</li>

            </ul>
            </div>

      )
    )
  }



