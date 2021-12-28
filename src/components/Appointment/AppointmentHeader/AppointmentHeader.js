import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// internal imports
import Chair from "../../../images/chair.png";
import "../../../styles/Appointment/AppointmentHeader/AppointmentHeader.css";
import Navbar from "../../common/Navbar/Navbar";

function AppointmentHeader({ handleDateChange, selectedDate }) {
  return (
    <>
      <header className="appointment-header">
        <Navbar />
        <div style={{ height: "80%" }} className="container">
          <div
            style={{ height: "100%" }}
            className="row d-flex justify-content-around"
          >
            <div className="col-md-4">
              <div className="pt-5 mt-5">
                <h1 className="text-brand">Appointment</h1>
                <Calendar
                  className="calendar"
                  tileClassName="calendar-item"
                  onChange={handleDateChange}
                  value={selectedDate}
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <img src={Chair} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default AppointmentHeader;
