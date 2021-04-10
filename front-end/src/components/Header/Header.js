import React from "react";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header id="header">
      <NavBar />
      <div className="slider-pro">
        <div className="sp-slides">
          <div className="sp-slide">
            <img
              className="sp-image"
              src="images/blank.gif"
              data-src="assets/images/content/slider/1.jpg"
              alt=""
            />
            <div className="header-overlay">
              <div className="container">
                <div className="header-text-left">
                  <h1
                    className="sp-layer sp-layer-1"
                    data-show-transition="right"
                    data-show-delay="200"
                  >
                    Welcome to
                    <br />
                    <span>AllSides Designs</span>
                  </h1>
                  <p
                    className="sp-layer sp-layer-2"
                    data-show-transition="right"
                    data-show-delay="400"
                  >
                    Where Your Ideas
                    <br />
                    Come to Life.
                    <br />
                  </p>
                  <div
                    className="sp-layer sp-layer-3"
                    data-show-transition="right"
                    data-show-delay="600"
                  >
                    <a href="#features3" className="btn-custom smooth-scroll">
                      See What We are Working on
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sp-slide">
            <img
              className="sp-image"
              src="assets/images/blank.gif"
              data-src="assets/images/content/slider/2.jpg"
              alt=""
            />
            <div className="header-overlay header-overlay40">
              <div className="container">
                <div className="header-text-center">
                  <h1
                    className="sp-layer sp-layer-1"
                    data-show-transition="down"
                    data-show-delay="200"
                  >
                    <span> 3-D Design & Production </span>
                  </h1>
                  <h1
                    className="sp-layer sp-layer-2"
                    data-show-transition="down"
                    data-show-delay="400"
                  >
                    Custom Website Development
                  </h1>
                  <h1
                    className="sp-layer sp-layer-3"
                    data-show-transition="down"
                    data-show-delay="600"
                  >
                    <span> Quality Video Production</span>
                  </h1>
                  <div
                    className="sp-layer sp-layer-4"
                    data-show-transition="up"
                    data-show-delay="800"
                  >
                    <a href="#portfolios" className="smooth-scroll">
                      <img src="assets/images/btn-scroll.png" alt="Click!" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sp-slide">
            <img
              className="sp-image"
              src="images/blank.gif"
              data-src="assets/images/content/slider/3.jpg"
              alt=""
            />
            <div className="header-overlay header-overlay60">
              <div className="container">
                <div className="header-text-right">
                  <h1
                    className="sp-layer sp-layer-1"
                    data-show-transition="left"
                    data-show-delay="200"
                  >
                    Season 01
                  </h1>
                  <h1
                    className="sp-layer sp-layer-1"
                    data-show-transition="right"
                    data-show-delay="200"
                  >
                    <span>Coming Soon...</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
