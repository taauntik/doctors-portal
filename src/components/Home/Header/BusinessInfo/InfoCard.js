import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// internal imports
import "../../../../styles/Home/Header/BusinessInfo/InfoCard.css";

function InfoCard({ info }) {
  const { title, description, icon, backgroundColor } = info;
  return (
    <div className="col-md-4">
      <div
        style={{ width: "18rem", marginBottom: "20px" }}
        className={`info-${backgroundColor} rounded info-container d-flex justify-content-center`}
      >
        <div>
          <FontAwesomeIcon className="info-icon" color="white" icon={icon} />
        </div>
        <div className="text-white ms-3">
          <h6>{title}</h6>
          <small>{description}</small>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
