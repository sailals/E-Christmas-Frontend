import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

function GiftSection() {
  const { items: data } = useSelector((state) => state.products);

  const { cartItems } = useSelector((state) => state.cart);

  console.log(cartItems);

  const dispatch = useDispatch();

  const AddToCart = (product) => {
    dispatch(addToCart(product));
  };

  console.log(data);

  return (
    <>
      <section className="gift section container" id="gift">
        <h2 className="section__title">Share A Gift</h2>
        <div className="gift__container grid">
          {data?.map((product) => (
            <article className="gift__card">
              <img src={product.image.url} alt="" className="gift__img" />
              <i class="bx bx-heart gift__icon"></i>
              <h3 className="gift__price">Rs. {product.price}</h3>
              <span className="gift__title">{product.name}</span>
              <i
                onClick={() => AddToCart(product)}
                class="bx bx-plus gift__icon2"
              ></i>
            </article>
          ))}
          {/* <article className="gift__card">
            <img src="/Images/gift1.png" alt="" className="gift__img" />
            <i class="bx bx-heart gift__icon"></i>
            <h3 className="gift__price">$15</h3>
            <span className="gift__title">Ging erbread</span>
          </article>

          <article className="gift__card">
            <img src="/Images/gift2.png" alt="" className="gift__img" />
            <i class="bx bx-heart gift__icon"></i>
            <h3 className="gift__price">$22</h3>
            <span className="gift__title">Santa Claus Hat</span>
          </article>

          <article className="gift__card">
            <img src="/Images/gift3.png" alt="" className="gift__img" />
            <i class="bx bx-heart gift__icon"></i>
            <h3 className="gift__price">$48</h3>
            <span className="gift__title">Christmas Tree</span>
          </article>

          <article className="gift__card">
            <img src="/Images/gift4.png" alt="" className="gift__img" />
            <i class="bx bx-heart gift__icon"></i>
            <h3 className="gift__price">$35</h3>
            <span className="gift__title">Snow Man</span>
          </article>

          <article className="gift__card">
            <img src="/Images/gift5.png" alt="" className="gift__img" />
            <i class="bx bx-heart gift__icon"></i>
            <h3 className="gift__price">$12</h3>
            <span className="gift__title">Cand y Stick</span>
          </article> */}
        </div>
      </section>
    </>
  );
}

export default GiftSection;
