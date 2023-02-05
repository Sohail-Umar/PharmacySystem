import React from "react";
import "./Cart.css";
import Navbar from "../navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  useCreateCartDispatchProvider,
  useCreateCartStateContext,
} from "../../contextAPIs/cartContext";
import { removeFromCart } from "../../redux/actions/cartAction";


const Cart = () => {

  const dispatch = useDispatch()
  const setCartData = useCreateCartDispatchProvider();
  const cartData = useCreateCartStateContext();

  const [isLoading, setIsLoading] = React.useState(false)
  const [removedData, setRemovedData] = React.useState(false)


  React.useEffect(() => {
    getCartProduct();
  }, [removedData]);

  const getCartProduct = async () => {
    try {
      const user_id = localStorage.getItem("id");
      const response = fetch(
        `http://localhost:3001/order/getcartorders/?user_id=${user_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3001",
            "Access-Control-Allow-Credentials": "true",
          },
        }
      ).then(response => response.json())
        .then(data => {
          setCartData.handleCartChange(data);
          console.log(cartData);
          setIsLoading(true);

        })
        .catch(error => {
          console.error('Error:', error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="col-lg-12 d-flex">
          {/* {cartData.cartData?.length */}
          {isLoading
            ? cartData.cartData?.product_id.map((value, index) => {
              return (
                <>
                  <div className="">
                    <div className="block-container">
                      <p className="data-props duration-color">
                        <span className="span-headings">Product name: </span>
                        {value.product_name}
                      </p>
                      <p className="data-props duration-color">
                        <span className="span-headings">Product Price: </span>
                        {value.price}
                      </p>
                      <button className="add-to-cart" onClick={() => dispatch(removeFromCart(value, setRemovedData))} >Remove to Cart</button>
                    </div>
                  </div>
                </>
              );
            })
            : "No Products In Cart"}
        </div>

        <div className="col-lg-2">
          <div className="check-out mt-3">
            Order Price: {cartData.cartData?.price}
          </div>
        </div>

        <div className="col-lg-12 mb-5">
          <Link to="/checkout">
            <button className="check-out mt-3">Proceed to Check-Out</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
