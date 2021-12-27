import React from "react";

// internal imports
import Chair from "../../../images/chair.png";

function HeaderMain() {
  return (
    <main style={{ height: "80%" }}>
      <div style={{ height: "100%"}} className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
          <h1 className="text-brand">
            Your New Smile <br /> Starts Here
          </h1>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            asperiores aspernatur tempore accusamus.
          </p>
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
