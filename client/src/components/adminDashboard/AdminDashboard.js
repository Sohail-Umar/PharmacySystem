import React from "react";
import "./AdminDashboard.css";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useCreateUserDispatchContext } from "../../contextAPIs/userContext";

const AdminDashboard = () => {
  const handleUserAuthChange = useCreateUserDispatchContext();
  const navigate = useNavigate();

  const signout = () => {
    console.log("Button clicked")
    handleUserAuthChange.handleUserAuthChange(false);
    localStorage.clear()
    alert("Signout Successfull")
    navigate("/signin");
    // return <Navigate to="/signin" />;
  };

  return (
    <>
      <div className="col-lg-12 col-md-12 col-sm-12 pharmacy-bg">
        <Link
          to="/"
          style={{ color: "white", fontWeight: "bold" }}
          className="nav-link active"
        >
          <h2 className="pharmacy d-flex ">Pharmacy</h2>
        </Link>
      </div>

      <div className="col-lg-12 col-md-12 col-sm-12 nav-class-1">
        <nav className="navbar navbar-expand-lg navbar-light admin-nav-class-2">
          <div className="container-fluid-xl admin-nav-class-3">
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
            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
              <div className="navbar-nav admin-nav-class-4">
                <Link
                  to="/admin"
                  style={{ color: "white", fontWeight: "bold" }}
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  to="/admin/addcategory"
                  style={{ color: "white", fontWeight: "bold" }}
                  className="nav-link active"
                  aria-current="page"
                >
                  Add Category
                </Link>
                <Link
                  to="/admin/addproduct"
                  style={{ color: "white", fontWeight: "bold" }}
                  className="nav-link active"
                  aria-current="page"
                >
                  Add Product
                </Link>
                <Link
                  to="/admin/viewallproducts"
                  style={{ color: "white", fontWeight: "bold" }}
                  className="nav-link active"
                  aria-current="page"
                >
                  View All Products
                </Link>
                <Link
                  to="/admin/viewallcategory"
                  style={{ color: "white", fontWeight: "bold" }}
                  className="nav-link active"
                  aria-current="page"
                >
                  View All Categories
                </Link>

                <button
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                  onClick={() => signout()}
                >
                  Signout
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <h1>WELCOME TO ADMIN DASHBOARD</h1>

      {/* <div className="col-lg-12">
        <h1>Admin Dashboard</h1>
      </div> */}
      <Outlet />
    </>
  );
};

export default AdminDashboard;
