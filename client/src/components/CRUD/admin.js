import React from 'react';
import "../../Styles/CRUD.css"

export default function Admin() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light navadmin">
            <a class="navbar-brand" href="#">ADMIN BAR</a>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">

                    <li class="nav-item">
                        <a class="nav-link" href="/admin/products/ordenes">Ordenes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin/products/crearproducto">Crear producto</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin/products/borrarproducto">Borrar producto</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin/products/crearcategoria">Crear categoria </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin/products/actualizarproducto">Actualizar producto </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin/users/roles">Asignar roles</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin/users/">Lista de usuarios</a>
                    </li>

                </ul>
            </div>
        </nav>
    )
};