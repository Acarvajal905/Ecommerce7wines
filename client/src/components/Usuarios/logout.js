import axios from "axios"
export default function handleSumitSalir(e){
    e.preventDefault();
    var userId = localStorage.getItem('userId')
    axios.delete(`http://localhost:3001/users/signin/${userId}`, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}})
    
    .then(ress =>{
        
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        localStorage.removeItem('userIsAdmin');
    
        alert("sesion cerrada")
        window.location.href = "/" 
    })
    .catch(error => {
        console.log(error)
    })
}