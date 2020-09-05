

import { GET_PRODUCTO, GET_ALL_PRODUCTS, SEARCH_PRODUCT, ADD_TO_CARS, GET_5_PRODUCTS, GET_PRODUCT_CAT, GET_ALL_ADMINS, GET_ALL_CATEGORY, GET_ALL_USERS, GET_ALL_REVIEWS_PRODUCT, UPDATE_PRODUCT, UPGRADE_USER, GET_ONE_USER, GET_ALL_CLIENTS } from "../Actions/index.js"


const initialState = {
  allproducts: [],
  fiveproducts: [],
  productcat: [],
  product: [],
  searchproduct: [],
  carrito: [],
  allcategories: [],
  allusers: [],
  reviews: [],
  UpgradeUser: [],
  user: [],
  clients:[],
  admins:[]
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_PRODUCTO) {
    return {
      ...state,
      product: action.payload  // modifico product del store, agregando el producto seleccionado
    }
  }
  if (action.type === UPDATE_PRODUCT) {
    return {
      ...state,
      product: state.product.filter(item => item.name !== action.payload.name)

    }
  }
  if (action.type === GET_ALL_PRODUCTS) {
    return {
      ...state,
      allproducts: action.payload  //modifico allproducts del store, agregando todos los productos de la bd
    }

  }
  if (action.type === GET_ALL_USERS) {
    return {
      ...state,
      allusers: action.payload  //modifico allproducts del store, agregando todos los productos de la bd
    }

  }
  if (action.type === GET_5_PRODUCTS) {
    return {
      ...state,
      fiveproducts: action.payload  //modifico allproducts del store, agregando 5 productos de la bd
    }
  }
  if (action.type === GET_PRODUCT_CAT) {
    return {
      ...state,
      productcat: action.payload  //modifico allproducts del store, agregando 5 productos de la bd
    }
  }
  if (action.type === SEARCH_PRODUCT) {
    return {
      ...state,
      searchproduct: action.payload  // modifico searchproduct del store, agregando los producto que machean
    }
  }
  if (action.type === ADD_TO_CARS) {
    return {
      ...state,
      carrito: state.carrito.concat(action.payload) // modifico carrito del store, agregando los producto que agrege
    }
  }
  if (action.type === GET_ALL_CATEGORY) {
    return {
      ...state,
      allcategories: action.payload  //modifico allproducts del store, agregando todos los productos de la bd
    }
  }

  if (action.type === GET_ALL_REVIEWS_PRODUCT) {
    return {
      ...state,
      reviews: action.payload     //Agrego a la store las reviews del producto
    }
  }
  if (action.type === UPGRADE_USER) {
    return {
      ...state,
      UpgradeUser: action.payload
    }
  }
  if (action.type === GET_ONE_USER) {
    return {
      ...state,
      user: action.payload  // modifico product del store, agregando el producto seleccionado
    }
  }
  if (action.type === GET_ALL_CLIENTS) {
    return {
      ...state,
      clients: action.payload  // modifico product del store, agregando el producto seleccionado
    }
  }
  if (action.type === GET_ALL_ADMINS) {
    return {
      ...state,
      admins: action.payload  // modifico product del store, agregando el producto seleccionado
    }
  }
  
  return state
}
  
export default rootReducer;

