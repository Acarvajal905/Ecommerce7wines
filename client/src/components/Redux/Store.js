import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../Redux/Reducers/reducers.js";
import userSigninReducer from "../Redux/Reducers/userReducers.js"

import thunk from "redux-thunk";


const store = createStore(
  rootReducer, userSigninReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;