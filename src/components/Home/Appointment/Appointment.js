import React from "react";

// internal imports
import "../../../styles/Home/Appointment/Appointment.css";
import appointmentDoctor from "../../../images/appointment-doctor.png";

function Appointment() {
  return (
    <section className="appointment container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-5 d-sm-none d-md-block">
            <img className="doctor-img" src={appointmentDoctor} alt="" />
          </div>
          <div className="col-md-6">
            <div className="mt-5">
              <h5 style={{ fontSize: "17px" }} className="primary-text mb-2">
                APPOINTMENT
              </h5>
              <h1 className="text-white">
                Make an appointment <br />
                Today
              </h1>
              <br />
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                ipsum.
              </p>
              <br />
              <button
                style={{
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  fontSize: "15px",
                }}
                className="primary-btn"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Appointment;
