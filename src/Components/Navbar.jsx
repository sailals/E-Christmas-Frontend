import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "../slices/cartSlice";
import { logoutUser } from "../slices/authSlice";

function Navbar() {
  const [isActive, setActive] = useState(false);
  const [crossActive, setCrossActive] = useState(false);

  const handleCross = () => {
    setCrossActive(!crossActive);
    setActive(false);
  };

  const handleClick = () => {
    setActive(!isActive);
    setCrossActive(false);
  };

  const cart = useSelector((state) => state.cart);

  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <>
      <header className="header" id="header">
        {/* Navbar */}
        <nav className="nav container">
          <a href="#" className="nav__logo">
            <img className="nav__logo-img" src="/Images/logo.png" alt="" />
            E-Christmas
          </a>
          <div
            className={
              isActive
                ? crossActive
                  ? "nav__menu"
                  : "nav__menu show-menu "
                : "nav__menu"
            }
            id="nav__menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink className="nav__link active-link" to="/">
                  Home
                </NavLink>
              </li>
              {auth._id ? (
                <>
                  <li className="nav__item">
                    <NavLink onClick={handleLogOut} className="nav__link" t>
                      Log Out
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav__item">
                    <NavLink className="nav__link" to="/signin">
                      Log In
                    </NavLink>
                  </li>
                </>
              )}
              {auth._id ? (
                <></>
              ) : (
                <>
                  <li className="nav__item">
                    <NavLink className="nav__link" to="/register">
                      Sign Up
                    </NavLink>
                  </li>
                </>
              )}
              {auth._id ? (
                <>
                  {auth.isAdmin ? (
                    <>
                      <li className="nav__item">
                        <NavLink to="/admin" className="nav__link">
                          <img
                            className="nav-img"
                            src="/Images/me.png"
                            alt="Admin"
                          />
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav__item">
                        <NavLink to="/userorder" className="nav__link">
                          <img
                            className="nav-img"
                            src="/Images/dan.jpg"
                            alt={auth.name}
                          />
                        </NavLink>
                      </li>
                    </>
                  )}
                </>
              ) : (
                <></>
              )}
            </ul>

            <div onClick={handleCross} className="nav__close" id="nav-close">
              <i className="bx bx-x"></i>
            </div>

            <img src="Images/nav-light.png" alt="" className="nav__img" />
          </div>

          <div className="nav__btns">
            <NavLink className="nav__link" to="/cart">
              <div className="nav-bag">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  className="bi bi-bag-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                </svg>
                <span className="bag-quantity">
                  <span>{cart.cartTotalQuantity}</span>
                </span>
              </div>
            </NavLink>
            <div onClick={handleClick} className="nav__toggle" id="nav-toggle">
              <i className="bx bx-grid-alt"></i>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
