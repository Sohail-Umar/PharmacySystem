import { combineReducers } from "redux";
import { cartReducer01 } from "./cartReducer"

const reducers = combineReducers(
  {
    allProducts: cartReducer01,
  })

export default reducers