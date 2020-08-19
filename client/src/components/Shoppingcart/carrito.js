import React, { useEffect, useState } from 'react';
import '../Shoppingcart/carrito.css'
import axios from 'axios';
import Cartcard from './cartcard';


export default function Carrito() { /* las props las recibe desde catalogo */


    const [CarritoInfo, setCarritoInfo] = useState(null)

    // hace un get a la bd sobre los productos 

    useEffect(() => {
        axios.get(`http://localhost:3001/products`)
            .then(function (response) {
                setCarritoInfo(response.data)
                console.log(response.data)
            })
    }, [])  //ese array vacio, limita la actualizacion del componente al montarse

    return (

        CarritoInfo && (
            <div class="box5">
                {CarritoInfo.map(v =>
                    <Cartcard
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
};
