import "./App.css";
import Order from "./Components/Order";
import HomePage from "./Pages/HomePage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import OrdersPage from "./Pages/OrdersPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import CheckOutPage from "./Pages/CheckOutPage";
import Dashboard from "./Dashboard/Dashboard";
import DashboardSummary from "./Dashboard/DashboardSummary";
import MyStore from "./Dashboard/MyStore";
import UserOrder from "./Pages/UserOrder";
import AllOrders from "./Dashboard/AllOrders";

function App() {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<OrdersPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/userorder" element={<UserOrder />} />

        {/* Nested Routes For Dashboard */}
        <Route path="/admin" element={<Dashboard />}>
          <Route index={true} element={<DashboardSummary />} />
          <Route path="mystore" element={<MyStore />} />
          <Route path="allorders" element={<AllOrders />} />
        </Route>
      </Routes>

      {/* <HomePage /> */}
      {/* <SignInPage /> */}
      {/* <SignUpPage /> */}
      {/* <OrdersPage /> */}
    </>
  );
}

export default App;
