import React from 'react';
import "../../Styles/CRUD.css"

export default function NavBarUser() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light navadmin">
            <a class="navbar-brand" href="#">LISTA DE USUARIOS</a>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">

                    <li class="nav-item">
                        <a class="nav-link" href="/admin/users">Todos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin/users/clients">Clientes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin/users/admins">Admins</a>
                    </li>

                </ul>
            </div>
        </nav>
    )
};