import axios from "axios";

export default function Comprar(e){
    e.preventDefault();
    console.log(e.target.Comprar.value)
 
    // se manda req al servidor con las compras totales//
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

    // se cambia el estatus de la compra

    let status={
        'status': 'procesando'
    }

    axios.put(`http://localhost:3001/orders/${localStorage.getItem("OrderLSid")}`,
     status,
      {headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}
    })
    .then(response => {
      console.log("entre a ok")
      console.log(response)
    })
    .catch (error2 => {
     console.log(error2);
    }) 
    

    // se reseta el ls 

    let cero = []

    localStorage.setItem('productos', JSON.stringify(cero));
    localStorage.setItem('cantidades', JSON.stringify(cero));

    // se crea una nueva orden de compra

    axios.post(`http://localhost:3001/users/${localStorage.getItem("userId")}/cart`,"" ,{headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}})
    .then(res2 =>{
        console.log(res2, "tienda creada")

        return axios.get(`http://localhost:3001/orders/users/${localStorage.getItem("userId")}`, {headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}})
        
    })
    .then(res3 => {
        let OrderNueva = res3.data[0].id // el id de la orden creada para el usuario logeado

        localStorage.setItem('OrderLSid', JSON.stringify(OrderNueva)); //guardo orderid en ls

        alert (`Gracias por su compra a 7 Wines `)
        
        window.location.href = "/"
        
    })
    .catch(er => {console.log(er)})






}