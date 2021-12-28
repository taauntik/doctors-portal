import React from "react";

// internal imports
import "../../../styles/Appointment/BookAppointment/BookAppointment.css";
import BookingCard from "./BookingCard";

// dummy data
const bookings = [
  {
    id: 1,
    name: "Teeth Orthodonics",
    time: "08.00 AM - 09.00 AM",
    price: 20,
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "09.00 AM - 10.00 AM",
    price: 15,
    space: 8,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "10.00 AM - 11.00 AM",
    price: 17,
    space: 9,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "11.00 AM - 12.00 PM",
    price: 19,
    space: 5,
  },
  {
    id: 5,
    name: "Pediatric Dental",
    time: "06.00 PM - 07.00 PM",
    price: 25,
    space: 10,
  },
  {
    id: 6,
    name: "Oral Surgery",
    time: "07.00 PM - 08.00 PM",
    price: 35,
    space: 10,
  },
];

function BookAppointment({ date }) {
  return (
    <div className="book-appointment container">
      <h2 className="primary-text text-center">
        Available Appointments on {date.toDateString()}
      </h2>

      <div className="row mt-3 container">
        {bookings.map((booking) => (
          <BookingCard key={booking.id} date={date} booking={booking} />
        ))}
      </div>
    </div>
  );
}

export default BookAppointment;
