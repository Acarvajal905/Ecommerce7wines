import {UPDATE_PROD} from './src/components/Redux/Actions/index.js'

const initialState = {
    product: {  //DATO DE UN PRODUCTO YA EN LA BASE DE DATOS PREGUNTAR A OLIVER
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
        case UPDATE_PROD:
      
        return {   //COLOCAR LOS DATOS INCRESADOS EN CRUD (?)
          ...state,
          product: action.product 
         
        };
     
    };
};