import React from 'react';
import axios from "axios";
import "../../Styles/CRUD.css"

// funcion del sumit
export function handleSumit2(e) {
    e.preventDefault();

    const x = e.target
    //producto creado por el formulario
    let Creado = {
        name: x.name.value,
        email: x.email.value,
        password: x.password.value,

    };

    for (var prop in Creado) {
        if (!Creado[prop]) {
            return alert(`${prop} es requerido`)
        }
    }

    document.getElementById("formulario").reset();
    //Me traigo los productos de la bd

    axios.get(`http://localhost:3001/users/`)
        .then(ress => {

            let arr = ress.data.filter(p => p.email == Creado.email)
            if (arr.length) {
                alert(`El email  ya esta en uso`);
            }
            if (!arr.length) {

                /* Aca va la funcion para editar la bd, creando producto */
                axios.post(`http://localhost:3001/users/`, Creado)
                    .then(response => {
                        console.log("entre a ok")
                        alert(`Bienvenido a 7Wines`);
                        window.location.href = "/signin/";
                    })
            }
        })
        .catch(error2 => {
            console.log(error2)
            alert(`Hubo un problema al crear`);
        })
};
// Valido el input
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


export default function CreateUser() {

    //asigno estados

    const [input, setInput] = React.useState({
        name: '',
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
            [e.target.name]: e.target.value
        })
    }


    return (
        <div class="adminbox">
            <form onSubmit={handleSumit2} id="formulario">
                <div> <h1>Crear Usuario en 7Wines</h1> </div>

                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Nombre:</label>
                    <div class="col-sm-10">
                        <input className={`${errors.name && 'danger'}`} onChange={handleInputChange} value={input.name}
                            type='text' placeholder='Nombre' name="name">
                        </input>
                        {errors.name && (<p className="danger">{errors.name}</p>)}
                    </div>
                </div>


                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Email:</label>
                    <div class="col-sm-10">
                        <input type='email' className={`${errors.email && 'danger'}`} onChange={handleInputChange} value={input.email}
                            placeholder='Email' name="email">
                        </input>
                        {errors.email && (<p className="danger">{errors.email}</p>)}
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Contraseña:</label>
                    <div class="col-sm-10">
                        <input type='password' className={`${errors.password && 'danger'}`} onChange={handleInputChange} value={input.password}
                            placeholder='Contraseña' name="password">
                        </input>
                        {errors.password && (<p className="danger">{errors.password}</p>)}
                    </div>
                </div>

                <input class="btn btn-danger" type="submit" value="CREAR CUENTA" />

            </form>
        </div>
    )
};
