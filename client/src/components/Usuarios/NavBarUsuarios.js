import React from 'react';
import "../../Styles/CRUD.css"

export default function NavBarUser() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light navadmin">
            <a class="navbar-brand" href="#">LISTA DE USUARIOS</a>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">

                    <li class="nav-item">
                        <a class="nav-link" href="/admin/listusers">Todos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin/users/listclients">Clientes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin/users/listadmins">Admins</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin/users/roles">Asignar roles</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin/users/deleteuser">Eliminar usuarios</a>
                    </li>

                </ul>
            </div>
        </nav>
    )
};