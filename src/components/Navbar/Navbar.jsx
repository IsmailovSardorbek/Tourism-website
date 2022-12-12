import React, { Fragment, useContext, useState } from "react";
import logo from "../../images/logo.png";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((isOpen) => !isOpen);
  }

  const [scrollHeight, setScrollHeight] = useState(window.scrollY);

  window.addEventListener("scroll", () => {
    setScrollHeight(window.scrollY);
  });

  return (
    <Fragment>
      <nav className={`navbar${scrollHeight > 0 ? " scroll-header" : ""}`}>
        <div className="grid-container">
          <div className="nav-content">
            <button
              className={`menu-toggler ${isOpen ? "close-btn" : ""}`}
              onClick={toggleMenu}
            >
              <span className="icon-1"></span>
              <span className="icon-2"></span>
              <span className="icon-3"></span>
            </button>
            <div className="logo">
              <a href="#">
                <img src={logo} />
              </a>
            </div>
            <ul className={`nav-menu ${isOpen ? "show" : ""}`}>
              <li className="nav-item">
                <a href="#holiday" className="nav-link">
                  Information
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a href="#culture" className="nav-link">
                  Culture
                </a>
              </li>
            </ul>

            <div className="search-box">
              <button className="search-btn">
                <i className="fa-solid fa-search"></i>
              </button>

              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
