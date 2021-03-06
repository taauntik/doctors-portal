import React from "react";
import { ToastContainer } from "react-toastify";
import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";

// internal imports
import SelectIsVisited from "../SelectIsVisited/SelectIsVisited";
function AppointmentsByDate({ appointments, date }) {

  return (
    <div className="border container p-3 table-container overflow-hidden">
      <ToastContainer
        id="animate.css"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <div className="d-flex justify-content-between">
        <p
          style={{ fontSize: "16px", fontWeight: "bold" }}
          className="primary-text"
        >
          Appointments
        </p>
        <p className="text-secondary">{date.toLocaleDateString()}</p>
      </div>
      <br />
      <br />
      {appointments.length > 0 ? (
        <table style={{ maxWidth: "100%" }} className="mytable">
          <thead className="mytable__head">
            <tr className="mytable__cols">
              <th className="mytable__col">Name</th>
              <th className="mytable__col">Email</th>
              <th className="mytable__col">Actions</th>
            </tr>
          </thead>
          <tbody className="mytable__body">
            {appointments.map(({ _id, name, email, isVisited }) => (
              <tr key={_id} className="mytable__cols">
                <td className="mytable__col">{name}</td>
                <td className="mytable__col">{email}</td>
                <td className="mytable__col">
                  <SelectIsVisited id={_id} visited={isVisited} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3 className="text-brand">No Appointment Available</h3>
      )}
    </div>
  );
}

export default AppointmentsByDate;
