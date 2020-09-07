export default function handleSumitSalir(e){
    e.preventDefault();
        
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('userIsAdmin');
    localStorage.removeItem('productos');
    localStorage.removeItem('cantidades');

    
    alert("sesion cerrada")
    window.location.href = "/" 
    
 
}