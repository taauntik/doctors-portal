import React from "react";

// internal imports
import Chair from "../../../images/chair.png";

function HeaderMain() {
  return (
    <main className="row">
      <div className="col-md-4 offset-md-1">
        <h1>
          Your New Smile <br /> Starts Here
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          asperiores aspernatur tempore accusamus.
        </p>
        <button className="btn btn-primary">GET APPOINTMENT</button>
      </div>
      <div className="col-md-6">
        <img src={Chair} className="img-fluid" alt="" />
      </div>
    </main>
  );
}

export default HeaderMain;
