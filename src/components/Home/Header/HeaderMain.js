import React from "react";

// internal imports
import Chair from "../../../images/chair.png";
import "../../../styles/Home/Header/Header.css";

function HeaderMain() {
  return (
    <main style={{ height: "80%" }} className="container">
      <div style={{ height: "100%"}} className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
          <h1 className="text-brand">
            Your New Smile <br /> Starts Here
          </h1>
          <button className="primary-btn">GET APPOINTMENT</button>
        </div>
        <div className="col-md-6">
          <img src={Chair} className="img-fluid" alt="" />
        </div>
      </div>
    </main>
  );
}

export default HeaderMain;
