import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../slices/authSlice";

function Dashboard() {
  const [active, setActive] = useState(false);

  const setActiveInActive = () => {
    setActive(!active);
  };

  // TO Redirect if not admin
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const res = auth._id ? true : false;

    if (res) {
      if (auth.isAdmin) {
      } else {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/script.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <div className="dashboard">
        <section id="sidebar" className={active ? "hide" : ""}>
          <a href="#" className="brand">
            <i class="bx bx-gift"></i> <span class="text">Admin</span>
          </a>
          <div className="img-profile-div">
            <img className="img-profile" src="/Images/me.png" alt="" />
          </div>

          <ul class="side-menu top">
            <li className="active">
              <NavLink to="/admin" className="nav-link">
                <i class="bx bxs-dashboard"></i>
                <span class="text">Dashboard</span>
              </NavLink>
            </li>

            <li className="">
              <NavLink to="/admin/mystore" className="nav-link">
                {" "}
                <i class="bx bxs-shopping-bag-alt"></i>
                <span class="text">My Store</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/allorders" className="nav-link">
                <i class="bx bxs-doughnut-chart"></i>
                <span class="text">Orders</span>
              </NavLink>
            </li>
          </ul>
          <ul class="side-menu">
            <li>
              <a href="#" class="logout">
                <i class="bx bxs-log-out-circle"></i>
                <NavLink to="/" className="text" onClick={handleLogout}>
                  Logout
                </NavLink>
              </a>
            </li>
          </ul>
        </section>
        {/* NavBar */}
        <section id="content">
          <nav>
            <i class="bx bx-menu" onClick={setActiveInActive}></i>
            <div className="nav-end">
              <input type="checkbox" id="switch-mode" hidden />
              <label htmlFor="switch-mode" class="switch-mode"></label>
              <NavLink to="/" className="notification">
                <i className="bx bxs-home-heart"></i>
              </NavLink>
            </div>
          </nav>

          <main>
            <div class="head-title">
              <div class="left">
                <h1>Dashboard</h1>
                <ul class="breadcrumb">
                  <li>
                    <a href="#">Dashboard</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                  </li>
                  <li>
                    <a class="active" href="#">
                      Home
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <Outlet />
          </main>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
