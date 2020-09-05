import React from 'react';
import "../../Styles/CRUD.css"

export default function AdminProd() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light navadmin">
            <a class="navbar-brand" href="#">PRODUCTOS</a>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">

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
                </ul>
            </div>
        </nav>
    ) 
};