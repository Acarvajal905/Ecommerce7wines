import React from "react";
import "../Styles/Home.css"
import { Link } from 'react-router-dom'

export const Footer = () => {

  return (
    <div>
    <div class="footerbox">
        <div class="footerinfo">
            <h5>Todos los derechos reservados ©</h5>
            <p>PDC Vinos y Licores SAS</p>
            <p>Av. de las Américas # 50 - 80</p>
            <p>Hecho con 💛 por alumnos de <a href="https://www.soyhenry.com/">Henry</a>.</p>
            <p>Henry © 2020 | Todos los derechos reservados.</p>
        
        </div>
        <div class="footerinfo2">
            <h5>¿Quieres formar parte de nuestro equipo?</h5>
            <Link to={`/signin/`} >
              <a class="nav-link" >Registrate con nosotros</a>
            </Link>
            <p>Y contactanos en cualquier medio:</p>
            <p>Teléfono ARG: (9351) 220 2250  //  Teléfono COL: (314) 229 8246</p>
            <p>Correo electronico: contacto@7Wine.com</p>
        </div>
    </div>
    <p class="adv">El exceso de alcohol es perjudicial para la salud. Ley 30 de 1986. Prohíbase el expendio de bebidas embriagantes a menores de edad. Ley 124 de 1994. Los grados de alcohol oscilan entre los 10° y 50° VOL/ALC.</p>
    </div>
  )
}

export default Footer;
