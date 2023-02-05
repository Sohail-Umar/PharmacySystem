import React from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import carousalimg1 from "../../images/carousalimg1.jpg";
import carousalimg2 from "../../images/carousalimg2.jpg";
import carousalimg3 from "../../images/carousalimg3.jpg";
import Navbar from "../navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Home = () => {

  // const FirstView = localStorage.getItem("FirstView")
  // const notify = () => toast("Signin Successfull!");
  // React.useEffect(() => {
  //   <>
  //     {notify()}
  //     <ToastContainer />
  //   </>
  //   localStorage.setItem("FirstView", false)
  // }, [])



  return (
    <>
      <Navbar />
      <div className="container-fluid-xl">

        <div className="col-lg-12">
          <Carousel
            height={800}
            showThumbs={false}
            autoPlay={true}
            interval={2000}
            infiniteLoop={true}
          >
            <div>
              <img className="slider-img" src={carousalimg1} />
              {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
              <img className="slider-img" src={carousalimg2} />
              {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
              <img className="slider-img" src={carousalimg3} />
              {/* <p className="legend">Legend 3</p> */}
            </div>
          </Carousel>
        </div>

        <div className="our-partner">
          <h1>Our Partners</h1>
          <Carousel
            // height={800}
            showThumbs={false}
            autoPlay={true}
            interval={4500}
            infiniteLoop={true}
          >
            <div className="d-flex slider2-img">
              <img
                src="https://static-assets.dawaai.pk/img/tcs-partner.png"
                alt=""
              />
              <img
                src="https://static-assets.dawaai.pk/img/habib-metro-home.png"
                alt=""
              />
              <img
                src="https://static-assets.dawaai.pk/img/hbl-partner.png"
                alt=""
              />
              <img
                src="https://static-assets.dawaai.pk/img/standard-chartered.png"
                alt=""
              />
            </div>
            <div className="d-flex slider2-img">
              <img src="https://static-assets.dawaai.pk/img/kdsp.jpg" alt="" />
              <img src="https://static-assets.dawaai.pk/img/taf.png" alt="" />
              <img src="	https://static-assets.dawaai.pk/img/tmuc.png" alt="" />
            </div>
            <div className="d-flex slider2-img">
              <img
                src="	https://static-assets.dawaai.pk/img/taskeen.png"
                alt=""
              />
              <img
                src="	https://static-assets.dawaai.pk/img/chughtai.png"
                alt=""
              />
              <img src="https://static-assets.dawaai.pk/img/essa.png" alt="" />
            </div>
          </Carousel>
        </div>

      </div>
    </>
  );
};

export default Home;

// <div className="col-lg-3 slider2-img"></div>
//           <div className="col-lg-3 slider2-img"></div>

//           <div className="col-lg-3 slider2-img"></div>

//           <div className="col-lg-3 slider2-img"></div>

//           <dir className="col-lg-3 slider2-img"></dir>

//           <div className="col-lg-3 slider2-img"></div>

//           <div className="col-lg-3 slider2-img">
//           </div>

//           <div className="col-lg-3 slider2-img"></div>
