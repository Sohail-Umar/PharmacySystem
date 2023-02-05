import ActionTypes from "../constants/action-types";

const initialState = {
  products: []
}

export const cartReducer01 = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_PRODUCT:
      return { ...state, products: [...state.products, payload] }
    case ActionTypes.REMOVE_PRODUCT:
      return { ...state, products: state.products.filter(i => i !== payload) }
    default:
      return { ...state }
  }
}