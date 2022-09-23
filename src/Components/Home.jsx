import React from "react";

function Home() {
  return (
    <>
      <section className="home" id="home">
        <div className="home__container container grid">
          <img src="/Images/home.png" alt="" className="home__img" />
          <div className="home__data">
            <h1 className="home__title">
              Merry Christmas and <br />
              Happy New Year !
            </h1>
            <p className="home__description">
              Christmas and a new year is about to begin, all good wishes and
              successes.
            </p>
            <a href="#" className="button">
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
