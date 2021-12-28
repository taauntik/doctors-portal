import React from "react";

// internal imports
import "../../../styles/Home/Testimonial/Testimonial.css";
import WinsonHerry from "../../../images/Winson-herry.png";
import ArianGrande from "../../../images/ariana-grande.png";
import MsHend from "../../../images/msHend.png";
import TestimonialCard from "./TestimonialCard";

// testimonial data
const testimonialData = [
  {
    id: 1,
    name: "Winson Herry",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam maiores necessitatibus ipsam totam quisquam? laudantium voluptate.",
    avatar: WinsonHerry,
  },
  {
    id: 1,
    name: "Ariana Grande",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam maiores necessitatibus ipsam totam quisquam? laudantium voluptate.",
    avatar: ArianGrande,
  },
  {
    id: 1,
    name: "Ms. Hend",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam maiores necessitatibus ipsam totam quisquam? laudantium voluptate.",
    avatar: MsHend,
  },
];

function Testimonial() {
  return (
    <div className="testimonial container">
      <h5 style={{ fontSize: "17px" }} className="primary-text mb-2">
        APPOINTMENT
      </h5>
      <h1 className="text-brand">
        What's Our Patients <br />
        Says
      </h1>

      {/* <div className=""> */}
        <div className="row">
          {testimonialData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      {/* </div> */}
    </div>
  );
}

export default Testimonial;
