import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../slices/cartSlice";
import { ordersPost } from "./../slices/orderSlice";

function CheckOut() {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);

  const [order, setOrder] = useState({
    userId: auth._id,
    cartItems: cart.cartItems,
    total: cart.cartTotalAmount,
    fullName: "",
    address: "",
    city: "",
    cardno: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(ordersPost(order));
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <>
      <section className="payment-container section">
        <form action="">
          <div class="row">
            <div class="col">
              <h3 class="title">billing address</h3>

              <div class="inputBox">
                <span>full name :</span>
                <input
                  onChange={(e) =>
                    setOrder({
                      ...order,
                      fullName: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="john deo"
                />
              </div>
              <div class="inputBox">
                <span>email :</span>
                <input type="email" placeholder="example@example.com" />
              </div>
              <div class="inputBox">
                <span>address :</span>
                <input
                  onChange={(e) =>
                    setOrder({
                      ...order,
                      address: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="room - street - locality"
                />
              </div>
              <div class="inputBox">
                <span>city :</span>
                <input
                  onChange={(e) =>
                    setOrder({
                      ...order,
                      city: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Daman"
                />
              </div>

              <div class="flex">
                <div class="inputBox">
                  <span>state :</span>
                  <input type="text" placeholder="India" />
                </div>
                <div class="inputBox">
                  <span>zip code :</span>
                  <input type="text" placeholder="123 456" />
                </div>
              </div>
            </div>

            <div class="col">
              <h3 class="title">payment</h3>

              <div class="inputBox">
                <span>cards accepted :</span>
                <img src="/Images/card_img.png" alt="" />
              </div>
              <div class="inputBox">
                <span>name on card :</span>
                <input type="text" placeholder="mr. john deo" />
              </div>
              <div class="inputBox">
                <span>credit card number :</span>
                <input
                  onChange={(e) =>
                    setOrder({
                      ...order,
                      cardno: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="1111-2222-3333-4444 "
                />
              </div>
              <div class="inputBox">
                <span>exp month :</span>
                <input type="text" placeholder="January 01" />
              </div>

              <div class="flex">
                <div class="inputBox">
                  <span>exp year :</span>
                  <input type="number" placeholder="2022" />
                </div>
                <div class="inputBox">
                  <span>CVV :</span>
                  <input type="text" placeholder="1234" />
                </div>
              </div>
            </div>
          </div>
          <button onClick={handelSubmit} className="submit-btn">
            Pay Rs.{cart.cartTotalAmount + 30}
          </button>
        </form>
      </section>
    </>
  );
}

export default CheckOut;
