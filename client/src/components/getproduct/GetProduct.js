import React from "react";
import "./GetProduct.css";
import {
  useCreateProductStateContext,
  useCreateProductDispatchContext,
} from "../../contextAPIs/productContext";
import Navbar from "../navbar/Navbar";
import { addToCart } from "../../redux/actions/cartAction";
import { useDispatch } from "react-redux";

const GetProduct = () => {

  const dispatch = useDispatch()
  const setProductData = useCreateProductDispatchContext();

  const [selectedcategory, setSelectedCategory] = React.useState({});

  // const handleChangeCategory = (value) => {
  //   setSelectedCategory(value);
  // };

  React.useEffect(() => {
    setSelectedCategory(getProduct());
  }, []);

  const getProduct = async () => {
    try {
      const response = fetch("http://localhost:3001/product/getallproducts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3001",
          "Access-Control-Allow-Credentials": "true",
        },
      });
      const data = await (await response).json();

      // console.log("data api response", data);

      await setProductData.handleProductChange(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const products = useCreateProductStateContext();
  // const productData = products.productData;

  return (
    <>
      <Navbar />
      <div className="container">
        {/* <div>{selectedcategory && selectedcategory[0]}lkjlsakdjf </div> */}
        {/* {selectedcategory && selectedcategory} */}
        {products.productData
          // .filter((value, key) => value.category_id == selectedcategory)
          .map((product, key) => {
            return (
              <div className="">
                <div className="block-container">
                  <p className="data-props duration-color">
                    <span className="span-headings">Product name: </span>
                    {product.product_name}
                  </p>
                  <p className="data-props duration-color">
                    <span className="span-headings"> Category: </span>
                    {product.category_id
                      ? product.category_id.category_name
                      : "Category not found"}
                  </p>
                  <p className="data-props duration-color">
                    <span className="span-headings">Description: </span>
                    {product.description}
                  </p>
                  <p className="data-props duration-color">
                    <span className="span-headings">Stock: </span>
                    {product.stock}
                  </p>
                  <p className="data-props duration-color">
                    <span className="span-headings">Price: </span>
                    {product.price}
                  </p>
                  <button className="add-to-cart" onClick={() => dispatch(addToCart(product._id))} >Add to Cart</button>
                  {/* <button className="add-to-cart">Buy</button> */}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default GetProduct;
