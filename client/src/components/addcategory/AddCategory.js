import React from "react";
import "./AddCategory.css";
import carousalimg1 from "../../images/carousalimg1.jpg";
import { useNavigate, Outlet } from "react-router-dom";

const AddCategory = () => {
  const navigate = useNavigate();

  const [categoryname, setCategoryName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const addCategory = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3001/category/addnewcategory";
      const responce = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category_name: categoryname,
          description: description,
        }),
      });
      const json = await responce.json();
      console.log("json: ", json)
      setCategoryName("");
      setDescription("");
      // alert("Category add successfull");
    } catch (error) {
      console.log("addCategoryerror: ", error)
    }
  }

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
                          Add Category !
                        </p>

                        <form className="mx-1 mx-md-4"
                          onSubmit={addCategory}>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                              <label
                                className="form-label"
                                htmlFor="form3Example3c"
                              >
                                Category Name:
                              </label>
                              <input
                                type="email"
                                id="form3Example3c"
                                className="form-control"
                                onChange={(e) => {
                                  setCategoryName(e.target.value);
                                }}
                                required
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
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

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="submit"
                              className="btn-lg add-data-btn"
                            // onClick={addCategory}
                            >
                              Add Category
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
      <Outlet />
    </>
  );
};

export default AddCategory;
