import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  useCreateUserDispatchContext,
  useCreateUserStateContext,
} from "../../contextAPIs/userContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Navbar = () => {
  const handleUserAuthChange = useCreateUserDispatchContext();
  const token1 = localStorage.getItem("user_token")
  const [token, setToken] = useState(token1)
  const isAuthenticated = useCreateUserStateContext();

  function signout() {
    handleUserAuthChange.handleUserAuthChange(false);
    setToken('')
    localStorage.clear();
    toast.success("Sign in successful!");
    alert("Successfully signout");
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 pharmacy-bg">
            <Link
              to="/"
              style={{ color: "white", fontWeight: "bold" }}
              className="nav-link active"
            >
              <h2 className="pharmacy d-flex ">Pharmacy</h2>
            </Link>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 nav-class-1">
            <nav className="navbar navbar-expand-lg navbar-light nav-class-2 ">
              <div className="container-fluid-xl nav-class-3">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse "
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav nav-class-4">
                    <Link
                      to="/"
                      style={{ color: "white", fontWeight: "bold" }}
                      className="nav-link active"
                      aria-current="page"
                    >
                      Home
                    </Link>
                    <Link
                      to="/products"
                      style={{ color: "white", fontWeight: "bold" }}
                      className="nav-link active"
                      aria-current="page"
                    >
                      Products
                    </Link>
                    <Link
                      to="/aboutus"
                      style={{ color: "white", fontWeight: "bold" }}
                      className="nav-link active"
                      aria-current="page"
                    >
                      About
                    </Link>
                    <Link
                      to="/contactus"
                      style={{ color: "white", fontWeight: "bold" }}
                      className="nav-link active"
                      aria-current="page"
                    >
                      Contact
                    </Link>

                    {token ? (
                      <Link
                        to="/cart"
                        style={{ color: "white", fontWeight: "bold" }}
                        className="nav-link active"
                        aria-current="page"
                      >
                        Cart
                      </Link>
                    ) : ""}

                    {token ? (
                      <button
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          border: "none",
                          backgroundColor: "transparent",
                        }}
                        onClick={() => signout()}
                      >
                        SignOut
                      </button>
                    ) : (
                      <Link
                        to="/signin"
                        style={{ color: "white", fontWeight: "bold" }}
                        className="nav-link active"
                        aria-current="page"
                      >
                        Signin
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
