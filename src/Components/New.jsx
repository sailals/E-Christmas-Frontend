import React from "react";
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function New() {
  const options = {
    items: 1,
    dots: true,
    margin: 15,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,

    responsive: {
      300: {
        items: 1,
      },

      600: {
        items: 3,
      },
    },
  };

  return (
    <>
      <section className="new section container" id="new">
        <h2 className="section__title">New Gifts</h2>
        <div className="new__container">
          {/* Slide Items */}
          <OwlCarousel className="owl-theme" {...options}>
            <article className="new__card">
              <div className="new__overlay"></div>
              <img src="/Images/new1.png" alt="" className="new__img" />
              <h3 className="new__price">Rs950</h3>
              <span className="new__title">Reindeer</span>
              <button className="button new__button">
                <i class="bx bx-heart new__icon"></i>
              </button>
            </article>

            <article class="new__card swiper-slide">
              <div class="new__overlay"></div>

              <img src="/Images/new2.png" alt="" class="new__img" />
              <h3 class="new__price">Rs200</h3>
              <span class="new__title">Snow Globe</span>

              <button class="button new__button">
                <i class="bx bx-heart new__icon"></i>
              </button>
            </article>

            <article class="new__card swiper-slide">
              <div class="new__overlay"></div>

              <img src="/Images/new3.png" alt="" class="new__img" />
              <h3 class="new__price">Rs750</h3>
              <span class="new__title">Sledge</span>

              <button class="button new__button">
                <i class="bx bx-heart new__icon"></i>
              </button>
            </article>

            <article class="new__card swiper-slide">
              <div class="new__overlay"></div>

              <img src="/Images/new4.png" alt="" class="new__img" />
              <h3 class="new__price">Rs150</h3>
              <span class="new__title">Christmas Wreath</span>

              <button class="button new__button">
                <i class="bx bx-heart new__icon"></i>
              </button>
            </article>
          </OwlCarousel>
        </div>
      </section>
    </>
  );
}

export default New;
