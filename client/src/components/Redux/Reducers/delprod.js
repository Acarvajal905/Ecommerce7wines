import {DELETE_PROD} from './src/components/Redux/Actions/index.js'

const initialState = {
    product: {  //ACOMODAR EL ESTADO INICIAL ES UN PRODUCTO YA EN LA BASE DE DATOS PREGUNTAR A OLIVER
    name: "",
    description: "",
    price: "",
    stock: "",
    image: "",
    quantity: "",
    content: "",
    percentage: "",
    country: "",
    colour: "",
    url: "",
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case DELETE_PROD:
      
        return {
          ...state, //VACIAR EL ESTADO???? :0
          product: action.product 
         
        };
     
    };
};