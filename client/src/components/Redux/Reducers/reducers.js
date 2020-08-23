import { GET_PRODUCTO, GET_ALL_PRODUCTS, SEARCH_PRODUCT, ADD_TO_CARS} from "../Actions/index.js"

const initialState = {
    allproducts: [],
    product: [],
    searchproduct: [],
    carrito: []
  };

  function rootReducer(state = initialState, action){
    if (action.type === GET_PRODUCTO) {
        return {
          ...state,
          product: action.payload  // modifico product del store, agregando el producto seleccionado
        }  
    } 
    if (action.type === GET_ALL_PRODUCTS){
      return {
        ...state,
        allproducts: action.payload  //modifico allproducts del store, agregando todos los productos de la bd
      }
    }if (action.type === SEARCH_PRODUCT){
      return {
        ...state,
        searchproduct: action.payload  // modifico searchproduct del store, agregando los producto que machean
      }
    }if(action.type === ADD_TO_CARS){
      return{
        ...state,
        carrito: state.carrito.concat(action.payload) // modifico carrito del store, agregando los producto que agrege
      }
    }
    return state
  }



  export default rootReducer;