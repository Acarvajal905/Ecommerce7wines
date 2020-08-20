import {NEW_PROD} from './src/components/Redux/Actions/index.js'

const initialState = {
    product: {
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
        case NEW_PROD:
      
        return {
          ...state,
          product: action.product 
         
        };
     
    };
};