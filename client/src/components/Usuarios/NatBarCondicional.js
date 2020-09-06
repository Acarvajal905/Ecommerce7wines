import React from 'react';
import { Route, Link } from "react-router-dom"
import NavBarUserIn from '../NavBarUser.js'
import NavBarAdmin from "../NavBarAdmin.js"
import NavBar from "../NavBar"


export default function NatBarCondicional (){
    
   let condicion = localStorage.getItem('userIsAdmin');

   return (
       <div>
           {condicion === "false" && <Route path="/" component={NavBarUserIn}/>}
           {condicion === "true" && <Route path="/" component={NavBarAdmin}/>}
           {condicion === null && <Route path="/" component={NavBar}/>}
       </div>
   )
}