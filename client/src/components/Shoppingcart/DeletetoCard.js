import axios from 'axios'
export default function DeleteToCard(e){
    e.preventDefault();

    let idborrado = e.target.delete.value;

    let productos = JSON.parse(localStorage.getItem('productos'));

    let restante= productos.filter(a => a.id != idborrado)

    localStorage.setItem('productos', JSON.stringify(restante));

    axios.delete(`http://localhost:3001/orders/${localStorage.getItem("OrderLSid")}/products/${idborrado}`,
     'Bearer',
      {headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}
    })

    .then(response => {
        console.log("entre a ok")
        console.log(response)
        window.location.href = "/carrito"
    }) 
    .catch (error2 => {
        console.log(error2);
        window.location.href = "/carrito" 
    }) 
    window.location.href = "/carrito"
  
}