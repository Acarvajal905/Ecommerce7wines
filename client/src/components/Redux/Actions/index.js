import axios from "axios"
export const GET_PRODUCTO = "GET_PRODUCTO"
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
export const SEARCH_PRODUCT = "SEARCH_PRODUCT"
export const ADD_TO_CARS = "ADD_TO_CARS"

//Traer un producto en especifoco

export function getProduct(payload){                  
  return function(dispatch) {
    return axios.get(`http://localhost:3001/products/${payload}`)
    .then(response => {
      dispatch({ type: GET_PRODUCTO, payload: response.data });  // despacha la accion GET_PRODUCTO
    })
    .catch(err =>{
      console.log(err)
    });
  } 
}

//Trae todos los productos

export function getAllProduct(){
  return function(dispatch){
    return axios.get(`http://localhost:3001/products/`)
    .then(response => response.data.filter(a => a.stock !== 0))
    .then(ress => {
      dispatch({ type: GET_ALL_PRODUCTS, payload: ress});  // despacha la accion GET_ALL_PRODUCTS
    })
    .catch(err =>{
      console.log(err)
    });
  }
}

//Buscar productos

export function SearchProduct(payload){
  return function(dispatch){
    axios.get(`http://localhost:3001/products/`) //trae todo los productos 
    .then(response => response.data)
    .then(ress =>
      {var arr=[];
        for (var i = 0; i< ress.length; i++){
         if(ress[i].name.includes(payload)){      // filtrar por coincidencias en el nombre
         arr.push(ress[i])}
        }return arr;
      })
    .then(arr => {
      dispatch({ type: SEARCH_PRODUCT, payload: arr})  //despacha SEARCH_PRODUCT con los matchs
    })
    .catch(err =>{
      console.log(err)
    });
  }
}

export function AddToCars(payload){
  return function(dispatch){
    return axios.get(`http://localhost:3001/products/${payload}`)
    .then(response => {
      dispatch({ type: ADD_TO_CARS, payload: response.data });  // despacha la accion ADD_TO_CARS
    })
    .catch(err =>{
      console.log(err)
    });
  }
}