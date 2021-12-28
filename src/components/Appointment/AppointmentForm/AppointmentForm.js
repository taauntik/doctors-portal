import React from "react";
import { useForm } from "react-hook-form";

function AppointmentForm({ closeModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
      console.log(data);
      closeModal();
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-danger">This field is required</span>
          )}
        </div>

        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <span className="text-danger">This field is required</span>
          )}
        </div>

        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-danger">This field is required</span>
          )}
        </div>

        <div className="d-flex justify-content-between">
          <div className="form-group me-2">
            <select style={{ width: "100px" }} className="form-control">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group me-2">
            <input
              type="text"
              className="form-control"
              placeholder="Your age"
              {...register("age", { required: true })}
            />
            {errors.age && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Weight"
              {...register("weight", { required: true })}
            />
            {errors.weight && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <input
            style={{ fontSize: "14px", padding: "8px 30px" }}
            type="submit"
            value="SEND"
            className="primary-btn"
          />
        </div>
      </form>
    </div>
  );
}

export default AppointmentForm;
