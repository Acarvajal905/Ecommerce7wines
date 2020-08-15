import React from 'react';
import ProductCard from "./productcard"; /* Ajustar direccion del componente producto */
import "../Styles/Cards.css"

export default function Catalogo({producto , categoria}){ /* recibe un array de objetos de todo los productos y una categoria*/
    if(producto && categoria){
        let ProductoEnCategoria = producto.filter(producto => producto.categories == categoria)

         /* devuelvo un productcard por cada producto que machea con categoria */
    return ( 
        <div >{
            ProductoEnCategoria.map(v =>   /*Capaz haya que reagustar las forma en que recibe las props de la bd */
                <ProductCard 
               name = {v.name}
               categories = {v.categories}
               price = {v.price}
               description = {v.description}
               stock = {v.stock}
               image = {v.image}
               content = {v.content}
               percentage = {v.percentage}
               country = {v.country}
               colour = {v.colour}
               quantity = {v.quantity}
               /> 
               )
            }
            </div>
        );
    
    }if (producto && !categoria){
        return ( 
            <div class="box5">{
                producto.map(v =>  
                    <ProductCard 
                      name = {v.name}
                      categories = {v.categories}
                      price = {v.price}
                      description = {v.description}
                      stock = {v.stock}
                      image = {v.image}
                      content = {v.content}
                      percentage = {v.percentage}
                      country = {v.country}
                      colour = {v.colour}
                      quantity = {v.quantity}
                   /> 
                   )
                }
            </div>
        );
    }
    else 
    return <div>Not Category</div> 
};
