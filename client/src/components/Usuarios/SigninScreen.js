import '../../Styles/SigninScreen.css';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import signin from '../Redux/Actions/userActions'

function SigninScreen(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const { loading, userInfo, error } = userSignin;
    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo) {
            props.push('/');
        }

        return () => {

        };
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password))
    }

    return <div className='form'>
        <form onSubmit={submitHandler}>

            <ul className='form-container'>
                <h2>Iniciar sesión</h2>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlfor='email'>
                        Email
                    </label>
                    <input type='email' name='email' id='email' onChange={(e) => setEmail(e.target.value)}></input>
                </li>
                <li>
                    <label htmlfor='password'>
                        Password
                    </label>
                    <input type='password' name='password' id='password' onChange={(e) => setPassword(e.target.value)}></input>
                </li>
                <li>
                    <button type='submit' class="btn btn-danger">Iniciar sesión</button>
                </li>
                <li>
                    ¿Nuevo en 7Wines?
                </li>
                <li class="nav-item">
                    <Link to={`/users/create`} >
                        <a className='button full-wi'>Crear una cuenta en 7Wines</a>
                    </Link>
                </li>
            </ul>
        </form>
    </div>
}

export default SigninScreen;
