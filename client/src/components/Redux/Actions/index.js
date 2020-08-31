import axios from "axios"
export const GET_PRODUCTO = "GET_PRODUCTO"
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
export const SEARCH_PRODUCT = "SEARCH_PRODUCT"
export const ADD_TO_CARS = "ADD_TO_CARS"
export const GET_5_PRODUCTS = "GET_5_PRODUCTS"
export const GET_PRODUCT_CAT = "GET_RED_WINE"
export const GET_WHITE_WINE = "GET_WHITE_WINE"
export const GET_ALL_CATEGORY = 'GET_ALL_CATEGORY'
export const GET_ALL_USERS = 'GET_ALL_USERS'
export const GET_ALL_REVIEWS_PRODUCT = "GET_ALL_REVIEWS_PRODUCT"


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



export function getProduct(payload) {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/products/${payload}`)
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
    return axios.get(`http://localhost:3001/products/`)
      .then(response => response.data.filter(a => a.stock !== 0))
      .then(ress => {
        dispatch({ type: GET_ALL_PRODUCTS, payload: ress });  // despacha la accion GET_ALL_PRODUCTS
      })
      .catch(err => {
        console.log(err)
      });
  }
}
//Trae todos los usuarios
export function getAllUser() {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/users/`)
      .then(response => response.data.filter(a => a.email !== 0))
      .then(ress => {
        dispatch({ type: GET_ALL_USERS, payload: ress });  // despacha la accion GET_ALL_PRODUCTS
      })
      .catch(err => {
        console.log(err)
      });
  }
}

//Trae 5 productos al azar de todo el catalogo

export function get5Product() {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/products/`)
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
    return axios.get(`http://localhost:3001/category/${id}`)
      .then(response => prod(response.data))
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
    axios.get(`http://localhost:3001/products/`) //trae todo los productos 
      .then(response => response.data)
      .then(ress => {
        var arr = [];
        for (var i = 0; i < ress.length; i++) {
          if (ress[i].name.includes(payload)) {      // filtrar por coincidencias en el nombre
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

export function AddToCars(payload) {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/products/${payload}`)
      .then(response => {
        dispatch({ type: ADD_TO_CARS, payload: response.data });  // despacha la accion ADD_TO_CARS
      })
      .catch(err => {
        console.log(err)
      });
  }
}

export function getAllCategory() {
  return function (dispatch) {
  return axios.get(`http://localhost:3001/category/`)
    .then(ress => {
      dispatch({ type: GET_ALL_CATEGORY, payload: ress.data });  // despacha la accion GET_ALL_PRODUCTS
    })
    .catch(err => {
      console.log(err)
    });
  }
}

export function getAllReviews(payload){
  return function(dispatch){
    return axios.get(`http://localhost:3001/products/${payload}/review/`)  // despacha la accion GET_ALL_REVIEWS_PRODUCT
    .then(ress =>{
      dispatch({type: GET_ALL_REVIEWS_PRODUCT, payload: ress.data})
    })
    .catch(err =>{
      console.log(err)
    });
  }
}

