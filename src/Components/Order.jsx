import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  addToCart,
  decreaseCart,
  getTotal,
  removeFromCart,
} from "../slices/cartSlice";
import EmptyCart from "./EmptyCart";

function Order() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const auth = useSelector((state) => state.auth);

  const handleIncrease = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleDecrease = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleRemove = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <>
      <section className="container section">
        {cart.cartItems.length === 0 ? (
          <>
            <EmptyCart />
          </>
        ) : (
          <>
            <div className="small-container cart-page">
              <table>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
                {cart.cartItems &&
                  cart.cartItems.map((cartItem) => (
                    <tr key={cartItem._id}>
                      <td>
                        <div className="cart-info">
                          <img src={cartItem.image.url} alt="" />
                          <div>
                            <p>{cartItem.name}</p>
                            <small>Price: {cartItem.price}</small>
                            <br />
                            <a onClick={() => handleRemove(cartItem)} href="#">
                              Remove
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="cart-product-quantity">
                          <button onClick={() => handleDecrease(cartItem)}>
                            -
                          </button>
                          <div className="count">{cartItem.cartQuantity}</div>
                          <button onClick={() => handleIncrease(cartItem)}>
                            +
                          </button>
                        </div>
                      </td>
                      <td>Rs.{cartItem.price * cartItem.cartQuantity}</td>
                    </tr>
                  ))}
              </table>
              <div className="total-price">
                <table>
                  <tr>
                    <td>Subtotal</td>
                    <td>Rs.{cart.cartTotalAmount}</td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td>Rs.30</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>Rs.{cart.cartTotalAmount + 30}</td>
                  </tr>
                </table>
                {auth._id ? (
                  <>
                    <NavLink to="/checkout" className="nav_link">
                      <button className="orderButton">
                        Proceed to Checkout
                      </button>
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink to="/signin" className="nav_link">
                      <button className="orderButton">Log In</button>
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default Order;
