import React from "react";

// internal imports
import Header from "../../components/Home/Header/Header";
import Services from "../../components/Home/Services/Services";
import Testimonial from "../../components/Home/Testimonial/Testimonial";
import Appointment from "../../components/Home/Appointment/Appointment";
import Featured from "../../components/Home/Featured/Featured";
import Blogs from "../../components/Home/Blogs/Blogs";

function Home() {
  return (
    <>
      <Header />
      <Services />
      <Featured />
      <Appointment />
      <Testimonial />
      <Blogs />
    </>
  );
}

export default Home;
