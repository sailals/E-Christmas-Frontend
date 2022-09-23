import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Redux Imports -->
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// Imports for slice

import productsReducer, { productFetch } from "./slices/productSlice";
import cartReducer, { getTotal } from "./slices/cartSlice";
import authReducer, { loadUser } from "./slices/authSlice";
import orderReducer from "./slices/orderSlice";
import { BrowserRouter } from "react-router-dom";

// Store for registering all slices
const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
    order: orderReducer,
  },
});

store.dispatch(productFetch());
store.dispatch(loadUser());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
