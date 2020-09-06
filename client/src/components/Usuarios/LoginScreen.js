import '../../Styles/SigninScreen.css';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export function handleSumit3(e) {
    e.preventDefault();

    const x = e.target

    let Login = {
        email: x.email.value,
        password: x.password.value
    };

    for (var prop in Login) {
        if (!Login[prop]) {
            return alert(`${prop} es requerido`)
        }
    }

    axios.get(`http://localhost:3001/users`)
        .then(ress => {
            let arr = ress.data.filter(u => u.email == Login.email)
            let arrp = ress.data.filter(u => u.password == Login.password)
            if (!arr.length) {
                alert(`El email no existe`)
            }
            if (arrp.length) {
                console.log(arrp.length)
            }
            if (arr.length) {
                axios.post(`http://localhost:3001/users/signin`, Login)
                    .then(response => {

                        localStorage.setItem('userId',response.data.user.id);
                        localStorage.setItem('userName',response.data.user.name);
                        localStorage.setItem('userIsAdmin',response.data.user.isAdmin);
                        localStorage.setItem('token', response.data.token);
                        
                        console.log(localStorage.getItem('userId'))
                        console.log(localStorage.getItem('userName'))
                        console.log(localStorage.getItem('userIsAdmin'))
                        console.log(localStorage.getItem('token'))
                      
                        alert(`Bienvenido a 7 Wines `)
                        window.location.href = "/"; 
                    }).catch(err => {
                        console.log(err)
                        alert(`Usuario o contraseña incorrecta`)
                    })
            }
        }).catch(error2 => {
            console.log(error2)
            alert(`Usuario o contraseña incorrecta`)
        })
}

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
        errors.email = 'Email is invalid';
    } return errors;
};

export default function LoginUser() {

    const [input, setInput] = React.useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = React.useState({});
    const handleInputChange = function (e) {
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

    }

   let condicion = localStorage.getItem('userIsAdmin');
   if( condicion === "false" || condicion === "true"){window.location.href = "/"}

    return (
        
        <div className='adminbox'>
            
            <form onSubmit={handleSumit3} id="formulario">

                <ul className='form-container'>
                    <h2>Iniciar sesión</h2>
                    <li>
                        <label htmlfor='email'>
                            Email
                        </label>
                        <input className={`${errors.email && 'danger'}`} onChange={handleInputChange} value={input.email}
                            type='email' placeholder='Email' name="email">
                        </input>


                    </li>
                    <li>
                        <label htmlfor='password'>
                            Password
                    </label>
                        <input className={`${errors.password && 'danger'}`} onChange={handleInputChange} value={input.password}
                            type='password' placeholder='Password' name="password">
                        </input>

                    </li>
                    <li>
                        <button type='submit' class="btn btn-danger">Iniciar sesión</button>
                    </li>
                    <li>
                        ¿Nuevo en 7Wines?
                </li>
                    <li class="nav-item">
                        <Link to={`/signin/create`} >
                            <a className='button full-wi'>Crear una cuenta en 7Wines</a>
                        </Link>
                    </li>
                </ul>
            </form>
        </div>
    )
}

