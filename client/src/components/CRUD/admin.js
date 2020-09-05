import React from 'react';
import "../../Styles/CRUD.css"

export default function Admin() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light navadmin">
            <a class="navbar-brand" href="#">ADMIN BAR</a>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">

                    <li class="nav-item">
                        <a class="nav-link" href="/admin/ordenes">Ordenes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin/products/">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin/listusers">Usuarios</a>
                    </li>

                </ul>
            </div>
        </nav>
    )
};