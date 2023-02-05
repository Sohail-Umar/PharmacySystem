import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserStateContext,
  useCreateUserDispatchContext,
} from "../../contextAPIs/userContext";
import "./AddProduct.css";
import carousalimg1 from "../../images/carousalimg1.jpg";

const Signin = () => {
  const navigate = useNavigate();

  const { handleUserAuthChange } = useCreateUserDispatchContext();
  const [productname, setProductName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [stock, setStock] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");

  const handleChangeCategory = (value) => {
    setCategory(value);
  };

  const addProduct = async (e) => {
    e.preventDefault();
    // if (email === '') {
    //     setIsEmailValid(true);
    // }

    const url = "http://localhost:3001/product/addnewproduct";
    const responce = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_name: productname,
        description: description,
        stock: stock,
        price: price,
        category_id: category,
      }),
    });
    const json = await responce.json();
    console.log(json);
    if (!json.token) {
      return;
    }
    // localStorage.setItem('customer_token', json.token);
    handleUserAuthChange(true);
    setCategory("");
    setDescription("");
    setPrice("");
    setStock("");
    // console.log(isAuthenticated);
    // navigate('/');
    alert("Product add successfull");
  };

  return (
    <>
      <div className="container-fluid">
        <section className="vh-100%" style={{ backgroundColor: "#eee" }}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div
                  className="card text-black"
                  style={{ borderRadius: "25px" }}
                >
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Add Product !
                        </p>

                        <form className="mx-1 mx-md-4"
                          onSubmit={addProduct}>
                          <div className="d-flex flex-row align-items-center mb-4">
                            {/* <i className="fa fa-envelope fa-lg me-3 fa-fw"></i> */}
                            <div className="form-outline flex-fill mb-0">
                              <label
                                className="form-label"
                                htmlFor="form3Example3c"
                              >
                                Product Name:
                              </label>
                              <input
                                type="email"
                                id="form3Example3c"
                                className="form-control"
                                onChange={(e) => {
                                  setProductName(e.target.value);
                                }}
                                required
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            {/* <i className="fa fa-lock fa-lg me-3 fa-fw"></i> */}
                            <div className="form-outline flex-fill mb-0">
                              <label
                                className="form-label"
                                htmlFor="form3Example4c"
                              >
                                Description:
                              </label>
                              <input
                                type="text"
                                id="form3Example4c"
                                className="form-control"
                                onChange={(e) => {
                                  setDescription(e.target.value);
                                }}
                                required
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            {/* <i className="fa fa-lock fa-lg me-3 fa-fw"></i> */}
                            <div className="form-outline flex-fill mb-0">
                              <label
                                className="form-label"
                                htmlFor="form3Example4c"
                              >
                                Stock
                              </label>
                              <input
                                type="number"
                                id="form3Example4c"
                                className="form-control"
                                onChange={(e) => {
                                  setStock(e.target.value);
                                }}
                                required
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            {/* <i className="fa fa-lock fa-lg me-3 fa-fw"></i> */}
                            <div className="form-outline flex-fill mb-0">
                              <label
                                className="form-label"
                                htmlFor="form3Example4c"
                              >
                                Price
                              </label>
                              <input
                                type="number"
                                id="form3Example4c"
                                className="form-control"
                                onChange={(e) => {
                                  setPrice(e.target.value);
                                }}
                                required
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            {/* <i className="fa fa-lock fa-lg me-3 fa-fw"></i> */}
                            <div className="dropdown">
                              <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                {category == "63b6dc13cf19675c8b8dcbd6"
                                  ? "Tablets"
                                  : category == "63b6dc1fcf19675c8b8dcbd8"
                                    ? "Injections"
                                    : category == "63b6dc2dcf19675c8b8dcbda"
                                      ? "Syrups"
                                      : "Select category"}
                              </button>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton1"
                              >
                                <li>
                                  <a
                                    className="dropdown-item"
                                    value={"tablets"}
                                    href="#"
                                    onClick={() =>
                                      handleChangeCategory("63b6dc13cf19675c8b8dcbd6")
                                    }
                                  >
                                    Tablets
                                  </a>
                                </li>
                                {console.log(category)}
                                <li>
                                  <a
                                    className="dropdown-item"
                                    value={"injections"}
                                    href="#"
                                    onClick={() => {
                                      handleChangeCategory(
                                        "63b6dc1fcf19675c8b8dcbd8"
                                      );
                                    }}
                                  >
                                    Injections
                                  </a>
                                </li>
                                {console.log(category)}

                                <li>
                                  <a
                                    className="dropdown-item"
                                    value={"syrups"}
                                    href="#"
                                    onClick={() => {
                                      handleChangeCategory(
                                        "63b6dc2dcf19675c8b8dcbda"
                                      );
                                    }}
                                  >
                                    Syrups
                                  </a>
                                </li>
                                {console.log(category)}
                              </ul>
                            </div>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="submit"
                              className="btn-lg add-data-btn"
                            // onClick={addProduct}
                            >
                              Add Product
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          src={carousalimg1}
                          className="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Signin;
