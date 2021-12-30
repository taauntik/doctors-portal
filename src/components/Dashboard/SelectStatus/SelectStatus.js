import React, { useState } from "react";
import { toast, cssTransition } from "react-toastify";

const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
});

function SelectStatus({ id, status }) {
  const [currentStatus, setCurrentStatus] = useState(status);

  function notify() {
    toast.success("Updated successfully!", {
      transition: bounce,
    });
  }

  function onChange(e) {
    fetch(
      `http://localhost:5000/appointment/update_status?id=${id}&status=${e.target.value}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setCurrentStatus(res.data.status);
        notify();
      })
      .catch((err) => console.log(err));
    console.log(e.target.value);
  }

  return (
    <div>
      <select
        onChange={onChange}
        value={currentStatus}
        name=""
        id=""
        className="primary-btn"
      >
        <option className="option" value="Pending">
          Pending
        </option>
        <option className="option" value="Approved">
          Approved
        </option>
        <option className="option" value="Reject">Rejected</option>
      </select>
    </div>
  );
}

export default SelectStatus;
