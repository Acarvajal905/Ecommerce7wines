export default function RestaUno(e){
    e.preventDefault();

    let idasumar = e.target.restauno.value;

    let cantidades = JSON.parse(localStorage.getItem('cantidades'));

    for(let i = 0; i < cantidades.length; i++){
        
        if(cantidades[i][0] == idasumar){

            if(cantidades[i][1] == 1) {

                alert("Debe borrar el producto")

            }if(cantidades[i][1] > 1){

                cantidades[i][1] = cantidades[i][1] - 1
            }
        }
    }

    console.log(cantidades)

    localStorage.setItem('cantidades', JSON.stringify(cantidades));

    window.location.href = "/carrito"
  
}