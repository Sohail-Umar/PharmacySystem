import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./contextAPIs/productContext";
import { UserProvider } from "./contextAPIs/userContext";
import { Provider } from "react-redux";
import store from "./redux/store";
import { CartProvider } from "./contextAPIs/cartContext";
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <UserProvider>
          <ProductProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </ProductProvider>
        </UserProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
