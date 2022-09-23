import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import moment from "moment/moment";
import { url } from "../slices/api";

function AllOrders() {
  const [orders, setOrders] = useState([]);
  const [ordercount, setOrderCount] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${url}/orders/`);
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  // Useeffect for the no of orders

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`${url}/orders/ordercount/`);
      setOrderCount(res.data);
    }
    fetchData();
  }, []);
  return (
    <>
      <section id="mystore">
        <ul class="box-info">
          <li>
            <i class="bx bxs-gift"></i>{" "}
            <span class="text">
              <h3>{ordercount}</h3>
              <p>All Orders</p>
            </span>
          </li>
        </ul>
      </section>
      <div class="table-data">
        <div class="order">
          <div class="head">
            <h3>All Order's</h3>
            <i class="bx bx-search"></i>
            <i class="bx bx-filter"></i>
          </div>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Date Order</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr>
                  <td>
                    <img src="/Images/me.png" />
                    <p>{order.fullName}</p>
                  </td>
                  <td>{moment(order.createdAt).format("DD-MM-YYYY")}</td>
                  <td>
                    {/* order.deliveryStatus ? (order.deliveryStatus==='completed' ? "status completed" : order.deliveryStatus==='process'? "status process" : "status pending" ) : "status pending" */}

                    <span
                      class={
                        order.deliveryStatus
                          ? order.deliveryStatus === "completed"
                            ? "status completed"
                            : order.deliveryStatus === "process"
                            ? "status process"
                            : "status pending"
                          : "status pending"
                      }
                    >
                      {order.deliveryStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AllOrders;
