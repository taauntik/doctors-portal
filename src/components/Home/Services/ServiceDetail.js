import React from "react";

function ServiceDetail({ service }) {
  const { name, image } = service;
  return (
    <div className="col-md-4 text-center">
      <img className="mb-4" style={{ height: "65px" }} src={image} alt="" />
      <h5 style={{ color: "#575f6a" }} className="mb-3">
        {name}
      </h5>
      <p className="text-secondary">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
        eveniet!
      </p>
    </div>
  );
}

export default ServiceDetail;
