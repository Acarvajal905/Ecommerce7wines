import React from 'react';
import "../Styles/Reviews.css";

export default function Reviews ({calificacion, descripcion, createdAt, userId}) {

  console.log(userId)
  console.log(createdAt)
 
    const condicion = calificacion;
  return (
    <div class="box2">
      <div class="boxD">
        <div>
          {/* renderizado condicional segun la calificacion de la reviews */}

          {(condicion === 5) &&  <h1>☆☆☆☆☆</h1>}
          {(condicion === 4) &&  <h1>☆☆☆☆</h1>}
          {(condicion === 3) &&  <h1>☆☆☆</h1>}
          {(condicion === 2) &&  <h1>☆☆</h1>}
          {(condicion === 1) &&  <h1>☆</h1>}

        </div>
        <div>{descripcion}</div>                       {/* Descripcion de la reviews */}
        <div>{userId || "anonimo"} {createdAt.substr(0,10)} </div> {/* Usuario, sino tiene setea anonimo y la fecha de creacion */}
      </div>
    </div>
  );
};