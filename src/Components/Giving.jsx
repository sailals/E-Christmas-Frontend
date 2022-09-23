import React from "react";

function Giving() {
  return (
    <>
      <section className="giving section container">
        <h2 className="section__title">
          Start Giving This <br /> Christmas
        </h2>
        <div className="giving__container grid">
          <div className="giving__content">
            <img src="/Images/giving1.png" alt="" className="giving__img" />
            <h3 className="giving__title">Surprise Gifts</h3>
            <p className="giving__description">
              They are the best gifts there is.
            </p>
          </div>
          <div className="giving__content">
            <img src="/Images/giving2.png" alt="" className="giving__img" />
            <h3 className="giving__title">Ornaments Gifts</h3>
            <p className="giving__description">Give a moment to decorate.</p>
          </div>
          <div className="giving__content">
            <img src="/Images/giving3.png" alt="" className="giving__img" />
            <h3 className="giving__title">Lots of love</h3>
            <p className="giving__description">
              Give away feelings that last forever.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Giving;
