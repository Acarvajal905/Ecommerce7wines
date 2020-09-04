import React from 'react';
import { Link } from 'react-router-dom'
import "../../Styles/Users.css"
import { connect } from 'react-redux';


const UsersCard = ({ name, email, id, isAdmin }) => (


    <form class="usercard">
        <div class="list-group">
        
            <a href={`roles`} class="list-group-item list-group-item-action active">
                {name}
            </a>
           
            <a href={`roles`} class="list-group-item list-group-item-action">Email: {email}</a>
            <a href={`roles`} class="list-group-item list-group-item-action">Es admin: {isAdmin}</a>

        </div>
    </form>

)


export default connect(null,)(UsersCard)