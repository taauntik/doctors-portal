import React from "react";

// internal imports
import "../../../styles/custom/Modal/Modal.css";
import AppointmentForm from "../../Appointment/AppointmentForm/AppointmentForm";

function Modal({ className, appointmentOn, date, closeModal }, ref) {
  return (
    <div className={`${className} modal`}>
      <section ref={ref} className="modal-main">
        <div className="mb-4">
          <h5 className="primary-text text-center">{appointmentOn}</h5>
          <small className="text-center d-block text-secondary">
            On {date.toDateString()}
          </small>
        </div>
        <AppointmentForm
          closeModal={closeModal}
          appointmentOn={appointmentOn}
          date={date}
        />
      </section>
    </div>
  );
}

const forwardedModal = React.forwardRef(Modal);

export default forwardedModal;
