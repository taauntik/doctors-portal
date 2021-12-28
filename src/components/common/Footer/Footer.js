import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

// internal imports
import "../../../styles/common/Footer/Footer.css";

function Footer() {
  return (
    <div className="footer border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-3 footer-col">
            <br />
            <br />
            <small className="underline d-block mb-2">
              Emergency Dental Care
            </small>
            <small className="underline d-block mb-2">Check Up</small>
            <small className="underline d-block mb-2">
              Treatment of Personal Diseases
            </small>
            <small className="underline d-block mb-2">Tooth Extraction</small>
            <small className="underline d-block mb-2">Check Up</small>
          </div>
          <div className="col-md-3 footer-col">
            <h6 className="primary-text mb-4">Services</h6>
            <small className="underline d-block mb-2">
              Emergency Dental Care
            </small>
            <small className="underline d-block mb-2">Check Up</small>
            <small className="underline d-block mb-2">
              Treatment of Personal Diseases
            </small>
            <small className="underline d-block mb-2">Tooth Extraction</small>
            <small className="underline d-block mb-2">Check Up</small>
            <small className="underline d-block mb-2">Check Up</small>
            <small className="underline d-block mb-2">Check Up</small>
          </div>
          <div className="col-md-3 footer-col">
            <h6 className="primary-text mb-4">Oral Health</h6>
            <small className="underline d-block mb-2">
              Emergency Dental Care
            </small>
            <small className="underline d-block mb-2">Check Up</small>
            <small className="underline d-block mb-2">
              Treatment of Personal Diseases
            </small>
            <small className="underline d-block mb-2">Tooth Extraction</small>
            <small className="underline d-block mb-2">Check Up</small>
            <small className="underline d-block mb-2">Check Up</small>
          </div>
          <div className="col-md-3 footer-col">
            <h6 className="primary-text mb-4">Our Address</h6>
            <small className="text-decoration-none">
              New York - 101010 Hudson Yards
            </small>
            <br />
            <br />
            <div className="social-icons">
              <div className="social-icon-container-first">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="social-icon social-icon-first"
                />
              </div>
              <div className="social-icon-container">
                <FontAwesomeIcon icon={faGooglePlusG} className="social-icon" />
              </div>
              <div className="social-icon-container">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </div>
            </div>
            <br />
            <br />
            <small className="text-decoration-none">Call Now</small>
            <br />
            <button className="primary-btn">
              <small className="text-decoration-none">+2025550295</small>
            </button>
          </div>
        </div>
        <br />
        <br />
        <small className="text-decoration-none copyright">Copyright {new Date().getFullYear()} All Rights Reserved</small>
      </div>
    </div>
  );
}

export default Footer;
