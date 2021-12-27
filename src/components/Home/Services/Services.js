import React from "react";

// internal imports
import FluorideTreatment from "../../../images/flouride-treatment.png";
import CavityFilling from "../../../images/cavity-filling.png";
import TeethWhitening from "../../../images/teeth-whitening.png";
import ServiceDetail from "./ServiceDetail";

const servicesData = [
  {
    id: 1,
    name: "Fluoride Treatment",
    image: FluorideTreatment,
  },
  {
    id: 2,
    name: "Cavity Filling",
    image: CavityFilling,
  },
  {
    id: 3,
    name: "Teath Whitening",
    image: TeethWhitening,
  },
];

function Services() {
  return (
    <section className="container">
      <div className="text-center m-5">
        <h5 className="primary-text mb-4">OUR SERVICES</h5>
        <h2 className="text-brand h1">Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div style={{ width: "80%" }} className="row my-5">
          {servicesData.map((service) => (
            <ServiceDetail key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
