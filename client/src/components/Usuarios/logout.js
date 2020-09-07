import axios from 'axios';

export default function handleSumitSalir(e){
    e.preventDefault();

    let productos;
    
    if(!localStorage.getItem('productos')){
        productos = [];
    }else {
        productos = JSON.parse(localStorage.getItem('productos'));
    }

    let cantidad;

    if(!localStorage.getItem('cantidades')){
          cantidad = [];
       }else {
       cantidad = JSON.parse(localStorage.getItem('cantidades'));
    }
    
    for(let i = 0; i < productos.length; i++){

        for(let j = 0; j < cantidad.length; j++){
    
          if(productos[i].id == cantidad[j][0]){

             let quantity={
                quantity: cantidad[j][1]
              }

              axios.post(`http://localhost:3001/orders/${localStorage.getItem("OrderLSid")}/product/${productos[i].id}`,
                 quantity,
                  {headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}
                })
               .then(response => {
                   console.log("entre a ok")
                   console.log(response)
                })
                .catch (error2 => {
                    console.log(error2);
                   
                }) 
    
            }
        }
    }


    
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('userIsAdmin');
    localStorage.removeItem('productos');
    localStorage.removeItem('cantidades');
    localStorage.removeItem('OrderLSid');

    
     alert("sesion cerrada")
    window.location.href = "/" 
}