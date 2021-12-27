import React from "react";
import { faClock } from "@fortawesome/free-regular-svg-icons";

// internal imports
import InfoCard from "./InfoCard";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

// business data
const data = [
  {
    id: 1,
    title: "Opening Hours",
    description: "We are open in 7 days",
    icon: faClock,
    backgroundColor: "primary",
  },
  {
    id: 2,
    title: "Visit Our Location",
    description: "Brooklyn, NY 10003, USA",
    icon: faMapMarkerAlt,
    backgroundColor: "dark",
  },
  {
    id: 3,
    title: "Contact us now",
    description: "+15629409243",
    icon: faPhoneAlt,
    backgroundColor: "primary",
  },
];

function BusinessInfo() {
  return (
    <section className="d-flex justify-content-center container">
      <div style={{ width: "880px" }} className="row">
        {data.map((info) => (
          <InfoCard key={info.id} info={info} />
        ))}
      </div>
    </section>
  );
}

export default BusinessInfo;
