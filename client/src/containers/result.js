import React from 'react';

export default function Result(props) {
   if(props.props === "ok"){
      return( <div> <h1> Producto Creado </h1> </div> )
   }if(props.props === "delete"){
       return (<div>Producto Eliminado</div>)
       
   }
   
   else 
    return ( <div> {console.log(props)}
        <h1>Algo no fue bien</h1></div>)

}