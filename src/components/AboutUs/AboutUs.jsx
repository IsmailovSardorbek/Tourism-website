import React, { Fragment } from "react";
import bromoLogo from "../../images/Bromo.png";
import lineImg from "../../images/shape.png";
import "./about-us.css";

export default function AboutUs() {
  return (
    <Fragment>
      <div className="about" id="about">
        <div className="about-container">
          <div className="slider-container">
            <div className="slider-text">
              <div className="about-logo">
                <img src={lineImg} />
                <img src={bromoLogo} className="bromo-logo" />
                <img src={lineImg} />
              </div>
              <h1>
                Steady your steps, we <br /> will climb together!
              </h1>
              <p>
                Enjoying the vast expanse of the sea of ​​​​sand, witnessing the
                splendor of Mount Semeru that soars into the sky, and gazing at
                the beauty of the sun moving out of its bed or otherwise
                enjoying the dim twilight from the Bromo ridge is an
                unforgettable experience when visiting Bromo.
              </p>
            </div>
            <button className="control-btn left">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="control-btn right">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
