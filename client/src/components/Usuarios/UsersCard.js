import React from 'react';
import { Link } from 'react-router-dom'
import "../../Styles/Cards.css"
import { connect } from 'react-redux';


const UsersCard = ({ name, email, isAdmin }) => (


    <div >

        <ul>
            <li>
                <h3>{name}</h3>
            </li>
            <li>
                <h3>{email}</h3>
            </li>
            <li>
                <h3>{isAdmin}</h3>
            </li>
        </ul>


        {/* <Link to={`/carrito`} >
            <button type="button" class="btn btn-danger btn-sm"
                onClick={() => { AddToCars(id); }}>Agregar al carrito</button>
        </Link> */}
    </div>

)


export default connect(null,)(UsersCard)