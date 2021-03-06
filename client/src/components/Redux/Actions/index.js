import axios from "axios"
export const GET_PRODUCTO = "GET_PRODUCTO"
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
export const SEARCH_PRODUCT = "SEARCH_PRODUCT"
export const GET_5_PRODUCTS = "GET_5_PRODUCTS"
export const GET_PRODUCT_CAT = "GET_RED_WINE"
export const GET_WHITE_WINE = "GET_WHITE_WINE"
export const GET_ALL_CATEGORY = 'GET_ALL_CATEGORY'
export const GET_ALL_USERS = 'GET_ALL_USERS'
export const GET_ALL_REVIEWS_PRODUCT = "GET_ALL_REVIEWS_PRODUCT"
export const UPDATE_PRODUCT = "UPDATE_PRODUCT"
export const UPGRADE_USER = 'UPGRADE_USER'
export const GET_ONE_USER = 'GET_ONE_USER'
export const GET_ALL_CLIENTS = 'GET_ALL_CLIENTS'
export const GET_ALL_ADMINS = 'GET_ALL_ADMINS'
export const GET_LOGGED_USER = 'GET_LOGGED_USER'
export const RESET_PASSWORD = 'RESET_PASSWORD'

function prod(obj) {
  let x = obj.products
  return (x)
}

function getrandom(array) {
  let product = []
  while (product.length < 5) {
    let j = Math.floor(Math.random() * array.length)
    product.push(array[j])
  }
  return (product)
}

//Traer un producto en especifoco

//Actualizar producto
export function updateProduct(payload) {
  return function (dispatch) {
    const url = `http://localhost:3001/products/${payload.id}`;
    return axios.put(url, payload, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
      .then(res => res.data)
      .then(data => {
        dispatch({ type: UPGRADE_USER, payload: data })
      })
      .then(() => alert('El producto ha sido actualizado'))
      .catch(error => alert(error, 'Algo salió mal al modificar el producto'))
  }
}


export function getProduct(payload) {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/products/${payload}`, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
      .then(response => {
        dispatch({ type: GET_PRODUCTO, payload: response.data });  // despacha la accion GET_PRODUCTO
      })
      .catch(err => {
        console.log(err)
      });
  }
}

//Trae todos los productos

export function getAllProduct() {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/products/`, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
      .then(response => response.data.filter(a => a.stock !== 0))
      .then(ress => {
        dispatch({ type: GET_ALL_PRODUCTS, payload: ress });  // despacha la accion GET_ALL_PRODUCTS
      })
      .catch(err => {
        console.log(err)
      });
  }
}
export function getuser(payload) {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/users/${payload}`, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
      .then(response => {
        dispatch({ type: GET_ONE_USER, payload: response.data });
      })
      .catch(err => {
        console.log(err)
      });
  }
}
//Trae todos los usuarios
export function getAllUser() {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/users/`, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
      .then(response => response.data.filter(a => a.email !== 0))
      .then(ress => {
        dispatch({ type: GET_ALL_USERS, payload: ress });  // despacha la accion GET_ALL_PRODUCTS
      })
      .catch(err => {
        console.log(err)
      });
  }
}
//TRAE AL USUARIO LOGEADO  
export function getLoggedUser(payload) {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/users/signin/${payload}`, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
      .then(response => {
        dispatch({ type: GET_LOGGED_USER, payload: response.data });  // despacha la accion GET_LOGED_USER
      })
      .catch(err => {
        console.log(err)
      });
  }
}

//Trae 5 productos al azar de todo el catalogo

export function get5Product() {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/products/`, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
      .then(response => getrandom(response.data))
      .then(ress => {
        dispatch({ type: GET_5_PRODUCTS, payload: ress });  // despacha la accion GET_ALL_PRODUCTS
      })

      .catch(err => {
        console.log(err)
      });
  }
}

//Trae todos los productos con categoria 

export function getProdCat(id) {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/category/${id}`, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
      .then(response => response.data.products)
      .then(ress => {
        dispatch({ type: GET_PRODUCT_CAT, payload: ress });
      })
      .catch(err => {
        console.log(err)
      });
  }
}

//Buscar productos

export function SearchProduct(payload) {
  return function (dispatch) {
    axios.get(`http://localhost:3001/products/`, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } }) //trae todo los productos 
      .then(response => response.data)
      .then(ress => {
        var arr = [];
        var payloadMayus = payload.toUpperCase();
        for (var i = 0; i < ress.length; i++) {
          if (ress[i].name.toUpperCase().includes(payloadMayus)) {      // filtrar por coincidencias en el nombre
            arr.push(ress[i])
          }
        } return arr;
      })
      .then(arr => {
        dispatch({ type: SEARCH_PRODUCT, payload: arr })  //despacha SEARCH_PRODUCT con los matchs
      })
      .catch(err => {
        console.log(err)
      });
  }
}


export function getAllCategory() {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/category/`, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
      .then(ress => {


        dispatch({ type: GET_ALL_CATEGORY, payload: ress.data });  // despacha la accion GET_ALL_PRODUCTS
      })
      .catch(err => {
        console.log(err)
      });

  }
}

export function getAllReviews(payload) {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/products/${payload}/review/`, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })  // despacha la accion GET_ALL_REVIEWS_PRODUCT
      .then(ress => {
        dispatch({ type: GET_ALL_REVIEWS_PRODUCT, payload: ress.data })
      })
      .catch(err => {
        console.log(err)
      });
  }
}

export function UpgradeUser(payload) {
  return function (dispatch) {
    axios.put(`http://localhost:3001/users/promote/${payload}`, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
      .then((res) => res.data)
      .then(data => {
        dispatch({ type: UPGRADE_USER, payload: data });
      })
      .then(() => alert('Se dieron/quitaron privilegios de Administrador'))
      .catch(error => alert(error, 'Error fatal'))
  }
}

//RESET PASSWORD
export function ResetPassword(id, input) {
  return function (dispatch) {
    const url = `http://localhost:3001/users/${id}/passwordReset`;
    return axios.put(url, input, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
      .then(res => res.data)
      .then(data => {
        dispatch({ type: RESET_PASSWORD, payload: data })
      })
      .then(() => alert('La contraseña ha sido cambiada'))
      .catch(error => alert(error, 'Algo salió mal al modificar la Contraseña'))
  }
}

export function getAllAdmins() {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/users/`)
      .then(response => response.data.filter(a => a.isAdmin !== false))
      .then(ress => {
        console.log(ress)
        dispatch({ type: GET_ALL_ADMINS, payload: ress });  // despacha la accion GET_ALL_PRODUCTS
      })
      .catch(err => {
        console.log(err)
      });
  }
}

export function getAllClients() {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/users/`)
      .then(response => response.data.filter(a => a.isAdmin !== true))
      .then(ress => {
        console.log(ress)
        dispatch({ type: GET_ALL_CLIENTS, payload: ress });  // despacha la accion GET_ALL_PRODUCTS
      })
      .catch(err => {
        console.log(err)
      });
  }
}