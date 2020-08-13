import React from 'react';
import "../Styles/producto.css"


export const Producto = ({ name, image, description, price, stock, content, percentage, country, quantity, colour }) => {
    return (
        <div class="box1">

            <img class="image">{image}</img>

            <div class="box2">

                <h2 class="tittle" >PEREZ PASCUAS GRAN SELECCION  {name}</h2>
                <h5 class="description">Icono de crecimiento, tradición edía la ps la región más sobresaliente; y aunque la tradición de vino en España tiene más de 2000 años de historia, no fue si no hasta mediados de los años 80 algunas bodegas se encargaron de demostrar el potencial de la región al consumidor. En el año 1982 nueve productores de la Ribera del Duero se agruparon, obteniendo la denominación de Origen (D.O.), desde ese momento la región ha florecido y hoy en día cuenta con más de 300 bodegas. La cepa tradicional de la región es el tempranillo, conocido localmente como Tinto Fino y se adecua perfectamente a las condiciones climáticas locales que se caracterizan por fuertes veranos e inviernos extremos. Muchos aclaman los vinos de estar región por su audaz estructura y aromas ahumados, que destacan notas a higo seco y tomate dulce, cereza y ciruela con especias de cedro, clavo de olor, tabaco, eneldo, vainilla y cuero.{description}</h5>
                <span class="price">{price}29.99 $</span>
                <ul>
                    <li>Stock: {stock}</li>
                    <li>{content}</li>
                    <li>Grado Alcoholico: {percentage}</li>
                    <li>Pais: {country}</li>
                    <li>{quantity} ml/cc</li>
                    <li>Color: {colour}</li>

                </ul>

            </div>

        </div>
    );
}
export default Producto;