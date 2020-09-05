import React, { useState, useEffect } from 'react';
import { UpgradeUser, getAllUser, getuser } from '../Redux/Actions/index.js';
import "../../Styles/CRUD.css"
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import NavBarUser from "./NavBarUsuarios.js"

const Upgrade = () => {

    const [user, setUser] = useState('');
    const [input, setInput] = useState({
        email: "",
        isAdmin: ""
    });
    const allusers = useSelector(state => state.allusers)
    const dispatch = useDispatch()

    function previousValues(e) {
        axios.get(`http://localhost:3001/users/${e}`,{headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(res => {
                console.log(res)
                const c = res.data;
                setUser(e)
                setInput({
                    email: c.email,
                    isAdmin: c.isAdmin.toString(),

                });
            })
            .catch(error => { console.log(error)})
    }

    useEffect(() => {
        dispatch(getAllUser());
        dispatch(getuser());
    }, [getAllUser, getuser])

    function updateUser(e, user) {
        e.preventDefault();
        dispatch(UpgradeUser(user));


        setInput({
            email: "",
            isAdmin: ""
        });
    }

    const handleInputChange = function (e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const filteredUsers = allusers.filter(user => {
        return user.email
    })

    return (
        <form onSubmit={(e) => updateUser(e, user)}>
            <NavBarUser/>
            <div class="adminbox">

                <h1>Asignar Roles</h1>
                <div >
                <select class="nav-item" name="user" onChange={(e) => previousValues(e.target.value)}>
                    <option value="" selected="true">Buscar usuario a promover</option>
                    {filteredUsers && filteredUsers.map(u => {
                        return <option value={u.id} >{u.email}</option>
                    })}
                </select>
                <br></br>
                <input class="btn btn-danger" type="submit" value="Hacer admin" />
                </div>
            </div>
        </form>
    )
}

export default Upgrade;