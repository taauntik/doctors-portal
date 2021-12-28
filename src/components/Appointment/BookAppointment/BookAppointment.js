import React, { useEffect, useState } from "react";

// internal imports
import "../../../styles/Appointment/BookAppointment/BookAppointment.css";
import BookingCard from "./BookingCard";
import Modal from "../../custom/Modal/Modal";

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
  const [modal, setModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const modalRef = React.useRef();

  function closeModal() {
      setModal(false);
  }

  function hideModal(event) {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
    } else if (event.keyCode === 27) {
        closeModal();
    }
  }

  function showModal(show, bookingName) {
    setModal(show);
    setModalTitle(bookingName);
  }

  useEffect(() => {
    window.addEventListener("mousedown", hideModal);
    window.addEventListener("keydown", hideModal);
  }, [modalRef]);
  return (
    <div className="book-appointment container">
      <h2 className="primary-text text-center">
        Available Appointments on {date.toDateString()}
      </h2>

      <Modal
        ref={modalRef}
        appointmentOn={modalTitle}
        className={`${modal && "d-block"}`}
        date={date}
        closeModal={closeModal}
      />

      <div className="row mt-3 container">
        {bookings.map((booking) => (
          <BookingCard
            key={booking.id}
            showModal={showModal}
            modal={modal}
            date={date}
            booking={booking}
          />
        ))}
      </div>
    </div>
  );
}

export default BookAppointment;
