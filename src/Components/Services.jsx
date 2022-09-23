import React from "react";

function Services() {
  return (
    <section className="section container">
      <div className="service__container grid">
        <div className="service__box">
          <img src="/Images/icon-1.png" alt="" className="service__img" />
          <h3 className="service__title">Free Delivery</h3>
        </div>
        <div className="service__box">
          <img src="/Images/icon-3.png" alt="" className="service__img" />
          <h3 className="service__title">Secure Payments</h3>
        </div>
        <div className="service__box">
          <img src="/Images/icon-2.png" alt="" className="service__img" />
          <h3 className="service__title">24/7 Support</h3>
        </div>
        <img src="/Images/santa.png" alt="" className="service-img" />
      </div>
    </section>
  );
}

export default Services;
