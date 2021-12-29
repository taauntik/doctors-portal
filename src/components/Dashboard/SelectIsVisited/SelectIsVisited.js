import React, { useState } from "react";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";

const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
});

function SelectIsVisited({ id, visited }) {
  const [isVisited, setIsVisited] = useState(visited);

  function notify() {
    toast.success("Updated successfully!", {
      transition: bounce,
    });
  }

  function onChange(id, value) {
    fetch(`http://localhost:5000/appointment?id=${id}&value=${value}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setIsVisited(res.isVisited);
        notify();
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <select
        onChange={() => onChange(id, !isVisited)}
        value={isVisited ? "1" : "0"}
        name=""
        id=""
        className="primary-btn"
      >
        <option className="option" value="0">
          not visited
        </option>
        <option className="option" value="1">
          visited
        </option>
      </select>
      <ToastContainer
        id="animate.css"
        transition={bounce}
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
    </div>
  );
}

export default SelectIsVisited;
