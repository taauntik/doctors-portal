import React from "react";
import { useForm } from "react-hook-form";

// internal imports
import "../../styles/Login/Login.css";
import loginbg from "../../images/Loginbg.png";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className="container">
      <div style={{ marginTop: "8rem" }} className="login row">
        <div className="col-md-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form w-75 shadow rounded p-4 d-flex flex-column justify-content-center"
          >
            <p className="text-center">Login</p>
            <br />
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control m-1"
                placeholder="Email"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control m-1"
                placeholder="Password"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <input type="submit" className="primary-btn" />
          </form>
        </div>
        <div className="col-md-6 loginbg">
          <img style={{ width: "100%" }} src={loginbg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
