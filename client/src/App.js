import "./App.css";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import Home from "./components/home/Home";
import GetProduct from "./components/getproduct/GetProduct";
import AddProduct from "./components/addproduct/AddProduct";
import Aboutus from "./components/aboutus/Aboutus";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Contactus from "./components/contactus/Contactus";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/adminDashboard/AdminDashboard";
import AddCategory from "./components/addcategory/AddCategory";
import GetProductAdmin from "./components/getproductAdmin/GetProductAdmin";
import GetCategoryAdmin from "./components/getcategoryAdmin/GetCategoryAdmin";
import SigninAuthRoute from "./protectedRoutes/SigninAuthRoute";
import { useCreateUserStateContext } from "./contextAPIs/userContext";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<SigninAuthRoute> <GetProduct /> </SigninAuthRoute>} />
        <Route path="/cart" element={<SigninAuthRoute><Cart /> </SigninAuthRoute>} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/admin" element={<SigninAuthRoute><AdminDashboard /></SigninAuthRoute>}>
          <Route path="/admin/addcategory" element={<AddCategory />} />
          <Route path="/admin/addproduct" element={<AddProduct />} />
          <Route path="/admin/viewallcategory" element={<GetCategoryAdmin />} />
          <Route path="/admin/viewallproducts" element={<GetProductAdmin />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
