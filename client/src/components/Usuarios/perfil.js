import React from 'react';
import { Link } from 'react-router-dom'
import "../../Styles/Users.css"
import { connect } from 'react-redux';
import OrderUser from "./OrderUser.js"


const Perfilcart = ({ name, email, id, isAdmin }) => (


    <form class="perfilbox">
        <div>
            <div class="list-group">
                <h2 class="card-header">{name}</h2>
                <div class="card-body">
                    <h5 class="card-title">Email: {email}</h5>
                    <div class="cartinfo">
                        <p class="card-text">ID: {id}</p>
                        <p class="card-text">Es admin: {isAdmin}</p>
                    </div>
                    <div class="but-container">
                        <p class="card-text">
                            <Link to={`${id}/passwordReset`} >
                                <button type='submit' class="btn btn-danger"> Cambiar contraseña</button>
                            </Link>
                        </p>
                        <p class="card-text">
                            <Link to={`${id}/userorder`} >
                                <button type='submit' class="btn btn-danger"> Ordenes</button>
                            </Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </form>
)

export default connect(null,)(Perfilcart)