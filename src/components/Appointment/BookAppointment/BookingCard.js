import React from "react";

// internal imports

function BookingCard({ booking, showModal }) {
  const { name, time, space } = booking;
  return (
    <>
      <div className="col-md-4">
        <div className="booking-card text-center">
          <h5 className="primary-text">{name}</h5>
          <p className="text-brand">{time}</p>
          <small
            style={{ fontSize: "12px", marginBottom: "10px" }}
            className="text-secondary d-block"
          >
            {space} SPACES AVAILABLE
          </small>
          <button
            className="primary-btn text-uppercase"
            onClick={() => showModal(true, booking.name)}
          >
            <small>book appointment</small>
          </button>
        </div>
      </div>
    </>
  );
}

export default BookingCard;
