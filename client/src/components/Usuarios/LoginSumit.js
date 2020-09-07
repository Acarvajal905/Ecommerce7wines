import axios from 'axios';


export default function LoginSumit(e) {
    e.preventDefault();

    const x = e.target

    let Login = {
        email: x.email.value,
        password: x.password.value
    };

    for (var prop in Login) {
        if (!Login[prop]) {
            return alert(`${prop} es requerido`)
        }
    }

    axios.get(`http://localhost:3001/users`)
        .then(ress => {
            let arr = ress.data.filter(u => u.email == Login.email)
            let arrp = ress.data.filter(u => u.password == Login.password)
            if (!arr.length) {
                alert(`El email no existe`)
            }
            if (arrp.length) {
                console.log(arrp.length)
            }
            if (arr.length) {
                axios.post(`http://localhost:3001/users/signin`, Login)
                    .then(response => {

                        localStorage.setItem('userId',response.data.user.id);
                        localStorage.setItem('userName',response.data.user.name);
                        localStorage.setItem('userIsAdmin',response.data.user.isAdmin);
                        localStorage.setItem('token', response.data.token);
                      
                    })
                    .catch(err => {
                        console.log(err)
                        alert(`Usuario o contraseña incorrecta`)
                    })
                    .then(res =>{
                        //las ordenes abiertas solo deberia ser una
                       return axios.get(`http://localhost:3001/orders/users/${localStorage.getItem("userId")}`, {headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}})
                    })
                    .then(ress => { 

                        if(ress.data[0] == null || ress.data[0] == undefined ){ // si no tiene orden habierta
                            axios.post(`http://localhost:3001/users/${localStorage.getItem("userId")}/cart`,"" ,{headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}})
                           
                            .then(res2 =>{
                                console.log(ress, "tienda creada")

                                return axios.get(`http://localhost:3001/orders/users/${localStorage.getItem("userId")}`, {headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}})
                                
                            })
                            .then(res3 => {
                                let OrderNueva = res3.data[0].id // el id de la orden creada para el usuario logeado

                                localStorage.setItem('OrderLSid', JSON.stringify(OrderNueva)); //guardo orderid en ls

                                alert(`Bienvenido a 7 Wines `)
                                window.location.href = "/"
                                
                            })
                            .catch(er => {console.log(er)})
                        }
                        if(ress.data[0]) {

                        let OrderId = ress.data[0].id  // el id de la orden abierta del usuario logeado

                        localStorage.setItem('OrderLSid', JSON.stringify(OrderId)); //guardo orderid en ls

                        // traigo los productos de esa orden
                       return axios.get(`http://localhost:3001/orders/${OrderId}`, {headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}})}
                        
                    })
                    .then(resss => {

                        //tranformo la respues en datos listo para la ls
                        let ProdInOrder = resss.data.products;
                        let ProdParaLS = [];
                        let CantParaLS = [];

                        for( let i = 0; i < ProdInOrder.length; i++){
                            let arr = {};
                            let cant = [];

                            arr.colour = ProdInOrder[i].colour;
                            arr.content = ProdInOrder[i].content;
                            arr.country = ProdInOrder[i].country;
                            arr.createdAt = ProdInOrder[i].createdAt;
                            arr.description = ProdInOrder[i].description;
                            arr.id = ProdInOrder[i].id;
                            arr.image = ProdInOrder[i].image;
                            arr.name = ProdInOrder[i].name;
                            arr.percentage = ProdInOrder[i].percentage;
                            arr.price = ProdInOrder[i].price;
                            arr.route = ProdInOrder[i].route;
                            arr.stock = ProdInOrder[i].stock;
                            arr.updatedAt = ProdInOrder[i].updatedAt;
                            cant.push(ProdInOrder[i].order_product.productId)
                            cant.push(ProdInOrder[i].order_product.cantidad)

                            ProdParaLS.push(arr)
                            CantParaLS.push(cant)
                        }

                        localStorage.setItem('cantidades', JSON.stringify(CantParaLS));

                        localStorage.setItem('productos', JSON.stringify(ProdParaLS));
                        alert(`Bienvenido a 7 Wines `)
                        window.location.href = "/"

                    })
                    .catch(err => {
                        console.log(err)
                        
                    })
            }
        }).catch(error2 => {
            console.log(error2)
            alert(`Usuario o contraseña incorrecta`)
        })
}

/* console.log(JSON.parse(localStorage.getItem('productos')))
console.log(JSON.parse(localStorage.getItem('cantidades'))) */