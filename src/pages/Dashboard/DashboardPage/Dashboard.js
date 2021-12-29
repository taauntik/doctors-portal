import React, { useState } from "react";
import Calendar from "react-calendar";

// internal imports
import Sidebar from "../../../components/Dashboard/Sidebar/Sidebar";

function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  function handleDateChange(date) {
    setSelectedDate(date);
  }
  return (
    <div>
      <Sidebar title="Dashboard">
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
            <div className="col-md-6">
              <h2>show appointments by date</h2>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
}

export default Dashboard;
