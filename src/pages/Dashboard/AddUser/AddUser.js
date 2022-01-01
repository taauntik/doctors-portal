import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { cssTransition, toast, ToastContainer } from "react-toastify";

// internal imports
import Sidebar from "../../../components/Dashboard/Sidebar/Sidebar";

const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
});

function AddUser() {
  const [filename, setFilename] = useState("");
  const [basefile, setFile] = useState(null);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      role,
      avatar: basefile,
    };

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          notifySuccess();
        } else if (data.error) {
          notifyError(data.error);
        } else {
          notifyError("Something Went Wrong! Please try again");
        }
      })
      .catch((err) => notifyError("Something Went wrong! Please try again"));
  };

  function notifySuccess() {
    toast.success("User was created successfully", {
      transition: bounce,
    });
  }

  function notifyError(err) {
    toast.error(err, {
      transition: bounce,
    });
  }

  const encodeFileBase64 = (e) => {
    const file = e.target.files[0];
    setFilename(file.name);
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        const Base64 = reader.result;
        console.log(Base64);
        setFile(Base64);
      };
      reader.error = (err) => {
        console.log("err", err);
      };
    }
  };

  return (
    <div>
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

        <div className="container">
          <div
            style={{ backgroundColor: "white" }}
            className="w-100 shadow p-4"
          >
            <form encType="multipart/form-data" onSubmit={onSubmit} id="form">
              <div className="row">
                <div className="from-group mb-4 col-md-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="from-group mb-4 col-md-5">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="from-group mb-4 col-md-5">
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="from-group mb-4 col-md-5">
                  <select
                    className="form-select"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    aria-label="Default select example"
                    required
                  >
                    <option value={""}>Select An user type</option>
                    <option value="user">User</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </div>
                <div className="from-group mb-4 col-md-5">
                  <input
                    id="file-upload"
                    type="file"
                    onChange={encodeFileBase64}
                    hidden
                  />
                  <label className="upload-btn" htmlFor="file-upload">
                    <FontAwesomeIcon
                      style={{ fontSize: "20px" }}
                      icon={faCloudUploadAlt}
                    />{" "}
                    Upload
                  </label>
                  <span className="ms-2">
                    {filename ? filename : "No file chosen"}
                  </span>
                </div>
              </div>

              <input type="submit" className="primary-btn" />
            </form>
          </div>
        </div>
    </div>
  );
}

export default AddUser;
