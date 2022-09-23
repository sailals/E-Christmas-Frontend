import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { url } from "../slices/api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Orders() {
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!auth._id) {
      navigate("/");
    }
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${url}/orders/getorders/${auth._id}`);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [auth._id]);

  return (
    <section className="user-orders container section">
      <div className="user-profile-image pb-2">
        <img src="/Images/dan.jpg" alt="" />
      </div>
      <div className="user-details pb-2">
        <h4>User Info</h4>
        <p>User Name: {auth.name}</p>
        <p>Email: {auth.email}</p>
      </div>
      <div className="user-order-table pb-2">
        <h4>User Orders</h4>
        <div className="user-table ">
          <table>
            <tr>
              <th>Order</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
            {user?.map((data) =>
              data?.cartItems?.map((cart) => (
                <tr>
                  <td>
                    <div className="cart-info">
                      <img src={cart?.image?.url} alt="" />
                    </div>
                  </td>
                  <td>
                    <div>
                      <p>{cart.name}</p>
                    </div>
                  </td>
                  <td>Rs.{cart.price}</td>
                </tr>
              ))
            )}
            {/* <tr>
              <td>
                <div className="cart-info">
                  <img src="/Images/gift2.png" alt="" />
                </div>
              </td>
              <td>
                <div>
                  <p>Gift</p>
                </div>
              </td>
              <td>Rs20</td>
            </tr> */}
          </table>
        </div>
      </div>
    </section>
  );
}

export default Orders;
