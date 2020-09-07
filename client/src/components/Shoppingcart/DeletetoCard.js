export default function DeleteToCard(e){
    e.preventDefault();

    let idborrado = e.target.delete.value;

    let productos = JSON.parse(localStorage.getItem('productos'));

    let restante= productos.filter(a => a.id != idborrado)

    localStorage.setItem('productos', JSON.stringify(restante));

    window.location.href = "/carrito"
  
}