import React, { Fragment } from "react";
import lineImg from "../../images/shape.png";
import contentImg from "../../images/01.png";
import "./culture.css";

export default function Culture() {
  return (
    <Fragment>
      <div id="culture">
        <div className="c-container">
          <div className="c-wrapper">
            <div className="c-left">
              <div className="c-main">
                <div className="c-title">
                  <img src={lineImg} alt="" />
                  <h2>indonesian culture</h2>
                </div>
                <h1>Our culture here is very friendly to people</h1>
                <p>
                  known for his politeness, manners and gentleness. This becomes
                  a characteristic when they mingle with other tribes and become
                  basic traits that are passed down by their ancestors.
                </p>
                <a href="#about" id="read-more">
                  read more &nbsp; <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="c-right">
              <img src={contentImg} className="c-img" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
