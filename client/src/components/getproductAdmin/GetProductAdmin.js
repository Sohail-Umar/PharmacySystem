import React from "react";
import "./GetProductAdmin.css";
import {
  useCreateProductStateContext,
  useCreateProductDispatchContext,
} from "../../contextAPIs/productContext";
import Modal from "react-modal";

const GetProductAdmin = () => {
  const setProductData = useCreateProductDispatchContext();
  const [resetData, setResetData] = React.useState([]);
  const [specificIDdata, setSpecificIDdata] = React.useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [checkEdit, setCheckEdit] = React.useState(false);
  const [productname, setProductName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [stock, setStock] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");

  const handleChangeCategory = (value) => {
    setCategory(value);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      innerWidth: "10rem",
      // marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const openModal = async (key) => {
    setIsOpen(true);
    const dataOfSpecificID = await getProductbyid(key);
    console.log("dataOfSpecificID", dataOfSpecificID);
    // debugger;
    setSpecificIDdata({ ...dataOfSpecificID });
    console.log("specificIDdata", specificIDdata);
    // debugger;
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setCheckEdit(false);
    setIsOpen(false);
  }

  React.useEffect(() => {
    getProduct();
  }, [resetData]);

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

  const getProductbyid = async (key) => {
    try {
      const response = fetch(`http://localhost:3001/product/${key}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3001",
          "Access-Control-Allow-Credentials": "true",
        },
      });
      const data = await (await response).json();

      // console.log("data api response", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteproduct = async (key) => {
    console.log("button clicked", key);
    try {
      const deletedprod = fetch(
        `http://localhost:3001/product/deleteproduct/${key}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3001",
            "Access-Control-Allow-Credentials": "true",
          },
        }
      );

      const data = await (await deletedprod).json();
      setResetData(data);
      // console.log(data);
      // setProductData.handleProductChange(deletedprod);
    } catch (error) {
      console.log("error in deleted product: ", error);
    }
  };

  const updateProduct = async (key) => {
    try {
      const url = `http://localhost:3001/product/updateproduct/${key}`;
      const responce = await fetch(url, {
        method: "PUT",
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
      setResetData(json);
      setCategory("");
      setDescription("");
      setPrice("");
      setStock("");
      closeModal();
      alert("Product Update successfull");
    } catch (error) {
      console.log("error in Update product: ", error);
    }
  };

  const products = useCreateProductStateContext();
  // const productData = products.productData;

  return (
    <>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div
            style={{ width: "30rem" }}
            className="d-flex justify-content-around"
          >
            <h2>Update Record</h2>
            {checkEdit ? (
              <button
                className="admin-update-btn"
                onClick={() => {
                  setCheckEdit(false);
                }}
              >
                Update
              </button>
            ) : (
              <button
                className="admin-edit-btn"
                onClick={() => {
                  setCheckEdit(true);
                }}
              >
                Edit
              </button>
            )}
          </div>
          <div className="AddNewDialogueBox">
            <div className="d-flex flex-column ">
              {specificIDdata && (
                <>
                  <div>
                    {checkEdit ? (
                      <>
                        <label htmlFor="Name">Name</label>
                        <input
                          type="text"
                          // value={specificIDdata.product_name}
                          placeholder="Product Name"
                          onChange={(e) => {
                            setProductName(e.target.value);
                          }}
                        />
                      </>
                    ) : (
                      <div>Name: "{specificIDdata.product_name}"</div>
                    )}
                  </div>

                  <div>
                    {checkEdit ? (
                      <>
                        <label htmlFor="Description">Description</label>
                        <input
                          type="text"
                          // value={specificIDdata.description}
                          placeholder="Product Description"
                          onChange={(e) => {
                            setDescription(e.target.value);
                          }}
                        />
                      </>
                    ) : (
                      <div>Desc: "{specificIDdata.description}"</div>
                    )}
                  </div>

                  <div>
                    {checkEdit ? (
                      <>
                        <label htmlFor="Stock">Stock</label>
                        <input
                          type="text"
                          // value={specificIDdata.stock}
                          placeholder="Product Name"
                          onChange={(e) => {
                            setStock(e.target.value);
                          }}
                        />
                      </>
                    ) : (
                      <div>Stock: "{specificIDdata.stock}"</div>
                    )}
                  </div>

                  <div>
                    {checkEdit ? (
                      <>
                        <label htmlFor="Price">Price</label>
                        <input
                          type="text"
                          // value={specificIDdata.price}
                          placeholder="Product Name"
                          onChange={(e) => {
                            setPrice(e.target.value);
                          }}
                        />
                      </>
                    ) : (
                      <div>Price: "{specificIDdata.price}"</div>
                    )}
                  </div>

                  <div>
                    {checkEdit ? (
                      <>
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
                                    handleChangeCategory(
                                      "63b6dc13cf19675c8b8dcbd6"
                                    )
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
                      </>
                    ) : (
                      <div className="d-flex flex-row align-items-center mb-4">
                        <button
                          className="btn btn-secondary "
                          id="dropdownMenuButton1"
                          aria-expanded="false"
                        >
                          {specificIDdata.category_id ==
                            "63b6dc13cf19675c8b8dcbd6"
                            ? "Tablets"
                            : specificIDdata.category_id ==
                              "63b6dc1fcf19675c8b8dcbd8"
                              ? "Injections"
                              : specificIDdata.category_id ==
                                "63b6dc2dcf19675c8b8dcbda"
                                ? "Syrups"
                                : "Select category"}
                        </button>
                      </div>
                      // <div>
                      //   Name: "
                      //   {specificIDdata.category_id ==
                      //   "63b6dc2dcf19675c8b8dcbda"
                      //     ? "syrups"
                      //     : specificIDdata.category_id ==
                      //       "63b6dc2dcf19675c8b8dcbda"
                      //     ? "injections"
                      //     : specificIDdata.category_id ==
                      //       "63b6dc2dcf19675c8b8dcbda"
                      //     ? "tablets"
                      //     : "not found"}
                      //   "
                      // </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-evenly mt-4">
            <button className="admin-update-btn" onClick={() => updateProduct(specificIDdata._id)}>
              Update
            </button>
            <button className="admin-dlt-btn" onClick={closeModal}>Close</button>
          </div>
        </Modal>
      </div>

      <div className="container">
        {products.productData.map((product, key) => {
          return (
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

              <div className="update-delete-admin-btns d-flex justify-content-evenly">
                <button className="admin-update-btn" onClick={() => openModal(product._id)}>Update</button>
                <button className="admin-dlt-btn" onClick={() => deleteproduct(product._id)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GetProductAdmin;
