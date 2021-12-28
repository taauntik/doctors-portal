import React, { useState } from "react";

// internal imports
import Footer from "../../components/common/Footer/Footer";
import AppointmentHeader from "../../components/Appointment/AppointmentHeader/AppointmentHeader";

function Appointment() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <AppointmentHeader selectedDate={selectedDate} handleDateChange={handleDateChange} />
      <Footer />
    </div>
  );
}

export default Appointment;
