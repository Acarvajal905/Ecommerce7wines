import axios from "axios";

export default function SumarUno(e){
    e.preventDefault();

    let idasumar = e.target.sumauno.value;

    axios.get(`http://localhost:3001/products/${idasumar}`, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
    .then(ress => {
        let stock = ress.data.stock
        let cantidades = JSON.parse(localStorage.getItem('cantidades'));

        for(let i = 0; i < cantidades.length; i++){
            if(cantidades[i][0] == idasumar){
                if(cantidades[i][1]  > stock) {
                    alert("No hay stock")
                
                }
                if(cantidades[i][1] < stock){
                    cantidades[i][1] = cantidades[i][1] + 1
                }
            }
        }

       return cantidades

    })
    .then(ress=>{
        localStorage.setItem('cantidades', JSON.stringify(ress))
        window.location.href = "/carrito"}
    )
    .catch(error => console.log(error))
}