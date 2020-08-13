import React from 'react';

export default function  DeleteProduct(props) {
    return(
    <form onSubmit = {props.delete}>
        <div>

            <h1>ELIMINAR Producto</h1>
            
        {/* <select onChange = {(x) =>   
            (x.target.value)}> */}

            <label>ID de producto:</label>
            
            <input type= 'text' value = {product.category.id}></input> 
        {/* </select> */}

            <input type="submit" value="ELIMINAR PRODUCTO" /> 
            
        </div>
    </form>
    )
};