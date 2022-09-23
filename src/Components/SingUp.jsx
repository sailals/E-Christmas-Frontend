import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "./../slices/authSlice";

function SingUp() {
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  }, [auth._id, navigate]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
  };

  return (
    <>
      <div className="form container section">
        <h2 className="form__title">Sign Up</h2>
        <div className="form-element">
          <label htmlFor="email">Username</label>
          <input
            onChange={(e) =>
              setUser({
                ...user,
                name: e.target.value,
              })
            }
            type="text"
            name="name"
            id="name"
            placeholder="Enter Username"
          />
        </div>
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
          <button onClick={handleSubmit} className="form-button">
            Log In
          </button>
        </div>
      </div>
    </>
  );
}

export default SingUp;
