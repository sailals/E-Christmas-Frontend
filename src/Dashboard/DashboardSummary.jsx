import React, { useEffect, useState } from "react";
import { url } from "../slices/api";
import axios from "axios";
import moment from "moment/moment";

function DashboardSummary() {
  const [orders, setOrders] = useState([]);
  const [ordercount, setOrderCount] = useState([]);
  const [usercount, setUserCount] = useState([]);
  const [userSales, setUserSales] = useState("");

  //   UseEffect for populating the most recent tables
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${url}/orders/?new=true`);
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
  // Useeffect for the no of users

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`${url}/users/usercount/`);
      setUserCount(res.data);
    }
    fetchData();
  }, []);
  // Useeffect for the total Sales

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`${url}/orders/income/`);

      setUserSales(res.data[0].totalAmount);
      console.log(userSales);
    }
    fetchData();
  }, []);

  return (
    <>
      {/* Boxes */}

      <ul class="box-info">
        <li>
          <i class="bx bxs-calendar-check"></i>
          <span class="text">
            <h3>{ordercount}</h3>
            <p>New Order</p>
          </span>
        </li>
        <li>
          <i class="bx bxs-group"></i>
          <span class="text">
            <h3>{usercount}</h3>
            <p>Visitors</p>
          </span>
        </li>
        <li>
          <i class="bx bxs-dollar-circle"></i>
          <span class="text">
            <h3>Rs.{userSales}</h3>
            <p>Total Sales</p>
          </span>
        </li>
      </ul>
      {/* Tables */}

      <div class="table-data">
        <div class="order">
          <div class="head">
            <h3>Recent Orders</h3>
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
        {/* Todo */}
        <div class="todo">
          <div class="head">
            <h3>Todos</h3>
            <i class="bx bx-plus"></i>
            <i class="bx bx-filter"></i>
          </div>
          <ul class="todo-list">
            <li class="completed">
              <p>Todo List</p>
              <i class="bx bx-dots-vertical-rounded"></i>
            </li>
            <li class="completed">
              <p>Todo List</p>
              <i class="bx bx-dots-vertical-rounded"></i>
            </li>
            <li class="not-completed">
              <p>Todo List</p>
              <i class="bx bx-dots-vertical-rounded"></i>
            </li>
            <li class="completed">
              <p>Todo List</p>
              <i class="bx bx-dots-vertical-rounded"></i>
            </li>
            <li class="not-completed">
              <p>Todo List</p>
              <i class="bx bx-dots-vertical-rounded"></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default DashboardSummary;
