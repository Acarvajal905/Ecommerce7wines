import React from 'react';
import { Link } from 'react-router-dom'
import "../../Styles/Cards.css"
import { connect } from 'react-redux';


const UsersCard = ({ name, id, email }) => (


    <div class="box3">
        <Link to={`/users/${id}`} >
            <h3 class="tituloprod">{name}</h3>
        </Link>
        <Link to={`/users/${id}`} >
            <span class="imagenF" src={email} ></span>
        </Link>


        {/* <Link to={`/carrito`} >
            <button type="button" class="btn btn-danger btn-sm"
                onClick={() => { AddToCars(id); }}>Agregar al carrito</button>
        </Link> */}
    </div>

)


export default connect(null,)(UsersCard)