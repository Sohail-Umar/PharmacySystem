import React from "react";
import "./Aboutus.css";
import carousalimg1 from "../../images/carousalimg1.jpg";
import carousalimg3 from "../../images/carousalimg3.jpg";
import Navbar from "../navbar/Navbar";

const Aboutus = () => {
  return (
    <>
      <Navbar />

      <div className="container-fluid-xl">
        <div className="aboutus-first-section">
          <div className="col-lg-6 first-section-data">
            <h1>Pharmacy</h1>
            <h4>Best Medicine, Best Rate</h4>
            <p>
              Dawaai is Pakistan's leading digital healthcare platform that
              brings you complete health facilities right to your doorstep.
              Order medicines online with our e-pharmacy or consult top doctors
              online in Pakistan from our App right from the comfort of your
              home. Dawaai Pakistan is the first-ever internationally certified
              and registered healthcare merchant (LegitScript Certified). We
              pride ourselves in providing our users with authentic medicines,
              medical equipment and health supplements in Pakistan.
            </p>
            <p>
              You can order online medicines, health products, lab test
              services,online doctor consultations from anywhere in Pakistan
              with ease (Karachi, Islamabad, Lahore, Rawalpindi & more) by using
              our fast medicine delivery service . In Karachi, you can get your
              selected medicines within 60 minutes of your order confirmation
              with dShops. Our mobile application is available on iOS
              andandroid.
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <img className="aboutus-imgs" src={carousalimg3} alt="who-we-are" />
          </div>
        </div>

        <div className="aboutus-second-section">
          <div className="col-lg-6 d-flex justify-content-center">
            <img className="aboutus-imgs" src={carousalimg1} alt="who-we-are" />
          </div>
          <div className="col-lg-6 mt-5 second-section-data">
            <h1>Online Pharmacy</h1>
            <h4>Wide Range Of Products</h4>
            <p>
              Dawaai is an online pharmacy that sells genuine medicines at a
              discounted rate. We offer the lowest medicine price in Pakistan
              while offering several bank discounts and promo codes with Dawaai
              discounts. The process works by uploading a prescription that our
              pharmacists will verify, and create an order for you. We offer
              medicines from reputable brands , Pfizer, GSK, Getz Pharma, and
              more.
            </p>
          </div>
        </div>

        <div className="aboutus-third-section">
          <div style={{ background: "#eab676" }} className="col-lg-6">
            <div className="third-section-left">
              <h1>OUR VISION</h1>
              <p>
                To become a global healthcare organization and to be recognized
                as domestic and internationally integrated healthcare and
                pharmaceutical company through Innovation, Quality and
                Competence.To become the leading pharmaceutical player in the
                industry by assuring high quality standards and cost effective
                products at all times. We want to mark our presence in the
                society by creating a portfolio of low cost medicines available
                to all.
              </p>
              <h1>OUR MISSION</h1>
              <p>
                To uphold our social responsibilities of delivering highest
                standard healthcare services to all segments of society without
                compromising on our core values of integrity, good ethics and
                commitment.To become a globally acclaimed pharmaceutical company
                through development and introduction of wide portfolio of
                Pharmaceutical.
                <br />
                To provide premium quality and affordable pharmaceutical
                products to cater the healthcare needs of the ailing humanity of
                both local and global markets by following ethical business
                practices.
              </p>
            </div>
          </div>

          <div style={{ background: "#4a3728" }} className="col-lg-6">
            <div className="third-section-right">
              <h2>WHY ARE WE CONVENIENT ?</h2>
              <p>
                All your pharmaceutical needs are met at your doorstep by our
                trained riders, in safe and hygienic conditions. We maintain
                recommended temperature level and packaging material to prevent
                any damage while in storage or transit. Your order will be
                delivered to you in a sealed package, which you may accept only
                if the seal is intact. Before accepting your medicines, you have
                full authority to return the order if the seal is tampered. To
                ensure authenticity of medicines provided by Dawaai, we will not
                be able to return/exchange medicines once sold and accepted by
                you. This is for your safety and to maintain quality standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;

{
  /* <div class="container d-flex">
                  <div class="col-lg-7">
                    <div class="for-space">
                      <div class="about-flex">
                        <div class="about-flex-left">
                          <h1>Pharmacy</h1>
                          <h4>Best Medicine, Best Rate</h4>
                          <p>
                            Dawaai is Pakistan's leading digital healthcare platform that
                            brings you complete health facilities right to your doorstep.
                            Order medicines online with our e-pharmacy or consult top
                            doctors online in Pakistan from our App right from the comfort
                            of your home. Dawaai Pakistan is the first-ever
                            internationally certified and registered healthcare merchant
                            (LegitScript Certified). We pride ourselves in providing our
                            users with authentic medicines, medical equipment and health
                            supplements in Pakistan.
                          </p>
                          <p>
                            You can order online medicines, health products, lab test
                            services,online doctor consultations from anywhere in Pakistan
                            with ease (Karachi, Islamabad, Lahore, Rawalpindi & more) by
                            using our fast medicine delivery service . In Karachi, you can
                            get your selected medicines within 60 minutes of your order
                            confirmation with dShops. Our mobile application is available
                            on iOS andandroid.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
          
                  <div class="col-lg-5">
                    <div class="about-flex-right">
                      <img src={carousalimg3} alt="who-we-are" />
                    </div>
                  </div>
                </div>
          
                <div class="d-flex mb-3">
                  <div class="col-lg-5">
                    <div class="about-flex-right">
                      <img src={carousalimg1} alt="who-we-are" />
                    </div>
                  </div>
          
                  <div class="col-lg-7">
                    <div class="for-space">
                      <div class="about-flex">
                        <div class="about-flex-left">
                          <h1>Online Pharmacy</h1>
                          <h4>Wide Range Of Products</h4>
                          <p>
                            Dawaai is an online pharmacy that sells genuine medicines at a
                            discounted rate. We offer the lowest medicine price in
                            Pakistan while offering several bank discounts and promo codes
                            with Dawaai discounts. The process works by uploading a
                            prescription that our pharmacists will verify, and create an
                            order for you. We offer medicines from reputable brands ,
                            Pfizer, GSK, Getz Pharma, and more.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          
                <div class="d-flex mb-5">
                  <div class="col-lg-6">
                    <div class="pink-parent">
                      <div class="pink-left">
                        <div class="upper">
                          <h1>OUR VISION</h1>
                          <p>
                            To become a global healthcare organization and to be
                            recognized as domestic and internationally integrated
                            healthcare and pharmaceutical company through Innovation,
                            Quality and Competence.To become the leading pharmaceutical
                            player in the industry by assuring high quality standards and
                            cost effective products at all times. We want to mark our
                            presence in the society by creating a portfolio of low cost
                            medicines available to all.
                          </p>
                        </div>
          
                        <div class="lower">
                          <h1>OUR MISSION</h1>
                          <p>
                            To uphold our social responsibilities of delivering highest
                            standard healthcare services to all segments of society
                            without compromising on our core values of integrity, good
                            ethics and commitment.To become a globally acclaimed
                            pharmaceutical company through development and introduction of
                            wide portfolio of Pharmaceutical.
                            <br />
                            To provide premium quality and affordable pharmaceutical
                            products to cater the healthcare needs of the ailing humanity
                            of both local and global markets by following ethical business
                            practices.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
          
                  <div class="col-lg-6">
                    <div class="pink-right">
                      <h1>WHY ARE WE CONVENIENT</h1>
                      <p>
                        All your pharmaceutical needs are met at your doorstep by our
                        trained riders, in safe and hygienic conditions. We maintain
                        recommended temperature level and packaging material to prevent
                        any damage while in storage or transit. Your order will be
                        delivered to you in a sealed package, which you may accept only if
                        the seal is intact. Before accepting your medicines, you have full
                        authority to return the order if the seal is tampered. To ensure
                        authenticity of medicines provided by Dawaai, we will not be able
                        to return/exchange medicines once sold and accepted by you. This
                        is for your safety and to maintain quality standards.
                      </p>
                    </div>
                  </div>
                </div> */
}
