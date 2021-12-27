import React from "react";

// internal imports
import featured from "../../../images/featured.png";

function Featured() {
  return (
    <section className="container my-5 d-flex justify-content-center">
      <div style={{ width: "95%" }} className="row">
        <div className="col-md-6">
          <img
            style={{ width: "100%" }}
            src={featured}
            className="img-fulid"
            alt=""
          />
        </div>
        <div className="col-md-6 mt-5">
          <h1 className="text-brand">
            Exceptional Dental <br />
            Care, on Your Terms
          </h1>
          <br />
          <br />
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            maiores explicabo dolorum quibusdam est enim accusantium
            consequatur, ipsa laboriosam quas fugit praesentium blanditiis
            molestiae cupiditate consequuntur necessitatibus optio labore!
            Beatae?
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            tempora, quam iusto vel distinctio aperiam asperiores animi aliquam
            dignissimos architecto.
          </p>
          <br />
          <button style={{ paddingLeft: "30px", paddingRight: "30px" }} className="primary-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Featured;
