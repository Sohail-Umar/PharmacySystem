import React from 'react'
import "./Checkout.css"
import pkgDeliver from "../../images/pkgDeliver.jpg"
import checkout from "../../images/checkout.jpg"


const Checkout = () => {
  return (
    <>
      <div className="container-fluid">
        <section
          className="vh-100% mt-5 mb-5"
          style={{ backgroundColor: "#eee" }}
        >
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
                          Checkout
                        </p>

                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                              <label
                                className="form-label"
                                htmlFor="form3Example1c"
                              >
                                Name
                              </label>
                              <input
                                type="text"
                                id="form3Example1c"
                                className="form-control"
                                onChange={(e) => {
                                  // setUserName(e.target.value);
                                }}
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                              <label
                                className="form-label"
                                htmlFor="form3Example3c"
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                id="form3Example3c"
                                className="form-control"
                                onChange={(e) => {
                                  // setEmail(e.target.value);
                                }}
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                              <label
                                className="form-label"
                                htmlFor="form3Example4c"
                              >
                                Contact No:
                              </label>
                              <input
                                type="text"
                                id="form3Example4c"
                                className="form-control"
                                onChange={(e) => {
                                  // setContact(e.target.value);
                                }}
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">

                            <div className="form-outline flex-fill mb-0">
                              <label
                                className="form-label"
                                htmlFor="form3Example4c"
                              >
                                Address:
                              </label>
                              <input
                                type="text"
                                id="form3Example4c"
                                className="form-control"
                                onChange={(e) => {
                                  // setAddress(e.target.value);
                                }}
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                              <label
                                className="form-label"
                                htmlFor="form3Example4c"
                              >
                                Shipping Address:
                              </label>
                              <input
                                type="text"
                                id="form3Example4c"
                                className="form-control"
                                onChange={(e) => {
                                  // setAddress(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          // src={pkgDeliver}
                          src={checkout}
                          className="img-fluid pkg-deliver"
                          alt="Sample image"
                        />
                      </div>
                    </div>


                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button
                        type="button"
                        className="place-order-btn"
                      // onClick={handleSignUp}
                      >
                        Place Order
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section >
      </div >
    </>
  )
}

export default Checkout