import React from 'react';
import crearproducto from './crearproducto.js';
import borrarproducto from './borrarproducto.js';
import crearcategoria from './crearcategoria.js';
import actualizarproducto from './actualizarproducto.js';
import { Link } from 'react-router-dom';

export default function Admin() {
    return (
        <div>
            <div>
                <Link to='/admin/products/crearproducto'>
                    <button>Crear producto</button>
                </Link>
                <Link to='/admin/products/borrarproducto'>
                    <button>Borrar producto</button>
                </Link>
                <Link to='/admin/products/crearcategoria'>
                    <button>Crear categoria</button>
                </Link>
                <Link to='/admin/products/actualizarproducto'>
                    <button>Actualizar producto</button>
                </Link>

                <div>
                    <Route
                        path='/admin/products/crearproducto'
                        component={crearproducto}
                    />
                    <Route
                        path='/admin/products/borrarproducto'
                        component={borrarproducto}
                    />
                    <Route
                        path='/admin/products/crearcategoria'
                        component={crearcategoria}
                    />
                    <Route
                        path='/admin/products/actualizarproducto'
                        component={actualizarproducto}
                    />
                </div>
            </div>
        </div>
    )
}