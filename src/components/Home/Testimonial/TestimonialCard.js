import React from "react";

function TestimonialCard({ testimonial }) {
  const { name, description, avatar } = testimonial;
  return (
    <div className="col-md-4">
      <div className="testimonial-card rounded border shadow-sm">
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="user">
          <img className="user-img" src={avatar} alt="" />
          <div className="user-info">
            <h5 className="primary-text">{name}</h5>
            <p>california</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
