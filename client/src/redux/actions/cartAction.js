import ActionTypes from "../constants/action-types"

// const addToCart = (product) => {
//   return {
//     type: ActionTypes.ADD_PRODUCT,
//     payload: product
//   }
// }

const addToCart = (newProduct) => {
  const user_id = localStorage.getItem("id");
  return async function (dispatch) {
    try {
      const response = await fetch(`http://localhost:3001/order/createorder`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json',
          "Access-Control-Allow-Origin": "http://localhost:3001",
          "Access-Control-Allow-Credentials": "true",
        },
        body: JSON.stringify({
          user_id: user_id,
          product_id: [{ id: newProduct }],
        }),
      });
      const result = await response.json()
      if (response.status = 200) {
        dispatch({ type: ActionTypes.ADD_PRODUCT, payload: result })
        console.log("dispatchResult: ", result)
      }
      else {
        console.log('You are not authorized')
        // dispatch({ type: ActionTypes.SIGNUP_ERR })
      }
    } catch (err) {
      // debugger
    }
  }
}

// const removeFromCart = (product) => {
//   return {
//     type: ActionTypes.REMOVE_PRODUCT,
//     payload: product
//   }
// }


const removeFromCart = (productToRemove, removedData) => {
  const user_id = localStorage.getItem("id");
  return async function (dispatch) {
    try {
      const response = await fetch(`http://localhost:3001/order/removefromcart`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json',
          "Access-Control-Allow-Origin": "http://localhost:3001",
          "Access-Control-Allow-Credentials": "true",
        },
        body: JSON.stringify({
          user_id: user_id,
          product_id: productToRemove._id,
          price: productToRemove.price
        }),
      });
      const result = await response.json()
      if (response.status = 200) {
        dispatch({ type: ActionTypes.REMOVE_PRODUCT, payload: result })
        removedData(true);
        console.log("dispatchRemoveResult: ", result)
      }
      else {
        console.log('You are not authorized')
        // dispatch({ type: ActionTypes.SIGNUP_ERR })
      }
    } catch (err) {
      // debugger
    }
  }
}


export { addToCart, removeFromCart }
