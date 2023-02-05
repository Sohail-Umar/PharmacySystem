import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useCreateUserStateContext } from "../contextAPIs/userContext";

const SigninAuthRoute = ({ children }) => {
  // const isAuthenticated = useCreateUserStateContext();
  const token1 = localStorage.getItem("user_token")
  const [token, setToken] = React.useState(token1)
  // const navigate = useNavigate()

  if (!token) {
    return <Navigate to="/signin" />;
    // navigate("/signin")
  } else {
    return children;
  }
};

export default SigninAuthRoute;
