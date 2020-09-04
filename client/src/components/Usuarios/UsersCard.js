import React from 'react';
import { Link } from 'react-router-dom'
import "../../Styles/Users.css"
import { connect } from 'react-redux';

const UsersCard = ({ name, email, id, isAdmin }) => (


    <form class="card text-white bg-danger mb-3 usercard">
        <div class="list-group">
            <div class="card-header">{name}</div>
           <div class="card-body">
                <h5 class="card-title">Email: {email}</h5>
                <div class="cartinfo">
                    <p class="card-text">ID: {id}</p>
                    <p class="card-text">Es admin: {isAdmin}</p>
                </div>
           </div>
        </div>
    </form>
)

export default connect(null,)(UsersCard)