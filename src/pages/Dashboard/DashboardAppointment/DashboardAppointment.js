import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { Outlet } from "react-router-dom";

// internal imports
import Sidebar from "../../../components/Dashboard/Sidebar/Sidebar";
import AppointmentsByDate from "../../../components/Dashboard/AppointmentsByDate/AppointmentsByDate";
import "../../../styles/Dashbaord/Dashbaord.css";

function DashboardAppointment() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  function handleDateChange(date) {
    setSelectedDate(date);
  }

  useEffect(() => {
    fetch(
      `http://localhost:5000/appointment?date=${selectedDate.toLocaleDateString()}`
    )
      .then((res) => res.json())
      .then((data) => setAppointments(data.data))
      .catch((err) => console.log(err));
  }, [selectedDate]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <Calendar
              className="admin-calendar"
              tileClassName="calendar-item"
              onChange={handleDateChange}
              value={selectedDate}
            />
          </div>
          <div className="col-md-7">
            <AppointmentsByDate
              date={selectedDate}
              appointments={appointments}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardAppointment;
