import React, { Fragment, useContext, useState } from "react";
import WindowWidthContext from "../../Context";
import lineImg from "../../images/shape.png";
import "./hero.css";

export default function Hero() {
  const windowWidth = useContext(WindowWidthContext);

  return (
    <Fragment>
      <div className="hero">
        <div className="dark-overlay">
          <div className="grid-container">
            <div className="hero-content">
              {windowWidth > 1200 ? (
                <div className="socials-section">
                  <div className="follow">Follow us</div>
                  <div className="social-icons">
                    <a href="#">
                      <i className="fab fa-instagram social-icon"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter social-icon"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f social-icon"></i>
                    </a>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="hero-content-text">
                <div className="hero-title">
                  <img
                    src={lineImg}
                    style={{
                      display: windowWidth < 700 ? "none" : "inline-block",
                    }}
                  />
                  <h1>EXPLORE THE NATURE BEAUTY</h1>
                </div>
                <h1 className="heading">
                  <span>Discover </span> <br /> Wonderful Indonesia
                </h1>
                <a href="#holiday" className="scroll-down">
                  Scroll down &nbsp;
                  <i
                    className="fa-solid fa-arrow-down"
                    id="scroll-down-icon"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
