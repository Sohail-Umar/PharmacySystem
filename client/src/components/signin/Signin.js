import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserStateContext,
  useCreateUserDispatchContext,
} from "../../contextAPIs/userContext";
import "./Signin.css";
import carousalimg1 from "../../images/carousalimg1.jpg";
import Navbar from "../navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signin = () => {
  const notify = () => toast("Wow so easy!");
  const navigate = useNavigate();

  const { handleUserAuthChange } = useCreateUserDispatchContext();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const Register = () => {
    navigate("/signup");
  };

  const handleCheckLogin = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3001/user/signin";
      const responce = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const json = await responce.json();
      if (responce.status != 200) {
        alert("Email or Password doesn't belong to thing account")
      }
      console.log(json);
      if (!json.token) {
        return;
      }
      localStorage.setItem("user_token", json.token);
      localStorage.setItem("user_role", json.role);
      localStorage.setItem("id", json.id);
      localStorage.setItem("FirstView", true)
      handleUserAuthChange(true);
      if (json.role === "customer") {
        navigate("/");
      } else if (json.role === "admin") {
        navigate("/admin");
      }
      // toast.success("Sign in successful!");
      // alert("signin successfull")
    } catch (error) {
      // toast.error("Signin Unsuccessfull")
      console.log(error)
    }
  };

  return (
    <>
      <Navbar />
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
                          Sign In
                        </p>

                        <form className="mx-1 mx-md-4"
                          onSubmit={handleCheckLogin}>
                          <div className="d-flex flex-row align-items-center mb-4">
                            {/* <i className="fas fa-envelope fa-lg me-3 fa-fw"></i> */}
                            <div className="form-outline flex-fill mb-0">
                              <label
                                className="form-label"
                                htmlFor="form3Example3c"
                              >
                                Your Email
                              </label>
                              <input
                                type="email"
                                id="form3Example3c"
                                className="form-control"
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                }}
                                required
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            {/* <i className="fas fa-lock fa-lg me-3 fa-fw"></i> */}
                            <div className="form-outline flex-fill mb-0">
                              <label
                                className="form-label"
                                htmlFor="form3Example4c"
                              >
                                Password
                              </label>
                              <input
                                type="password"
                                id="form3Example4c"
                                className="form-control"
                                onChange={(e) => {
                                  setPassword(e.target.value);
                                }}
                                required
                              />
                            </div>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="submit"
                              className="btn-lg add-data-btn"
                            // onClick={handleCheckLogin}
                            >
                              Login
                            </button>
                          </div>
                          <p className="small fw-bold mt-2 pt-1 mb-0">
                            Don't have an account?{" "}
                            <a
                              href="#!"
                              className="link-danger"
                              onClick={() => Register()}
                            >
                              Register
                            </a>
                          </p>
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
