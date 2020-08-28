import React from 'react';
import axios from 'axios';
import '../../Styles/SigninScreen.css';


export function handleSumit3(e) {
    e.preventDefault();

    const x = e.target

    let UCreado = {
        name: x.name.value,
        email: x.email.value,
        password: x.password.value
    };

    for (var prop in UCreado) {
        if (!UCreado[prop]) {
            return alert(`${prop} es requerido`)
        }
    }

    document.getElementById("formulario").reset();

    axios.get(`http://localhost:3001/users/`)
        .then(ress => {
            let arr = ress.data.filter(p => p.email == UCreado.email)
            if (arr.length) {
                alert(`El email ya está en uso`);
            }
            if (!arr.length) {
                axios.post(`http://localhost:3001/users/`, UCreado)
                    .then(response => {
                        console.log(`entre a ok`)
                        alert(`El usuario ha sido creado!`);
                    })
            }
        }).catch(error2 => {
            console.log(error2)
            alert(`Hubo un problema al crear`);
        })
};

export function validate(input) {
    let errors = {};
    if (!input.name) {
        errors.name = 'Name is required';
    } else if (!/\S/.test(input.name)) {
        errors.name = 'Name is invalid';
    } if (!input.password) {
        errors.password = 'Password is required';
    } else if (!/[0-9]/.test(input.password)) {
        errors.password = 'Password is invalid';
    } if (!input.email) {
        errors.email = 'Email is required';
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(input.email)) {
        errors.enail = 'Email is invalid';
    }
    return errors;
};


export default function CreateUser() {

    const [input, setInput] = React.useState({
        name: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = React.useState({});

    const handleInputChange = function (e) {
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
        setInput({
            ...input,
            [e.target.name]: e.target.name
        })
    }


    return <div className='form'>
        <form onSubmit={handleSumit3} id='formulario'>



            <ul className='form-container'>
                <h1>Registrate</h1>
                <li>
                    <label>
                        Nombre
                        </label>
                    <input className={`${errors.name && 'danger'}`} onChange={handleInputChange} value={input.name}
                        type='text' placeholder='Nombre' name="name">
                    </input>


                </li>
                <li>
                    <label>
                        Email
                    </label>
                    <input className={`${errors.email && 'danger'}`} onChange={handleInputChange} value={input.email}
                        type='text' placeholder='Email' >
                    </input>
                </li>
                <li>
                    <label>
                        Contraseña
                        </label>
                    {/* <input type='password' className={`${errors.password && 'danger'}`} onChange={handleInputChange} value={input.password}
                            type='text' placeholder='Email' name="name">
                        </input> */}
                </li>
                <li>
                    <button type='submit' class="btn btn-danger">Iniciar sesión</button>
                </li>
                <li>
                    ¿Nuevo en 7Wines?
                    </li>
                <li class="nav-item">
                    {/* <Link to={`/users/create`} >
                            <a className='button full-wi'>Crear una cuenta en 7Wines</a>
                        </Link> */}
                </li>
            </ul>
        </form>
    </div>

};