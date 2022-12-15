import React, { Fragment } from "react";
import holidayImage from "../../images/h-img.png";
import lineImg from "../../images/shape.png";
import "./holiday-info.css";

export default function HolidayInfo() {
  return (
    <Fragment>
      <div className="holiday-section" id="holiday">
        <div className="holiday-container">
          <div className="holiday-wrapper">
            <div className="h-left">
              <img src={holidayImage} className="h-image" />
            </div>
            <div className="h-right">
              <div className="h-right-content">
                <div className="holiday-info-title">
                  <img src={lineImg} className="shape" />
                  <h2>east nusa tenggara</h2>
                </div>
                <h1>
                  Have you <br /> enjoyed your holiday ?
                </h1>
                <p>
                  You will be amazed if you take part in this sailing Komodo
                  island tour package. So it is also mandatory for you, besides
                  enjoying Komodo tourism on Komodo Island, you also have to
                  taste the marine tourism. The beautiful waters of Komodo will
                  make you meet many travelers from other countries.
                </p>
                <a href="#about" id="read-more">
                  read more &nbsp; <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
