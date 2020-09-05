import React from 'react';
import "../Styles/Reviews.css";
import axios from "axios"

export default function Reviews ({calificacion, descripcion, createdAt, userId}) {

  const [usuariorew, setUser] = React.useState([]);

  React.useEffect(() => {
    axios.get(`http://localhost:3001/users`,{headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}})
    .then(result => {
      let usuario = result.data.filter(p => p.id === userId)
    
      setUser(usuario[0].name.substr(0,10));
    })
  }, [])

    const condicion = calificacion;
  return (
    <div class="boxrew">
      <div>
        <div>
          {/* renderizado condicional segun la calificacion de la reviews */}

          {(condicion === 5) &&  <h1>☆☆☆☆☆</h1>}
          {(condicion === 4) &&  <h1>☆☆☆☆</h1>}
          {(condicion === 3) &&  <h1>☆☆☆</h1>}
          {(condicion === 2) &&  <h1>☆☆</h1>}
          {(condicion === 1) &&  <h1>☆</h1>}

        </div>
        <p class="description">{descripcion.substr(0,25)}</p>
        <p class="description">{descripcion.substr(26,25)}</p>                      {/* Descripcion de la reviews */}
        <div>{usuariorew + "."} {createdAt.substr(8,2)}-{createdAt.substr(5,2)} </div> {/* Usuario, sino tiene setea anonimo y la fecha de creacion */}
      </div>
    </div>
  );
};