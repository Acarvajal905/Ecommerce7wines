import axios from "axios"
export default function handleSumitSalir(e){
    e.preventDefault();
        
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('userIsAdmin');
    
    alert("sesion cerrada")
    window.location.href = "/" 
    
 
}