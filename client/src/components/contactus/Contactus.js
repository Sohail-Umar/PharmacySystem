import React from "react";
import Navbar from "../navbar/Navbar";
import "./Contactus.css";

const Contactus = () => {
  const [viewMap, setViewMap] = React.useState(false);

  const viewmapbtn = () => {
    if (viewMap === false) {
      setViewMap(true);
    } else {
      setViewMap(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container d-flex flex-column">
        <h1 className="contact-heading">Contact Us</h1>
        <div className="head-office-main">
          <div className="head-office">
            <h3>Head Office</h3>
            <p className="contact-detail">
              1st Floor, 176H Ali ibn-e-abi Talib Road, Block H
            </p>
            <p className="contact-detail">Johar Town </p>
            <p className="contact-detail">Lahore, Punjab 54000, Pakistan</p>

            <h4 style={{ marginTop: "2rem" }}>
              Phone: <span>(042) 090-078-601 </span>
            </h4>

            <div className="view-map">
              <button onClick={viewmapbtn}>
                {viewMap ? "CLose Map" : "View Map"}
              </button>
              {viewMap ? (
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.8484843430397!2d74.23880001497074!3d31.390741081412763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901e6e30bb94b%3A0x7facd7c9c099672b!2sUniversity%20Of%20Lahore!5e0!3m2!1sen!2s!4v1603818910111!5m2!1sen!2s"
                    width="600"
                    height="450"
                    style={{ border: "0", marginTop: "2rem" }}
                    aria-hidden="false"
                  ></iframe>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="contact-input">
              <div className="contact-name-email">
                <input
                  className="contact-name"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="contact-email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="contact-phone">
                <input type="text" placeholder="Phone Number" />
              </div>
              <div className="contact-msg">
                <textarea
                  name="contact-msg"
                  id=""
                  cols="30"
                  rows="7"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="contact-send-btn">
                <button>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
