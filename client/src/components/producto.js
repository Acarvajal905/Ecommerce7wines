import "../Styles/producto.css";
import axios from "axios";
import React, { useEffect, useState } from 'react';

// AJUSTAR PARAMETROS, ESTAN DEFINIDOS PARA LA API

export default function Producto({ props }) {

    //define un estado al componente 
    const [ProductoInfo, setProductoInfo] = useState(null) 
  
      // hace un get a la bd sobre el id 
      //http://localhost:3001/products/:id
    useEffect(() => {
        axios.get(`http://localhost:3001/products/${props}`)
          .then(function (response) {
            setProductoInfo(response.data)
            console.log(response.data)
          })
      }, [props])  //ese array limita el actualizacion del componente una vez trae el solicitado

      
      //retorno el estado y renderizo 
    return (
      ProductoInfo && (       //AJUSTAR PARAMETROS
        <div>
          <div class="box1">
            <div class="box2">
              <h1 class="image">Aca hay una foto</h1>
              <div class="boxD">
                <h1 class="tittle" > {ProductoInfo.name}</h1>

                <p class="description">{ProductoInfo.description}</p>

                <span class="price">{ProductoInfo.price} $</span>

                <ul>
                  <li>Stock: {ProductoInfo.stock}</li>
                  {/* <li>{ProductoInfo.route}</li> */}
                  <li>Grado Alcoholico: {7 * ProductoInfo.percentage}</li>
                  <li>Pais: {ProductoInfo.country}</li>
                  <li>{ProductoInfo.content} ml/cc</li>
                  <li>Color: {ProductoInfo.colour}</li>
                </ul>
              </div>
            </div>
          </div>
        </div> 
      )
    )
  }



