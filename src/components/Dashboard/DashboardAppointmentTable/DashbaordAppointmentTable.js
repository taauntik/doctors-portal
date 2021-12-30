import React from "react";
import { ToastContainer } from "react-toastify";
import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";

// internal imports
import SelectStatus from "../SelectStatus/SelectStatus";

function DashbaordAppointmentTable({ appointments }) {
  return (
    <div className="border container p-3 table-container mt-5">
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
          All Patients
        </p>
      </div>
      <br />
      <br />
      <table className="mytable">
        <thead className="mytable__head">
          <tr className="mytable__cols">
            <th className="mytable__col">Sr.No</th>
            <th className="mytable__col">Date</th>
            <th className="mytable__col">Name</th>
            <th className="mytable__col">Contact</th>
            <th className="mytable__col">Prescription</th>
            <th className="mytable__col">Action</th>
          </tr>
        </thead>
        <tbody className="mytable__body">
          {appointments.map(({ _id, name, date, phone, status }, i) => (
            <tr key={_id} className="mytable__cols">
              <td className="mytable__col">{i}</td>
              <td className="mytable__col">
                {new Date(date).toLocaleDateString()}
              </td>
              <td className="mytable__col">{name}</td>
              <td className="mytable__col">{phone}</td>
              <td className="mytable__col">View</td>
              <td className="mytable__col">
                <SelectStatus id={_id} status={status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashbaordAppointmentTable;
