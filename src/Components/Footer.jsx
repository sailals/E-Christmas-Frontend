import React from "react";

function Footer() {
  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        <div>
          <a href="#" className="footer__logo">
            <img src="/Images/logo.png" alt="" className="footer__logo-img" />
            E-Christmas
          </a>
          <p className="footer__description">
            This Christmas give <br /> a lot of love
          </p>
        </div>
        <div>
          <h3 className="footer__title">Our Services</h3>
          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Discounts
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Shipping mode
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="footer__title">Support</h3>
          <ul class="footer__links">
            <li>
              <a href="#" class="footer__link">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Support center
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="footer__title">Available On</h3>

          <div class="footer__aviables">
            <img
              src="/Images/aviable1.png"
              alt=""
              class="footer__aviable-img"
            />
            <img
              src="/Images/aviable2.png"
              alt=""
              class="footer__aviable-img"
            />
          </div>
        </div>
        <img src="/Images/footer1.png" alt="" class="footer__img1" />
        <img src="/Images/footer2.png" alt="" class="footer__img2" />
      </div>
      <span class="footer__copy">&#169; All rigths reserved</span>
    </footer>
  );
}

export default Footer;
