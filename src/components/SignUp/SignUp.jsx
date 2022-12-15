import logo from "../../images/logo.png";
import "./sign-up.css";

export default function SingUp() {
  return (
    <>
      <div className="sign-up" id="sign-up">
        <div className="grid-container">
          <div className="sign-up-header">
            <div className="s-h-left">
              <a href="#">
                <img src={logo} className="site-logo" />
              </a>
            </div>
            <div className="s-h-right">
              <a href="#" className="ready">
                Ready to explore ?{" "}
              </a>
              &nbsp;
              <a href="#" className="get-started">
                Get Started
              </a>
            </div>
          </div>

          <div className="sign-up-links">
            <div className="email-form">
              <h1>
                Let's go on vacation, <br /> Make your day
              </h1>
              <form className="form-group">
                <input
                  type="text"
                  placeholder="Email address"
                  className="email-input"
                />
                <button type="submit" className="form-submit">
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </form>
            </div>

            <div className="services-links">
              <h3 style={{ color: "var(--title-color)", marginBottom: "1rem" }}>
                Services
              </h3>
              <ul>
                <li>
                  <a href="#" className="service-link">
                    Email Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="service-link">
                    Campaigns
                  </a>
                </li>
                <li>
                  <a href="#" className="service-link">
                    Branding
                  </a>
                </li>
                <li>
                  <a href="#" className="service-link">
                    Offline
                  </a>
                </li>
              </ul>
            </div>
            <div className="about-links">
              <h3 style={{ color: "var(--title-color)", marginBottom: "1rem" }}>
                About
              </h3>
              <ul>
                <li>
                  <a href="#" className="service-link">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="service-link">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="#" className="service-link">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="service-link">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact-links">
              <h3 style={{ color: "var(--title-color)", marginBottom: "1rem" }}>
                Help
              </h3>
              <ul>
                <li>
                  <a href="#" className="service-link">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="service-link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="sign-up-bottom">
            <div className="b-left">
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
            <div className="b-right">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
