import { combineReducers } from 'redux';
import getproduct from './getproduct';
export default combineReducers({
    products: getproduct
});