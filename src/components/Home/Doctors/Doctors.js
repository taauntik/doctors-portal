import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

// internal imports
import doctor from "../../../images/doctor-small.png";

const doctorsData = [
  {
    id: 1,
    name: "Dr. Caudi",
    phone: "+61 452 200 126",
    image: doctor,
  },
  {
    id: 1,
    name: "Dr. Caudi",
    phone: "+61 452 200 126",
    image: doctor,
  },
  {
    id: 1,
    name: "Dr. Caudi",
    phone: "+61 452 200 126",
    image: doctor,
  },
];

function Doctors() {
  return (
    <div className="doctors container my-5 py-5">
      <h4 className="primary-text text-center">Our Doctors</h4>
      <div className="row">
        {doctorsData.map((doctor) => (
          <div key={doctor.id} className="col-md-4 my-5">
            <div>
              <img className="img-fluid" src={doctor.image} alt="" />
              <div className="text-center mt-3">
                <h6>{doctor.name}</h6>
                <small>
                  <FontAwesomeIcon icon={faPhoneAlt} className="primary-text" />
                  {doctor.phone}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;
