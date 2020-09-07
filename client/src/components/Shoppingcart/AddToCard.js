import axios from "axios"


export default function AddToCars(e){
    e.preventDefault();
    axios.get(`http://localhost:3001/products/${e.target.add.value}`,
      {headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}}
    )
    .then(ress => {
        let producto = ress.data;
        let productos;
        let cantidades;
        if(!localStorage.getItem('productos')){
            productos = [];

        }else productos = JSON.parse(localStorage.getItem('productos'))

        if(!localStorage.getItem('cantidades')){
            cantidades = [];

        }else cantidades = JSON.parse(localStorage.getItem('cantidades'))
        
         
        for ( let i = 0 ; i < productos.length; i++){
            if(productos[i].id == producto.id){
               return productos
            }
        }
        productos.push(producto);
        cantidades.push([producto.id , 1 ]);
        localStorage.setItem('cantidades', JSON.stringify(cantidades));

        return productos
    })
    .then(res => {
        localStorage.setItem('productos', JSON.stringify(res));
        
        window.location.href = "/carrito" 
    })
    .catch(error => {
        console.log(error)
    }) 
}