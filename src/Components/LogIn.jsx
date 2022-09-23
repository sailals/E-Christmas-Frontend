import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, logoutUser } from "../slices/authSlice";

function LogIn() {
  const auth = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  }, [auth._id, navigate]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
  };

  return (
    <>
      <div className="form container section">
        <h2 className="form__title">Log In</h2>
        <div className="form-element">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) =>
              setUser({
                ...user,
                email: e.target.value,
              })
            }
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
          />
        </div>
        <div className="form-element">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) =>
              setUser({
                ...user,
                password: e.target.value,
              })
            }
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
          />
        </div>
        <div className="form-element">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Remeber Me</label>
        </div>
        <div className="form-element">
          <button onClick={handleSubmit} className="form-button">
            Log In
          </button>
        </div>
      </div>
    </>
  );
}

export default LogIn;
