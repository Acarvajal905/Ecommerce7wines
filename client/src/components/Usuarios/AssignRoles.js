import React, { useState, useEffect } from 'react';
import { UpgradeUser, getAllUser, getuser } from '../Redux/Actions/index.js';
import "../../Styles/CRUD.css"
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';

const Upgrade = () => {

    const [user, setUser] = useState('');
    const [input, setInput] = useState({
        email: "",
        isAdmin: ""
    });
    const allusers = useSelector(state => state.allusers)
    const dispatch = useDispatch()

    function previousValues(e) {
        axios.get(`http://localhost:3001/users/${e}`)
            .then(res => {
                console.log(res)
                const c = res.data;
                setUser(e)
                setInput({
                    email: c.email,
                    isAdmin: c.isAdmin.toString(),

                });
            })
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
            <div>
                {/* <input type='text' placeholder='filtrar usuarios' onChange={(e) => setSearch(e.target.value)} /> */}
                <select name="user" onChange={(e) => previousValues(e.target.value)}>
                    <option value="" selected="true">Buscar</option>
                    {filteredUsers && filteredUsers.map(u => {
                        return <option value={u.id} >{u.email}</option>
                    })}
                </select>
            </div>
            <div>
                <select name="isAdmin" value={input.isAdmin} onChange={handleInputChange}>
                    <option value="" selected="true">
                        Hacer admin
                    </option>
                    <option>true</option>
                    <option>false</option>

                </select>
                <input type="submit" value="Hacer admin" />
            </div>

        </form>
    )
}

// return (
//     <div class="adminbox">
//         <form onSubmit={handleSumit3} id="formulario">
//             <div> <h1>Asigna un rol</h1> </div>

//             <div class="form-group row">
//                 <label class="col-sm-2 col-form-label">Email:</label>
//                 <div class="col-sm-10">
//                     <input onChange={handleInputChange} value={input.email}
//                         type='email' placeholder='Email' name="email">
//                     </input>

//                 </div>
//             </div>


//             <div class="form-group row">
//                 <label class="col-sm-2 col-form-label">Admin:</label>
//                 <div class="col-sm-10">
//                     <input onChange={handleInputChange} value={input.isAdmin}
//                         type='boolean' placeholder='Admin' name="isAdmin">
//                     </input>

//                 </div>
//             </div>

//             <input class="btn btn-danger" type="submit" value="Actualizar" />

//         </form>
//     </div>
// )



export default Upgrade;