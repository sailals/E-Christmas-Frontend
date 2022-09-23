import React from "react";

function Celebrate() {
  return (
    <>
      <section className="celebrate section container" id="celebrate">
        <div className="celebrate__container grid">
          <div className="celebrate__data">
            <h2 className="celebrate__title">
              Celebrate With A <br /> Lot of Love
            </h2>
            <p className="celebrate__description">
              In this holidays, celebrate with much love and peace, offering
              many blessings to our loved ones, friends and neighbors, wishing
              them a good Christmas message.
            </p>
            <a href="" className="button">
              Send Good Wishes
            </a>
          </div>
          <img src="/Images/celebrate.png" alt="" className="celebrate__img" />
        </div>
      </section>
    </>
  );
}

export default Celebrate;
