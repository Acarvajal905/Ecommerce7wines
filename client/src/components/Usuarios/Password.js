import React, { useState } from 'react';
import { ResetPassword } from '../Redux/Actions/index.js';
import { useDispatch, useSelector } from "react-redux";


const PasswordReset = () => {

    const [errors, setErrors] = useState({ noInputs: 'No hay inputs' });

    const [input, setInputs] = useState({
        password: "",
    });

    const u = useSelector(state => state.user)
    const dispatch = useDispatch()

    function UpdatePassword(e, u, input) {
        e.preventDefault();
        dispatch(ResetPassword(u, input));
        setInputs({
            password: "",
        });
    }

    var danger = {
        marginTop: '7px',
        display: 'block',
        color: 'red',
        fontSize: '13px'
    }

    function isNotEmpty(obj) {
        return Object.keys(obj).length !== 0;
    }


    const handleInputChange = function (e) {
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
        setInputs({
            password: e.target.value
        })
    }


    return (

        <form className="m-5" onSubmit={(e) => UpdatePassword(e, u.id, input)}>

            <div className="form-row m-3">
                <input type="text" class="form-control" placeholder="Contraseña" name="password" onChange={(e) => handleInputChange(e)} />
            </div>
            {errors.name && (<p input={danger}>{errors.name}</p>)}
            <div className="container text-center  d-flex justify-content-center align-items-center">
                <input type="submit" disabled={isNotEmpty(errors)} className="btn btn-warning m-3" value="MODIFICAR CONTRASEÑA" />
            </div>
        </form>
    )
}

export function validate(input) {
    let errors = {};
    if (!input.password) {
        errors.name = 'Contraseña es un campo obligatorio';
    }
    return errors;
}

export default PasswordReset;