import React, { useEffect, useState } from 'react';
import ProductCard from "./productcard";
import "../Styles/Cards.css";
import axios from "axios";


// AJUSTAR PARAMETROS, ESTAN DEFINIDOS PARA LA API

export default function Catalogo() {

    //define un estado al componente

    const [CatalogoInfo, setCatalogoInfo] = useState(null)

    // hace un get a la bd sobre los productos 

    useEffect(() => {
        axios.get(`http://localhost:3001/products`)
            .then(function (response) {
                /* setCatalogoInfo(response.data)
                console.log(response.data) */
                setCatalogoInfo(response.data.filter(a => a.stock !== 0))
            })
    }, [])  //ese array vacio, limita la actualizacion del componente al montarse

    //retorno el estado y renderizo 

    return (                          //Definidos para la api                                                         
        CatalogoInfo && (
            <div class="box5">
                {CatalogoInfo.map(v =>
                    <ProductCard
                        name={v.name}
                        id={v.id}
                        description={v.description}
                        price={v.price}
                        stock={v.stock}
                        image={v.image}
                        quantity={v.quantity}
                        content={v.content}
                        percentage={v.percentage}
                        country={v.country}
                        colour={v.colour}
                    />
                )
                }
            </div>
        )
    )

}