import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="col-lg-12 footer-upper-main">
        <div className="footer-upper">
          <div className="col-lg-3 footer-upper-first">
            <h5>Pharmacy</h5>
            <ul>
              <li>Careers</li>
              <li>Blog</li>
              <li>Covid19</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
              <li>FAQ's</li>
              <li>Refund Policy</li>
              <li>Offers</li>
            </ul>
          </div>
          <div className="col-lg-3 footer-upper-first">
            <h5>Popular Categories</h5>
            <ul>
              <li>Oral Care</li>
              <li>Baby Nutrition</li>
              <li>Herbal Care</li>
              <li>Men's Health</li>
              <li>Women's Health</li>
              <li>Support & Braces</li>
            </ul>
          </div>
          <div className="col-lg-3 footer-upper-first">
            <h5>Contact Us</h5>
            <ul>
              <li>Tel: (042) 090-078-601</li>
              <li>Email: pharmacy@project.pk</li>
              <li>176H JoharTown, Lahore Punjab</li>
            </ul>
          </div>
          <div className="col-lg-3 footer-upper-first">
            <h5>Follow Us</h5>
            <ul className="d-flex flex-wrap">
              <li>
                <i className="fa fa-facebook"></i>
              </li>
              <li>
                <i className="fa fa-twitter"></i>
              </li>
              <li>
                <i className="fa fa-linkedin"></i>
              </li>
              <li>
                <i className="fa fa-skype"></i>
              </li>
            </ul>

            {/* <ul className="d-flex">
              <li>
                <a href="https://play.google.com/store/apps/">
                  <img
                    src="https://static-assets.dawaai.pk/img/googleplay.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://apps.apple.com/">
                  <img
                    src="https://static-assets.dawaai.pk/img/appstore.png"
                    alt=""
                  />
                </a>
              </li>
            </ul> */}

            <div className="col-lg-12 d-flex">
              <div className="col-lg-6">
                <a href="https://play.google.com/store/apps/">
                  <img
                    className="play-store-img"
                    src="https://static-assets.dawaai.pk/img/googleplay.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-lg-6">
                <a href="https://apps.apple.com/">
                  <img
                    className="apple-store-img"
                    src="https://static-assets.dawaai.pk/img/appstore.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-above-main">
        <div className="col-lg-6" style={{ color: "white" }}>
          © 2023 pharmacy.pk, All Rights Reserved
        </div>
        <div
          className="col-lg-6"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <img
            src="https://static-assets.dawaai.pk/img/payment-method.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
